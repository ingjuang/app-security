# Proyecto NestJS

Este es un proyecto básico utilizando el framework NestJS.

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior) o yarn

## Instalación

1. Clona el repositorio:

    ```sh
    git clone https://github.com/ingjuang/app-security.git
    cd app-security
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```

    o si prefieres usar yarn:

    ```sh
    yarn install
    ```

## Ejecución

1. Ejecuta el proyecto en modo desarrollo:

    ```sh
    npm run start:dev
    ```

    o si prefieres usar yarn:

    ```sh
    yarn start:dev
    ```

2. El servidor estará corriendo en `http://localhost:3000`.

## Curl de los servicios disponibles

1. Servicio para crear usuario:

    ```sh
    curl --location 'localhost:3000/users' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name":"juande4",
        "email":"juande4@gmail.com",
        "password": "1234"
    }'
    ```

2. Servicio para login:

    ```sh
    curl --location 'localhost:3000/users/login' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email":"juande4@gmail.com",
        "password": "1234"
    }'
    ```
