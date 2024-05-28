import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'me.ele',
  name: '饿了么',
  groups: [
    {
      key: 1,
      name: '权限提示-更新权限',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: ['[text*="更新应用版本"]', '[text="取消"]'],
      snapshotUrls: [
        'https://i.gkd.li/i/12650280',
        'https://i.gkd.li/i/13206819',
      ],
    },
    {
      key: 2,
      name: '全屏广告-红包弹窗',
      rules: [
        {
          key: 0,
          name: '红包弹窗1',
          quickFind: true,
          activityIds: [
            'me.ele.component.pops2.Pops2MistDialog',
            'me.ele.component.webcontainer.view.AppUCWebActivity',
            'me.ele.application.ui.Launcher.LauncherActivity',
            'me.ele.application.ui.GeneralSettingsActivity',
            'me.ele.shopdetailv2.ShopDetailV2Activity',
            'me.ele.foodchannel.page.WMChannelNativeActivity',
          ],
          matches:
            'ViewGroup[childCount=2] > @ImageView[index=1][clickable=true] <<n [id="me.ele:id/id_magex_mistview"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12650238',
            'https://i.gkd.li/i/13294893',
            'https://i.gkd.li/i/13331361',
            'https://i.gkd.li/i/13362974',
            'https://i.gkd.li/i/13376008',
            'https://i.gkd.li/i/13710581',
            'https://i.gkd.li/i/15148480',
          ],
        },
        {
          key: 1,
          name: '红包弹窗2',
          activityIds: 'me.ele.newretail.pack.ui.activity.PackActivity',
          matches: '[desc$="今日红包"] +(n) [desc$="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12650713',
        },
        {
          key: 2,
          name: '红包弹窗3',
          quickFind: true,
          matches:
            '@ViewGroup[index=2][clickable=true] <3 ViewGroup < ViewGroup < ViewGroup[vid="id_magex_mist_view"]',
          exampleUrls:
            'https://m.gkd.li/57941037/25425b3a-309d-464d-bbb5-091715675fcd',
          snapshotUrls: 'https://i.gkd.li/i/14472929',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-活动弹窗',
      quickFind: true,
      rules: [
        {
          key: 1,
          activityIds: [
            'me.ele.component.pops2.Pops2MistDialog',
            'me.ele.newbooking.checkout.entrypoint.WMCheckoutActivity',
            'me.ele.application.ui.Launcher.LauncherActivity',
            'me.ele.android.emagex.container.EMagexActivity',
          ],
          matches:
            '@ImageView[clickable=true] <2 [vid="id_magex_mistview"][childCount=2]',
          snapshotUrls: [
            'https://i.gkd.li/i/12726709',
            'https://i.gkd.li/i/13476719',
            'https://i.gkd.li/i/13523508',
            'https://i.gkd.li/i/13685037',
            'https://i.gkd.li/i/14050401',
          ],
        },
        {
          key: 2,
          activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
          matches:
            '[id="me.ele:id/fl_render_e_shop"] + FrameLayout >n ViewGroup[childCount=6] > View[index=5]',
          snapshotUrls: [
            'https://i.gkd.li/i/13476611',
            'https://i.gkd.li/i/13523541',
          ],
        },
        {
          key: 3,
          activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
          matches: 'ViewGroup[clickable=true] - TextView[text="放弃"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13710574',
            'https://i.gkd.li/i/13710591',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '付款后广告弹窗',
      quickFind: true,
      activityIds: 'me.ele.component.pops2.TransparentAppWebActivity',
      rules: 'bb Button[text="关闭"]',
      snapshotUrls: 'https://i.gkd.li/i/13205301',
    },
    {
      key: 6,
      name: '吃货卡续费弹窗',
      quickFind: true,
      activityIds: 'me.ele.component.webcontainer.view.AppUCWebActivity',
      rules: '@View + View >2 [text="买校园版超级吃货卡"]',
      snapshotUrls: 'https://i.gkd.li/i/13295007',
    },
    {
      key: 7,
      name: '局部广告-首页底部浮窗广告',
      quickFind: true,
      activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
      rules:
        '@ViewGroup[childCount=0][clickable=true] - ViewGroup[childCount=3] <<n [id="me.ele:id/id_magex_mist_view"]',
      snapshotUrls: 'https://i.gkd.li/i/13710588',
    },
    {
      key: 8,
      name: '权限提示-定位权限',
      desc: '自动点击X',
      quickFind: true,
      rules: [
        {
          key: 0,
          activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
          matches: '[text="去开启"] + [id="me.ele:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/13710588',
        },
        {
          key: 1,
          activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
          matches: '[text="去开启"] + [id="me.ele:id/close_tips"]',
          snapshotUrls: 'https://i.gkd.li/i/13710585',
        },
      ],
    },
    {
      key: 9,
      quickFind: true,
      name: '通知提示-获取订单信息通知',
      desc: '点击X',
      rules: [
        {
          activityIds: 'me.ele.message.ui.PushMessageGuideActivity',
          matches:
            '@View[visibleToUser=true] < * <2 [id="me.ele:id/frame_bottom_bg"]',
          snapshotUrls: 'https://i.gkd.li/i/13931205',
        },
      ],
    },
    {
      key: 10,
      name: '全屏广告-吃货卡低价专享弹窗',
      desc: '点击x',
      rules: [
        {
          activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
          matches:
            '[vid="layoutFloat"] >3 [vid="id_magex_mist_view"] >3 ViewGroup[index=2][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/101449500/4efc22d1-508e-4b7a-a1c0-efd4e1637277',
          snapshotUrls: 'https://i.gkd.li/i/14473000',
        },
      ],
    },
    {
      key: 11,
      name: '评价提示-底部调研邀请卡片',
      desc: '点击关闭',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          activityIds: 'me.ele.foodchannel.page.WMChannelNativeActivity',
          matches: [
            '[text*="小调研"]',
            '[vid="iv_cancel"][visibleToUser=true]',
          ],
          exampleUrls:
            'https://m.gkd.li/57941037/350d8f4d-8ab0-4572-8ff0-450ab4729d53',
          snapshotUrls: 'https://i.gkd.li/i/14630370',
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-券包限量抢弹窗',
      activityIds: 'me.ele.pha.shell.ui.ElePhaActivity',
      rules: 'View >2 View[childCount=2] > @View[clickable=true] > Image',
      exampleUrls:
        'https://m.gkd.li/101449500/a7264d48-cdf6-4f6c-851c-3b6f94f71405',
      snapshotUrls: 'https://i.gkd.li/i/14740515',
    },
  ],
});
