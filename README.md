🎓 API RESTful
![Node.js](https://img.shields.io/badge/Node.js-Natívo_ESM-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express-v5.0-000000?logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Base_de_Datos-4169E1?logo=postgresql)

📌 Descripción del Proyecto
Este proyecto es una API RESTful desarrollada con Node.js orientada a la gestión de registros académicos. Fue diseñada bajo una arquitectura modular y escalable, priorizando el uso de características nativas modernas (ECMAScript Modules, test runner nativo y gestión de variables de entorno sin librerías de terceros).

Este ejemplo permite administrar los datos de los estudiantes del la institución (nombres, secciones y promedios) garantizando la integridad de los datos mediante validaciones de negocio y middlewares de seguridad.

## 🏗️ Arquitectura y Estructura
El proyecto sigue el patrón de diseño arquitectónico **MVC (Modelo-Vista-Controlador)** adaptado para APIs, garantizando una estricta separación de responsabilidades:

* **Rutas (`/routes`):** Define los endpoints y verbos HTTP, actuando como la capa de acceso.
* **Controladores (`/controllers`):** Contiene la lógica de negocio, validaciones y la orquestación de respuestas HTTP.
* **Modelos (`/models`):** Capa de acceso a datos que ejecuta sentencias SQL parametrizadas para prevenir inyecciones SQL.
* **Middlewares (`/middlewares`):** Filtros de seguridad e interceptores (ej. Autenticación por API Key).

## 🚀 Tecnologías Utilizadas
* Core: Node.js (ESM, `--env-file`, `--watch`)
* Framework de Red: Express.js 5.0
* Base de Datos: PostgreSQL (paquete `pg` con gestión de `Pool` de conexiones)
* Control de Versiones: Git & GitHub

## ⚙️ Instalación y Despliegue Local

1. Clonar el repositorio:
   ~$ bash
   git clone [https://github.com/lordvitico/API-RESTful_2026.git] (https://github.com/lordvitico/API-RESTful_2026.git)
   cd api-restful-moderna

2. Instalar dependencias:
   ~$ npm install

3. Configurar el entorno:
   Crea un archivo .env en la raíz del proyecto. Necesitarás las siguientes variables:

    Fragmento de código
    PORT=3000
    NODE_ENV=development
    DB_HOST=localhost
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_NAME=sotillonotas_db

4. Ejecutar en modo desarrollador:
   ~$ npm run dev

📡 **Documentación de Endpoints (Rutas)**

1. Verificación del Sistema (Health Check)
    URL: /

    Método: GET

    Respuesta Exitosa (200 OK):

    JSON
    {
      "mensaje": "Motor de la API RESTful funcionando correctamente",
      "estado": "Operativo"
    }
2. Listar Estudiantes
    URL: /api/students/
    
    Método: GET
    
    Respuesta Exitosa (200 OK):
    
    JSON
    {
      "success": true,
      "count": 1,
      "data": [
        {
          "id": 1,
          "nombre": "Juan",
          "apellido": "Pérez",
          "seccion": "A",
          "promedio": 18.5
        }
      ]
    }
    3. Registrar Nuevo Estudiante (Ruta Protegida)
    URL: /api/students/
    
    Método: POST
    
    Headers Requeridos: x-api-key: [Tu_Clave_Secreta]
    
    Cuerpo (Body) esperado:
    
    JSON
    {
      "nombre": "María",
      "apellido": "Gómez",
      "seccion": "B",
      "promedio": 19.0
    }

Desarrollado con enfoque en código limpio, modularidad y rendimiento.

"Aquel que conoce al enemigo y se conoce a sí mismo, puede librar cien batallas sin peligro de derrota."
                                                        ~ Sun Tzu, estratega militar, autor del libro *"El arte de la guerra"*
