// Middleware para verificar la autorización del usuario
export const verifyAdmin = (req, res, next) => {
    // 1. Extraemos el "token" o clave de seguridad que el cliente debe enviar en las cabeceras (Headers)
    const apiKey = req.headers['x-api-key'];

    // 2. Definimos nuestra clave secreta maestra (En producción, esto debe venir del process.env.API_KEY)
    const SECRET_KEY = 'sotillo_admin_2026';

    // 3. Lógica de validación (El punto de control)
    if (!apiKey) {
        // Si no envía ninguna clave, le negamos el paso inmediatamente (Error 401: No autorizado)
        return res.status(401).json({
            success: false,
            message: 'Acceso denegado: Se requiere una clave de autenticación.'
        });
    }

    if (apiKey !== SECRET_KEY) {
        // Si la clave es incorrecta, también lo bloqueamos (Error 403: Prohibido)
        return res.status(403).json({
            success: false,
            message: 'Acceso denegado: Credenciales inválidas.'
        });
    }

    // 4. Si todo es correcto, ejecutamos next()
    // Esto significa: "Aprobó el control de calidad, déjalo pasar al Controlador"
    next();
};