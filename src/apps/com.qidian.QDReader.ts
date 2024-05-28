import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qidian.QDReader',
  name: '起点读书',
  groups: [
    {
      key: 3,
      name: '活动弹窗',
      activityIds: [
        'com.qidian.QDReader.ui.activity.MainGroupActivity',
        'com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI',
        'com.qidian.QDReader.framework.widget.dialog.judian',
        'com.qidian.QDReader.ui.activity.BookLastPageNewActivity',
      ],
      rules:
        '[id="com.qidian.QDReader:id/imgBKT"] + [id="com.qidian.QDReader:id/imgClose"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12640195',
        'https://i.gkd.li/i/12640158',
        'https://i.gkd.li/i/12818198',
        'https://i.gkd.li/i/13469004', // .ui.activity.BookLastPageNewActivity
      ],
    },
    {
      key: 4,
      name: '请求通知权限提示信息',
      desc: '点击顶部提醒左侧x按钮',
      quickFind: true,
      activityIds: 'com.afollestad.materialdialogs.MaterialDialog',
      rules: '@[id="com.qidian.QDReader:id/ivClose"] + [text^="开启推送"]',
      snapshotUrls: 'https://i.gkd.li/i/12640242',
    },
    {
      key: 5,
      name: '悬浮广告',
      rules: [
        {
          key: 0,
          name: '书架页面右侧悬浮广告',
          activityIds: 'com.qidian.QDReader.ui.activity.MainGroupActivity',
          quickFind: true,
          matches:
            '[id="com.qidian.QDReader:id/ivAd"] + [id="com.qidian.QDReader:id/ivAdClose"]',
          snapshotUrls: 'https://i.gkd.li/i/12717032',
        },
        {
          key: 1,
          name: '详情页右侧悬浮广告',
          activityIds: 'com.qidian.QDReader.ui.activity.QDBookDetailActivity',
          matches:
            '[id="com.qidian.QDReader:id/floatingView"] + [id="com.qidian.QDReader:id/ivAdClose"]',
          snapshotUrls: 'https://i.gkd.li/i/13459031',
        },
      ],
    },
    {
      key: 10,
      name: '起点中文网登录自动确认',
      desc: '自动点击【登录】',
      activityIds: 'com.qidian.QDReader.ui.activity.QDBrowserActivity',
      rules: '[id="scanLogin"]',
      snapshotUrls: 'https://i.gkd.li/i/12903081',
    },
    {
      key: 11,
      name: '信息流广告',
      desc: '自动点击【x】',
      activityIds: 'com.qidian.QDReader.flutter.DailyReadingMainPageActivity',
      rules: 'View[desc="更多游戏"] - ImageView[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13406169',
    },
    {
      key: 12,
      name: '福利中心-我知道了',
      desc: '福利中心看视频后获得奖励，自动点击“我知道了”',
      activityIds: 'com.qidian.QDReader.ui.activity.QDBrowserActivity',
      actionMaximum: 1,
      resetMatch: 'activity',
      matchTime: 10000,
      rules: 'View[desc="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/i/13606901',
    },
    {
      key: 13,
      quickFind: true,
      name: '全屏广告-红包弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds:
            'com.qidian.QDReader.ui.activity.hongbao_square.NewHongBaoSquareActivity',
          matches:
            '[id="com.qidian.QDReader:id/rootView"] > [id="com.qidian.QDReader:id/btnHongbaoClose"]',
          snapshotUrls: 'https://i.gkd.li/i/13918466',
        },
      ],
    },
  ],
});
