import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.damai',
  name: '大麦',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '需配合设置-高级模式里开启[Shizuku-模拟点击]使用，否则无效',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          action: 'clickCenter',
          matches: '[vid="homepage_advert_pb"]',
          exampleUrls:
            'https://m.gkd.li/57941037/6680a0b8-0796-4165-88fc-1f16cd6c67dd',
          snapshotUrls: 'https://i.gkd.li/i/14585402',
        },
      ],
    },
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'cn.damai.homepage.MainActivity',
          matches:
            '[id="cn.damai:id/homepage_popup_window_image"] + [id="cn.damai:id/homepage_popup_window_close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/13627900',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      quickFind: true,
      activityIds: 'cn.damai.homepage.MainActivity',
      rules: '[text*="通知权限"] +2 LinearLayout > [text="不开启"]',
      snapshotUrls: 'https://i.gkd.li/i/13985393',
    },
  ],
});
