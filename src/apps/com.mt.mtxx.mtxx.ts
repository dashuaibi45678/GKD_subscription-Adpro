import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mt.mtxx.mtxx',
  name: '美图秀秀',
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="升级新版客户端"] - [text="取消"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13238352',
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 0,
          name: '所有图片页',
          matches: '@ImageView[clickable=true] - * > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/15076408',
        },
      ],
    },
  ],
});
