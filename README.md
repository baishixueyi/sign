# sign
使用js进行加密
## 加密过程
1. 按照对象属性进行升序排序
2. 使用key1=value1&key2=value的格式进行拼接
3. 进行MD5进行加密
4. 对加密后的字符串进行密钥的拼接
5. 再次进行MD5加密
6. 转小写返回
## 使用方法
1. clone 本仓库
2. 引入sign.js进行使用
ES6的语法 import { createNoncestr, getSign } from './sign.js'  
ES5的语法 require('./sign.js')
