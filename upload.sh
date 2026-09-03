#!/bin/bash
cd "$(dirname "$0")"
if [ ! -d .git ]; then echo "git 폴더가 아닙니다. 기존 저장소 폴더에 덮어쓴 뒤 실행하세요."; exit 1; fi
git add . && git commit -m "update $(date)"; git pull --rebase origin main; git push origin main
