import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.realmecomm.app',
  name: 'realme社区',
  groups: [
    {
      key: 1,
      name: '功能类-自动点击签到',
      desc: '自动点击签到',
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: 'com.android.realme2.home.view.MainActivity',
      rules: '[vid="tv_check_in"][text="签到"]',
      snapshotUrls: 'https://i.gkd.li/i/14321155',
    },
  ],
});
