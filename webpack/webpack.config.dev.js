const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/*
    webpack dev server
    Cuando trabajamos con Webpack deseamos ver los cambios en tiempo real en un navegador
    npm i webpack-dev-server -D

*/

/*
    Webpack Bundle Analyzer
    Cuando tenemos un proyecto es buena idea poder revisar su impacto en tamaño por ese motivo webpack nos ofrece un paquete para poder verificar y analizar el tamaño del bundle final
    npm i webpack-bundle-analyzer -D
*/

/*
    Webpack DevTools
    Con las devtools de webpack te permite crear un mapa de tu proyecto y con el podemos
    Analizar particularidades de lo que está compilando nuestro proyecto

    ver el arhcivo dist/[].map
*/

module.exports = {
    entry: './src/index.js',
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/images/[hasg][ext][query]' 
        },
    mode: 'development', //modo desarrollo
    watch: true, //webpack dev server autowatch
    devtool: 'source-map',     //webpack DevTools
    resolve: {
        extensions: ['.js'],
        alias: {  //alias
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@templade': path.resolve(__dirname, 'src/templates/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@images': path.resolve(__dirname, 'src/assets/images/'),
        } 
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,   
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,                
                use: [MiniCssExtractPlugin.loader, 
                    'css-loader',
                    'stylus-loader'
                ],
            },
            {    
                test:  /\.png/,
                type: 'asset/resource'
            },
            {
                test:  /\.(woff|woff2)$/,  
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/font-woff',
                        name: "[name].[contenthash].[ext]", 
                        outputPath: "./assets/fonts/",
                        publicPath: "../assets/fonts/",
                        esModule: false,
                    },
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            inject: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css' 
        }),
        new CopyPlugin({    
            patterns: [
                {
                    from: path.resolve(__dirname, "src","assets/images"),
                    to: "assets/images"
                }
            ]
        }),
        new Dotenv(),
        new BundleAnalyzerPlugin(),
    ],
    devServer: {
        contentBase:  path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 3006,
    },
}