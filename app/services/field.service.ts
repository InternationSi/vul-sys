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
    const fieldList = await prisma.field.findMany({
      where: {
        moduleName
      },
    })
    return fieldList
  }

  async addModuleField(data: FieldParamsType) {
    try {
      const field = await prisma.field.create({
        data,
      })
      return field
    } catch(e) {
      return false
    }
  }

  async editModuleField(data: FieldParamsType) {
    try {
      const field = await prisma.field.update({
        where: {
          id:data.id
        },
        data,
      })
      return field
    } catch(e) {
      return false
    }
  }

  async delModuleField(data:FieldParamsType) {
    try {
      const field = await prisma.field.delete({
        where: {
          id:data.id
        },
      })
      return field
    } catch(e) {
      return false
    }
  }

}