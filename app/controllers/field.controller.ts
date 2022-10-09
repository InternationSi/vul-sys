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

  @Post('/:namespaceName/module/:moduleName/field/:fieldName')
  async getModule(
    @Param("namespaceName") namespaceName: string, 
    @Param("moduleName") moduleName: string, 
    @Param("fieldName") fieldName: string, 
    @Body() fieldParams: FieldParamsType
    ) {
      console.log(namespaceName,moduleName,fieldName);
      console.log(fieldParams);
      
      const result = await this.fieldService.addModuleField(fieldParams)
      // if(result) {  
      //   return Response(200,result, '查询成功')
      // }
      // return Response(200,null, 'module查询失败')
  }
  
}