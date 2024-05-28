import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dongao.kaoqian.phone',
  name: '会计云课堂',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[vid="tv_welcome_guide"]',
      snapshotUrls: 'https://i.gkd.li/i/14809185',
    },
  ],
});
