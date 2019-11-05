# GmzxMall

> 一个基于vue2.0实现的移动端商城，实现了购物车功能,axios拦截,配合路由钩子函数实现权限控制、登录、登出功能
## 技术栈
vue2.0 + vue-router + vuex + axios  + webpack + ES6 + less 

## 结构：
build: webpack配置
config: 项目配置参数
src
assets: 静态资源文件，css公共样式文件，存放图片啥的
components: 常用组件封装
router: 路由表
store: 状态管理 vuex
utils: 常用工具类封装
pages: 视图页面
static: 静态JSON文件

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
