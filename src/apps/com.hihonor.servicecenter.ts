import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.servicecenter',
  name: '荣耀快服务',
  groups: [
    {
      key: 1,
      name: '局部广告-首页-右侧浮窗广告',
      desc: '点击x',
      quickFind: true,
      activityIds: 'com.hihonor.servicecardcenter.activity.LauncherActivity',
      rules: '[vid="float_cancel"]',
      exampleUrls:
        'https://m.gkd.li/101449500/3e41e790-2206-4780-bdc3-6a8f152c2622',
      snapshotUrls: 'https://i.gkd.li/i/14887872',
    },
  ],
});
