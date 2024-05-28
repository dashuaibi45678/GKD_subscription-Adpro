import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.xuexi.android',
  name: '学习强国',
  groups: [
    {
      key: 10,
      name: '请求开启通知权限提示信息',
      desc: '自动点击x按钮',
      activityIds: 'com.alibaba.android.rimet.biz.SplashActivity',
      rules:
        '[text^="开启消息通知"] +2 [id="cn.xuexi.android:id/layout_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12715160',
    },
  ],
});
