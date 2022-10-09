import {
  Post,
  JsonController,
  Body,
  Ctx,
} from 'routing-controllers'
import { UserService } from '../services'
import { Service } from 'typedi'
import { Response } from '../helpers/resposeStruct'
import { ILogin } from 'app/types'
import { Context } from 'koa'

@JsonController()
@Service()
export class UserController {
  constructor() {}

  @Post('/user/register')
  async register(@Body() body: ILogin) {
    const registerRes = await UserService.register(body)
    if (registerRes.state === 'success') return Response(200, 'ok', '注册成功')
    else return Response(400, 'err', registerRes.msg)
  }

  @Post('/user/login')
  async login(@Body() body: ILogin ,@Ctx() ctx:Context) {
    const registerRes = await UserService.login(body)
    if (registerRes.state === 'success') {
      ctx.cookies.set('token', registerRes.data.token)
      return Response(200, registerRes.data, '登录成功')
    }
    else return Response(400, 'err', registerRes.msg)
  }
}
