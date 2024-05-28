import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huabenapp',
  name: '话本小说',
  groups: [
    {
      key: 1,
      name: '更新提示',
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: 'com.huabenapp.MainActivity',
      rules:
        '[text="发现新版本"] <n ViewGroup < ScrollView +n ViewGroup[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/14072723',
    },
    {
      key: 2,
      name: '功能类-阅读界面-底部社区问答',
      activityIds: 'com.huabenapp.MainActivity',
      rules: '[text*="社区问答"] +2 ViewGroup',
      snapshotUrls: 'https://i.gkd.li/i/14076166',
    },
  ],
});
