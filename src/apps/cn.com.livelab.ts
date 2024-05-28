import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.livelab',
  name: '纷玩岛',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      activityIds: 'cn.com.livelab.MainActivity',
      rules: 'View >n View[childCount=2] > ImageView + Button',
      snapshotUrls: 'https://i.gkd.li/i/13258873',
    },
  ],
});
