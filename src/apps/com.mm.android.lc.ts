import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mm.android.lc',
  name: '乐橙',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      quickFind: true,
      rules: '[vid="advert_countdown_view"]',
      snapshotUrls: 'https://i.gkd.li/i/14586621',
    },
  ],
});
