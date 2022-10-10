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
import { RecordService } from '../services'
import { Service } from 'typedi'
import {Response} from '../helpers/resposeStruct'
import type { RecordParamsType } from '../types'


@JsonController()
@Service()
export class RecordController {
  constructor(private recordService: RecordService) {}

  @Get('/module/:moduleName/record')
  async getModuleRecordList(
    @Param("moduleName") moduleName: string, 
    ) {      
      const result = await this.recordService.getModuleRecordList(moduleName)
      if(result) {  
        return Response(200,result, '查询成功')
      }
      return Response(200,null, 'fiel查询失败')
  }  

  @Get('/module/:moduleName/record/:recordId')
  async getModuleRecord(
    @Param("moduleName") moduleName: string, 
    @Param("recordId") recordId: number, 
    ) {      
      const result = await this.recordService.getModuleRecord(recordId)
      if(result) {  
        return Response(200,result, '查询成功')
      }
      return Response(200,null, 'fiel查询失败')
  }

  @Delete('/module/:moduleName/record/:recordId')
  async delModuleRecord(
    @Param("moduleName") moduleName: string, 
    @Param("recordId") recordId: number, 
    ) {      
      const result = await this.recordService.delModuleRecord(recordId)
      if(result) {  
        return Response(200,result, '删除成功')
      }
      return Response(200,null, '删除失败')
  }

  @Post('/module/:moduleName/record')
  async addModuleRecord(
    @Param("moduleName") moduleName: string, 
    @Body() recordParams: RecordParamsType
    ) {      
      const result = await this.recordService.addModuleRecord(recordParams)
      
      if(result) {  
        return Response(200,result, '添加成功')
      }
      return Response(200,null, '添加失败')
  }

  @Put('/module/:moduleName/record/:recordId')
  async editModuleRecord(
    @Param("moduleName") moduleName: string, 
    @Param("recordId") recordId: string, 
    @Body() recordParams: RecordParamsType
    ) {      
      console.log(recordParams, 'recordParams');
      
      const result = await this.recordService.editModuleRecord(recordParams)
      if(result) {  
        return Response(200,result, '修改成功')
      }
      return Response(200,null, '修改失败')
  }
  
}