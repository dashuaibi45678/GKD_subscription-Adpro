import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.cloudmusic',
  name: '荣耀音乐',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页-网易云音乐弹窗广告',
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: 'com.netease.cloudmusic.activity.MainActivity',
      rules: '[vid="dsl_dialog_root"] >4 ImageView[index=1]',
      exampleUrls:
        'https://m.gkd.li/101449500/7471ea5e-df20-4340-971f-1acfccbe6fab',
      snapshotUrls: 'https://i.gkd.li/i/14167946',
    },
  ],
});
