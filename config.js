// Configuración del formulario de contacto
const CONFIG = {
    // Correo de destino donde recibirás las consultas
    EMAIL_DESTINO: 'devalliance25@gmail.com',
    
    // Configuración del servidor
    SERVER_PORT: process.env.PORT || 3000,
    
    // Configuración del formulario
    FORM_FIELDS: {
        nombre: { required: true, label: 'Nombre completo' },
        email: { required: true, label: 'Correo electrónico' },
        empresa: { required: false, label: 'Nombre de la empresa' },
        telefono: { required: false, label: 'Teléfono' },
        mensaje: { required: true, label: '¿En qué podemos ayudarte?' }
    },
    
    // Mensajes del sistema
    MESSAGES: {
        SUCCESS: '¡Consulta enviada exitosamente! Te contactaremos pronto.',
        ERROR: 'Error al enviar la consulta. Inténtalo nuevamente.',
        VALIDATION: {
            REQUIRED: 'Este campo es requerido',
            EMAIL_INVALID: 'El email no es válido',
            MIN_LENGTH: 'Este campo debe tener al menos {min} caracteres'
        }
    },
    
    // Configuración de notificaciones
    NOTIFICATIONS: {
        AUTO_HIDE_DELAY: 5000, // 5 segundos
        POSITION: 'top-right'
    }
};

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
