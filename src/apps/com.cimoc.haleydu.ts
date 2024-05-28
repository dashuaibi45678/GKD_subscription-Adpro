import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cimoc.haleydu',
  name: 'Cimoc',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      rules: [
        {
          key: 0,
          name: '腾讯SDK',
          matches:
            '[id="android:id/content"] >3 FrameLayout[childCount>=2] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/14093335',
            'https://i.gkd.li/i/14318885',
          ],
        },
      ],
    },
  ],
});
