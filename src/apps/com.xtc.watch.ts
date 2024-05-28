import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xtc.watch',
  name: '小天才',
  groups: [
    {
      key: 2,
      name: '弹窗提醒',
      desc: '已知包括APP升级提醒与开启通知提醒，自动点击关闭。',

      quickFind: true,
      activityIds: [
        'com.xtc.widget.phone.popup.activity.CustomActivity14',
        'com.xtc.widget.phone.popup.activity.CustomActivity13',
      ],
      rules: '[id="com.xtc.watch:id/iv_close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13197390',
        'https://i.gkd.li/i/13063274',
      ],
    },
    {
      key: 3,
      name: '开启通知提醒',

      quickFind: true,
      activityIds: ['com.xtc.watch.view.home.activity.XtcHomeActivity'],
      rules: [
        {
          matches: ['[id="com.xtc.watch:id/iv_notify_permission_close"]'],
          snapshotUrls: ['https://i.gkd.li/i/13059965'],
        },
      ],
    },
  ],
});
