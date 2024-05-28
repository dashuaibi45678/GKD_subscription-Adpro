import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.app.reader',
  name: '京东读书',
  groups: [
    {
      key: 2,
      name: '首页弹窗广告',
      activityIds: [
        'com.jingdong.app.reader.main.ui.JdMainActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: [
        {
          matches:
            '[id="com.jd.app.reader:id/mCardView"] + [id="com.jd.app.reader:id/mCloseBtn"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12686577',
            'https://i.gkd.li/i/12686664', // activityId: 'com.miui.home.launcher.Launcher'
          ],
        },
      ],
    },
    {
      key: 3,
      name: '阅读页面广告弹窗',
      activityIds: 'com.jd.read.engine.activity.EngineReaderActivity',
      rules: '[id$="ad_read_close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12881810',
        'https://i.gkd.li/i/12893631',
      ],
    },
  ],
});
