# ZODIAC GATE — 프로젝트 전체

이 폴더 하나가 완성본입니다. GitHub에 올리고 Render에 연결하면 끝.

```
zhd-server/
├─ server.js            서버 (게임 파일 서빙 + 방 코드 연결용 시그널)
├─ package.json
├─ README.md            이 문서
└─ public/
   ├─ index.html        게임 본체 (브라우저에서 열리는 파일)
   └─ models/           12간지 + 적 3D 모델 (.glb, Quaternius CC0)
```

## 처음 올릴 때
1. github.com/Matthew-Moon/zodiac-hill-defense 저장소 페이지에서 기존 파일을 지우거나, 로컬 폴더 내용을 이 zip 내용으로 전부 교체
2. 터미널 (이 폴더에서):
   ```
   git add .
   git commit -m "full project"
   git push
   ```
3. Render가 자동 재배포 (1~3분). 대시보드에서 Live 확인 후 주소 접속

## 이후 업데이트
새 zip을 받으면 폴더 내용을 통째로 덮어쓰고 위의 git 세 줄만 다시 실행.

## 로컬에서 바로 테스트
```
npm install
npm start
```
→ http://localhost:3000  (같은 와이파이의 폰: http://내PC아이피:3000)

## 조작
좌클릭 이동 / 적 클릭 공격 · A+클릭 어택땅 · H 홀드 · S 정지 · 스페이스 스킬 · P 상점(상인 근처) · Enter 채팅

## 모델 교체
`public/models/README.md` 참고. 같은 이름의 .glb로 덮어쓰면 됨.
