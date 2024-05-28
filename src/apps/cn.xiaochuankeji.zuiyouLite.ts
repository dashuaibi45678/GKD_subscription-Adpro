import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.xiaochuankeji.zuiyouLite',
  name: '皮皮搞笑',
  groups: [
    {
      key: 2,
      name: '信息流广告',
      quickFind: true,
      activityIds: 'cn.xiaochuankeji.zuiyouLite.ui.slide.ActivitySlideDetail',
      rules: [
        {
          key: 0,
          name: '点击【x】',
          matches: '[id="cn.xiaochuankeji.zuiyouLite:id/ad_remove"]',
          snapshotUrls: 'https://i.gkd.li/i/13387116',
        },
        {
          preKeys: 0,
          name: '点击【不喜欢广告主】',
          matches: '@LinearLayout[clickable=true] > [text="不喜欢广告主"]',
          snapshotUrls: 'https://i.gkd.li/i/13387155',
        },
      ],
    },
  ],
});
