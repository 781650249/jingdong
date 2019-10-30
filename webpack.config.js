
var MiniCssExtractPlugin =require('mini-css-extract-plugin');
var {CleanWebpackPlugin} =require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports={
    entry:{
        index:'./jd.js',
        dropdown:'./dropdown/dropdown.js',
        lb:'./lb/lb.js',

    },
    output:{
        filename:'[name]-[hash:5].js',
        path:__dirname +'/out'
    },
    // loader的使用
    module:{
        rules:[
            {test:/(\.js)$/,use:['babel-loader']},
            {test:/(\.css)$/,use:[MiniCssExtractPlugin.loader,'css-loader']},
            {test:/(\.jpg|png|svg|eot|ttf|woff)/,use:['url-loader?limit=1000&name=./[name].[ext]']}
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[name]-[hash:5].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./jd.html',   
            filename:'index.html',
            minify:{
                removeComments:true
            },
        }),
    ],
    mode:'development',
    devServer:{
        port:'9191'
    }
}