import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
    id: 'com.cjtecapp.javaide',
    name: 'java编辑器IDE',
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
                        '[name=\'android.view.View\'][visibleToUser=true][width=110][height=110]'
                    ],
                    snapshotUrls: [
                        'https://i.gkd.li/i/15446936'
                    ]
                }
            ]
        },
        {
            name: '开屏广告（测试）',
            key: 1,
            quickFind: true,
            actionMaximum: 1,
            order: -12,
            matchTime: 10000,
            resetMatch: 'app',
            rules: [
                {
                    matches: [
                        '@View <3 FrameLayout <2 FrameLayout < FrameLayout < [vid=\'fl_third_ad\']'
                    ],
                    snapshotUrls: [
                        'https://i.gkd.li/i/15446936'
                    ]
                }
            ]
        }
    ]
});