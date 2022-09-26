/*
 * @Author: sfy
 * @Date: 2022-09-25 23:01:17
 * @LastEditors: sfy
 * @LastEditTime: 2022-09-26 21:39:30
 * @FilePath: /vul-sys/configs/interceptors.ts
 * @Description: update here
 */
import { InterceptorInterface, Action, Interceptor } from 'routing-controllers'
import { Service } from 'typedi'

@Interceptor()
@Service()
export class AutoAssignJSONInterceptor implements InterceptorInterface {
  intercept(action: Action, content: any): any {
    if (typeof content === 'object')
      return JSON.stringify(Object.assign(content))
    return JSON.stringify(content)
  }
}
