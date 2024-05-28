import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhaopin.social',
  name: '智联招聘',
  groups: [
    {
      key: 2,
      name: '我的页面-banner广告',
      activityIds: 'com.zhaopin.social.homepage.ZSC_MainTabActivity',
      rules: '[id="com.zhaopin.social:id/rl_banner_close"][clickable=true]',
      snapshotUrls: ['https://i.gkd.li/i/12706181'],
    },
    {
      key: 3,
      name: '社区-弹窗广告',
      activityIds: ['com.zhaopin.social.homepage.ZSC_MainTabActivity'],
      rules:
        'ImageView[clickable=true&&focusable=true] < FrameLayout + FrameLayout > ImageView[clickable=false&&focusable=false]',
      snapshotUrls: 'https://i.gkd.li/i/13063442',
    },
    {
      key: 4,
      name: '消息-开启消息通知',
      desc: '自动点击关闭',

      quickFind: true,
      activityIds: ['com.zhaopin.social.homepage.ZSC_MainTabActivity'],
      rules: '[id="com.zhaopin.social:id/message_pushlayout_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13063427',
    },
  ],
});
