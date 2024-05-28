import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fan.app',
  name: '十六番旅行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      actionMaximumKey: 0,
      actionCdKey: 0,
      rules: [
        {
          key: 0,
          quickFind: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
        },
        {
          key: -1,
          matches:
            '[childCount=0][visibleToUser=true][(text.length<10 && (text*="跳过" || text*="跳過" || text*="skip" || text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || desc*="跳过" || desc*="skip" || (vid*="count" && vid*="down" && vid!*="countdown" && vid!*="load" && vid!*="add" && vid!*="ead" && vid!*="time")]',
        },
        {
          key: 1,
          matches: '[vid="LinearLayoutSplAd"] >4 View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14548642',
        },
      ],
    },
    {
      key: 1,
      name: '综合广告-广告卡片',
      activityIds: [
        'com.mvvm.view.LazyMapStrategyActivity_TengXun',
        'com.mvc.activity.HomepageActivity2',
      ],
      rules: [
        {
          key: 0,
          matches: '[desc^="dislike"] > View',
          snapshotUrls: 'https://i.gkd.li/i/13258021',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13258015',
        },
        {
          key: 2,
          matches: '@Image < View -2 View >2 View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13258018',
        },
        {
          key: 3,
          matches:
            '[vid="relativeLayout3AdContainer"] >7 [desc^="close-fill"] > View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14548514',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知提示',
      desc: '自动点击“以后再说”',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: '[id="com.fan.app:id/tv_nj_later"]',
      snapshotUrls: 'https://i.gkd.li/i/13601734',
    },
  ],
});
