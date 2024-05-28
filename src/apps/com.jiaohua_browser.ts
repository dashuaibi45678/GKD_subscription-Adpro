import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jiaohua_browser',
  name: 'JMComic2',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '@ViewGroup > [text=""][visibleToUser=true]',
      snapshotUrls: [
        'https://i.gkd.li/i/14141773',
        'https://i.gkd.li/i/14142408', //不加visibleToUser误触快照
      ],
    },
    {
      key: 1,
      name: '局部广告-首页底部广告',
      activityIds: 'com.jiaohua_browser.MainActivity',
      rules: [
        {
          matches: '@ViewGroup > [text=""][visibleToUser=true]',
          excludeMatches: '[text="搜尋紀錄"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14141810',
            'https://i.gkd.li/i/14142408', //不加visibleToUser误触快照
            'https://i.gkd.li/i/14205165', //不加excludeMatches误触快照
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-已满18岁弹窗',
      quickFind: true,
      activityIds: 'com.jiaohua_browser.MainActivity',
      rules: '[text*="滿18歲"]',
      snapshotUrls: 'https://i.gkd.li/i/14141809',
    },
    {
      key: 3,
      name: '功能类-签到活动',
      quickFind: true,
      activityIds: 'com.jiaohua_browser.MainActivity',
      rules: '@ViewGroup > [text="立即簽到"][visibleToUser=true]',
      snapshotUrls: [
        'https://i.gkd.li/i/14141807',
        'https://i.gkd.li/i/14205170', //限定visibleToUser
      ],
    },
  ],
});
