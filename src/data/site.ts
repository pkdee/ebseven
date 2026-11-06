/**
 * 사이트에 보이는 글과 정보는 모두 이 파일에서 고친다.
 * 아직 정해지지 않은 값은 비워 두면 화면에 "준비 중" 칸이 대신 보이거나 그 줄이 빠진다.
 * 사진은 public/images/ 아래에 넣고 '/images/파일명.jpg' 처럼 적는다.
 *
 * 출처: 이플랫세븐 프로필(PDF), 유튜브 채널 @ebseven012 (2026-11-06 확인)
 */

export type Member = {
  name: string;
  /** 악기 파트. 예: 건반, 기타, 베이스, 드럼 */
  part: string;
  /** 팀 내 역할. 예: 리더 */
  role?: string;
  /** 한 줄 소개 */
  intro?: string;
  /** 전공, 주요 경력 한두 줄 */
  career?: string;
  /** 인스타그램 아이디 (@ 없이) */
  instagram?: string;
  /** public/ 기준 경로. 없으면 이름 첫 글자로 된 자리 표시가 보인다. */
  photo?: string;
};

export type HistoryItem = {
  /** YYYY-MM-DD */
  date: string;
  title: string;
  /** 주최 / 주관 */
  host?: string;
  /** 수상 등 비고 */
  note?: string;
};

export type Show = {
  /** YYYY-MM-DD */
  date: string;
  title: string;
  place: string;
  time?: string;
  link?: string;
};

export type Video = {
  /** 유튜브 영상 ID. https://youtu.be/XXXX 의 XXXX 부분 */
  youtubeId: string;
  title: string;
  /** 함께한 보컬 등 */
  with?: string;
};

export const site = {
  name: 'ebseven',
  nameKo: '이플랫세븐',
  /** 검색 결과와 링크 미리보기에 쓰인다 */
  title: 'ebseven 이플랫세븐 | 대전 세션팀 · 축제와 문화행사 공연',
  description:
    '대전을 중심으로 활동하는 세션팀 이플랫세븐(ebseven). 펑크와 재즈를 바탕으로 한 밴드 사운드로 지역축제, 문화행사, 버스킹, 라이브카페 무대와 보컬 아티스트 협업 공연을 만듭니다.',
  tagline: '아티스트와 관객, 지역과 음악을 잇는 세션팀',
  scenes: ['지역축제', '문화행사', '버스킹', '라이브카페'],
  region: '대전',
  /** 링크 미리보기 이미지 (1200x630 권장). public/ 기준 경로 */
  ogImage: '/images/og.png',
  /** 첫 화면 단체 사진 */
  teamPhoto: '/images/team.jpg',
};

export const about = {
  lead: '음악을 전공한 연주자들로 구성된 세션팀입니다.',
  body: [
    '대전을 중심으로 활발하게 활동하며, 보컬 아티스트와의 협업을 통해 다양한 무대와 음악 콘텐츠를 제작하고 있습니다.',
    '지역 축제와 문화 행사, 버스킹, 라이브카페 등 다양한 공연 현장에서 지역 음악 문화의 활성화에 기여하고자 하며, 여러 아티스트와 관객, 지역과 음악을 연결하는 팀을 목표로 하고 있습니다.',
  ],
  nameStory:
    "팀명 '이플랫세븐'은 음악 코드 E♭7에서 착안했습니다. 다양한 아티스트와 함께 조화를 만들어간다는 의미를 담고 있습니다.",
};

