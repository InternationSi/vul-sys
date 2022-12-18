/*
 * @Author: sfy
 * @Date: 2022-12-17 23:09:28
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-17 23:58:14
 * @FilePath: /showcase/config/config.default.ts
 * @Description: update here
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';


export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1671289738416_2276';


  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
