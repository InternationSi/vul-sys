/*
 * @Author: sfy
 * @Date: 2022-09-25 23:01:17
 * @LastEditors: sfy
 * @LastEditTime: 2022-09-26 23:07:32
 * @FilePath: /vul-sys/app/services/namespace.service.ts
 * @Description: update here
 */
import { Service } from 'typedi'
import { Prisma } from '@prisma/client'
import prisma from '../helpers/client'
import type {NsParamsType} from '../types'
@Service()
export class NameSpaceService {
  async getList() {
    return prisma.nameSpace.findMany()
  }
  async addNs(ns:NsParamsType) {
    const {namespacesName,label,describe} = ns
    const nsList = await prisma.nameSpace.findMany({
      where: {
        namespacesName,
      },
    })
    console.log(nsList, 'nsList');
    if(nsList.length >= 1) {
      return null
    }
    const newNs = await prisma.nameSpace.create({
      data: {
        namespacesName,
        label,
        describe,
      },
    })
    return newNs    
  }
}
