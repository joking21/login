var path = require('path')
var webpack = require('webpack')
var WebpackDevServer = require("webpack-dev-server");
//配置webpack服务器启动的端口
const webpackServer = {  
    protocol:'http://',  
    host:'localhost',   
    port:'5000'    //端口号
}  
module.exports = {
    entry: './src/main.js',//值可以是字符串、数组或对象
    output: {
        path: path.resolve(__dirname, './public/dist'),//Webpack结果存储
        publicPath: '/public/dist/',
        filename: 'build.js' //[name.js]
    },
    externals: {
        'jquery': 'window.jQuery',
        'moment': 'window.moment',
    }, //较大的库引用cdn文件
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
            ,
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
              },
              {
                test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/, 
                loader: 'url-loader?limit=100000'
              }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {//webpack-dev-server配置
        historyApiFallback: true,//不跳转
        hot: true,
        inline: true,//实时刷新
        progress: true,
        port: webpackServer.port,
        host:webpackServer.host,
        proxy: {
            // http://localhost:7000/requires/selectAll
            '/requires': {
                target: 'http://localhost:7000',
                changeOrigin: true,
                pathRewrite: {
                '^requires': '/requires'
                }
            }
        }, 
    },
    
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
    // plugins: [
    //     // new OpenBrowserPlugin({ url: 'http://localhost:3000' }),
    //     new webpack.ProvidePlugin({
    //         $: 'jquery',
    //         jQuery: 'jquery',
    //         'window.jQuery': 'jquery',
    //         'window.$': 'jquery'
    //     }), //这个可以使jquery变成全局变量，不用在自己文件require('jquery')了
    // ]
}