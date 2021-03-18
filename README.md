# toolbox-challenge
[v2] Full Stack JS - Code Challenge

    Nota: Por cuestiones practicas para este ejercicios, el proyecto se encuentra en un mismo repositorio al que comunmente se le conoce como monorepo.

### 1. Clonar el proyecto del repositorio de GitHub.

En la terminal ejecutar los siguientes comandos.

    $ git clone https://github.com/rgalicia0729/toolbox-challenge.git

    $ cd toolbox-challenge

### 2. Ejecutar la API

Estando en la raiz del proyecto, nos movemos al directorio de api

    $ cd api

Estando en el directorio de api, ejecutamos el siguiente comando

    $ npm start

    Si todo sale bien muestra el siguiente mensaje: **API listening on: http://127.0.0.1:3000**

Para ejecutar los test utiliza el siguiente comando

    $ npm test

### 3. Ejecutar el Front

Estando en la raiz del proyecto, nos movemos al directorio de front

    $ cd front

Estando en el directorio de front, ejecutamos el siguiente comando

    $ npm start

    Si todo sale bien en la consola debe de existir el siguiente mensaje: **Project is running at http://0.0.0.0:3001/**

Abre un navegador e ingresa al siguiente enlace **http://0.0.0.0:3001/**.

### 4. Ejecutar la aplicación utilizando docker compose

Puedes utilizar docker compose para ejecutar tanto la api como el front de manera sencilla.

En la raiz del proyecto ejecuta el siguiente comando para ejecutar la aplicación utilizando docker compose.

    $ docker-compose up -d

Para ver los servicios utiliza.

    $ docker-compose ps

Para detener los servicios utiliza

    $ docker-compose down
