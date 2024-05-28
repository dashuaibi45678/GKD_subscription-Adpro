import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.xin.aiqicha',
  name: '爱企查',
  groups: [
    {
      key: 10,
      name: '请求通知权限弹窗',
      desc: '自动点击【不允许】',
      activityIds: 'com.baidu.newbridge.fast.MainFastActivity',
      rules: '[id="com.baidu.xin.aiqicha:id/notice_dialog_cancel_iv"]',
      snapshotUrls: 'https://i.gkd.li/i/12755733',
    },
    {
      key: 11,
      name: '请求通知权限提示信息',
      desc: '自动点击x按钮',
      activityIds: 'com.baidu.newbridge.fast.MainFastActivity',
      rules: '@[id="com.baidu.xin.aiqicha:id/close"] +2 [text="打开消息通知"]',
      snapshotUrls: 'https://i.gkd.li/i/12755756',
    },
  ],
});
