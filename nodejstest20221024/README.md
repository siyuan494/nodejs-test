
引入拖拽组件 npm install react-draggable-tags --save
    https://github.com/YGYOOO/react-draggable-tags

1.安装webpack(两个包)npm install webpack webpack-cli -D (开发模式)

2.新建webpack.config.js，并配置

3.修改package.json(可有可无,运行方式不同)
"scripts": {
"dev": "webpack"
},

4.安装处理css的loader:npm i style-loader css-loader -D
根据实际需要安装对应的加载器
npm install less-loader -D (less加载器)
npm install sass-loader node-sass -D (sass加载器)

5.WebPack自动打包
1)安装 npm install webpack-dev-server -D
2)修改package.json(使得窗口自动打开并且自动打包)
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"dev": "webpack-dev-server --open --host 127.0.0.1 --port 9090"
},
3)修改webpack.config.js
devServer:{
static: './src'
}
4)html引入bundle.js
<script src="/bundle.js"></script>

6.运行验证npm run dev 原理:服务器上运行监听,所以需要访问服务器



如果报错，安装缺失的组件：
npm install html-webpack-plugin
npm install @babel/preset-react
npm install babel-plugin-transform-react-jsx

npm install @babel/preset-env

https://blog.csdn.net/u012193380/article/details/84664658
安装babel相关依赖
npm install --save babel-polyfill
npm install babel-register --save
npm install babel-preset-es2015 --save
npm install babel-preset-stage-2 --save
npm install koa

npm install react-syntax-highlighter