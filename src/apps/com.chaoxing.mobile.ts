import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chaoxing.mobile',
  name: '学习通',
  groups: [
    {
      key: 10,
      name: '开启消息通知',
      desc: '自动点击关闭',

      quickFind: true,
      activityIds: 'com.chaoxing.mobile.main.ui.MainTabActivity',
      rules: '[id="com.chaoxing.mobile:id/vNotificationItemClose"]',
      snapshotUrls: 'https://i.gkd.li/i/13197374',
    },
  ],
});
