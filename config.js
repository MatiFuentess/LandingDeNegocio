// Configuración de EmailJS
// IMPORTANTE: Reemplaza las claves de ejemplo con las tuyas reales

const EMAILJS_CONFIG = {
    // 🔑 Tu Public Key de EmailJS
    // Obtener en: Account → API Keys
    PUBLIC_KEY: "X4fgh21iQZ6wUU6DI", // Ejemplo: "user_abc123def456"
    
    // 📧 ID del servicio de Gmail
    // Obtener en: Email Services → Gmail
    SERVICE_ID: "service_lqd3ko9", // Ejemplo: "service_xyz789"
    
    // 📝 ID de la plantilla de email
    // Obtener en: Email Templates → Tu plantilla
    TEMPLATE_ID: "template_9qu5m7k", // Ejemplo: "template_abc123"
    
    // 📮 Email donde recibirás las consultas
    TO_EMAIL: "devalliance25@gmail.com"
};

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EMAILJS_CONFIG;
}

// ⚠️ INSTRUCCIONES IMPORTANTES:
// 1. Ve a emailjs.com y crea una cuenta
// 2. Configura un servicio de Gmail
// 3. Crea una plantilla de email
// 4. Obtén tu Public Key
// 5. Reemplaza las claves de ejemplo con las tuyas reales
// 6. ¡Tu formulario funcionará automáticamente!
