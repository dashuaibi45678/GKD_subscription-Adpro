import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mymoney',
  name: '随手记',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      desc: '点击跳过',
      actionCdKey: 0,
      actionMaximumKey: 0,
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
          matches:
            '@View[clickable=true] <3 * <2 * < FrameLayout[id="com.mymoney:id/external_ad_content"]',
          snapshotUrls: 'https://i.gkd.li/i/13855760',
        },
      ],
    },
  ],
});
