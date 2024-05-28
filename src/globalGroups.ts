import { defineGkdGlobalGroups } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import { RawApp, RawAppGroup } from '@gkd-kit/api';
import { commonAppBlackList, systemAppWhiteList } from './globalDefaultApps';

const apps = await batchImportApps(`${import.meta.dirname}/apps`);

// 如果应用规则已有全局规则中的某一类的规则, 则在对应全局规则禁用此应用
function filterAppsByGroup(apps: RawApp[], groupNamePrefix: string): string[] {
  return apps
    .filter(
      (a) =>
        a.groups.filter((g: RawAppGroup) => g.name.startsWith(groupNamePrefix))
          .length > 0,
    )
    .map((a) => a.id);
}

// 设置单独禁用
const openDiabledAppIds = new Set([
  ...commonAppBlackList,
  ...filterAppsByGroup(apps, '开屏广告'),
]);
const updateDiabledAppIds = new Set([
  ...commonAppBlackList,
  'info.muge.appshare', // AppShare
  'com.coolapk.market', // 酷安
  ...filterAppsByGroup(apps, '更新提示'),
]);
const youngDiabledAppIds = new Set([
  ...commonAppBlackList,
  'xxx.pornhub.fuck', // JavDB
  'com.netease.cloudmusic', // 网易云音乐 全局规则在 https://i.gkd.li/i/14931708 误触
  'com.zhihu.android', // 知乎 全局规则在 https://i.gkd.li/i/14964990 误触
  'com.luna.music', // 汽水音乐 全局规则在 https://i.gkd.li/i/15124801 误触
  ...filterAppsByGroup(apps, '青少年模式'),
]);

// 设置系统软件单独启用
const openEnabledAppIds = new Set([
  ...systemAppWhiteList,
  'com.bbk.theme', // i 主题
  'com.bbk.appstore', // vivo应用商店
  'com.huawei.appmarket', // 华为应用市场
  'com.miui.player', //小米音乐
  'com.tencent.southpole.appstore', // 黑鲨应用市场
]);
const updateEnabledAppIds = new Set([...systemAppWhiteList]);
const youngEnabledAppIds = new Set([...systemAppWhiteList]);

export const orderList: number[] = [
  -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1,
];

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '开屏广告',
    order: orderList[0],
    actionMaximum: 2,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        quickFind: true,
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
      },
      {
        key: 1,
        matches:
          '[childCount=0][visibleToUser=true][((text*="跳过" || text*="跳過" || text~="(?is).*skip.*") && text.length<10) || id~="(?is).*tt_splash_skip_btn" || vid~="(?is).*skip.*" || (vid~="(?is).*count.*" && vid~="(?is).*down.*" && vid!~="(?is).*load.*" && vid!~="(?is).*time.*" && vid!~="(?is).*hour.*" && vid!~="(?is).*minute.*" && vid!~="(?is).*second.*" && vid!~="(?is).*add.*" && vid!~="(?is).*ead.*") || ((desc*="跳过" || desc*="跳過" || desc~="(?is).*skip.*") && desc.length<10)]',
      },
    ],
    apps: [...openDiabledAppIds]
      .map((id) => ({ id, enable: false }))
      .concat([...openEnabledAppIds].map((id) => ({ id, enable: true }))),
  },
  {
    key: 1,
    name: '更新提示',
    order: orderList[2],
    actionMaximum: 1,
    matchTime: 10000,
    resetMatch: 'app',
    rules: [
      {
        key: 0,
        matches: [
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][(text*="内测" || text*="测试版" || text*="新版" || text*="更新" || text*="升级" || text*="体验" || text*="內測" || text*="測試版" || text*="升級" || text*="體驗" || text*="Update" || text*="Upgrade" || text*="Experience") && text!*="自动" && text!*="自動" && (text!*="成功" && text!*="失败" && text!*="失敗" && (text!*="已" || text*="已知") && text!*="检查更新")]',
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][(((text*="立即" || text*="马上" || text*="并" || text*="现在" || text*="立刻" || text*="抢先" || text*="在线" || text*="提醒")&&(text*="更新" || text*="下载" || text*="安装" || text*="升级" || text*="查看" || text*="体验")) || text="更新" || text="下载" || text="安装" || text="升级" || text="确定" || text="好,升级") && text.length<6]',
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][text^="不再" || text$="再说" || text$="拒绝" || text$="再想想" || text^="忽略" || text^="暂不" || text^="放弃" || text^="取消" || text$="不要" || text$="再說" || text$="暫不" || text$="拒絕" || text^="稍后" || text$="Later" || text^="Ignore" || text^="Not now" || text^="Cancel" || vid^="close" || vid^="Close" || vid^="closeIv" || vid*="_close" || vid*="_Close" || vid$="close" || vid$="Close" || vid$="cancel" || vid$="Cancel" || vid$="cancle" || vid$="Cancle"]',
        ],
      },
    ],
    apps: [...updateDiabledAppIds]
      .map((id) => ({ id, enable: false }))
      .concat([...updateEnabledAppIds].map((id) => ({ id, enable: true }))),
  },
  {
    key: 2,
    name: '青少年模式',
    order: orderList[1],
    actionMaximum: 1,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    rules: [
      {
        key: 0,
        matches: [
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][((text*="青少年" || text*="未成年" || text*="儿童") && (text*="模式" || text*="守护")) && text.length<15 || ((desc*="青少年" || desc*="未成年" || desc*="儿童") && (desc*="模式" || desc*="守护")) && desc.length<15]',
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][(text*="知道了" || text*="关闭" || text*="我已知晓" || text*="已满") && text.length<15 || (desc*="知道了" || desc*="关闭" || desc*="我已知晓" || desc*="已满") && desc.length<15]',
        ],
      },
    ],
    apps: [...youngDiabledAppIds]
      .map((id) => ({ id, enable: false }))
      .concat([...youngEnabledAppIds].map((id) => ({ id, enable: true }))),
  },
]);
