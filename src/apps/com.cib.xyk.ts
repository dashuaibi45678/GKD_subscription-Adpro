import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cib.xyk',
  name: '兴业生活',
  groups: [
    {
      key: 1,
      name: '通知提示',
      desc: '概率误触，谨慎开启',
      activityIds: 'com.cib.fintech.activity.MainActivity',
      rules:
        '[id="android:id/content"] >2 RelativeLayout[childCount=2] > RelativeLayout + ImageView[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/14122970',
    },
  ],
});
