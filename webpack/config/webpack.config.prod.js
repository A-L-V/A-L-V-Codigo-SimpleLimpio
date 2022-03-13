const path = require('path');

const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')


const { CleanWebpackPlugin} = require('clean-webpack-plugin');

/*
    modo produccion
    tenemos varios archivos repetidos los cuales se fueron acumulando por compilaciones anteriores
    Para ello puedes limpiar la carpeta cada vez que hacemos un build
    npm i clean-webpack-plugin -D
*/


const prodConfig = {
    mode: "production",
    plugins: [
        ...common.plugins, 
/*
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            inject: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css'  //optimizacion
        }),
        new CopyPlugin({     //mover recursos
            patterns: [
                {
                    from: path.resolve(__dirname, "src","assets/images"),
                    to: "assets/images"
                }
            ]
        }),
        new Dotenv(),  //variables de entorno*/
        new CleanWebpackPlugin(), //limpiar webpack
    ],
}
module.exports = merge(common,prodConfig)


