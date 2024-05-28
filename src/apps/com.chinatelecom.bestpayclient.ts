import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinatelecom.bestpayclient',
  name: '翼支付',
  groups: [
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '权益页',
          activityIds: 'com.chinatelecom.bestpayclient.ui.MainActivity',
          quickFind: true,
          matches:
            'Image < @View[clickable=true][index=1] <<n Dialog <<n [id="com.chinatelecom.bestpayclient:id/best_h5_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13402692',
        },
        {
          key: 1,
          name: '首页1',
          activityIds: 'com.chinatelecom.bestpayclient.ui.MainActivity',
          quickFind: true,
          matches:
            '[id="com.chinatelecom.bestpayclient:id/iv_dialog_close_one"]',
          snapshotUrls: 'https://i.gkd.li/i/13455790',
        },
        {
          key: 2,
          name: '首页2',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          quickFind: true,
          matches:
            '[text="甜橙信用卡"] >2 View[childCount=2] > @Image[clickable=true][text!=null] <<n [id="com.chinatelecom.bestpayclient:id/h5_pc_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13626324',
        },
        {
          key: 3,
          name: '借贷页',
          activityIds: 'com.chinatelecom.bestpayclient.ui.MainActivity',
          quickFind: true,
          matches:
            '@View[clickable=true][text=""] <<n [id="com.chinatelecom.bestpayclient:id/best_h5_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13455929',
        },
        {
          key: 4,
          name: '信用卡页面',
          quickFind: true,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '[childCount=0] -2 @[clickable=true] <n View[childCount=3] <<n [vid="h5_pc_container"]',
          snapshotUrls: 'https://i.gkd.li/i/14603126',
        },
      ],
    },
    {
      key: 4,
      name: '悬浮窗小广告',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.chinatelecom.bestpayclient.ui.MainActivity',
      rules:
        '[id="com.chinatelecom.bestpayclient:id/best_h5_container"] View[childCount=2] > @View[clickable=true] +  View[clickable=true] > Image[text!=null]',
      snapshotUrls: 'https://i.gkd.li/i/13402711',
    },
    {
      key: 5,
      name: '年底积分活动弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
      rules: 'View > View[index=1][clickable=true][childCount=1] > Image',
      snapshotUrls: [
        'https://i.gkd.li/i/13543032',
        'https://i.gkd.li/i/13625037', //修改规则，避免在此误触
      ],
    },
  ],
});
