const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        ui: path.resolve(__dirname, 'src/ui/index.tsx'),
        tool: path.resolve(__dirname, 'src/tool/entry.ts'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    watchOptions:{
        poll:1000,   //监测修改的时间(ms)
        aggregateTimeout:500,  //防止重复按键，500毫米内算按键一次
        ignored: /node_modules|dist/ //不监测
    }
}