import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sohu.sohuvideo',
  name: '搜狐视频',
  groups: [
    {
      key: 1,
      name: '版本更新',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.sohu.sohuvideo.ui.homepage.MainActivity',
      rules:
        '@[id="com.sohu.sohuvideo:id/ivClose"] + LinearLayout [text="新版本上线啦"]',
      snapshotUrls: 'https://i.gkd.li/i/13435504',
    },
  ],
});
