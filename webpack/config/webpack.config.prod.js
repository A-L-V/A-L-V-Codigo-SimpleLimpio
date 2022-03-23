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
        new CleanWebpackPlugin(), //limpiar webpack
    ],
}
module.exports = merge(common,prodConfig)


