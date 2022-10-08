/*
 * @Author: sfy
 * @Date: 2022-09-28 21:40:50
 * @LastEditors: sfy
 * @LastEditTime: 2022-09-28 21:51:41
 * @FilePath: /vul-sys/app/services/module.service.ts
 * @Description: update here
 */
import { Service } from 'typedi'
import prisma from '../helpers/client'
import { ModuleParamsType } from '../types/module.type'
@Service()
export class ModuleService {
  async getModuleList(namespaceName:string) {
    const moduleList = await prisma.module.findMany({
      where: {
        namespaceName
      },
    })
    return moduleList
  }

  async addModule(data:ModuleParamsType) {
    try {
      const module = await prisma.module.create({
        data,
      })
      return module
    } catch(e) {
      return false
    }
  }

  async getModule(moduleName:string) {
    try {
      const moduleInfo = await prisma.module.findUnique({
        where: {
          moduleName,
        },
      })
      return moduleInfo
    } catch(e) {
      return false
    }
  }

  async editModule(data:ModuleParamsType) {
    try {
      const module = await prisma.module.update({
        where: {
          moduleName: data.moduleName,
        },
        data,
      })
      return module
    } catch(e) {
      return false
    }
  }

  async delModule(moduleName:string) {
    try {
      const moduleInfo = await prisma.module.delete({
        where: {
          moduleName,
        },
      })
      return moduleInfo
    } catch(e) {
      return false
    }
  }
}