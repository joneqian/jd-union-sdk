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
let client = jdsdk({
  accessKeyId: '<accessKeyId>',
  accessKeySecret: '<accessSecret>',
  regionId: 'cn-hangzhou' // regionId可以不传，默认是'cn-hangzhou'
});
```