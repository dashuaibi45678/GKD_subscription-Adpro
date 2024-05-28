import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miHoYo.cloudgames.ys',
  name: '云·原神',
  groups: [
    {
      key: 1,
      name: '功能类-流量提醒',
      desc: '点击[使用流量进行游戏]',
      quickFind: true,
      activityIds: 'com.mihoyo.cloudgame.main.MiHoYoCloudMainActivity',
      rules: '[text="使用流量进行游戏"]',
      snapshotUrls: 'https://i.gkd.li/i/14783168',
    },
  ],
});
