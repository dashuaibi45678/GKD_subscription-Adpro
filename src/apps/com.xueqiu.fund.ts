import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xueqiu.fund',
  name: '雪球基金',
  groups: [
    {
      key: 1,
      name: '全屏广告-春节闲钱放哪里弹窗',
      desc: '有误触风险',
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: 'com.xueqiu.fund.commonlib.FundHomeActivityV2',
      rules: '[vid="image_cancel"]',
      snapshotUrls: 'https://i.gkd.li/i/14163901',
    },
  ],
});
