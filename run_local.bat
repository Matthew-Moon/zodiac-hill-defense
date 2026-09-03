@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo === 로컬 서버 시작 (모델 포함 테스트) ===
where node >nul 2>nul
if %errorlevel%==0 (
  if not exist node_modules ( echo 패키지 설치 중... && call npm install )
  start "" http://localhost:3000
  node server.js
) else (
  echo Node.js 가 없어 파이썬 간이 서버로 실행합니다 ^(모델은 보이지만 방 만들기는 공용 서버 사용^)
  start "" http://localhost:3000
  cd public
  python -m http.server 3000
)
pause
