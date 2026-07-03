import pg from 'pg';

// Extraemos la clase Pool del paquete pg
const { Pool } = pg;

// Creamos una "Piscina" (Pool) de conexiones utilizando nuestras variables de entorno
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 5432, 
});

// Función asíncrona para probar la conexión al arrancar el servidor
export const connectDB = async () => {
    try {
        const client = await pool.connect();
        console.log(`🗄️  Conectado exitosamente a la base de datos: ${process.env.DB_NAME}`);
        client.release();
    } catch (error) {
        console.error('❌ Error fatal conectando a la base de datos:', error.message);
        process.exit(1); 
    }
};

// Exportamos el pool para poder usarlo en nuestros controladores
export default pool;