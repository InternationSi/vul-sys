const jwt = require('jsonwebtoken')

/**白名单 */ const unless = ['/metaData/user/register', '/metaData/user/login']

export const handleToken = async (ctx, next) => {
  // 屏蔽部分地址
  if (unless.includes(ctx.path)) return next()

  const token = ctx.cookies.get('token')
  //   if (!token) {
  //     ctx.body = { code: 401, data: null, msg: '请登录' }
  //     return
  //   }

  try {
    await verifyToken(token, 'Gopal_token')
  } catch (err) {
    ctx.body = { code: 401, data: null, msg: err }
  }

  return next()
}

export const verifyToken = (token, key) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, key, (error, decoded) => {
      error ? reject(error.message) : resolve(decoded)
    })
  })
}
