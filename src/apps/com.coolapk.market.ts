import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionCdKey: 0,
      actionMaximumKey: 0,
      excludeActivityIds: [
        'com.coolapk.market.view.search.', // 在搜索页面禁用
        'com.coolapk.market.view.feed.', // 在动态页面禁用
      ],
      rules: [
        {
          quickFind: true,
          key: 0,
          matches:
            '[id$="tt_splash_skip_btn"] <<n [id="com.coolapk.market:id/ad_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12503773',
            'https://i.gkd.li/i/13247610',
            'https://i.gkd.li/i/13264779',
          ],
        },
        {
          quickFind: true,
          key: 1,
          matches: '[text^="跳过"][text.length<=4]',
          excludeMatches: '[id="com.coolapk.market:id/item_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12917990',
            'https://i.gkd.li/i/13211392',
            'https://i.gkd.li/i/13247733', // 误触
            'https://i.gkd.li/i/13247782', // 可能误触
            'https://i.gkd.li/i/13296816', // snapshot of excludeMatches
          ],
        },
        {
          key: 2,
          quickFind: true,
          matches:
            '@View[clickable=true] <(2,3) FrameLayout <2 FrameLayout <<n FrameLayout[id="com.coolapk.market:id/ad_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13826359',
            'https://i.gkd.li/i/13827095',
          ],
        },
      ],
    },
    {
      key: 0,
      name: '分段广告-卡片广告',
      desc: '点击卡片右上角按钮->免广告-点击关闭->选择关闭原因-点击不感兴趣',
      quickFind: true,
      activityIds: [
        'com.coolapk.market.view.main.MainActivity', // 缺少快照
        'com.coolapk.market.view.base.SimpleAlphaActivity', // 缺少快照
        'com.coolapk.market.view.node.DynamicNodePageActivity',
        'com.coolapk.market.view.feed.FeedDetailActivityV8',
      ],
      rules: [
        {
          key: 1,
          name: '点击右上角x按钮',
          excludeMatches: [
            '[text="回复"] + [text="发布"]',
            '[text="创建收藏单"][visibleToUser=true]',
          ],
          matches: '[id="com.coolapk.market:id/close_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12707506',
            'https://i.gkd.li/i/12642094',
            'https://i.gkd.li/i/12642148',
            'https://i.gkd.li/i/12774771',
            'https://i.gkd.li/i/13257987',
            'https://i.gkd.li/i/14996359', // 避免误触
            'https://i.gkd.li/i/15159886', // 避免误触
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '点击[不感兴趣]/[关闭]',
          matches: '@[text="不感兴趣" || text="关闭"] <n * > [text*="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14959519',
            'https://i.gkd.li/i/14964859',
          ],
        },
        {
          preKeys: [1, 2],
          key: 3,
          name: '选择关闭原因-点击不感兴趣',
          matches: '@LinearLayout > TextView[text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12472633',
            'https://i.gkd.li/i/12655713',
            'https://i.gkd.li/i/12660759',
            'https://i.gkd.li/i/12706437',
          ],
        },
      ],
    },
    {
      key: 3,
      quickFind: true,
      name: '权限提示-通知提示',
      activityIds: 'com.coolapk.market.view.main.MainActivity',
      rules: '[text="去开启"] - [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/i/13296465',
    },
    {
      key: 4,
      name: '功能类-自动查看原图',
      desc: '查看图片时自动点击原图',
      quickFind: true,
      activityIds: 'com.coolapk.market.view.photo.PhotoViewActivity',
      rules: '[vid="load_source_button"][checked=false]',
      snapshotUrls: 'https://i.gkd.li/i/14913023',
    },
  ],
});
