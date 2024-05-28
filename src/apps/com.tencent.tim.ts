import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.tim',
  name: 'TIM',
  groups: [
    {
      key: 1,
      name: '功能类-自动查看原图',
      quickFind: true,
      activityIds: 'com.tencent.mobileqq.richmediabrowser.AIOGalleryActivity',
      rules: '[text^="查看原图"]',
      snapshotUrls: 'https://i.gkd.li/i/15196002',
    },
    {
      key: 2,
      name: '功能类-发送图片时自动勾选[原图]',
      quickFind: true,
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: '@[checked=false] + [text="原图"]',
      exampleUrls:
        'https://m.gkd.li/57941037/57b4e39f-ba48-4e57-a5de-3a461a583e60',
      snapshotUrls: 'https://i.gkd.li/i/15209768',
    },
  ],
});
