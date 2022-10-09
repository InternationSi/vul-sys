/*
 * @Author: sfy
 * @Date: 2022-09-25 23:01:17
 * @LastEditors: sfy
 * @LastEditTime: 2022-09-28 21:49:47
 * @FilePath: /vul-sys/app/controllers/namespace.controller.ts
 * @Description: update here
 */
import {
  BadRequestError,
  Post,
  JsonController,
  Body,
  Get,
  Put,
  Delete,
  QueryParams,
} from 'routing-controllers'
import { NameSpaceService } from '../services'
import { Service } from 'typedi'
import { Response } from '../helpers/resposeStruct'
import type { NsParamsType } from '../types'

@JsonController()
@Service()
export class SessionsController {
  constructor(private nsService: NameSpaceService) {}

  @Get('/namespaces')
  async getNamespacesList() {
    const namespaces = await this.nsService.getList()
    return Response(200, namespaces, '查询成功')
  }

  @Post('/namespaces')
  async addNmaesoace(@Body() ns: NsParamsType) {
    const result = await this.nsService.addNs(ns)
    if (result) {
      return Response(200, result, '添加成功')
    }
    return Response(200, null, 'namespace已经存在')
  }

  @Put('/namespaces')
  async editNmaesoace(@Body() ns: NsParamsType) {
    const result = await this.nsService.editNs(ns)
    if (result) {
      return Response(200, result, '修改成功')
    }
    return Response(200, null, 'namespace不存在')
  }

  @Delete('/namespaces')
  async delNmaesoace(@QueryParams() query: NsParamsType) {
    const result = await this.nsService.delNs(query.namespacesName)
    if (result) {
      return Response(200, result, '删除成功')
    }
    return Response(200, null, 'namespace不存在')
  }
}
