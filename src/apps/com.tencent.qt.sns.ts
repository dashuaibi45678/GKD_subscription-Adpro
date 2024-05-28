import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qt.sns',
  name: '掌上穿越火线',
  groups: [
    {
      key: 1,
      name: '首页活动弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      matchTime: 10000,
      rules: '[id="com.tencent.qt.sns:id/closebtn"]',
      snapshotUrls: 'https://i.gkd.li/i/13497978',
    },
  ],
});
