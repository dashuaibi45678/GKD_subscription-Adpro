import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.giraffe',
  name: '安易加速器',
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      activityIds: 'com.speed.shadowsocks.ui.main.MainActivity',
      rules: '[vid="iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13998233',
    },
  ],
});
