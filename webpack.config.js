const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    devServer: {
        static: './dist/pages',
    },
    entry: {
        "main": path.resolve(__dirname, './src/script/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
        publicPath: '/',
    },
    performance: {
        hints: false, // Disable performance hints
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Food App',
            template: path.resolve(__dirname, './src/pages/template.html'),
            filename: "./pages/index.html",
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/menu.html'),
            filename: "./pages/menu.html",
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/pages/contact.html'),
            filename: './pages/contact.html',
            inject: "body",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[hash][ext][query]',
                },
            },
            
        ]
    },
    optimization: {
        runtimeChunk: 'single',
    },
    
};
