import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.vending',
  name: 'Google Play 商店',
  groups: [
    {
      key: 1,
      name: '通知提示-使用Points获得奖励弹窗',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: 'com.google.android.finsky.activities.MainActivity',
      rules:
        '[text="使用 Google Play Points 获得奖励"] +3 * > [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/i/14151219',
    },
    {
      key: 2,
      name: '全屏广告-[体验 Google Play Pass]弹窗',
      desc: '点击[以后再说]',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          position: {
            left: 'width * 0.5',
            top: 'width * 1.5',
          },
          activityIds: 'com.google.android.finsky.activities.MainActivity',
          matches: '[text="体验 Google Play Pass，免费试用 1 个月"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14958783',
            'https://i.gkd.li/i/15286041',
          ],
        },
      ],
    },
  ],
});
