import StudentModel from '../models/student.js';

class StudentController {
    
    // Controlador para listar todos los estudiantes
    static async getAllStudents(req, res) {
        try {
            // Le pedimos los datos al modelo (operación asíncrona)
            const students = await StudentModel.getAll();
            
            // Respondemos al cliente con un estado 200 (OK) y los datos estructurados
            return res.status(200).json({
                success: true,
                count: students.length,
                data: students
            });
        } catch (error) {
            // Gestión defensiva: si la base de datos falla, atrapamos el error
            return res.status(500).json({
                success: false,
                message: 'Error interno en el servidor al obtener los registros',
                error: error.message
            });
        }
    }

    // Controlador para registrar un nuevo estudiante
    static async createStudent(req, res) {
        try {
            // Extraemos los datos que el cliente envió en el cuerpo de la petición (gracias a express.json())
            const { nombre, apellido, seccion, promedio } = req.body;

            // --- REGLA DE NEGOCIO / VALIDACIÓN ---
            // Validamos que los campos obligatorios existan antes de molestar a la base de datos
            if (!nombre || !apellido || !seccion) {
                return res.status(400).json({
                    success: false,
                    message: 'Faltan campos obligatorios: nombre, apellido y seccion son requeridos.'
                });
            }

            // Si los datos son correctos, le enviamos el objeto al modelo para que lo inserte
            const newStudent = await StudentModel.create({ nombre, apellido, seccion, promedio });

            // Respondemos con un estado 201 (Creado con éxito) y el registro generado
            return res.status(201).json({
                success: true,
                message: 'Estudiante registrado exitosamente',
                data: newStudent
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error interno en el servidor al registrar el estudiante',
                error: error.message
            });
        }
    }
}

export default StudentController;