import pool from '../config/db.js';

class StudentModel {
    
    // Método para obtener el listado completo
    static async getAll() {
        // Diseñamos la consulta SQL pura
        const query = 'SELECT id, nombre, apellido, seccion, promedio FROM estudiantes ORDER BY apellido ASC;';
        
        // Ejecutamos la consulta a través de nuestro pool de conexiones
        const { rows } = await pool.query(query);
        
        // Retornamos únicamente las filas con los datos
        return rows;
    }

    // Método para registrar un nuevo ingreso
    static async create({ nombre, apellido, seccion, promedio }) {
        // Usamos parámetros ($1, $2) en lugar de inyectar variables directamente
        const query = `
            INSERT INTO estudiantes (nombre, apellido, seccion, promedio) 
            VALUES ($1, $2, $3, $4) 
            RETURNING *;
        `;
        
        // Mapeamos los valores exactos que reemplazarán a los parámetros
        const values = [nombre, apellido, seccion, promedio];
        
        const { rows } = await pool.query(query, values);
        
        // Retornamos el objeto recién creado (el índice 0 del resultado)
        return rows[0];
    }
}

export default StudentModel;