# ebseven 홈페이지

세션팀 ebseven의 소개 사이트입니다. Astro로 만든 정적 사이트이고, 한 페이지 안에 소개, 멤버, 이력, 영상, 일정, 섭외 문의가 이어집니다.

## 내용 고치기

화면에 보이는 글과 정보는 모두 [src/data/site.ts](src/data/site.ts) 한 파일에 있습니다. 코드를 몰라도 따옴표 안의 글만 바꾸면 됩니다.

| 바꿀 것 | site.ts 안의 위치 |
|---|---|
| 팀 소개 문구 | `about` |
| 유튜브, 인스타그램, 메일, 전화, 카카오톡 채널 | `links` |
| 멤버 (이름, 파트, 역할, 소개, 인스타그램, 사진) | `members` |
| 대표 이력 (날짜, 행사명, 주최, 수상 등 비고) | `history` |
| 사운드 소개, 대표곡, 협업 보컬 | `sound` |
| 공연 일정 | `shows` |
| 공연 영상 | `videos` (유튜브 주소 `youtu.be/XXXX` 의 `XXXX` 부분) |
| 섭외 안내 (공연 형태, 공연 시간, 음향 장비, 활동 지역) | `booking` |
| 검색 결과에 나오는 제목과 설명 | `site.title`, `site.description` |

값을 비워 두면 그 자리에 "준비 중" 안내가 대신 보입니다.

사진은 `public/images/` 에 넣고 `photo: '/images/member1.jpg'` 처럼 적습니다. 멤버 사진은 4:5 비율, 가로 800px 안팎이면 충분합니다.

공연 일정이 하나도 없으면 일정 섹션과 메뉴가 숨겨집니다. 일정은 배포한 날짜를 기준으로 다가오는 공연과 지난 공연이 나뉩니다. 공연이 끝나면 한 번 다시 배포해야 목록이 갱신됩니다.

## 섭외 문의 폼 연결

문의 폼은 [Web3Forms](https://web3forms.com)로 메일을 보냅니다. 서버가 필요 없고 무료입니다.

1. web3forms.com 에서 문의를 받을 메일 주소를 넣고 접근 키를 받습니다.
2. `.env.example` 을 `.env` 로 복사하고 `PUBLIC_WEB3FORMS_KEY=` 뒤에 키를 붙여 넣습니다.
3. 배포하는 곳(Cloudflare Pages 등)의 환경 변수에도 같은 이름으로 넣습니다.

키 없이 배포하면 폼은 숨겨지고 메일 주소 안내만 보입니다. 제출해도 아무 데도 가지 않는 폼이 열려 있는 일을 막기 위해서입니다.

## 실행

Node 22.23 이상이 필요합니다 (mise 의 node 24 사용).

```bash
npm install
```

```bash
npm run dev
```

http://localhost:4321 에서 확인합니다.

```bash
npm run build
```

`dist/` 폴더에 배포용 파일이 만들어집니다.

## 배포

Cloudflare Pages 를 기준으로 합니다. GitHub 저장소에 올린 뒤 Cloudflare Pages 에서 저장소를 연결하고 아래처럼 설정합니다.

| 항목 | 값 |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| 환경 변수 | `PUBLIC_WEB3FORMS_KEY` |

배포 주소나 도메인이 정해지면 [astro.config.mjs](astro.config.mjs) 의 `site` 값을 바꿉니다. 검색엔진과 링크 미리보기에 쓰이는 주소입니다.

## 폴더 구성

```
src/
  data/site.ts        사이트 내용 전부
  pages/index.astro   섹션 순서
  components/         섹션별 화면 (Hero, About, Members, Sound, History, Videos, Schedule, Booking ...)
  styles/global.css   색, 글꼴, 공통 스타일
public/               사진, 파비콘
  images/logo-original.png   받은 로고 원본 (1080x1080)
  images/logo-wordmark.png   원본에서 배경만 투명하게 뺀 글자 로고 (헤더, 첫 화면, 푸터)
  images/og.png              링크 공유 미리보기 이미지 (1200x630)
  images/team.jpg, member-*.jpg   프로필 PDF에서 꺼낸 단체 사진과 멤버 사진
linkpie-plan.md       Linkpie 프로필 구성안 (참고용)
linkpie-draft.html    Linkpie 프로필 초안 화면 (참고용)
```
