import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.market',
  name: 'OPPO软件商店',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '全局规则不生效',
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      quickFind: true,
      rules: '[text*="跳过"][text.length<=5]',
      exampleUrls:
        'https://m.gkd.li/101449500/4c1e3df4-e0e8-49ec-a260-ed406b46168e',
      snapshotUrls: 'https://i.gkd.li/i/14120100',
    },
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.heytap.cdo.client.cards.page.main.maintab.MainTabActivity',
        'com.heytap.upgrade.ui.UpgradeActivity',
      ],
      rules: [
        {
          action: 'back',
          matches:
            '[id="com.heytap.market:id/tv_titile"][text="发现软件商店新版本"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13455965',
            'https://i.gkd.li/i/14583583',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-首页-右下角浮窗',
      quickFind: true,
      activityIds:
        'com.heytap.cdo.client.cards.page.main.maintab.MainTabActivity',
      rules: '@[desc="关闭"][clickable=true] <2 [vid="view_id_float_ad"]',
      snapshotUrls: 'https://i.gkd.li/i/14469932',
    },
  ],
});
