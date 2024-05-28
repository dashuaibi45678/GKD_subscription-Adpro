import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.djcity',
  name: '掌上道聚城',
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
          key: 0,
          action: 'clickCenter',
          matches: '@LinearLayout[clickable=true] > [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/15137209',
        },
      ],
    },
  ],
});
