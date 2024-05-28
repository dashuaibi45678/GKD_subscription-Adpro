import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.upupoo.apu.mobile',
  name: 'UPUPOO动态壁纸',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules:
        'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
      snapshotUrls: [
        'https://i.gkd.li/i/13830230',
        'https://i.gkd.li/i/14052232',
      ],
    },
  ],
});
