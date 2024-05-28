import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ecitic.bank.mobile',
  name: '中信银行',
  groups: [
    {
      key: 2,
      name: '广告弹窗',
      activityIds: [
        'com.ecitic.bank.mobile.ui.MainActivity',
        'com.ecitic.bank.mobile.ui.webview.CordovaWebViewActivity',
      ],
      rules:
        '[id="com.ecitic.bank.mobile:id/id_cordova_view"] + [id="com.ecitic.bank.mobile:id/close_product_send"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13402746',
        'https://i.gkd.li/i/12701230',
      ],
    },
    {
      key: 3,
      name: '请求开通知权限弹窗',
      activityIds: 'com.ecitic.bank.mobile.ui.MainActivity',
      rules: '@[text="取消"] + [text="立即开启"]',
      snapshotUrls: 'https://i.gkd.li/i/13399102',
    },
    {
      key: 4,
      name: '局部广告-理财产品悬浮广告',
      activityIds: 'com.ecitic.bank.mobile.ui.MainActivity',
      rules: '@[clickable=true] +2 [text="恭喜您关注到宝藏基金"]',
      snapshotUrls: 'https://i.gkd.li/i/14208637',
    },
  ],
});
