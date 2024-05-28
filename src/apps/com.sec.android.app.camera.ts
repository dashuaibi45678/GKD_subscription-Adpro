import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sec.android.app.camera',
  name: '相机',
  groups: [
    {
      key: 1,
      name: '功能类-提高位置精确度弹窗',
      desc: '自动点击【确定】',
      quickFind: true,
      rules: [
        {
          matches: ['[text="是否启用【提高位置精确度】？"]', '[text="确定"]'],
          exampleUrls:
            'https://m.gkd.li/101449500/7ecf6c53-7180-4631-81e3-759bc6f8ff9f',
          snapshotUrls: 'https://i.gkd.li/i/14603535',
        },
      ],
    },
  ],
});
