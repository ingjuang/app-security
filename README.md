# Proyecto NestJS

Este es un proyecto básico utilizando el framework NestJS.

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior) o yarn

## Instalación

1. Clona el repositorio:

    ```sh
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```

    o si prefieres usar yarn:

    ```sh
    yarn install
    ```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto y agrega las variables de entorno necesarias. Puedes usar el archivo `.env.example` como referencia.

    ```sh
    cp .env.example .env
    ```

2. Edita el archivo `.env` con los valores apropiados para tu entorno.

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

## Scripts disponibles

- `start`: Ejecuta el proyecto en modo producción.
- `start:dev`: Ejecuta el proyecto en modo desarrollo con recarga automática.
- `start:debug`: Ejecuta el proyecto en modo debug.
- `start:prod`: Compila y ejecuta el proyecto en modo producción.
- `build`: Compila el proyecto.
- `test`: Ejecuta las pruebas unitarias.
- `test:watch`: Ejecuta las pruebas unitarias en modo observación.
- `test:e2e`: Ejecuta las pruebas end-to-end.
- `lint`: Ejecuta el linter para verificar el código.

## Estructura del proyecto

El proyecto sigue la estructura estándar de un proyecto NestJS:

```
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── main.ts
└── ...
```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que desees realizar.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
