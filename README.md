# 🚀 Landing de Negocio - DevAlliance

Landing page profesional con formulario de contacto funcional que envía correos electrónicos en tiempo real.

## ✨ Características

- **Formulario funcional**: Envía información directamente a tu correo
- **Diseño responsive**: Se adapta a todos los dispositivos
- **Animaciones modernas**: Efectos visuales atractivos
- **Validación en tiempo real**: Verificación de datos antes del envío
- **Notificaciones**: Feedback visual para el usuario
- **Backend Node.js**: Servidor robusto para manejar formularios

## 🛠️ Instalación y Configuración

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar correo Gmail

Para que el formulario funcione, necesitas configurar Gmail:

1. **Activar verificación en dos pasos** en tu cuenta de Google
2. **Generar contraseña de aplicación**:
   - Ve a [Google Account](https://myaccount.google.com/)
   - Seguridad → Verificación en dos pasos
   - Contraseñas de aplicación → Generar nueva contraseña
   - Selecciona "Correo" y copia la contraseña generada

### 3. Crear archivo .env

Crea un archivo `.env` en la raíz del proyecto:

```env
EMAIL_USER=devalliance25@gmail.com
EMAIL_PASS=tu_contraseña_de_aplicacion_generada
PORT=3000
```

### 4. Iniciar servidor

```bash
# Modo desarrollo (con recarga automática)
npm run dev

# Modo producción
npm start
```

El servidor estará disponible en: `http://localhost:3000`

## 📧 Cómo funciona el formulario

1. **Usuario completa el formulario** en la landing page
2. **Datos se validan** en el frontend (JavaScript)
3. **Información se envía** al servidor Node.js
4. **Servidor procesa** y envía correo usando Nodemailer
5. **Correo llega** a `devalliance25@gmail.com`
6. **Usuario recibe confirmación** en la página

## 📋 Campos del formulario

- **Nombre completo** (requerido)
- **Correo electrónico** (requerido)
- **Nombre de la empresa** (opcional)
- **Teléfono** (opcional)
- **Mensaje** (requerido)

## 🎨 Personalización

### Cambiar correo de destino

En `server.js`, línea 85:

```javascript
to: 'tu-nuevo-correo@gmail.com', // Cambia aquí tu correo
```

### Modificar diseño del correo

El HTML del correo está en `server.js` en la función `mailOptions.html`. Puedes personalizar:

- Colores y estilos
- Información mostrada
- Logo y branding
- Formato de fecha

### Cambiar puerto del servidor

En el archivo `.env`:

```env
PORT=8080  # O cualquier puerto que prefieras
```

## 🔧 Solución de problemas

### Error: "Invalid login"

- Verifica que la verificación en dos pasos esté activada
- Asegúrate de usar la contraseña de aplicación, no tu contraseña normal
- Revisa que el correo en `EMAIL_USER` sea correcto

### Error: "Connection timeout"

- Verifica tu conexión a internet
- Asegúrate de que el puerto 3000 no esté bloqueado
- Revisa que no haya firewall bloqueando la conexión

### El formulario no envía

- Abre la consola del navegador (F12) para ver errores
- Verifica que el servidor esté corriendo
- Confirma que la URL `/api/contact` esté accesible

## 📱 Uso en producción

Para usar en producción:

1. **Hosting**: Sube a servicios como Heroku, Vercel, o tu servidor
2. **Variables de entorno**: Configura las variables en tu hosting
3. **Dominio**: Apunta tu dominio al servidor
4. **SSL**: Asegúrate de tener HTTPS para seguridad

## 🚀 Tecnologías utilizadas

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Backend**: Node.js, Express.js
- **Correo**: Nodemailer
- **Estilos**: CSS personalizado con animaciones
- **Iconos**: Font Awesome

## 📞 Soporte

Si tienes problemas o preguntas:

- **Email**: devalliance25@gmail.com
- **WhatsApp**: +54 261-249-7770

## 📄 Licencia

MIT License - Libre para uso comercial y personal.

---

**DevAlliance** - Transformando negocios con tecnología de vanguardia 🚀
