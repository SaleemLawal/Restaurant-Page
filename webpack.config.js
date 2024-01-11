const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    entry: {
        "main": path.resolve(__dirname, './src/script/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Food App',
            template: path.resolve(__dirname, './src/pages/template.html'),
            filename: "index.html",
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/menu.html'),
            filename: "menu.html",
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/contact.html'),
            filename: 'contact.html',
            inject: "body",
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
        ]
    },
    optimization: {
        runtimeChunk: 'single',
    },
    
};
