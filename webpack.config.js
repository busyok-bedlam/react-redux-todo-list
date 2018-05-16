const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
const config = {
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "ReactApp",
            template: path.join(__dirname, "/src/template.ejs")
        })
    ],
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8000
    }
}

module.exports = config;