import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jz.xydj',
  name: '星芽免费短剧',
  groups: [
    {
      key: 1,
      name: '局部广告-视频观看页下方广告',
      rules: [
        {
          key: 0,
          name: '腾讯SDK',
          quickFind: true,
          activityIds: 'com.jz.jzdj.ui.activity.shortvideo.ShortVideoActivity2',
          matches: '[vid="ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14391606',
        },
      ],
    },
  ],
});
