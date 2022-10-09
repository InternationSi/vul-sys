import { ILogin } from 'app/types/login.type'
import { verifyObjIsValue } from 'configs/utils'
import { Service } from 'typedi'
import prisma from '../helpers/client'

@Service()
export class UserService {
  /**注册 */
  static async register(oBody: ILogin) {
    // 判断是否缺少必填项
    const verifyList = verifyObjIsValue(oBody)
    if (verifyList.length) return { state: 'err', msg: `缺少必填项${verifyList[0]}` }

    // 判断是否有注册
    const users = await prisma.user.findMany({
      where: {
        OR: [{ userName: oBody.userName }, { phone: oBody.phone }],
      },
    })
    if (users.length) return { state: 'err', msg: '该用户已注册' }

    await prisma.user.create({
      data: oBody,
    })
    return { state: 'success', msg: '' }
  }

  /**登录 */
  static async login(oBody: ILogin) {
    // 判断是否有注册
    const users = await prisma.user.findMany({
      where: {
        userName: oBody.userName,
        phone: oBody.phone,
      },
    })
    if (!users.length) return { state: 'err', msg: '该用户未注册' }

    const user = users[0]
    if (user.password !== oBody.password) return { state: 'err', msg: '账户或密码错误' }
    else {
      const jwt = require('jsonwebtoken')
      const token = jwt.sign(
        { userName: user.userName, phone: user.phone },
        'Gopal_token', // secret
        { expiresIn: 60 * 60 }, // 60 * 60 s
      )
      return { state: 'success', msg: '', data: { token } }
    }
  }
}
