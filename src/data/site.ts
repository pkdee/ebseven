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
  /** 악기 파트 영문. 화면에는 "파트 (영문)" 으로 보인다 */
  partEn?: string;
  /** 팀 내 역할 (지금은 화면에 표시하지 않음) */
  role?: string;
  /** 영문 이름. 이름 오른쪽에 작게 보인다 */
  nameEn?: string;
  /** 한 줄 소개 */
  intro?: string;
  /** 전공, 주요 경력 한두 줄 */
  career?: string;
  /** 인스타그램 아이디 (@ 없이, 주소 뒤 ?obrf= 같은 추적값은 빼고). 있으면 사진을 누를 때 그 계정이 열린다 */
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
  /** 검색 결과 제목과 링크 미리보기에 쓰인다. 사람들이 검색할 말(팀 이름, 대전 밴드)을 앞쪽에 둔다 */
  title: '이플랫세븐 ebseven | 대전 밴드 · 축제와 문화행사 공연',
  /** 검색 결과 제목 아래 설명. 120자 안팎이 잘리지 않고 보인다 */
  description:
    '대전을 중심으로 활동하는 밴드 이플랫세븐(ebseven). 펑크와 재즈 바탕의 사운드로 지역축제, 문화행사, 버스킹 무대를 만듭니다. 1집 피어나(blooming) 11월 13일 발매.',
  /**
   * 검색엔진 소유 확인 코드. 비워 두면 태그를 넣지 않는다.
   * Google Search Console 에서 "HTML 태그" 방식을 고르면 나오는 content 값만 적는다.
   */
  verification: {
    google: 'EGoIHcxfGqFGoa6JNumfa3CaAXYZrs2zNFapDDgsfMU',
    naver: '',
  },
  tagline: '아티스트와 관객, 지역과 음악을 잇는 세션팀',
  scenes: ['지역축제', '문화행사', '버스킹', '라이브카페'],
  region: '대전',
  /** 링크 미리보기 이미지 (1200x630 권장). public/ 기준 경로 */
  ogImage: '/images/og.png',
  /** 첫 화면 한 줄 소개 */
  heroTagline: '아티스트와 관객, 지역과 음악을 잇는 밴드팀',
  /** 첫 화면 단체 사진 (1:1). 여러 장이면 슬라이드로 넘어간다. 첫 번째가 먼저 보인다. */
  teamPhotos: [
    { src: '/images/team-1.jpg', alt: '계단에 모여 앉아 위를 올려다보는 이플랫세븐 여섯 멤버' },
    { src: '/images/team-2.jpg', alt: '도심이 내려다보이는 옥상 잔디에 앉은 이플랫세븐 여섯 멤버' },
    { src: '/images/team-3.jpg', alt: '옥상 잔디 위 악기 사이에 둘러앉은 이플랫세븐 여섯 멤버' },
  ],
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
  { name: '고상준', part: '신디사이저', partEn: 'Synthesizer', instagram: 'producer_sangjoon', photo: '/images/member-ko-sangjun.jpg' },
  { name: '박경준', part: '메인기타', partEn: 'Main Guitar', instagram: 'e.vaaaa_kj', photo: '/images/member-park-gyeongjun.jpg' },
  { name: '채온', part: '보컬', partEn: 'Vocal', nameEn: 'Chaeon', instagram: 'chae0on', photo: '/images/member-chaeon.jpg' },
  { name: '서은평', part: '베이스', partEn: 'Bass', instagram: 'ep_bass', photo: '/images/member-seo-eunpyeong.jpg' },
  { name: '지성민', part: '드럼', partEn: 'Drums', instagram: 'ur_groove', photo: '/images/member-ji-seongmin.jpg' },
  { name: '김정원', part: '메인건반', partEn: 'Main Keys', instagram: '0eo._.n2g', photo: '/images/member-kim-jeongwon.jpg' },
];

/** 대표 이력. 순서는 상관없다. 화면에서는 최근 날짜가 위로 온다. */
export const history: HistoryItem[] = [
  { date: '2026-10-24', title: '프리비전스 돗자리 페스티벌' },
  { date: '2026-10-10', title: '대전 서구아트페스티벌', host: '대전 서구청', note: '밴드경연대회 대상 수상' },
  { date: '2026-09-12', title: '옐로우 스프링스 가을음악회', host: '대전 현대아울렛' },
  { date: '2026-08-29', title: '이플랫세븐 제1회 정기공연', host: '이플랫세븐, 대전문화재단 후원' },
  { date: '2026-07-25', title: '들썩들썩 in 대전', host: '대전문화재단' },
  { date: '2026-05-22', title: '대전 중구 길거리 문화공연', host: '대전 중구청' },
  { date: '2025-12-20', title: '이플랫세븐 크리스마스 단독콘서트', host: '이플랫세븐' },
  { date: '2025-11-01', title: '반석천 페스티벌 공연', host: '인메이트, 반석천 연합회' },
  { date: '2025-10-18', title: '아날로그 스토어 원동락공소', host: '대전 동구동락' },
];

