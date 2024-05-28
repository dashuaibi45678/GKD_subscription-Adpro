import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youku.phone',
  name: '优酷视频',
  groups: [
    {
      key: 1,
      name: '综合广告-视频播放暂停时的广告',
      quickFind: true,
      activityIds: 'com.youku.ui.activity.DetailActivity',
      rules: [
        {
          key: 0,
          name: '全屏广告、局部广告-xadSDK',
          matches: '[vid="layout_ad_float"] >n [vid="xadsdk_pause_ad_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14321469', //局部广告
            'https://i.gkd.li/i/14321401', //全屏广告
          ],
        },
        {
          key: 1,
          name: '局部广告-右下角-广告',
          matches: '[vid="ad_content"] +2 [vid="novelad_corner_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14321461',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-视频推荐弹窗',
      quickFind: true,
      activityIds: 'com.youku.vip.wrapper.VipHomeActivity',
      rules: '[id="com.youku.phone:id/closeView"][desc="关闭弹层"]',
      snapshotUrls: 'https://i.gkd.li/i/12701029',
    },
    {
      key: 4,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '历史记录/搜索页面广告',
          quickFind: true,
          activityIds: [
            'com.youku.android.youkuhistory.activity.HistoryActivity',
            'com.soku.searchsdk.activity.SearchActivity',
          ],
          matches: '[vid="novel_banner_ad_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/7a160f41-b101-40dc-b875-533623228406',
          snapshotUrls: [
            'https://i.gkd.li/i/14670383',
            'https://i.gkd.li/i/14680702',
          ],
        },
      ],
    },
  ],
});
