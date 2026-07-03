import express from 'express';

// Inicializamos la instancia principal del servidor
const app = express();

// Definimos el puerto leyendo la variable de entorno nativa. 
// Si no existe, usamos el 3000 como respaldo.
const PORT = process.env.PORT || 3000;

// ==========================================
// 1. MIDDLEWARES GLOBALES
// ==========================================
// Esta línea es crucial: le enseña a la API a leer los datos estructurados 
// en formato JSON que los clientes envíen en el cuerpo (body) de sus peticiones.
app.use(express.json());


// ==========================================
// 2. RUTAS PRINCIPALES
// ==========================================
// Ruta base o "Health Check". Sirve para verificar rápidamente si el servidor está vivo.
app.get('/', (req, res) => {
    res.status(200).json({ 
        mensaje: 'Motor de la API RESTful funcionando correctamente',
        estado: 'Operativo',
        entorno: process.env.NODE_ENV
    });
});

// (Espacio reservado para conectar nuestros enrutadores modulares más adelante)
// Ejemplo de lo que haremos:
// import studentRoutes from './routes/studentRoutes.js';
// app.use('/api/students', studentRoutes);


// ==========================================
// 3. INICIALIZACIÓN DEL SERVIDOR
// ==========================================
app.listen(PORT, () => {
    console.log(`🚀 Servidor inicializado con éxito`);
    console.log(`📡 Escuchando en el puerto: http://localhost:${PORT}`);
    console.log(`⚙️  Entorno de ejecución: ${process.env.NODE_ENV}`);
});