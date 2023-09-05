# lovelace-backend

## Descripción

lovelace-backend es la parte de la aplicación encargada de gestionar solicitudes de usuarios, comunicarse con modelos de inteligencia artificial, procesar datos y entregar imágenes generadas.
El frontend se puede descargar aqui: [lovelace-frontend](https://github.com/HamidGX/lovelace-frontend)

## Requisitos

1. **Node.js**: La plataforma de ejecución de JavaScript en la que se basa React. Puedes descargar Node.js desde [nodejs.org](https://nodejs.org/).

2. **NPM**: Un administrador de paquetes ampliamente utilizado que es útil para gestionar las dependencias de tu proyecto. Puedes obtener npm como parte de [Node.js](https://nodejs.org/), que es una plataforma completa de desarrollo de JavaScript.

## Instrucciones de instalación

Para comenzar a trabajar en este proyecto, sigue los siguientes pasos:

1. Clona este repositorio en tu máquina local.

## Instrucciones de uso

Este proyecto utiliza scripts npm para la gestión de tareas comunes. A continuación, se muestran los comandos disponibles:

- `npm install`: Inicia la aplicación en modo de desarrollo.
- `npm run dev`: Inicia la aplicación en modo de desarrollo.

## Dependencias

Estas son las dependencias utilizadas en el proyecto "lovelace-backend" junto con sus respectivas versiones:

- `cloudinary`: 1.40.0
- `cors`: 2.8.5
- `dotenv`: 16.0.3
- `express`: 4.18.2
- `mongoose`: 7.5.0
- `nodemon`: 3.0.1
- `openai`: 3.2.1

## Configuración de la API

Para que la aplicación funcione correctamente, necesitas obtener tu propia API KEY registrándote en los siguientes sitios web:

- [OpenAI](https://openai.com/): Aquí puedes obtener la API KEY necesaria para acceder a los servicios de OpenAI.
- [MongoDB](https://www.mongodb.com/): Regístrate en MongoDB para crear y administrar tu base de datos, y obtén las credenciales de conexión necesarias.
- [Cloudinary](https://cloudinary.com/): Regístrate en Cloudinary para gestionar tus recursos multimedia en la aplicación y obtén las credenciales de conexión necesarias.

## Variables de entorno

Antes de ejecutar la aplicación, debes configurar las siguientes variables de entorno creado un archivo llamado .env en la carpeta raiz del proyecto:

```javascript
- `MONGODB_URL`:"MongoDB_URL".
- `OPENAI_API_KEY`:"OpenAI_API_Key"
- `CLOUDINARY_CLOUD_NAME`:"Cloudinary_Account_Name"
- `CLOUDINARY_API_KEY`:"Cloudinary_Account_Name."
- `CLOUDINARY_API_SECRET`: "Cloudinary_Account_Name"
```

## Autor

_Las personas que ayudaron en el desarrollo de este proyecto:_

- **Hamid Escalera** - _Trabajo Inicial & Documentación_ - [HamidGX](https://github.com/HamidGX)

---

Desarrollado por [HamidGX](https://github.com/HamidGX) 🌌
