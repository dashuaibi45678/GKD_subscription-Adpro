import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chan.cwallpaper',
  name: '图凌',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[vid="activate_button"]',
      snapshotUrls: 'https://i.gkd.li/i/14293734',
    },
  ],
});
