# jd-union-sdk

<a name="O8p0G"></a>

# 一、概述

jd-union-sdk 是京东联盟的nodejs开发库。

<a name="xlIgq"></a>


# 二、使用方法

## 安装

```shell
npm install jd-union-sdk --save
```

## 引用依赖库

```js
const jdsdk = require('jd-union-sdk');
```

## 初始化

```js
const client = new JDClient({
  appKey: 'your appKey',
  secretKey: 'your secretKey'
});
```

## 调用

```js
let res = await client.execute('jd.union.open.order.query', {
  orderReq: {
    pageNo: 1,
    pageSize: 20,
    type: 1,
    time: '20200217160303'
  }
});
```

## 京东联盟API文档
https://union.jd.com/helpcenter/13246-13247-46301