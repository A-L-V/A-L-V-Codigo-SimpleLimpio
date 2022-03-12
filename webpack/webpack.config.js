const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
/*
    añadir html a webpack
    npm i html-webpack-plugin -D 
    Es un plugin para inyectar javascript, css, favicons, y nos facilita la tarea de enlazar los bundles a nuestro template HTML.
*/

const CssMinimizerPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/*
    añadir estilos a webpack
    npm i mini-css-extract-plugin css-loader -D

    css-loader ⇒ Loader para reconocer CSS
    mini-css-extract-plugin ⇒ Extrae el CSS en archivos

    // Opcional
    npm i stylus-loader -D
    Un preprocesador CSS es un programa que te permite generar CSS a partir de la syntax única del preprocesador. Existen varios preprocesadores CSS de los cuales escoger, sin embargo, la mayoría de preprocesadores CSS añadirán algunas características que no existen en CSS puro, como variable, mixins, selectores anidados, entre otros. Estas características hacen la estructura de CSS más legible y fácil de mantener.

    post procesadores son herramientas que procesan el CSS y lo transforman en una nueva hoja de CSS que le permiten optimizar y automatizar los estilos para los navegadores actuales.

*/

const CopyPlugin = require('copy-webpack-plugin');
/*
    mover recursos
    Si tienes la necesidad de mover un archivo o directorio a tu proyecto final podemos usar un plugin llamado “copy-webpack-plugin”
    npm i copy-webpack-plugin -D
*/


/*
    loader de images
    Puedes usar una forma de importar las imágenes haciendo un import de las mismas y generando una variable
    No es necesario instalar ninguna dependencia
    
    import github from '../assets/images/github.png';
    // Ejemplo en React
    <img src={`${github}`} />
*/


/*
    //loader de fuentes
    npm i url-loader file-loader -D
*/

const TerserPlugin = require('terser-webpack-plugin');
/*
    optimizacion:
    hashes, compresion,minificacion de archivos
    npm i css-minimizer-webpack-plugin terser-webpack-plugin -D
*/
const Dotenv = require('dotenv-webpack');
/*
    variables de entorno
    npm i dotenv-webpack -D
    crear el archivo .env

    Nota:
    no se sube al repositoio
    solicitar estas variables al lider de equipo(secreto)
    Podremos usarlo: 
    const nombre = process.env.NOMBRE_VARIABLE;

    .env-example | .env.example
    elementos ejemplo de que variables necesita este proyecto
    subido al repositorio sin las variables asignadas

    Para crear script para variables de entorno
    en netlify-
    deploy setting
    enviroment variables
    *agregar variable de .env

*/

const { CleanWebpackPlugin} = require('clean-webpack-plugin');

/*
    modo produccion
    tenemos varios archivos repetidos los cuales se fueron acumulando por compilaciones anteriores
    Para ello puedes limpiar la carpeta cada vez que hacemos un build
    npm i clean-webpack-plugin -D
*/


module.exports = {
    entry:'./src/index.js',
    mode:'production',
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',//(optimizacion); filename: 'main.js', (default)
        assetModuleFilename: 'assets/images/[hasg][ext][query]'  //loader de fuentes
        },
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
            {   //loader
                test: /\.m?js$/,     
                exclude: /node_modules/,   
                use: {
                    loader: 'babel-loader'
                }
            },
            {   //html
                test: /\.html$/,
                use: [{loader:'html-loader'}]
            },
            {   //css o stilos
                test: /\.css$/i, //preprocesadorres o procesadores, test: /\.css|.styl$/i,
                use: [MiniCssExtractPlugin.loader, 
                    'css-loader',
                    //'stylus-loader'
                ],
            },
            {     //loader de images
                test:  /\.png/, 
                type: 'asset/resource'
            },
            {
                //loader de fuentes
                test:  /\.(woff|woff2)$/,  
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/font-woff',
                        name: "[name].[contenthash].[ext]",//(optimizacion) name: "[name].[ext]",(default)
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
        new Dotenv(),  //variables de entorno
        new CleanWebpackPlugin(), //limpiar webpack
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new MiniCssExtractPlugin(),
            new TerserPlugin()
        ]
    }
}