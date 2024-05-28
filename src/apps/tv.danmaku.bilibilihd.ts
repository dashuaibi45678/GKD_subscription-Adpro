import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bilibilihd',
  name: '哔哩哔哩HD',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[id="tv.danmaku.bilibilihd:id/count_down"]',
      snapshotUrls: 'https://i.gkd.li/i/13031261',
    },
  ],
});
