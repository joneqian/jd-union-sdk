# aliyun-mobile-auth

<a name="O8p0G"></a>

# 一、概述

aliyun-mobile-auth 是阿里云号码认证服务（Phone Number Verification Service）的nodejs开发库。

<a name="xlIgq"></a>


# 二、使用方法

## 安装

```shell
npm install aliyun-mobile-auth --save
```

## 引用依赖库

```js
const mobileAuth = require('aliyun-mobile-auth');
```

## 初始化

```js
let client = mobileAuth({
  accessKeyId: '<accessKeyId>',
  accessKeySecret: '<accessSecret>',
  regionId: 'cn-hangzhou' // regionId可以不传，默认是'cn-hangzhou'
});
```

## 一键登录取号
```js
client.getMobile({
  AccessToken: 'AccessToken' // app端SDK获取的登录token
});

/***
 * 返回值
 * {
 *    RequestId: 请求ID
 *    Code: 状态码, OK表示成功
 *    Message: 状态码描述
 *    GetMobileResultDTO: {
 *      Mobile: 手机号
 *    }
 * }
 * 
 * ***/
```

## 本机号码校验认证
```js
client.verifyMobile({
  AccessCode: 'AccessCode', // app端SDK获取accessCode参数值，即Token
  PhoneNumber: '13800000000' // 手机号
});

/***
 * 返回值
 * {
 *    RequestId: 请求ID
 *    Code: 状态码, OK表示成功
 *    Message: 状态码描述
 *    GateVerifyResultDTO: {
 *      VerifyId: 流水号,
 *      VerifyResult: 认证结果(PASS：一致 REJECT：不一致 UNKNOWN：无法判断)
 *    }
 * }
 * 
 * ***/
```