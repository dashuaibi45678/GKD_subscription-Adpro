import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coloros.gallery3d',
  name: '相册',
  groups: [
    {
      key: 6,
      name: '开启相册同步弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.coloros.gallery3d.app.MainActivity',
      rules: '[text="开启相册自动同步，保障相册数据安全"] + [text="忽略"]',
      snapshotUrls: 'https://i.gkd.li/i/13637185',
    },
  ],
});
