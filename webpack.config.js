import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';


export const mode = 'development';
export const devtool = 'inline-source-map';
export const devServer = {
    static: './dist',
};
export const entry = {
    "main": resolve(__dirname, 'src/index.js'),
};
export const output = {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
};
export const plugins = [
    new HtmlWebpackPlugin({
        title: 'Food App',
        template: "./src/template.html",
        filename: "index.html",
        inject: "body",
    }),
    new HtmlWebpackPlugin({
        template: "./src/menu.html",
        filename: "menu.html",
        inject: "body",
    }),
    new HtmlWebpackPlugin({
        template: 'src/contact.html', 
        filename: 'contact.html',
        inject: "body",
    })
];
export const module = {
    rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ],
        },
    ]
};
export const optimization = {
    runtimeChunk: 'single',
};