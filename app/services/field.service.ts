/*
 * @Author: sfy
 * @Date: 2022-09-28 21:41:19
 * @LastEditors: sfy
 * @LastEditTime: 2022-09-28 21:41:19
 * @FilePath: /vul-sys/app/services/field.service.ts
 * @Description: update here
 */
import { Service } from 'typedi'
import prisma from '../helpers/client'
import { FieldParamsType } from '../types'
@Service()
export class FieldService {
  async getModuleFieldList(moduleName:string) {
    const moduleList = await prisma.module.findMany({
      where: {
        moduleName
      },
    })
    return moduleList
  }

  async addModuleField(data: FieldParamsType) {
    try {
      const field = await prisma.field.create({
        data,
      })
      console.log(field);
      
    } catch(e) {
      console.log(e, 'eee');
      
    }
    
  }
}