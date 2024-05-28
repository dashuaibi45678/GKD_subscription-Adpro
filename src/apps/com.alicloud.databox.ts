import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alicloud.databox',
  name: '阿里云盘',
  groups: [
    {
      key: 0,
      name: '功能类-自动签到',
      quickFind: true,
      activityIds: [
        'com.alicloud.databox.MainActivity',
        'com.alicloud.databox.navigation.NavigationFragmentContainerActivity',
      ],
      rules: [
        {
          key: 0,
          name: '自动点击签到',
          matches: '[id="com.alicloud.databox:id/tvTaskAction"][text="领取"]',
          snapshotUrls: 'https://i.gkd.li/i/12929318',
        },
        {
          preKeys: [0],
          key: 1,
          name: '关闭弹窗',
          actionMaximum: 2,
          matches: '[vid="ivClose"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13038304',
            'https://i.gkd.li/i/14235221',
            'https://i.gkd.li/i/15119433',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-活动弹窗',
      activityIds: 'com.alicloud.databox.MainActivity',
      rules: '[text^="好运盲盒"] >n View > Image + TextView[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13228610',
    },
    {
      key: 2,
      name: '功能类-时光设备间-自动点击“开心收下”',
      activityIds:
        'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
      actionMaximum: 1,
      resetMatch: 'activity',
      matchTime: 10000,
      rules: 'View[childCount=9] > @Image -2 View[childCount=5]',
      snapshotUrls: 'https://i.gkd.li/i/13596924',
    },
    {
      key: 3,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.alicloud.databox.MainActivity',
      rules: [
        {
          matches: '[text^="立即了解"] -3 View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13806865',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-签到任务完成弹窗',
      desc: '点击x',
      quickFind: true,
      activityIds:
        'com.alicloud.databox.navigation.NavigationFragmentContainerActivity',
      rules: '[vid="layoutLuckyBottle"] >3 [vid="ivClose"]',
      exampleUrls:
        'https://m.gkd.li/101449500/9f0fb5fb-cb5a-4a11-9a6c-595b8795baad',
      snapshotUrls: 'https://i.gkd.li/i/14895886',
    },
    {
      key: 5,
      name: '功能类-扫描二维码登录时自动点击登录',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.taobao.login4android.scan.QrScanActivity',
          matches: '[text="确认并登录"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14414503', // 该页面不允许截图所以快照页面是黑屏，但不影响编写规则
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-[容量使用超限]提示',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.alicloud.databox.MainActivity',
          matches: ['[text="容量使用超限"]', '[vid="layout_close"]'],
          exampleUrls:
            'https://m.gkd.li/57941037/a219a480-c0a3-4064-832d-533f66995fed',
          snapshotUrls: 'https://i.gkd.li/i/15158788',
        },
      ],
    },
  ],
});
