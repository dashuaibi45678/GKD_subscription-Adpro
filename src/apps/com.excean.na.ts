import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.excean.na',
  name: '99手游加速器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/14835263',
        },
      ],
    },
    {
      key: 1,
      quickFind: true,
      name: '局部广告-卡片广告',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.excelliance.kxqp.ui.activity.GameLaunchActivity',
          matches: '[id="com.excean.na:id/iv_close_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/13931051',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      desc: '点击X',
      rules: [
        {
          key: 0,
          name: '腾讯SDK',
          activityIds: 'com.excelliance.kxqp.ui.MainActivity',
          matches:
            'FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView[width<90][height<90]',
          snapshotUrls: [
            'https://i.gkd.li/i/13930990',
            'https://i.gkd.li/i/13932190',
          ],
        },
        {
          key: 1,
          name: '穿山甲SDK',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[id="android:id/content"] >n @View[index=0] +2 TextView',
          snapshotUrls: 'https://i.gkd.li/i/14855686',
        },
      ],
    },
  ],
});
