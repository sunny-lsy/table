const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
    entry:{
        app:path.join(__dirname,"src","app.js")
    },
    output:{
        path:path.join(__dirname,"dist"),
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader"
            },{
                test:/\.html$/,
                loader:"html-loader"
            },{
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:["css-loader","vue-style-loader"]
                })
            },{
                test:/\.(jpg|png|gif)/,
                loader:"url-loader"
            },
            {
                test:/\.vue$/,
                loader:"vue-loader"
            }
        ]
   
    },
     devServer:{
        host:"localhost",
        port:8080,
       setup(app){
           app.get("/mock",function(req,res){
               res.end("hello world")
           })
       }
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./index.html",
            inject:"body"
        }),
        new ExtractTextPlugin("main.css")
    ],
    resolve:{
        alias:{
            "vue$":"vue/dist/vue.esm.js"
        }
    }
}