/**
 * 공연 사진. 공연마다 탭 하나로 묶이고, 목록 순서대로 탭이 놓인다.
 * 사진은 public/images/gallery/날짜/ 아래에 두 벌씩 둔다.
 *   01.jpg   크게 보기용 (긴 변 1600px)
 *   01-s.jpg 목록용 작은 사진 (긴 변 720px)
 * width, height 는 큰 사진 기준.
 */
export type GalleryEvent = {
  /** YYYY-MM-DD. 사진 폴더 이름으로도 쓴다 */
  date: string;
  title: string;
  photos: { file: string; width: number; height: number; alt: string }[];
};

export const gallery: GalleryEvent[] = [
  {
    date: '2026-10-24',
    title: '프리비전스 돗자리 페스티벌',
    photos: [
      { file: '01.jpg', width: 1600, height: 1066, alt: '엄지를 들고 웃는 다섯 멤버' },
      { file: '02.jpg', width: 1600, height: 1066, alt: '돌벽으로 된 공연장에서 연주하는 밴드 전체 모습' },
      { file: '03.jpg', width: 1600, height: 1066, alt: '헤드폰을 끼고 건반을 연주하는 모습' },
      { file: '04.jpg', width: 1066, height: 1600, alt: '돌벽 조명 아래에서 베이스를 연주하는 모습' },
      { file: '05.jpg', width: 1600, height: 1066, alt: '파란 기타를 들고 연주하는 모습' },
      { file: '06.jpg', width: 1600, height: 1066, alt: '헤드폰을 끼고 드럼을 연주하는 모습' },
      { file: '07.jpg', width: 1600, height: 1066, alt: '돌벽 앞 드럼 세트에서 연주하는 모습' },
      { file: '08.jpg', width: 1600, height: 1066, alt: '건반을 연주하며 고개를 숙인 모습' },
      { file: '09.jpg', width: 1600, height: 1066, alt: '건반을 연주하는 옆모습' },
    ],
  },
  {
    date: '2026-10-10',
    title: '대전 서구아트페스티벌 밴드경연대회',
    photos: [
      { file: '01.jpg', width: 1200, height: 1600, alt: '대상 상금판을 들고 축제장 앞에서 찍은 단체 사진' },
      { file: '02.jpg', width: 1600, height: 1066, alt: '무대 위에서 대상을 받는 모습' },
      { file: '03.jpg', width: 1600, height: 1066, alt: '서구아트페스티벌 무대에서 공연하는 밴드 전체 모습' },
      { file: '04.jpg', width: 1600, height: 1066, alt: '보컬과 기타 연주자들이 함께 선 무대' },
      { file: '05.jpg', width: 1066, height: 1600, alt: '보컬이 노래하고 옆에서 베이스를 연주하는 모습' },
      { file: '06.jpg', width: 1280, height: 1600, alt: '일렉 기타를 연주하는 모습' },
      { file: '07.jpg', width: 1280, height: 1600, alt: '베이스를 연주하는 모습' },
      { file: '08.jpg', width: 1600, height: 1066, alt: '건반 두 대에서 함께 연주하는 모습' },
      { file: '09.jpg', width: 1254, height: 1568, alt: '초록 모자를 쓰고 건반을 연주하는 모습' },
    ],
  },
  {
    date: '2026-09-12',
    title: '옐로우 스프링스 가을음악회',
    photos: [
      { file: '01.jpg', width: 1600, height: 1066, alt: '옐로우 스프링스 가을음악회 현수막 앞 무대 전체' },
      { file: '02.jpg', width: 1600, height: 1066, alt: '보컬이 노래하고 기타와 드럼이 연주하는 모습' },
      { file: '03.jpg', width: 1600, height: 1066, alt: '건반 앞에서 웃는 모습' },
      { file: '04.jpg', width: 1600, height: 1066, alt: '야외 무대에서 건반을 연주하는 모습' },
      { file: '05.jpg', width: 1066, height: 1600, alt: '기타를 연주하는 모습' },
      { file: '06.jpg', width: 1066, height: 1600, alt: '드럼을 연주하는 모습' },
      { file: '07.jpg', width: 1600, height: 1066, alt: '무대 뒤에서 바라본 관객석' },
    ],
  },
  {
    date: '2026-08-29',
    title: '이플랫세븐 제1회 정기공연',
    photos: [
      { file: '01.jpg', width: 640, height: 960, alt: '양손 엄지를 들고 노래하는 보컬' },
      { file: '02.jpg', width: 1067, height: 1600, alt: '별빛 화면 앞에서 일렉 기타를 연주하는 모습' },
      { file: '03.jpg', width: 1067, height: 1600, alt: '베이스를 연주하는 모습' },
      { file: '04.jpg', width: 1600, height: 1067, alt: '헤드폰을 끼고 드럼을 연주하는 모습' },
      { file: '05.jpg', width: 1067, height: 1600, alt: '관객 너머로 보이는 건반 연주' },
    ],
  },
];

