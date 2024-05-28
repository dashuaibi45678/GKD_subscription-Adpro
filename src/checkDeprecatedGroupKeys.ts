import { appDeprecatedKeys } from './appDeprecatedKeys';
import { RawApp } from '@gkd-kit/api';

export const checkDeprecatedGroupKeys = (apps: RawApp[]) => {
  apps.forEach((a) => {
    appDeprecatedKeys.forEach((d) => {
      if (a.id === d.id) {
        a.groups.forEach((g) => {
          if (d.deprecatedKeys.indexOf(g.key.valueOf()) !== -1) {
            console.error({
              configName: a.name,
              appId: a.id,
              groupName: g.name,
              groupKey: g.key,
            });
            throw new Error('invalid deprecated group key');
          }
        });
      }
    });
  });
};
