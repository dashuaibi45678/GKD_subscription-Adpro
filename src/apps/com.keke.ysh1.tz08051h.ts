import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.keke.ysh1.tz08051h',
  name: '可可影视',
  groups: [
    {
      key: 1,
      name: '通知提示-公告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.salmon.film.main.ui.MainActivity',
      rules: '[text="可可影视"] +2 * > [text*="知道了"]',
      snapshotUrls: 'https://i.gkd.li/i/13548412',
    },
  ],
});
