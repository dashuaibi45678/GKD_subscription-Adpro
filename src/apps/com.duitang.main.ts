import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duitang.main',
  name: '堆糖',
  groups: [
    {
      name: '首页-推荐浏览广告',
      desc: '关闭推荐浏览页面广告',
      key: 2,
      activityIds: ['com.duitang.main.business.main.NAMainActivity'],
      quickFind: true,
      rules: [
        {
          matches: '[id="com.duitang.main:id/adOptionEntry"]',
          snapshotUrls: 'https://i.gkd.li/i/13202725',
        },
      ],
    },
    {
      key: 3,
      name: '评价提示',
      desc: '点击[下次再说]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[vid="scoreDuitangCancel"]',
          snapshotUrls: 'https://i.gkd.li/i/14273094',
        },
      ],
    },
    {
      key: 4,
      name: '通知提示-请求开启通知弹窗',
      desc: '点击[x]',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '@[vid="dialogNegative"] +2 [text="打开通知"]',
      snapshotUrls: 'https://i.gkd.li/i/14273121',
    },
    {
      key: 5,
      quickFind: true,
      name: '全屏广告-图片页广告弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.duitang.main.business.display.ImageActivity',
          matches: '[id="com.duitang.main:id/popUpbtnClose"]',
          snapshotUrls: 'https://i.gkd.li/i/13997011',
        },
      ],
    },
  ],
});
