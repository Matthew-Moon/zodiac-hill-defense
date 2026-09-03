@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo === ZODIAC GATE 업로드 ===
if not exist .git (
  echo 이 폴더는 git 폴더가 아닙니다. 기존 저장소 폴더에 파일을 덮어쓴 뒤 그 폴더에서 실행하세요.
  echo 처음이라면: git clone https://github.com/Matthew-Moon/zodiac-hill-defense.git 후 그 폴더에 복사.
  pause
  exit /b
)
git add .
git commit -m "update %date% %time%"
git pull --rebase origin main
git push origin main
echo.
echo === 완료. Render 에서 1~3분 후 반영됩니다 ===
pause
