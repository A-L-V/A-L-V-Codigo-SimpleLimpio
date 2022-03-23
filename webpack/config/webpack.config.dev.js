const path = require('path');

const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin') //fash refresh webpack-react
const {HotModuleReplacementPlugin} = require('webpack') 
//fash refresh webpack-react

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
/*
    webpack dev server
    Cuando trabajamos con Webpack deseamos ver los cambios en tiempo real en un navegador
    npm i webpack-dev-server webpack-merge -D 

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
const devConfig = {
    mode: "development",
    //devtool: 'source-map',     //webpack DevTools
    plugins: [ 
        new BundleAnalyzerPlugin(),
        new HotModuleReplacementPlugin(), //fash refresh webpack-react
        new ReactRefreshWebpackPlugin() //fash refresh webpack-react
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 3000,
        compress: true,
        hot:true,  //fash refresh webpack-react
    },
    target: "web"
}
module.exports = merge(common,devConfig)