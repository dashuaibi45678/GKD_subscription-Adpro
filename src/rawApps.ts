import { RawApp, RawAppGroup } from '@gkd-kit/api';
import categories from './categories';
import { batchImportApps } from '@gkd-kit/tools';
import { orderList } from './globalGroups';

const apps = await batchImportApps(`${import.meta.dirname}/apps`);
const rawApps: RawApp[] = [];

apps.forEach((appConfig) => {
  appConfig.groups?.forEach((g: RawAppGroup) => {
    for (let i of categories) {
      if (g.name.startsWith(i.name)) {
        if (!g.name.startsWith(categories[0].name)) g.enable = false;
        else g.order = orderList[categories[0].key];

        if (g.name.startsWith(categories[1].name))
          g.order = orderList[categories[1].key];

        if (g.name.startsWith(categories[2].name))
          g.order = orderList[categories[2].key];

        return;
      }
    }
    g.enable = false;
    g.name = `${categories[11].name}-${g.name}`;
  });
  rawApps.push(appConfig);
});

export default rawApps;
