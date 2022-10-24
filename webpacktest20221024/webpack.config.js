// /**
//  * webpack  配置文件
//  */
// module.exports={
//     //调试时使用development开发模式
//     //打包时使用production生产模式
//     mode : 'development'
// }


/**
 * webpack  配置文件
 */
const path=require('path');
module.exports={
    //调试时使用development开发模式
    //打包时使用production生产模式
    mode : 'development',
    entry:  path.join(__dirname,'./src/index.js'),  //__dirname表示当前目录当前路径
    output: {
        path: path.join(__dirname,'./dist'),
        filename:'bundle.js',
    },//出口
    devServer:{
        static: './src'
    },
    //新增内容css
    module:{    //处理css
        rules:[ //(规范)约束
            {test:/\.css$/,use:['style-loader','css-loader']}//正则表达式拓展名.css
        ]
    }
}