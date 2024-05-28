import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.csair.mbp',
  name: '南方航空',
  groups: [
    {
      key: 1,
      name: '功能类-长辈版弹窗',
      desc: '点击【暂不开启】',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.csair.mbp.CSMBPActivity',
      rules: '[text="开启长辈版"] -2 [text="暂不开启"]',
      snapshotUrls: 'https://i.gkd.li/i/14810700',
    },
    {
      key: 3,
      name: '全屏广告-首页-弹窗广告',
      quickFind: true,
      activityIds: 'com.csair.mbp.CSMBPActivity',
      rules: '[id="com.csair.mbp:id/close_btn"]',
      snapshotUrls: 'https://i.gkd.li/i/13197497',
    },
  ],
});
