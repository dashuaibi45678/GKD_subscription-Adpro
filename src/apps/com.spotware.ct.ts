import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.spotware.ct',
  name: 'cTrader',
  groups: [
    {
      key: 1,
      name: '功能类-我不是美国公民弹窗',
      quickFind: true,
      activityIds: 'mobile.droid.ctrader.views.main.MainActivity',
      rules: [
        {
          key: 0,
          matches: '[text="我不是美国居民"]',
          snapshotUrls: 'https://i.gkd.li/i/14537505',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[text="确认"]',
          exampleUrls:
            'https://m.gkd.li/101449500/085abfc1-cb72-465b-93b6-63e1c89af88f',
          snapshotUrls: 'https://i.gkd.li/i/14495496',
        },
      ],
    },
  ],
});
