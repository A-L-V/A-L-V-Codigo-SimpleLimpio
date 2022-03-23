# Teoria 
https://relieved-son-a8f.notion.site/Babel-Loader-para-JavaScript-b866f07aa34f4cd1abd72e7887cd14da


# Inicializar:

si(primera ves intalando webpack)
    npm install --global webpack webpack-cli


# Crear el Proyecto
mkdir [proyecto] 
cd [proyecto]
npm init
npm i --save-dev webpack webpack-cli

# Iniciar babelrc
ir al archivo src/.babelrc

# Crear archivo de configuracion produccion webpack
ir al archivo webpack.config.js

# Crear archivo de configuracion de desarrollo webpack
ir al archivo webpack.config.dev.js

# En Packeage.json
Agregamos los scripts, u tambien puede personalizarlos

# Crear archivos Script para el build
El archivo scripts/create-env.js esta personalizado para crear el .env en netfily


# configuracion con react
## Simple

npx create-react-app [proyecto]

## Desde cero
npm i react react-dom
npm i webpack webpack-cli -D
npm i @babel/core @babel/preset-env @babel/preset-react babel-loader -D


Este proyecto ya esta cargado con react
En el webpack config
loader babel:
 module: { 
        rules: [
            {   //loader babel
                test: /\.(js|jsx)$/, 
                resolve: {
                    extensions: ['.js', '.jsx'],
                },
            }

en .babelrc agregar
    "presets": [
        "@babel/env",
        "@babel/react
    ],

crear el script de package.json
    "start":  "webpack-dev-server -d --open"

##  fash refresh webpack-react
npm i -D @pmmmwh/react-refresh-webpack-plugin react-refresh

agregar en webpack dev config


# [Netlify] 
https://www.netlify.com/
corre tu repositorio en la nube 

configuracion en archivo netfily.toml para desplegar la aplicacion 

