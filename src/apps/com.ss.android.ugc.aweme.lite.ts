import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版',
  groups: [
    {
      key: 2,
      name: '功能体验邀请弹窗',
      rules: [
        {
          key: 0,
          name: '【首页商城】体验邀请弹窗',
          activityIds:
            'com.ss.android.ugc.aweme.commerce.sdk.MallContainerActivity',
          matches:
            '[text="不再提示"] + @ECCustomUiImage[clickable=true] +n LynxFlattenUI[text^="立即体验"]',
          snapshotUrls: 'https://i.gkd.li/i/13684791',
        },
      ],
    },
    {
      key: 8,
      name: '朋友推荐弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: ['com.ss.android.ugc.aweme.main.MainActivity'],
      rules:
        '[text="朋友推荐"] +2 [id="com.ss.android.ugc.aweme.lite:id/close"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13650523',
    },
    {
      key: 9,
      quickFind: true,
      name: '通知提示-消息提醒弹窗',
      desc: '点击暂不开启',
      rules: [
        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '[id="com.ss.android.ugc.aweme.lite:id/gl7"] > [id="com.ss.android.ugc.aweme.lite:id/h5q"]',
          snapshotUrls: 'https://i.gkd.li/i/13888485',
        },
      ],
    },
  ],
});
