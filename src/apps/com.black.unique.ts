import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.black.unique',
  name: '全球购骑士特权',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      quickFind: true,
      activityIds: 'com.black.unique.feature.home.HomeActivity',
      rules: [
        {
          matches: '@ImageView[id="com.black.unique:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13499502',
        },
      ],
    },
  ],
});
