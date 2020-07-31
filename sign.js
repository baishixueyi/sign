 const md5 = require("./md5.js");
 const key = {
  key:'value'
}
//生成随字符串
function createNoncestr(length=32){
  let str = "abcdefghijklmnopqrstuvwxyz0123456789";
  let res = ""
  for(let i=0;i<length;i++){
    res+= str[parseInt(Math.random()*str.length)] 
  }
   return res
}
//入参为对象
function getSign(obj){
  let appkey = obj.appkey
  let arr = Object.keys(obj)
  arr.sort()
  let newStr = arr.map(v=>v+'='+obj[v]).join('&')
  newStr = md5(newStr)
  newStr = newStr.toLowerCase()
  return newStr
}
export {
  createNoncestr,
  getSign
}

module.exports = {
  createNoncestr:createNoncestr,
  getSign:getSign
}
