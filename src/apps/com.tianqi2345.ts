import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tianqi2345',
  name: '2345天气王',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片式广告',
      rules: [
        {
          key: 0,
          name: '快手SDK',
          quickFind: true,
          activityIds: 'com.tianqi2345.activity.NewMainActivity',
          matches: '@ImageView[clickable=true] + * > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14391630',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页全屏广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.biz2345.shell.activity.holder.CloudInterstitialActivity',
          matches: '[id="com.biz2345.adware:id/cloud_interstitial_close_tv"]',
          snapshotUrls: 'https://i.gkd.li/i/14391631',
        },
      ],
    },
  ],
});
