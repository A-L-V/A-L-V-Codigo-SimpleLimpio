# Para creacion de proyecto
Usar efectos.js 
useLocalStorage
para crear estados e implementar local Storage

Usar context.js
para crear un contexto global para usar la logica

Instanciar con el uso de useContext


# PLUS
Reto: icon component
Reto: loading skeleton //cargar imagenes cuando se vea en la pantalla

# Deplay GitHub Pages
npm install --save-dev gh-pages
En el package.json agregar
"homename": "https://userName.github.io/nameProject

En scripts:
"build": "react-scripts build"
"predeploy": "npm run build"
"deploy": "gh-pages -d build";