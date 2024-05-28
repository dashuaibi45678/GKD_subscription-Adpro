import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mfcloudcalculate.networkdisk',
  name: '123云盘',
  groups: [
    {
      key: 1,
      name: '全屏广告-应用内广告弹窗',
      activityIds: [
        'com.mfcloudcalculate.networkdisk.activity.AdFreeActivity',
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      ],
      matchTime: 10000,
      actionMaximum: 1,
      quickFind: true,
      rules: '[vid="iv_ad_free_gif"] + * > [text="关闭"]',
      snapshotUrls: 'https://i.gkd.li/i/14696860',
    },
    {
      key: 2,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      actionCdKey: 0,
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
          quickFind: true,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="com.mfcloudcalculate.networkdisk:id/frame_ad_splash_container"]',
          snapshotUrls: 'https://i.gkd.li/i/14018247',
        },
      ],
    },
  ],
});
