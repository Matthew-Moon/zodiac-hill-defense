// ZODIAC GATE — 정적 파일 + 게임 릴레이 서버 (WebSocket). P2P가 막힌 네트워크에서도 동작.
const express = require('express');
const http = require('http');
const path = require('path');
const { WebSocketServer } = require('ws');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/health', (_, res) => res.send('ok'));

const server = http.createServer(app);

// ── 릴레이: 방 코드 기반 ──
const rooms = new Map(); // code -> { host: ws, clients: Map<id, ws>, seq }
const wss = new WebSocketServer({ noServer: true });
server.on('upgrade', (req, socket, head) => {
  if (req.url.startsWith('/ws')) wss.handleUpgrade(req, socket, head, ws => wss.emit('connection', ws, req));
  else socket.destroy();
});
const send = (ws, o) => { if (ws && ws.readyState === 1) ws.send(JSON.stringify(o)); };

wss.on('connection', ws => {
  ws.isAlive = true; ws.on('pong', () => { ws.isAlive = true; });
  ws.on('message', raw => {
    let m; try { m = JSON.parse(raw); } catch { return; }
    if (m.c === 'host') {                       // 방 만들기
      if (rooms.has(m.code) && rooms.get(m.code).host.readyState === 1) return send(ws, { c: 'err', e: 'code-taken' });
      rooms.set(m.code, { host: ws, clients: new Map(), seq: 0 }); ws.room = m.code; ws.isHost = true;
      return send(ws, { c: 'hosted', code: m.code });
    }
    if (m.c === 'join') {                       // 참가
      const r = rooms.get(m.code); if (!r || r.host.readyState !== 1) return send(ws, { c: 'err', e: 'no-room' });
      const id = ++r.seq; r.clients.set(id, ws); ws.room = m.code; ws.cid = id;
      send(r.host, { c: 'joined', id }); return send(ws, { c: 'ok', id });
    }
    const r = rooms.get(ws.room); if (!r) return;
    if (ws.isHost) {                            // 호스트 → 특정/전체 참가자
      if (m.c === 'to') send(r.clients.get(m.id), { c: 'from', d: m.d });
      else if (m.c === 'all') r.clients.forEach(c => send(c, { c: 'from', d: m.d }));
      else if (m.c === 'kick') { const c = r.clients.get(m.id); if (c) c.close(); }
    } else if (m.c === 'tohost') send(r.host, { c: 'from', id: ws.cid, d: m.d });   // 참가자 → 호스트
  });
  ws.on('close', () => {
    const r = rooms.get(ws.room); if (!r) return;
    if (ws.isHost) { r.clients.forEach(c => send(c, { c: 'hostleft' })); rooms.delete(ws.room); }
    else { r.clients.delete(ws.cid); send(r.host, { c: 'left', id: ws.cid }); }
  });
});
setInterval(() => { wss.clients.forEach(ws => { if (!ws.isAlive) return ws.terminate(); ws.isAlive = false; ws.ping(); }); }, 30000);

server.listen(PORT, () => console.log('listening on ' + PORT));
