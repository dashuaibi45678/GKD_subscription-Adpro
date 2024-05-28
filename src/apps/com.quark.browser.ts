import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.quark.browser',
  name: '夸克',
  groups: [
    {
      key: 2,
      name: '功能类-设置默认浏览器提示',
      desc: '点击取消',
      quickFind: true,
      actionMaximum: 1,
      activityIds: 'com.ucpro.BrowserActivity',
      rules: '@Button[text="取消"] + Button[text="去设置"]',
      snapshotUrls: 'https://i.gkd.li/i/13249469',
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      quickFind: true,
      actionMaximum: 1,
      activityIds: 'com.ucpro.BrowserActivity',
      rules: 'ImageView[id="com.quark.browser:id/close_img"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13292571',
    },
  ],
});
