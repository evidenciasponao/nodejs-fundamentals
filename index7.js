const http = require('http');

const colors = require('colors'); // requerimos el modulo colors

const handleServer = function (req, res) {
    res.writeHead(200, { 'Content-type':'text/html' }) // codigos de estado http Ok
    res.write('<h1>Hola Mundo desde Nodejs</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log('Server on port 3000'.yellow); // uso de modulo colors
})

/* uso de npm para instalar el modulo colors
npm install colors
permite atravez de .color asignar un color a
nuestra linea de comandos */

/* uso de mi aplicacion desde otro equipo
npm init
nos pedira informacion acerca de nuestro proyecto
al finalizar damos ok y con esto se crea el archivo
de metadatos package.json el cual tendra la informacion
de los modulos que usa mi aplicacion
de esta forma no sera necesario subir la carpeta node_modules
si no solamente mi codigo y desde el servidor se ejecutara
el comando 
npm install 
el cual instalara todas las dependencias de las cuales mi aplicacion
hace uso*/

/* uso de .gitignore
para ignorar esta carpeta crearemos un archivo .gitignore
y ponemos node_modules para no subirla en nuestra aplicacion*/

/* uso de scrips desde package.json
en la seccion de scripts creamos el comando start
"scripts": {
    "start": "node index.js"
}
para luego poder ejecutar nuestro servidor con el comando
npm start
desde la consola*/

/* si quiero ejecutar otro comando que no sea start
"scripts": {
    "start": "node index7.js"
    "dev": "node index7.js"
}
hacemos uso de el comando 
node run dev
para poder ejecutar nuestro script*/