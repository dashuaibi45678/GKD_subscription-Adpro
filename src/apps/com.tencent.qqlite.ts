import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqlite',
  name: 'QQ极速版',
  groups: [
    {
      key: 1,
      name: '更新提示',
      activityIds: ['com.tencent.mobileqq.activity.SplashActivity'],
      rules: [
        {
          matches: '[id="com.tencent.qqlite:id/close_top_bar"]',
          snapshotUrls: ['https://i.gkd.li/i/14428054'],
        },
      ],
    },
  ],
});
