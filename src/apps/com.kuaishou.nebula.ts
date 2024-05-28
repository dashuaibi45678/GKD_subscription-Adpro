import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuaishou.nebula',
  name: '快手极速版',
  groups: [
    {
      key: 1,
      name: '全屏广告-红包弹窗',
      rules: [
        {
          key: 1,
          quickFind: true,
          activityIds: 'com.yxcorp.gifshow.HomeActivity',
          matches:
            '@ImageView[clickable=true] -n ViewGroup >2 [text~="[0-9]+.?[0-9]*"] + ViewGroup > [text$="元"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14879912',
            'https://i.gkd.li/i/15061662',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-朋友推荐弹窗',
      quickFind: true,
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 0,
          matches: '@[vid="close_btn"] <n * > [text="朋友推荐"]',
          snapshotUrls: 'https://i.gkd.li/i/15061832',
        },
      ],
    },
  ],
});
