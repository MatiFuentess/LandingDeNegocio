const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Servir archivos estáticos desde el directorio actual

// Configuración del transportador de correo
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'devalliance25@gmail.com',
        pass: process.env.EMAIL_PASS || 'tu_contraseña_de_aplicacion'
    }
});

// Ruta para el formulario de contacto
app.post('/api/contact', async (req, res) => {
    try {
        const { nombre, email, empresa, telefono, mensaje } = req.body;

        // Validación básica
        if (!nombre || !email || !mensaje) {
            return res.status(400).json({ 
                success: false, 
                message: 'Nombre, email y mensaje son requeridos' 
            });
        }

        // Configuración del correo
        const mailOptions = {
            from: process.env.EMAIL_USER || 'devalliance25@gmail.com',
            to: 'devalliance25@gmail.com', // Tu correo donde recibirás las consultas
            subject: `Nueva consulta de ${nombre} - DevAlliance`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
                        <h1 style="margin: 0; font-size: 24px;">🚀 Nueva Consulta DevAlliance</h1>
                    </div>
                    
                    <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
                        <h2 style="color: #333; margin-bottom: 20px;">Información del Cliente</h2>
                        
                        <div style="margin-bottom: 15px;">
                            <strong style="color: #667eea;">👤 Nombre:</strong>
                            <span style="margin-left: 10px;">${nombre}</span>
                        </div>
                        
                        <div style="margin-bottom: 15px;">
                            <strong style="color: #667eea;">📧 Email:</strong>
                            <span style="margin-left: 10px;">${email}</span>
                        </div>
                        
                        ${empresa ? `
                        <div style="margin-bottom: 15px;">
                            <strong style="color: #667eea;">🏢 Empresa:</strong>
                            <span style="margin-left: 10px;">${empresa}</span>
                        </div>
                        ` : ''}
                        
                        ${telefono ? `
                        <div style="margin-bottom: 15px;">
                            <strong style="color: #667eea;">📱 Teléfono:</strong>
                            <span style="margin-left: 10px;">${telefono}</span>
                        </div>
                        ` : ''}
                        
                        <div style="margin-bottom: 20px;">
                            <strong style="color: #667eea;">💬 Mensaje:</strong>
                            <div style="margin-top: 10px; padding: 15px; background: white; border-left: 4px solid #667eea; border-radius: 5px;">
                                ${mensaje.replace(/\n/g, '<br>')}
                            </div>
                        </div>
                        
                        <div style="background: #e8f4fd; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                            <p style="margin: 0; color: #1e40af;">
                                <strong>📅 Fecha:</strong> ${new Date().toLocaleString('es-AR', { 
                                    timeZone: 'America/Argentina/Buenos_Aires',
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </p>
                        </div>
                    </div>
                    
                    <div style="text-align: center; margin-top: 20px; color: #666; font-size: 14px;">
                        <p>Este correo fue enviado desde el formulario de contacto de DevAlliance</p>
                        <p>🚀 Transformando negocios con tecnología de vanguardia</p>
                    </div>
                </div>
            `
        };

        // Enviar el correo
        await transporter.sendMail(mailOptions);

        // Respuesta de éxito
        res.json({ 
            success: true, 
            message: 'Consulta enviada exitosamente. Te contactaremos pronto.' 
        });

    } catch (error) {
        console.error('Error al enviar correo:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error al enviar la consulta. Inténtalo nuevamente.' 
        });
    }
});

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor funcionando en http://localhost:${PORT}`);
    console.log(`📧 Formulario configurado para enviar correos a: devalliance25@gmail.com`);
});

// Manejo de errores
process.on('unhandledRejection', (err) => {
    console.error('Error no manejado:', err);
    process.exit(1);
});
