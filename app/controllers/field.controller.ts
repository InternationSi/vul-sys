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
import { FieldService } from '../services'
import { Service } from 'typedi'
import {Response} from '../helpers/resposeStruct'
import type { FieldParamsType } from '../types'


@JsonController()
@Service()
export class FieldController {
  constructor(private fieldService: FieldService) {}

  @Get('/:namespaceName/module/:moduleName/field')
  async getModuleField(
    @Param("namespaceName") namespaceName: string, 
    @Param("moduleName") moduleName: string, 
    ) {      
      const result = await this.fieldService.getModuleFieldList(moduleName)
      if(result) {  
        return Response(200,result, '查询成功')
      }
      return Response(200,null, 'fiel查询失败')
  }  


  @Delete('/:namespaceName/module/:moduleName/field/:fieldName')
  async delModuleField(
    @Param("namespaceName") namespaceName: string, 
    @Param("moduleName") moduleName: string, 
    @Param("fieldName") fieldName: string, 
    @Body() fieldParams: FieldParamsType
    ) {      
      const result = await this.fieldService.delModuleField(fieldParams)
      if(result) {  
        return Response(200,result, '删除成功')
      }
      return Response(200,null, 'field删除失败')
  }

  @Post('/:namespaceName/module/:moduleName/field/:fieldName')
  async addModuleField(
    @Param("namespaceName") namespaceName: string, 
    @Param("moduleName") moduleName: string, 
    @Param("fieldName") fieldName: string, 
    @Body() fieldParams: FieldParamsType
    ) {      
      const result = await this.fieldService.addModuleField(fieldParams)
      
      if(result) {  
        return Response(200,result, '添加成功')
      }
      return Response(200,null, 'field添加失败')
  }

  @Put('/:namespaceName/module/:moduleName/field/:fieldName')
  async editModuleField(
    @Param("namespaceName") namespaceName: string, 
    @Param("moduleName") moduleName: string, 
    @Param("fieldName") fieldName: string, 
    @Body() fieldParams: FieldParamsType
    ) {      
      const result = await this.fieldService.editModuleField(fieldParams)
      if(result) {  
        return Response(200,result, '修改成功')
      }
      return Response(200,null, 'field修改失败')
  }
  
}