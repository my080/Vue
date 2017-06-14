"use strict";

const path = require('path');
let htmlWebpackPlugin = require("html-webpack-plugin");
const srcPath = path.join(__dirname, './views/src');
let webpack = require("webpack");

module.exports = {
    entry: './views/src/app.js',
    output: {
        path: path.resolve(__dirname, './views/dist/'),
        filename: '[name].js'
        //publicPath: "http://cdn.com" //线上环境地址
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?importLoaders=1!postcss-loader",
                exclude: path.resolve(__dirname, './node_modules/'),
                include: path.resolve(__dirname, './views/src/'),
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less',
                exclude: path.resolve(__dirname, './node_modules/'),
                include: path.resolve(__dirname, './views/src/'),
            }
        ],
        rules: [
            {
                test: /\.json$/,
                exclude: path.resolve(__dirname, './node_modules/'),
                include: path.resolve(__dirname, './views/src/'),
                loader: "json-loader"
            },
            {
                test: /\.js|.jsx$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, './node_modules/'),
                include: path.resolve(__dirname, './views/src/'),
                query: {
                    presets: ['latest']
                }
            },
            {
                test: /\.(css|scss)$/,
                loader:"style-loader!css-loader?importLoaders=1!postcss-loader", //由于webpack2.X 版本对post-css书写方式的改变
                exclude: path.resolve(__dirname, './node_modules/'),
                include: path.resolve(__dirname, './views/src/')
            },
            {
                test:/\.less$/,
                loader:"style-loader!css-loader?importLoaders=1!postcss-loader!less-loader", //由于webpack2.X 版本对post-css书写方式的改变
                exclude: path.resolve(__dirname, './node_modules/'),
                include: path.resolve(__dirname, './views/src/')
            },
            {
                test: /\.(ico|png|jpg|gif|woff|woff2)$/,
                loader: 'url-loader?limit=8192&name=images/[hash].[name].[ext]',
                exclude: path.resolve(__dirname, './node_modules/'),
                include: path.resolve(__dirname, './views/src/')
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'img-loader',
                exclude: path.resolve(__dirname, './node_modules/'),
                include: path.resolve(__dirname, './views/src/')
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "views/dist"),
        compress: true,
        port: 9001
    },
    plugins: [
        new htmlWebpackPlugin({
            template:"html-withimg-loader!views/src/index.html",
            minify: {
                removeComments:true,
                collapseWhitespace:true
            }
        })
    ]
}