#!/bin/bash
cd "$(dirname "$0")"
if command -v node >/dev/null; then
  [ -d node_modules ] || npm install
  (sleep 1; open http://localhost:3000 2>/dev/null || xdg-open http://localhost:3000 2>/dev/null) &
  node server.js
else
  echo "Node.js 없음 → 파이썬 간이 서버 (모델은 보이지만 방 만들기는 공용 서버 사용)"
  (sleep 1; open http://localhost:3000 2>/dev/null || xdg-open http://localhost:3000 2>/dev/null) &
  cd public && python3 -m http.server 3000
fi
