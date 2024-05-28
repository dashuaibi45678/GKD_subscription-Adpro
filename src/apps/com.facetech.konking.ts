import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.facetech.konking',
  name: '人民日报',
  groups: [
    {
      key: 1,
      name: '应用内广告弹窗',
      activityIds:
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      rules: '@Image[text=""] < View +n View > View > TextView[text="广告"]',
      snapshotUrls: 'https://i.gkd.li/i/12841081',
    },
  ],
});