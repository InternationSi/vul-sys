/*
 * @Author: sfy
 * @Date: 2022-09-25 23:01:17
 * @LastEditors: sfy
 * @LastEditTime: 2022-09-26 21:47:41
 * @FilePath: /vul-sys/configs/routing.options.ts
 * @Description: update here
 */
import { RoutingControllersOptions } from 'routing-controllers'
import * as controllers from 'app/controllers'
import * as middlewares from './routing.middlewares'
import * as interceptors from './interceptors'
import { dictToArray } from './utils'

export const routingConfigs: RoutingControllersOptions = {
  controllers: dictToArray(controllers),

  middlewares: dictToArray(middlewares),

  interceptors: dictToArray(interceptors),

  routePrefix: '/metaData',

  validation: true,
}
