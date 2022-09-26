/*
 * @Author: sfy
 * @Date: 2022-09-26 21:30:09
 * @LastEditors: sfy
 * @LastEditTime: 2022-09-26 21:41:24
 * @FilePath: /vul-sys/app/helpers/resposeStruct.ts
 * @Description: update here
 */

export const Response = (code:number, data: any, msg:string) => {
  let sucess = true
  if(code >= 200  && code < 300) {
    sucess = true
  } else {
    sucess = false
  }
  return {
    code,
    sucess,
    data,
    msg
  }
}