/** 공연 일정. 날짜가 지난 공연은 자동으로 "지난 공연"으로 옮겨진다. */
export const shows: Show[] = [
  // { date: '2026-12-12', title: '○○ 겨울 축제', place: '○○ 광장', time: '19:00' },
];

/** 대표 영상. 첫 번째 영상이 크게 보인다. */
export const videos: Video[] = [
  { youtubeId: 'WexAouF1BY4', title: '[Band Cover] Uptown Funk - Mark Ronson', with: '채온 (Chaeon)' },
  { youtubeId: 'iQfExoV7ZV0', title: '[Live] I Wish - Stevie Wonder', with: '송아 (Song A)' },
  { youtubeId: 'bJeEJ1psajo', title: '[Live] Love Never Felt So Good - Michael Jackson', with: '채온 (Chaeon)' },
  { youtubeId: 'qi_5Ny-wAic', title: '[Band Cover] 바라봐줘요 - 죠지' },
  { youtubeId: 'oOGVtiqAgVY', title: '[Band Cover] After LIKE - IVE', with: '채온 (Chaeon)' },
];

/**
 * 쇼츠. 인스타그램 릴스와 같은 영상이 유튜브 쇼츠(@ebseven012/shorts)에도 올라와 있어서 유튜브 것을 쓴다.
 * 유튜브 쇼츠 주소 youtube.com/shorts/XXXX 의 XXXX 부분을 youtubeId 에 적는다.
 * 2026-11-06 기준 조회수가 많은 순서.
 */
export const shorts: Video[] = [
  { youtubeId: 'e6Mg9BZFSO0', title: '눈빛을 보면 난 알 수가 있어' },
  { youtubeId: 'FtxK9ODwoKc', title: '서울의 달 Band Cover' },
  { youtubeId: 'DTjA1QafTp8', title: '7번국도 - 정미조 Cover' },
  { youtubeId: 'JQiw7hsfE7E', title: 'Love Theory Ebseven ver.' },
  { youtubeId: '-8Evl23MbKs', title: '펑크하면 이곡이지' },
  { youtubeId: 'apctUrwjruU', title: 'Best Part - H.E.R. Cover' },
  { youtubeId: 'eFp9NwmMcB4', title: '같애 - 거니 Band Cover' },
  { youtubeId: 'uxmBzQaeweg', title: 'Ebseven 보컬트리오' },
];

/** 새 앨범. 커버를 누르면 audio 파일이 재생된다. */
export const album = {
  label: '1집 앨범',
  title: '피어나',
  titleEn: 'blooming',
  /** 발매 시각 (한국 시간). 이 시각 전에는 남은 날짜가, 이후에는 "발매"가 보인다. */
  releaseAt: '2026-11-13T12:00:00+09:00',
  releaseText: '11월 13일(금) 12:00 발매',
  cover: '/images/album-blooming.jpg',
  /** 원본: 찐찐찐찐 MASTER.wav 를 AAC로 변환. 지금은 화면에 쓰지 않고 티저 영상을 보여 준다. */
  audio: '/audio/blooming-track.m4a',
  /**
   * 앨범 자리에 보여 줄 티저 쇼츠. youtube.com/shorts/XXXX 의 XXXX.
   * thumb 는 유튜브에 올린 제목 카드 썸네일이다. 유튜브의 세로 썸네일 주소는 영상 중간 장면을
   * 자동으로 뽑은 것이라, maxresdefault.jpg 가운데의 세로 부분을 잘라 따로 두었다.
   */
  teaser: { youtubeId: 'BTAic_Fu9vw', title: '피어나 - 이플랫세븐 Teaser 1', thumb: '/images/album-teaser.jpg' },
};

/** 팬아트 */
export const fanart = [
  {
    image: '/images/fanart-artist-profile.jpg',
    alt: '이플랫세븐 여섯 멤버를 색연필 그림체로 그린 Artist Profile 팬아트',
    width: 900,
    height: 1455,
  },
  {
    image: '/images/fanart-rooftop-live.jpg',
    alt: '꽃이 핀 옥상에서 이플랫세븐이 밤하늘 아래 공연하는 모습을 그린 팬아트',
    width: 900,
    height: 1354,
  },
  {
    image: '/images/fanart-band-portrait.jpg',
    alt: '기타, 베이스, 드럼 스틱, 건반과 함께 모여 앉은 이플랫세븐을 크레파스 그림체로 그린 팬아트',
    width: 900,
    height: 1200,
  },
  {
    image: '/images/fanart-vocal-mic.jpg',
    alt: '스탠드 마이크 앞에 앉아 눈을 감고 노래하는 보컬을 크레파스 그림체로 그린 팬아트',
    width: 900,
    height: 1354,
  },
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
    { label: '활동 지역', value: '전국' },
    { label: '공연 시간', value: '' }, // 예: '30분 ~ 90분 (협의)'
    { label: '음향 장비', value: '' }, // 예: '소규모 공연은 자체 장비 지참 가능'
  ],
};
