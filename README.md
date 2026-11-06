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
| 공연 일정 | `shows` |
| 공연 영상 | `videos` (유튜브 주소 `youtu.be/XXXX` 의 `XXXX` 부분) |
| 섭외 안내 (함께 만드는 무대, 활동 지역) | `booking` |
| 새 앨범 (제목, 발매 시각, 커버, 음원) | `album` |
| 팬아트 | `fanart` |
| 검색 결과에 나오는 제목과 설명 | `site.title`, `site.description` |

값을 비워 두면 그 자리에 "준비 중" 안내가 대신 보입니다.

사진은 `public/images/` 에 넣고 `photo: '/images/member1.jpg'` 처럼 적습니다. 멤버 사진은 4:5 비율, 가로 800px 안팎이면 충분합니다.

공연 일정이 하나도 없으면 일정 섹션과 메뉴가 숨겨집니다. 일정은 배포한 날짜를 기준으로 다가오는 공연과 지난 공연이 나뉩니다. 공연이 끝나면 한 번 다시 배포해야 목록이 갱신됩니다.

## 섭외 문의 버튼

섭외 문의 방식이 아직 정해지지 않아서, 헤더와 첫 화면의 "섭외 문의" 버튼은 누르면 "준비중입니다." 안내창([SoonDialog.astro](src/components/SoonDialog.astro))만 띄웁니다. 문의 방식이 정해지면 [Header.astro](src/components/Header.astro), [Hero.astro](src/components/Hero.astro) 에서 버튼의 `data-soon` 속성을 지우면 섭외 섹션으로 이동합니다.

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

배포 주소나 도메인이 정해지면 [astro.config.mjs](astro.config.mjs) 의 `site` 값을 바꿉니다. 검색엔진과 링크 미리보기에 쓰이는 주소입니다.

## 폴더 구성

```
src/
  data/site.ts        사이트 내용 전부
  pages/index.astro   섹션 순서
  components/         섹션별 화면 (Hero, Album, About, Members, History, Videos, Fanart, Booking ...)
  scripts/slider.ts   영상, 팬아트 슬라이드
  styles/global.css   색, 글꼴, 공통 스타일
public/               사진, 파비콘
  images/logo-original.png   받은 로고 원본 (1080x1080)
  images/logo-wordmark.png   원본에서 배경만 투명하게 뺀 글자 로고 (헤더, 첫 화면, 푸터)
  images/og.png              링크 공유 미리보기 이미지 (1200x630)
  images/team-2026.jpg       첫 화면 6인 단체 사진
  images/member-*.jpg        멤버 사진
linkpie-plan.md       Linkpie 프로필 구성안 (참고용)
linkpie-draft.html    Linkpie 프로필 초안 화면 (참고용)
```
