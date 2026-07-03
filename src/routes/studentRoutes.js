import { Router } from 'express';
import StudentController from '../controllers/studentController.js';

// Inicializamos el enrutador de Express
const router = Router();

// ==========================================
// DEFINICIÓN DE ENDPOINTS
// ==========================================

// Ruta para obtener la lista de todos los estudiantes
// Método HTTP: GET
// URL final será: /api/students/
router.get('/', StudentController.getAllStudents);

// Ruta para registrar un nuevo estudiante
// Método HTTP: POST
// URL final será: /api/students/
router.post('/', StudentController.createStudent);

// Exportamos el enrutador para conectarlo en app.js
export default router;