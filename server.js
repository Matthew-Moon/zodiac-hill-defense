// 십이지 언덕 입구막기 — 정적 파일 + PeerJS 시그널 서버 (Render/Railway/Fly 무료 티어용)
const express = require('express');
const { ExpressPeerServer } = require('peer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.get('/health', (_, res) => res.send('ok'));

const server = app.listen(PORT, () => console.log('listening on ' + PORT));
const peerServer = ExpressPeerServer(server, { path: '/', allow_discovery: false });
app.use('/peer', peerServer);
peerServer.on('connection', c => console.log('peer +', c.getId()));
peerServer.on('disconnect', c => console.log('peer -', c.getId()));
