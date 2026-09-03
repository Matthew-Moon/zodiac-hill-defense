# 캐릭터 모델

이 폴더의 .glb는 모두 **Quaternius (CC0, 퍼블릭 도메인)** 모델입니다. 이미 12간지 + 적 5종이 채워져 있고, 파일을 같은 이름으로 바꿔 넣으면 교체됩니다.

## 현재 들어 있는 것
| 파일 | 캐릭터 | 원본 | 애니메이션 |
|---|---|---|---|
| ox.glb | 소 | Ultimate Animated Animals – Bull | O |
| horse.glb | 말 | Ultimate Animated Animals – Horse | O |
| dog.glb | 개 | Ultimate Animated Animals – Shiba Inu | O |
| rat.glb | 쥐 | Easy Enemies – Rat | O |
| snake.glb | 뱀 | Easy Enemies – Snake | O |
| pig.glb | 돼지 | Farm Animals – Pig | X (정지 포즈) |
| goat.glb | 양 | Farm Animals – Sheep | X |
| dragon.glb | 용 | Ultimate Monsters – Dragon | X |
| rabbit.glb | 토끼 | Ultimate Monsters – Bunny | X |
| rooster.glb | 닭 | Ultimate Monsters – Chicken | X |
| tiger.glb | 호랑이 | Ultimate Monsters – Cat **(임시 대체)** | X |
| monkey.glb | 원숭이 | Ultimate Monsters – Monkroose **(임시 대체)** | X |
| enemy_grunt.glb | 잡몹 | Animated Monster – Slime | X |
| enemy_rusher.glb | 돌격 | Animated Monster – Bat | X |
| enemy_brute.glb | 브루트 | Ultimate Monsters – Orc | X |
| enemy_archer.glb | 궁수 | Animated Monster – Skeleton | X |
| enemy_boss.glb | 보스 | Ultimate Monsters – Demon | X |

호랑이·원숭이는 CC0 소스에 딱 맞는 게 없어서 고양이/원숭이형 몬스터로 대신했습니다. poly.pizza 에서 "tiger", "monkey"로 검색해 마음에 드는 .glb를 같은 이름으로 넣으면 바로 바뀝니다.

## 모델이 옆을 보고 걷는다면
index.html 상단의 `MODEL_YAW` 에 보정값을 넣으세요. 예: `{ default:0, pig: Math.PI, dragon: -Math.PI/2 }`

## 규칙
- 크기·바닥 위치는 자동 정규화. 애니메이션 이름에 idle / walk(run, gallop) 가 있으면 자동 재생
- 모델은 서버(localhost 포함)에서 열 때만 로드됩니다. HTML 파일을 직접 열면 도형으로 표시
- 파일 하나 800KB 이하 권장 (모바일)

## env/ — 환경 소품 (Quaternius Nature Pack · Medieval Village Pack, CC0)
나무(CommonTree/PineTree/BirchTree), 바위(Rock/Rock_Moss), 풀·꽃(Grass/Flowers/Plant), 덤불(Bush), 울타리·통·상자·건초·우물.
장애물은 이 중에서 랜덤으로 골라 쓰고, 풀·덤불·울타리는 장식(충돌 없음)입니다. 같은 이름으로 다른 모델을 넣어 교체 가능.

## fx/ — 이펙트 스프라이트 (Kenney Particle Pack 1.1, CC0)
슬래시·스크래치·불꽃·연기·스파크·마법·머즐·흙·소용돌이 등 34장. 피격·평타·스킬·사망 이펙트에 사용.
같은 파일명으로 다른 PNG(흰색+투명 배경)를 넣으면 교체됩니다. 색은 게임이 속성색으로 입힙니다.
