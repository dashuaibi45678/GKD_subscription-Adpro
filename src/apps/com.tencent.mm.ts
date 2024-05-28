import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '分段广告-朋友圈广告',
      desc: '点击广告卡片右上角,直接关闭/出现菜单,确认关闭',
      activityIds: [
        'com.tencent.mm.plugin.sns.ui.SnsTimeLineUI',
        'com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI',
      ],
      exampleUrls:
        'https://github.com/gkd-kit/subscription/assets/38517192/c9ae4bba-a748-4755-b5e4-c7ad3d489a79',
      rules: [
        {
          key: 0,
          name: '点击广告卡片右上角',
          matches:
            'RelativeLayout >5 LinearLayout[childCount=2] > TextView[text!=null] + LinearLayout[visibleToUser=true][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13000395',
            'https://i.gkd.li/i/12905837',
            'https://i.gkd.li/i/13791200',
            'https://i.gkd.li/i/14647413',
          ],
        },
        {
          key: 1,
          quickFind: true,
          position: {
            left: 'width * 0.9223',
            top: 'width * 0.0349',
          },
          excludeMatches:
            'RelativeLayout >5 LinearLayout[childCount=2] > TextView[text!=null] + LinearLayout[visibleToUser=true][clickable=true]',
          matches: '@LinearLayout >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14783802',
        },
        // 预留key
        // 第二段
        {
          preKeys: [0],
          key: 25,
          name: '点击[关闭]',
          quickFind: true,
          matches: '[text^="关闭"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12907642', // text="关闭该广告"
            'https://i.gkd.li/i/13926578', // text="关闭广告"
          ],
        },
        {
          preKeys: [0],
          key: 26,
          name: '点击[Close]',
          quickFind: true,
          matches: '[text*="Close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14207480',
            'https://i.gkd.li/i/15137016',
          ],
        },
        {
          preKeys: [0],
          key: 27,
          name: '点击[關閉此廣告]',
          quickFind: true,
          matches: '[text="關閉此廣告"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13791202',
        },
        {
          preKeys: [0, 1],
          key: 28,
          name: '点击[关闭该广告]',
          quickFind: true,
          matches:
            '@LinearLayout[index=1][clickable=true] <2 * < * - [text*="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12642584',
            'https://i.gkd.li/i/14647839',
            'https://i.gkd.li/i/14783820',
          ],
        },
        {
          preKeys: [0],
          key: 29,
          name: '点击[Close the ad]',
          quickFind: true,
          matches: '@LinearLayout[clickable=true] > [text*="Close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12905838',
            'https://i.gkd.li/i/15284966',
          ],
        },
        // 预留key
        // 第三段
        {
          preKeys: [28],
          key: 50,
          name: '点击[关闭]',
          matches: '[text*="关闭"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12663984',
            'https://i.gkd.li/i/14647940',
            'https://i.gkd.li/i/14783534',
          ],
        },
        {
          preKeys: [29],
          key: 51,
          name: '点击"Close"',
          matches: '[text="Close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12905846',
        },
        // 预留key
        // 第四段
        {
          preKeys: [50],
          key: 75,
          name: '点击[确认]',
          matches: '[text="确认"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14647940',
        },
      ],
    },
    {
      // Key1,2,3,4,11 均为授权类的规则

      key: 1,
      name: '功能类-电脑微信快捷自动登录',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: [
        '.plugin.webwx.ui.ExtDeviceWXLoginUI',
        'com.tencent.mm.ui.LauncherUI',
      ],
      rules: 'TextView[text="取消登录"] - Button[text="登录"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13522625', // activityIds: 'com.tencent.mm.plugin.webwx.ui.ExtDeviceWXLoginUI'
        'https://i.gkd.li/i/13522577', // activityIds: 'com.tencent.mm.ui.LauncherUI'
      ],
    },
    {
      key: 2,
      name: '功能类-自动授权登录',
      desc: '自动允许使用头像昵称等',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: [
        'com.tencent.mm.plugin.base.stub.UIEntryStub',
        'com.tencent.mm.ui.LauncherUI',
        'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
      ],
      rules: [
        {
          matches: ['[text^="获取你的"]', '[text="允许"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/12663602',
            'https://i.gkd.li/i/13065462',
            'https://i.gkd.li/i/15271716',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '功能类-微信读书网页版扫码登录自动授权',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
      rules: [
        {
          matches: '[text="微信读书网页版"] +3 Button[text="登 录"]',
          snapshotUrls: 'https://i.gkd.li/i/12506197',
        },
        {
          matches: [
            '[text="登录成功"]',
            '[id="com.tencent.mm:id/g1"][desc="返回"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/12506201',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-微信红包自动领取',
      desc: '自动领取私聊红包,群聊红包',
      exampleUrls:
        'https://github.com/gkd-kit/subscription/assets/38517192/32cfda78-b2e1-456c-8d85-bfb2bc4683aa',
      rules: [
        {
          name: '从红包结算界面返回',
          preKeys: [1, 2],
          activityIds: [
            'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyBeforeDetailUI',
            'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyDetailUI',
          ],
          matches: 'ImageView[desc="返回"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12567696',
            'https://i.gkd.li/i/14151190',
          ],
        },
        {
          key: 1,
          name: '点击红包-开',
          activityIds:
            'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI',
          // Button[desc="开"] 会在出现金币动画时会消失
          matches: 'ImageButton[desc="开"] + Button[desc="开"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12567697',
            'https://i.gkd.li/i/12567698', // 额外增加,金币动画的快照,规则不在这个快照上运行
          ],
        },
        {
          key: 2,
          name: '点击别人发的红包',
          activityIds: 'com.tencent.mm.ui.LauncherUI',
          // 第一个 LinearLayout[childCount=1] 区分是自己发的红包还是别人发的
          // 第二个 LinearLayout[childCount=1] 区分这个红包是否被领取过
          matches:
            'LinearLayout[childCount=1] >5 LinearLayout[childCount=1] - ImageView < LinearLayout + View + RelativeLayout > TextView[text="微信红包"][id!=null]',
          snapshotUrls: 'https://i.gkd.li/i/12567637',
        },
      ],
    },
    {
      key: 29,
      name: '分段广告-订阅号消息页面-推荐阅读',
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
      rules: [
        {
          key: 0,
          matches:
            'View > Button > View[desc$="推​荐​"] > ImageView[index=1][clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/101449500/5b815528-1ca2-4016-930e-a3cfb4e5e7ea',
          snapshotUrls: 'https://i.gkd.li/i/14548701',
        },
        {
          key: 1,
          preKeys: 0,
          matches: '[desc="不看此类内容"]',
          snapshotUrls: 'https://i.gkd.li/i/14549566',
        },
        {
          key: 2,
          preKeys: 1,
          matches: '[desc="确定"]',
          snapshotUrls: 'https://i.gkd.li/i/14549567',
        },
      ],
    },
    {
      key: 11,
      name: '功能类-网页版文件传输助手扫码自动授权',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: 'com.tencent.mm.ui.LauncherUI',
      rules: '[text="打开网页版文件传输助手"] + * > Button[text="打开"]',
      snapshotUrls: 'https://i.gkd.li/i/12793745',
    },
    {
      key: 7,
      name: '功能类-自动选中发送原图',
      desc: '图片和视频选择器-自动选中底部中间的发送原图',
      activityIds: [
        'com.tencent.mm.plugin.gallery.ui.AlbumPreviewUI',
        'com.tencent.mm.plugin.gallery.ui.ImagePreviewUI',
      ],
      rules: [
        {
          key: 1,
          matches: '@ImageButton[desc="未选中,原图,复选框"] + [text="原图"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12686641', // 未选中
            'https://i.gkd.li/i/12840865', // 未选中
            'https://i.gkd.li/i/12686640', // 已选中
            'https://i.gkd.li/i/14654129', // 不能对text使用quickFind
          ],
        },
      ],
    },
    {
      key: 9,
      name: '功能类-自动查看原图',
      desc: '自动点击底部左侧[查看原图（*M）]按钮',
      activityIds: 'com.tencent.mm.ui.chatting.gallery.ImageGalleryUI',
      rules: 'Button[text^="查看原图"][clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/i/13523031',
        'https://i.gkd.li/i/14654029', // 不能对text使用quickFind
      ],
    },
    {
      key: 10,
      name: '开屏广告-微信小程序',
      quickFind: true,
      matchTime: 10000,
      activityIds: [
        'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
        'com.tencent.mm.plugin.appbrand.launching.AppBrandLaunchProxyUI',
      ],
      rules: [
        {
          actionDelay: 800, // 过早点击首次大概率跳不过
          matches: [
            '[text="广告"][visibleToUser=true]',
            '[text="跳过"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12785183',
            'https://i.gkd.li/i/13306883',
            'https://i.gkd.li/i/13407275',
            'https://i.gkd.li/i/15108441',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '全屏广告-小程序-弹窗广告',
      desc: '点击右上角x',
      rules: [
        {
          key: 0,
          activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
          matches:
            '[text!="" || text!=null] <<n FrameLayout[childCount<=5] > FrameLayout[childCount>=3 && childCount<=6] + FrameLayout[childCount=2] > TextView + FrameLayout > @FrameLayout[childCount=1] > ImageView',
          exampleUrls:
            'https://m.gkd.li/101449500/1c7e1778-c5a2-426b-8beb-1b76893b6397',
          snapshotUrls: [
            'https://i.gkd.li/i/14111422',
            'https://i.gkd.li/i/14111432',
            'https://i.gkd.li/i/13459614',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '分段广告-小程序-内部广告',
      activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
      rules: [
        {
          key: 0,
          name: '【广告】0',
          quickFind: true,
          matches:
            'FrameLayout[childCount=3] >n FrameLayout > FrameLayout > [text="广告"][visibleToUser=true]',
          excludeMatches:
            'FrameLayout > TextView + FrameLayout > TextView[text="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13199282', // [childCount=3]避免在点击展开菜单后重复点击
            'https://i.gkd.li/i/13407275', // excludeMatches中添加key10中规则，避免误触
          ],
        },
        {
          key: 1,
          name: '【广告】1',
          matches: 'View > * - [text="广告"]',
          excludeMatches: '[text="接龙管家"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13378208',
            'https://i.gkd.li/i/14123141',
            'https://i.gkd.li/i/14385715', //在接龙管家误触，暂未想到办法修复
          ],
        },
        {
          preKeys: [0, 1],
          key: 11,
          name: '点击原因【不感兴趣】',
          matches: '[text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13200044',
        },
        {
          preKeys: 11,
          key: 12,
          name: '点击原因【与我无关】',
          matches: '[text="与我无关"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13200048',
        },
      ],
    },
    {
      key: 17,
      name: '青少年模式',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.tencent.mm.plugin.finder.ui.',
            'com.tencent.mm.ui.LauncherUI',
          ],
          matches: ['[text*="青少年模式"]', '[text="我知道了"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/13538145',
            'https://i.gkd.li/i/13575195',
            'https://i.gkd.li/i/14735456',
            'https://i.gkd.li/i/14896723',
          ],
        },
      ],
    },
    {
      key: 18,
      name: '功能类-青少年模式自动点击验证密码',
      desc: '点击“验证密码”以申请临时访问',
      actionMaximum: 1,
      resetMatch: 'activity',
      matchTime: 10000,
      rules: [
        {
          key: 0,
          activityIds:
            'com.tencent.mm.plugin.teenmode.ui.AuthorizationRequestUI',
          matches: '@LinearLayout[childCount=2] > [text="验证密码"]',
          snapshotUrls: 'https://i.gkd.li/i/13588338',
        },
        {
          key: 1,
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches: ['View[text="申请今天临时访问"]', 'View[desc="验证密码"]'],
          snapshotUrls: 'https://i.gkd.li/i/13631987',
        },
      ],
    },
    {
      key: 19,
      name: '功能类-订阅号-展开更早的消息',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds:
            'com.tencent.mm.plugin.brandservice.ui.timeline.BizTimeLineUI',
          matches: '@[clickable=true] > [text="展开更早的消息"]',
          snapshotUrls: 'https://i.gkd.li/i/13790550',
        },
        {
          key: 1,
          matches: '[desc="展开更早的消息"]',
          snapshotUrls: 'https://i.gkd.li/i/13790949',
        },
      ],
    },
    {
      key: 21,
      name: '功能类-付款后自动点击完成/返回商家',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.tencent.mm.framework.app.UIPageFragmentActivity',
          matches:
            '[vid="kinda_button_impl_wrapper"][desc="完成" || desc="返回商家"]',
          exampleUrls:
            'https://m.gkd.li/57941037/a5177d9d-6745-443f-baf5-af57153430d8',
          snapshotUrls: [
            'https://i.gkd.li/i/14399355',
            'https://i.gkd.li/i/14662147',
            'https://i.gkd.li/i/14532946', // 避免在此页面误触
          ],
        },
      ],
    },
    {
      key: 26,
      name: '功能类-解锁 Windows 微信',
      desc: '点击[解锁]',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.tencent.mm.plugin.webwx.ui.WebWXUnlockUI',
          matches: '[text="解锁"]',
          exampleUrls:
            'https://m.gkd.li/57941037/85bb6dcd-0d04-46c1-af14-6e4b57ff4dca',
          snapshotUrls: 'https://i.gkd.li/i/14490116',
        },
      ],
    },
    {
      key: 27,
      name: '功能类-自动语音转文字',
      desc: '自动点击语音转文字',
      activityIds: 'com.tencent.mm.ui.LauncherUI',
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: '@* > [text="转文字"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14497389', // 长按转文字
            'https://i.gkd.li/i/14538322', // 语音条侧快捷转文字
          ],
        },
      ],
    },
    {
      key: 30,
      name: '分段广告-视频号-评论区广告',
      desc: 'GKD1.7.0可用',
      activityIds: 'com.tencent.mm.plugin.finder.ui.FinderHomeAffinityUI',
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: '@FrameLayout >2 [text="广告"]',
          exampleUrls:
            'https://m.gkd.li/101449500/341ffb52-0aeb-4c35-aa72-8c96930e6d23',
          snapshotUrls: 'https://i.gkd.li/i/14549072',
        },
        {
          key: 1,
          preKeys: 0,
          position: {
            left: 'width*0.8125',
            top: 'width*0.1875',
          },
          matches: '@ViewGroup >3 [text="广告"]',
          exampleUrls:
            'https://m.gkd.li/101449500/f2dcd634-96e3-4532-9b24-7c750ffd0263',
          snapshotUrls: 'https://i.gkd.li/i/14549071',
        },
      ],
    },
    {
      key: 31,
      name: '全屏广告-文档页面-腾讯文档APP弹窗',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches:
            '@TextView[clickable=true] + * > [text^="使用 APP"] <<n [id="android:id/content"]',
          exampleUrls:
            'https://m.gkd.li/57941037/2228f99e-e0a1-4915-864f-d60e3d8580a6',
          snapshotUrls: 'https://i.gkd.li/i/14533286',
        },
      ],
    },
    {
      key: 32,
      name: '权限提示-权限申请弹窗',
      desc: '点击取消',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.tencent.mm.pluginsdk.permission.PermissionActivity',
          matches: ['[text="权限申请"]', '[text="取消"]'],
          exampleUrls:
            'https://m.gkd.li/57941037/43632b72-d389-4fe7-9708-dac78e900679',
          snapshotUrls: 'https://i.gkd.li/i/14645385',
        },
      ],
    },
    {
      key: 33,
      name: '青少年模式-视频号-青少年模式弹窗',
      quickFind: true,
      activityIds: 'com.tencent.mm.plugin.finder.ui.FinderMultiTaskRouterUI',
      rules: '[text*="青少年模式"] +3 [text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/i/14735456',
    },
    {
      key: 36,
      name: '功能类-付款时自动点击[支付]',
      quickFind: true,
      actionMaximum: 1,
      activityIds: 'com.tencent.mm.framework.app.UIPageFragmentActivity',
      rules: [
        {
          key: 0,
          matches: '[vid="kinda_button_impl_wrapper"][desc="立即支付"]',
          exampleUrls:
            'https://m.gkd.li/57941037/13fd1e89-6d75-4efe-90d6-91687de8c9b1',
          snapshotUrls: 'https://i.gkd.li/i/15144571',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[vid="kinda_button_impl_wrapper"][desc="支付"]',
          exampleUrls:
            'https://m.gkd.li/57941037/69380aa0-e6d2-4ea4-8ee7-6a1e45889e6c',
          snapshotUrls: 'https://i.gkd.li/i/15144570',
        },
      ],
    },
  ],
});
