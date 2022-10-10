import { Service } from 'typedi'
import prisma from '../helpers/client'
import { RecordParamsType } from '../types'
@Service()
export class RecordService {
  async getModuleRecordList(moduleName:string) {
    const moduleList = await prisma.record.findMany({
      where: {
        moduleName
      },
    })
    return moduleList
  }

  async getModuleRecord(id:number) {
    const moduleList = await prisma.record.findUnique({
      where: {
        id,
      },
    })
    return moduleList
  }

  async addModuleRecord(data:RecordParamsType) {
    try {
      const module = await prisma.record.create({
        data,
      })
      return module
    } catch(e) {
      return false
    }
  }

  async editModuleRecord(data: RecordParamsType) {
    try {
      const field = await prisma.record.update({
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

  async delModuleRecord(id:number) {
    try {
      const field = await prisma.record.delete({
        where: {
          id,
        },
      })
      return field
    } catch(e) {
      return false
    }
  }
}