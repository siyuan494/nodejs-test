/**
 * webpack 配置文件
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    //调试时使用development开发模式
    //打包时使用production生产模式
    mode: 'development',
    entry: path.join(__dirname, './src/index.js'), //__dirname表示当前目录当前路径
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },//出口

    devServer: {
        static: './src'
    },

    //新增内容css
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }]
            },
            { test: /\.js$/, exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react']
                        }
                    }
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 25000
                        }
                    }
                ]
            }
        ]
    }

}