# 🚀 INSTRUCCIONES PARA CONFIGURAR EL FORMULARIO

## ❌ PROBLEMA ACTUAL
El formulario muestra "No se pudo contactar al servidor" porque:
1. El servidor Node.js no está corriendo
2. Faltan las credenciales de Gmail
3. El envío de correos está deshabilitado

## ✅ SOLUCIÓN PASO A PASO

### 1. INSTALAR NODE.JS
- Ve a [nodejs.org](https://nodejs.org)
- Descarga e instala la versión LTS
- Verifica la instalación: `node --version`

### 2. CREAR ARCHIVO .ENV
Crea un archivo llamado `.env` en la carpeta raíz con este contenido:

```env
EMAIL_USER=devalliance25@gmail.com
EMAIL_PASS=tu_contraseña_de_aplicacion_gmail
PORT=3000
```

### 3. OBTENER CONTRASEÑA DE APLICACIÓN DE GMAIL
**IMPORTANTE:** No uses tu contraseña normal de Gmail

1. Ve a [myaccount.google.com](https://myaccount.google.com)
2. Seguridad → Verificación en dos pasos (actívala si no está activa)
3. Contraseñas de aplicación
4. Selecciona "Correo" y genera una nueva contraseña
5. Copia esa contraseña y pégala en el archivo .env

### 4. INSTALAR DEPENDENCIAS
Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

### 5. INICIAR EL SERVIDOR
**OPCIÓN A:** Usar el script automático
- Haz doble clic en `start-server.bat`

**OPCIÓN B:** Comando manual
```bash
npm start
```

### 6. VERIFICAR FUNCIONAMIENTO
- El servidor debe mostrar: "🚀 Servidor funcionando en http://localhost:3000"
- Abre tu navegador en: http://localhost:3000
- Completa el formulario y envíalo
- Deberías ver: "Consulta enviada exitosamente"

## 🔧 SOLUCIÓN DE PROBLEMAS

### Error: "No se pudo contactar al servidor"
- **Causa:** El servidor no está corriendo
- **Solución:** Ejecuta `npm start` o `start-server.bat`

### Error: "Authentication failed"
- **Causa:** Credenciales incorrectas en .env
- **Solución:** Verifica EMAIL_USER y EMAIL_PASS

### Error: "Module not found"
- **Causa:** Dependencias no instaladas
- **Solución:** Ejecuta `npm install`

### Error: "Port already in use"
- **Causa:** Puerto 3000 ocupado
- **Solución:** Cambia PORT en .env a 3001

## 📧 VERIFICAR ENVÍO DE CORREOS

1. Completa el formulario con datos de prueba
2. Haz clic en "Enviar Consulta"
3. Verifica tu correo en devalliance25@gmail.com
4. Revisa la consola del servidor para logs

## 🆘 CONTACTO
Si tienes problemas, contacta a:
- Email: devalliance25@gmail.com
- WhatsApp: +54 261-249-7770

## 📝 NOTAS IMPORTANTES

- **NUNCA** compartas tu archivo .env
- **NUNCA** uses tu contraseña normal de Gmail
- El servidor debe estar corriendo para que funcione el formulario
- El formulario tiene fallback a correo y WhatsApp si falla el servidor
