import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.myzaker.ZAKER_Phone',
  name: 'ZAKER',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      quickFind: true,
      rules: [
        {
          position: {
            left: 'width * 0.8871',
            top: 'width * 0.0851',
          },
          matches: '[vid="cover_pic"]',
          snapshotUrls: 'https://i.gkd.li/i/14958042',
        },
      ],
    },
  ],
});
