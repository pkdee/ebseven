// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // 실제 배포 주소. canonical, OG, 사이트맵 주소가 모두 이것으로 만들어진다.
  // Vercel Domains 에서 대표(Primary)로 둔 주소와 같아야 한다. 지금은 www 가 대표이고
  // ebseven.com 은 www 로 넘어간다. 대표를 바꾸면 여기와 vercel.json 도 함께 바꾼다.
  site: 'https://www.ebseven.com',
});
