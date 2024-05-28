import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sh.gj',
  name: '上海公交',
  groups: [
    {
      key: 1,
      name: '局部广告',
      rules: [
        {
          key: 0,
          name: '腾讯SDK',
          quickFind: true,
          activityIds: [
            'com.sh.gj.MainActivity',
            'com.sh.gj.activity.LineDetailActivity',
          ],
          matches: 'ImageView < @FrameLayout <<n [vid="bannerContainer"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14883107',
            'https://i.gkd.li/i/14883157',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-退出软件时的确认弹窗',
      desc: '点击[确认退出]',
      quickFind: true,
      activityIds: 'com.sh.gj.MainActivity',
      rules: '[text="确认退出"]',
      exampleUrls:
        'https://m.gkd.li/57941037/38c20d82-947e-4e46-aba8-80e1a773552b',
      snapshotUrls: 'https://i.gkd.li/i/14883160',
    },
  ],
});
