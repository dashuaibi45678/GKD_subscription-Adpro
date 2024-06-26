import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wwwscn.yuexingbao',
  name: '悦通行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '字节广告SDK',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        '[id$="tt_splash_skip_btn"]',
        '@View[clickable=true][id=null][visibleToUser=true] +n TextView[clickable=true]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/i/13239194',
        'https://i.gkd.li/i/13723967',
      ],
    },
  ],
});
