# smallRoutine
mpvue+vue+vuex+weixin

## 一、准备工作

### 1.安装node.js环境

## 二、安装开发环境

### 1.安装开发依赖
    npm install

### 2.安装mock依赖
    cd mock-server
    npm install

## 三、开发环境

### 1.构建开发环境产物
    npm run dev

### 2.mock和静态服务
    npm start

## 四、开发规范说明

    1.基本es6语法环境开发，尽量采用es6语法;
    2.css命名采用中扛分隔;
    3.js变量采用小驼峰（lower camel case）命名;
    4.组件名称一致使用"c-"开头;
    5.静态变量一律大写字母，下扛分隔;
    6.文件命名尽量采用中扛或者"."号分隔;


## 五、目录说明

    |-- build

    |-- mock-server

    |-- src
        |-- api 请求接口文件目录
        |-- component 组件文件目录
            |-- detail 详情组件文件目录
                |-- detection.vue 实时监测组件
                |-- discuss.vue 评论组件
                |-- information.vue 详情组件
                |-- synopsis.vue 简介组件
        |-- pages 页面vue文件
            |-- detail 详情页面
            |-- index 主页面
        |-- store vuex文件
            |-- modules vuex模块
            |-- actions.js 异步请求数据管理
            |-- getters.js 数据状态的处理管理
            |-- index.js  vuex入口文件
            |-- mutations.js 修改store数据管理
            |-- types.js 常量名称管理
        |-- utils 工具文件目录
            |-- filters.js  过滤器处理（项目不支持）
            |-- http.js   ajax接口请求封装
            |-- index.js 暂时没用到
            |-- tools.js 工具类文件

            
    |-- static 静态文件
    |-- .babelrc babel配置文件