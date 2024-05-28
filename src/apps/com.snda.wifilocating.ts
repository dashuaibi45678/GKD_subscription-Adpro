import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.snda.wifilocating',
  name: 'WiFi万能钥匙',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: 'com.lantern.start.main.activity.HomeMainActivity',
          matches: '[vid="interstitial_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/14032794',
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] + View[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14256643',
        },
        {
          key: 2,
          quickFind: true,
          activityIds: 'com.zm.wfsdk.core.activity.WfInterstitialActivity',
          matches: '[vid="wf_interstitial_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/14927523',
        },
        {
          key: 3,
          activityIds: 'com.wifitutu.ui.main.MainActivity',
          matches:
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/14964913',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-连接 WiFi 后弹出的广告',
      desc: '点击关闭',
      activityIds: 'com.wifitutu.ui.tools.SpeedUpBActivity',
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: '[vid="native_express_close_proxy"]',
          snapshotUrls: 'https://i.gkd.li/i/14622506',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-加速成功自动返回',
      quickFind: true,
      activityIds: 'com.wifitutu.ui.tools.SpeedUpActivity',
      rules: '[vid="success_desc"] + [vid="back_layout"]',
      snapshotUrls: 'https://i.gkd.li/i/14811492',
    },
    {
      key: 4,
      name: '局部广告-连接WiFi界面右侧悬浮广告',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: 'com.wifitutu.ui.main.MainActivity',
          matches: '[vid="img_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15284722',
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-“我的”界面广告卡片',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: 'com.wifitutu.ui.main.MainActivity',
          matches: '@* - [vid="native_express_ad_logo_tv"]',
          snapshotUrls: 'https://i.gkd.li/i/15284730',
        },
      ],
    },
  ],
});
