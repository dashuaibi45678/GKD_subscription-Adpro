import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiangzi.dislikecn',
  name: 'Dislike',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      quickFind: true,
      rules:
        '@View <2 FrameLayout[childCount=3] <2 FrameLayout[childCount=2] < [vid="csj_ad_container"]',
      snapshotUrls: 'https://i.gkd.li/i/15196702',
    },
  ],
});
