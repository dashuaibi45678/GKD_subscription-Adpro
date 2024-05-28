import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sec.android.app.samsungapps',
  name: '应用商店',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          quickFind: true,
          actionMaximum: 1,
          resetMatch: 'app',
          matchTime: 10000,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14810528',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-年满18岁',
      desc: '点击【是】',
      activityIds: 'com.sec.android.app.samsungapps.SearchResultActivity',
      quickFind: true,
      rules: '[text="您是否年满 18 岁？"] +4 [vid="positive"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/14473690',
    },
  ],
});
