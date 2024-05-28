import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
    id: 'com.jiongji.andriod.card',
    name: '百词斩',
    groups: [
        {
            name: '开屏后第一个广告',
            key: 0,
            quickFind: true,
            actionMaximum: 1,
            order: -12,
            matchTime: 10000,
            resetMatch: 'app',
            rules: [
                {
                    matches: [
                        '[id=\'com.jiongji.andriod.card:id/hy\'][vid=\'hy\'][visibleToUser=true]'
                    ],
                    snapshotUrls: [
                        'https://i.gkd.li/i/15449929'
                    ]
                }
            ]
        },
        {
            name: '开屏广告',
            key: 1,
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
                        'https://i.gkd.li/i/15463621'
                    ]
                }
            ]
        }
    ]
});