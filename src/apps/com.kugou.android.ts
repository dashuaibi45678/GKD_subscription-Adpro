import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kugou.android',
  name: '酷狗音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[desc="跳过"||desc="GdtCountDownView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12775410',
            'https://i.gkd.li/i/13426030',
            'https://i.gkd.li/i/13468987',
          ],
        },
        {
          key: 1,
          matches: '[desc="createSkipView"]',
          position: {
            left: 'width * 0.6794',
            top: 'width * 0.3822',
          },
          snapshotUrls: 'https://i.gkd.li/i/14606816',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-卡片广告',
      activityIds: 'com.kugou.android.app.MediaActivity',
      rules: [
        {
          key: 0,
          forcedTime: 5000,
          matches:
            'ViewGroup[childCount=2] > ImageView + @FrameLayout[clickable=true] > LinearLayout > ImageView',
          exampleUrls:
            'https://m.gkd.li/87047583/9e150986-2103-4130-a12f-12ed2b07ef90',
          snapshotUrls: 'https://i.gkd.li/i/13558426',
        },
        {
          key: 1,
          matches:
            'TextView[text!=null] <2 ViewGroup[childCount=6] > ImageView[desc="关闭"]',
          exampleUrls:
            'https://m.gkd.li/57941037/adb9a250-d23d-48ef-b1a5-5e828d56cb97',
          snapshotUrls: [
            'https://i.gkd.li/i/14964889',
            'https://i.gkd.li/i/15024041',
          ],
        },
        {
          key: 2,
          matches: '[desc="关闭广告"][clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/8bd6dafc-e610-4c0d-a486-02a11535e610',
          snapshotUrls: 'https://i.gkd.li/i/15024812',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-VIP弹窗',
      rules: [
        {
          matches:
            'RelativeLayout[childCount=2] > View + RelativeLayout[childCount=2] > @ImageView + RelativeLayout',
          exampleUrls:
            'https://m.gkd.li/87047583/84c1379f-5eb1-4982-b27b-35e267594101',
          snapshotUrls: 'https://i.gkd.li/i/13548005',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-[看广告免费听歌]弹窗',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches: '[desc="看广告，免费听会员歌"] +2 [desc="关闭"]',
          exampleUrls:
            'https://m.gkd.li/57941037/dfd70c7c-3200-493e-9afa-404de5fcd2ff',
          snapshotUrls: 'https://i.gkd.li/i/14722104',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-[开启音乐DJ]弹窗',
      desc: '勾选[今日不再提醒]-点击[关闭]',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '@[checked=false] + [text="今日不再提醒"]',
          exampleUrls:
            'https://m.gkd.li/57941037/69f564e9-464a-488b-a181-f1085176b49f',
          snapshotUrls: 'https://i.gkd.li/i/14722457',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@ImageView - * > [text="今日不再提醒"]',
          exampleUrls:
            'https://m.gkd.li/57941037/69f564e9-464a-488b-a181-f1085176b49f',
          snapshotUrls: 'https://i.gkd.li/i/14722457',
        },
      ],
    },
  ],
});
