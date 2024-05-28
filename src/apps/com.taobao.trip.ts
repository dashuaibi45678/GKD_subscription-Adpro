import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
    id: 'com.taobao.trip',
    name: '飞猪旅行',
    groups: [
        {
            name: '开屏广告',
            key: 0,
            quickFind: true,
            actionMaximum: 1,
            order: -12,
            matchTime: 10000,
            resetMatch: 'app',
            rules: [
                {
                    matches: [
                        '[text*=\'跳过\'][text.length<10][visibleToUser=true]'
                    ],
                    snapshotUrls: [
                        'https://i.gkd.li/i/15446787'
                    ]
                }
            ]
        }
    ]
});

