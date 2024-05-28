import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.bankabc',
  name: '中国农业银行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          matches: '[vid="iv_ad"] - [vid="close"]',
          snapshotUrls: 'https://i.gkd.li/i/14179381',
        },
        {
          key: 1,
          quickFind: true,
          actionCdKey: 0,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
        },
        {
          key: 2,
          actionCdKey: 0,
          matches:
            '[childCount=0][visibleToUser=true][(text.length<10&&(text*="跳过"||text*="跳過"||text*="skip"||text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || (vid*="count" && vid*="down" && vid!*="download") || desc*="跳过" || desc*="skip"]',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-定位权限',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="允许获取位置信息"] +n * > [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/i/14208572',
    },
    {
      key: 3,
      name: '通知提示',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[vid="iv_notification_reminder_dialog_close"]',
      snapshotUrls: 'https://i.gkd.li/i/14208621',
    },
  ],
});
