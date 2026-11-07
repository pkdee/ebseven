// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // 실제 배포 주소. canonical, OG, 사이트맵 주소가 모두 이것으로 만들어진다.
  // 도메인을 따로 연결하면 여기만 바꾸면 된다.
  site: 'https://ebseven.vercel.app',
});
