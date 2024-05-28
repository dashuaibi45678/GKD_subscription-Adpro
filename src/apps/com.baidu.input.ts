import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.input',
  name: '百度输入法',
  groups: [
    {
      key: 1,
      name: '全屏广告-创作祝福弹窗',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[id="android:id/content"] >2 [vid="button_close"]',
      snapshotUrls: 'https://i.gkd.li/i/14179064',
    },
    {
      key: 2,
      name: '局部广告-皮肤页-底部VIP弹窗',
      activityIds: 'com.baidu.input.ImeAppMainActivity',
      rules: '[desc="开会员，全部皮肤免费用"] +5 View[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/14179107',
    },
    {
      key: 3,
      name: '局部广告-皮肤试用页-卡片广告',
      quickFind: true,
      activityIds: 'com.baidu.input.ImeSkinTryActivity',
      rules: '[vid="close_btn"]',
      snapshotUrls: 'https://i.gkd.li/i/14205945',
    },
  ],
});
