import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sdu.didi.psnger',
  name: '滴滴',
  groups: [
    {
      key: 1,
      name: '局部广告-打车页面广告',
      desc: '点击广告卡片左上角x',
      rules: [
        {
          key: 0,
          activityIds: 'com.didi.sdk.app.MainActivity',
          matches:
            'ImageView[id="com.sdu.didi.psnger:id/second_entrance_img"] + @ImageView[id="com.sdu.didi.psnger:id/left_close_img"]',
          snapshotUrls: 'https://i.gkd.li/i/13760846',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-优惠券',
      quickFind: true,
      activityIds: [
        'com.didi.sdk.app.launch.splash.SplashActivity',
        'com.didi.sdk.app.MainActivity',
      ],
      rules: '[vid="popClose"][desc="关闭弹窗"]',
      snapshotUrls: [
        'https://i.gkd.li/i/14047551',
        'https://i.gkd.li/i/13947142', //activityId: com.didi.sdk.app.MainActivity
      ],
    },
  ],
});
