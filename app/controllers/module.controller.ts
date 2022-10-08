/*
 * @Author: sfy
 * @Date: 2022-09-28 21:46:43
 * @LastEditors: sfy
 * @LastEditTime: 2022-09-28 22:38:09
 * @FilePath: /vul-sys/app/controllers/module.controller.ts
 * @Description: update here
 */
import {
  Param,
  Post,
  JsonController,
  Body,
  Get,
  Put,
  Delete,
  QueryParams
} from 'routing-controllers'
import { ModuleService } from '../services'
import { Service } from 'typedi'
import {Response} from '../helpers/resposeStruct'
import type { ModuleParamsType } from '../types'


@JsonController()
@Service()
export class ModuleController {
  constructor(private moduleService: ModuleService) {}

  @Get('/:namespaceName/module')
  async getNsModule(
    @Param("namespaceName") namespaceName: string, 
    ) {
      const result = await this.moduleService.getModuleList(namespaceName)
      if(result) {  
        return Response(200,result, '查询成功')
      }
      return Response(200,null, 'module查询失败')
  }

  @Get('/:namespaceName/module/:moduleName')
  async getModule(
    @Param("namespaceName") namespaceName: string, 
    @Param("moduleName") moduleName: string, 
    ) {
      const result = await this.moduleService.getModule(moduleName)
      if(result) {  
        return Response(200,result, '查询成功')
      }
      return Response(200,null, 'module查询失败')
  }

  @Post('/:namespaceName/module/:moduleName')
  async addModule(
    @Param("namespaceName") namespaceName: string, 
    @Param("moduleName") moduleName: string, 
    @Body() moduleParams: ModuleParamsType
    ) {
      const result = await this.moduleService.addModule({
        namespaceName,
        moduleName,
        ...moduleParams,
      })    
      if(result) {  
        return Response(200,result, '添加成功')
      }
      return Response(200,null, 'module添加失败')
  }

  @Put('/:namespaceName/module/:moduleName')
  async editModule(
    @Param("namespaceName") namespaceName: string, 
    @Param("moduleName") moduleName: string, 
    @Body() moduleParams: ModuleParamsType
    ) {
      const result = await this.moduleService.editModule({
        namespaceName,
        moduleName,
        ...moduleParams,
      })    
      if(result) {  
        return Response(200,result, '更新成功')
      }
      return Response(200,null, 'module更新失败')
  }

  @Delete('/:namespaceName/module/:moduleName')
  async delModule(
    @Param("namespaceName") namespaceName: string, 
    @Param("moduleName") moduleName: string, 
    ) {
      const result = await this.moduleService.delModule(moduleName)
      if(result) {  
        return Response(200,result, '删除成功')
      }
      return Response(200,null, 'module删除失败')
  }
  
}