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

  @Get('/module/:name')
  async getModuleInfo() {
    const namespaces = await this.moduleService.getModuleList
  }

  @Get('/:namespaceName/module/:moduleName')
  async getModule(
    @Param("namespaceName") namespaceName: string, 
    @Param("moduleName") moduleName: string, 
    ) {
    console.log(namespaceName, 'namespaceName');
    console.log(moduleName, 'moduleName');
  }

  @Post('/:namespaceName/module/:moduleName')
  async addModule(
    @Param("namespaceName") namespaceName: string, 
    @Param("moduleName") moduleName: string, 
    @Body() moduleParams: ModuleParamsType
    ) {
    console.log(namespaceName, 'namespaceName');
    console.log(moduleName, 'moduleName');
    console.log(moduleParams, 'moduleParams');
    
  }

  @Put('/:namespaceName/module/:moduleName')
  async editModule(
    @Param("namespaceName") namespaceName: string, 
    @Param("moduleName") moduleName: string, 
    @Body() moduleParams: ModuleParamsType
    ) {
    console.log(namespaceName, 'namespaceName');
    console.log(moduleName, 'moduleName');
    console.log(moduleParams, 'moduleParams');
  }

  @Delete('/:namespaceName/module/:moduleName')
  async delModule(
    @Param("namespaceName") namespaceName: string, 
    @Param("moduleName") moduleName: string, 
    ) {
    console.log(namespaceName, 'namespaceName');
    console.log(moduleName, 'moduleName');
  }
  
}