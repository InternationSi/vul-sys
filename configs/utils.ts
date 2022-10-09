export const dictToArray = (dict: object): Array<any> =>
  Object.keys(dict).map(name => dict[name])

export const print = {
  log: (text: string) => console.log('\x1b[37m%s \x1b[2m%s\x1b[0m', '>', text),
  danger: (text: string) => console.log('\x1b[31m%s \x1b[31m%s\x1b[0m', '>', text),
  tip: (text: string) => console.log('\x1b[36m%s \x1b[36m%s\x1b[0m', '>', text),
}

/**获取数据类型 */ export const getType = function (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

/**判断对象是否全部有值 */ export const verifyObjIsValue = (obj: any): string[] => {
  return Object.keys(obj).filter(key => {
    if (getType(key) === 'boolean') return false
    return !obj[key]
  })
}