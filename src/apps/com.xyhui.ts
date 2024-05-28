import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xyhui',
  name: 'PU口袋校园',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      actionCdKey: 0,
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          quickFind: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
        },
        {
          key: -1,
          matches:
            '[childCount=0][visibleToUser=true][(text.length<10 && (text*="跳过" || text*="跳過" || text*="skip" || text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || desc*="跳过" || desc*="skip" || (vid*="count" && vid*="down" && vid!*="countdown" && vid!*="load" && vid!*="add" && vid!*="ead" && vid!*="time")]',
        },
        {
          key: 1,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14560058',
            'https://i.gkd.li/i/14560214',
          ],
        },
        {
          key: 2,
          matches: '[id="com.xyhui:id/ms_skipView"]',
          snapshotUrls: 'https://i.gkd.li/i/13197417',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 1,
          name: '腾讯广告',
          activityIds: [
            'com.xyhui.start.PUMainActivity',
            'com.xyhui.start.LoadingActivity',
            'com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity',
          ],
          matches:
            '[id="android:id/content"] >(4,5) @FrameLayout[index=1] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/14472097',
            'https://i.gkd.li/i/14472098',
            'https://i.gkd.li/i/13695488',
            'https://i.gkd.li/i/14766902',
          ],
        },
        {
          key: 2,
          name: '快手广告',
          quickFind: true,
          activityIds: 'com.xyhui.start.LoadingActivity',
          matches:
            'ImageView < @ViewGroup[clickable=true] < * <2 * + * >3 [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13259196',
            'https://i.gkd.li/i/13259198',
          ],
        },
        {
          key: 3,
          name: '字节广告',
          quickFind: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: 'View[clickable=true] < FrameLayout +4 * >2 [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/13259183',
        },
        {
          key: 4,
          name: '美数广告',
          quickFind: true,
          activityIds: 'com.meishu.sdk.activity.SdkInterstitialActivity',
          matches: '[id="com.xyhui:id/ms_activity_sdk_interstitial_cacel"]',
          snapshotUrls: 'https://i.gkd.li/i/13458692',
        },
        {
          key: 5,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] + @View[visibleToUser=true] > Image',
          snapshotUrls: 'https://i.gkd.li/i/14560546',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-首页-右侧浮窗广告',
      quickFind: true,
      activityIds: [
        'com.xyhui.start.PUMainActivity',
        'com.xyhui.start.LoadingActivity',
      ],
      rules: 'ImageView[id="com.xyhui:id/deleteIv"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12846543',
        'https://i.gkd.li/i/12868119',
      ],
    },
    {
      key: 3,
      name: '更新提示',
      quickFind: true,
      activityIds: [
        'com.xyhui.start.PUMainActivity',
        'com.xyhui.start.LoadingActivity',
      ],
      rules: 'ImageView[id="com.xyhui:id/closeIv"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12908853',
        'https://i.gkd.li/i/12908865',
      ],
    },
  ],
});