export const sound = {
  lead: '펑크(Funk)를 중심으로 재즈의 감각을 더한, 에너지 넘치는 밴드 사운드를 추구합니다.',
  body: [
    '친숙한 대중음악이라도 팀만의 그루브와 개성 있는 편곡을 더해, 익숙한 곡도 새로운 매력으로 전달하는 것을 목표로 합니다.',
    '아티스트 협업으로 팀 음원 발매도 진행하고 있습니다.',
  ],
  songs: [
    { title: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars' },
    { title: 'I Wish', artist: 'Stevie Wonder' },
    { title: 'The Yellow Jacket', artist: 'Shaun Martin' },
    { title: 'Kerning City', artist: 'MapleStory OST' },
  ],
  /** 함께 무대와 영상을 만든 보컬 아티스트 (멤버가 아닌 협업 보컬) */
  collaborators: ['송아 (Song A)'],
};

export const links = {
  youtube: 'https://www.youtube.com/@ebseven012',
  instagram: 'https://www.instagram.com/eb___seven',
  instagramId: 'eb___seven',
  email: '',
  phone: '010-9440-7502',
  /** 전화 옆에 보일 담당자 */
  phoneOwner: '리더 고상준',
  kakao: '', // 카카오톡 채널 주소. 예: 'https://pf.kakao.com/_xxxx'
  linkpie: '', // Linkpie 프로필 주소
};

/** 멤버. 순서대로 화면에 나온다. */
export const members: Member[] = [
  { name: '고상준', part: '신디사이저', role: '리더', photo: '/images/member-ko-sangjun.jpg' },
  { name: '박경준', part: '메인기타', photo: '/images/member-park-gyeongjun.jpg' },
  { name: '김정원', part: '메인건반', photo: '/images/member-kim-jeongwon.jpg' },
  { name: '서은평', part: '베이스', photo: '/images/member-seo-eunpyeong.jpg' },
  { name: '지성민', part: '드럼', photo: '/images/member-ji-seongmin.jpg' },
  { name: '채온', part: '보컬', intro: 'Chaeon', photo: '/images/member-chaeon.jpg' },
];

/** 대표 이력. 순서는 상관없다. 화면에서는 최근 날짜가 위로 온다. */
export const history: HistoryItem[] = [
  { date: '2026-10-10', title: '대전 서구아트페스티벌', host: '대전 서구청', note: '밴드경연대회 대상 수상' },
  { date: '2026-08-29', title: '이플랫세븐 제1회 정기공연', host: '이플랫세븐, 대전문화재단 후원' },
  { date: '2026-07-25', title: '들썩들썩 in 대전', host: '대전문화재단' },
  { date: '2026-05-22', title: '대전 중구 길거리 문화공연', host: '대전 중구청' },
  { date: '2025-12-20', title: '이플랫세븐 크리스마스 단독콘서트', host: '이플랫세븐' },
  { date: '2025-11-01', title: '반석천 페스티벌 공연', host: '인메이트, 반석천 연합회' },
  { date: '2025-10-18', title: '아날로그 스토어 원동락공소', host: '대전 동구동락' },
];

/** 공연 일정. 날짜가 지난 공연은 자동으로 "지난 공연"으로 옮겨진다. */
export const shows: Show[] = [
  // { date: '2026-12-12', title: '○○ 겨울 축제', place: '○○ 광장', time: '19:00' },
];

/** 대표 영상. 첫 번째 영상이 크게 보인다. */
export const videos: Video[] = [
  { youtubeId: 'iQfExoV7ZV0', title: '[Live] I Wish - Stevie Wonder', with: '송아 (Song A)' },
  { youtubeId: 'WexAouF1BY4', title: '[Band Cover] Uptown Funk - Mark Ronson', with: '채온 (Chaeon)' },
  { youtubeId: 'bJeEJ1psajo', title: '[Live] Love Never Felt So Good - Michael Jackson' },
  { youtubeId: 'qi_5Ny-wAic', title: '[Band Cover] 바라봐줘요 - 죠지' },
  { youtubeId: 'oOGVtiqAgVY', title: '[Band Cover] After LIKE - IVE', with: '채온 (Chaeon)' },
];

/** 섭외 안내 */
export const booking = {
  intro:
    '관객과 직접 호흡할 수 있는 무대를 지향합니다. 보컬 아티스트 및 음악 관계자들과의 협업을 통해 음악 문화에 이바지하고자 합니다.',
  formats: [
    { en: 'Festival & Event', ko: '지역 축제 및 문화 행사 공연' },
    { en: 'Busking', ko: '야외 버스킹 및 거리 공연' },
    { en: 'Live Café & Club', ko: '라이브카페 및 기획 공연' },
    { en: 'Artist Collaboration', ko: '보컬 아티스트와 협업 공연' },
    { en: 'Music Projects', ko: '음악 관계자와의 협업 및 공연 프로젝트' },
  ],
  details: [
    { label: '활동 지역', value: '대전 중심' },
    { label: '공연 시간', value: '' }, // 예: '30분 ~ 90분 (협의)'
    { label: '음향 장비', value: '' }, // 예: '소규모 공연은 자체 장비 지참 가능'
  ],
};
