# 📧 Configuración de Gmail para el Formulario

## ⚠️ IMPORTANTE: Configuración de Seguridad

Para que el formulario funcione y envíe correos a `devalliance25@gmail.com`, necesitas configurar Gmail correctamente.

## 🔐 Paso 1: Activar Verificación en Dos Pasos

1. Ve a [myaccount.google.com](https://myaccount.google.com/)
2. Haz clic en **"Seguridad"** en el menú lateral
3. Busca **"Verificación en dos pasos"**
4. Haz clic en **"Comenzar"** y sigue los pasos
5. **IMPORTANTE**: Debes activar esto antes de continuar

## 🔑 Paso 2: Generar Contraseña de Aplicación

1. En la misma sección de **"Seguridad"**
2. Busca **"Contraseñas de aplicación"**
3. Haz clic en **"Contraseñas de aplicación"**
4. Selecciona **"Correo"** como aplicación
5. Haz clic en **"Generar"**
6. **COPIA** la contraseña de 16 caracteres que aparece

## 📝 Paso 3: Crear Archivo .env

En la raíz de tu proyecto, crea un archivo llamado `.env`:

```env
EMAIL_USER=devalliance25@gmail.com
EMAIL_PASS=tu_contraseña_de_16_caracteres
PORT=3000
```

**Ejemplo:**
```env
EMAIL_USER=devalliance25@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
PORT=3000
```

## 🚀 Paso 4: Probar el Formulario

1. **Instala dependencias:**
   ```bash
   npm install
   ```

2. **Inicia el servidor:**
   ```bash
   npm start
   ```

3. **Abre tu navegador:**
   - Ve a `http://localhost:3000`
   - Completa el formulario
   - Haz clic en "Enviar Consulta"

4. **Verifica tu correo:**
   - Revisa `devalliance25@gmail.com`
   - Deberías recibir un correo con la información del formulario

## 🔍 Solución de Problemas Comunes

### ❌ Error: "Invalid login"

**Causa:** Contraseña incorrecta o verificación en dos pasos no activada

**Solución:**
- Verifica que la verificación en dos pasos esté activada
- Asegúrate de usar la contraseña de aplicación, NO tu contraseña normal de Gmail
- La contraseña debe tener exactamente 16 caracteres

### ❌ Error: "Connection timeout"

**Causa:** Problemas de red o firewall

**Solución:**
- Verifica tu conexión a internet
- Asegúrate de que el puerto 3000 no esté bloqueado
- Desactiva temporalmente el firewall para pruebas

### ❌ Error: "Less secure app access"

**Causa:** Gmail bloqueando aplicaciones menos seguras

**Solución:**
- **NO** uses "Acceso de aplicaciones menos seguras"
- **SÍ** usa contraseñas de aplicación (más seguro)

## 📱 Prueba Rápida

Para probar rápidamente si funciona:

1. Abre la consola del navegador (F12)
2. Ejecuta:
   ```javascript
   fetch('/api/contact', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
           nombre: 'Test',
           email: 'test@test.com',
           mensaje: 'Prueba del formulario'
       })
   }).then(r => r.json()).then(console.log)
   ```

## 🎯 Verificación Final

✅ Verificación en dos pasos activada  
✅ Contraseña de aplicación generada  
✅ Archivo .env creado con credenciales correctas  
✅ Servidor corriendo en puerto 3000  
✅ Formulario enviando datos  
✅ Correo recibido en devalliance25@gmail.com  

## 🆘 Si Nada Funciona

1. **Verifica la consola del navegador** para errores
2. **Verifica la consola del servidor** para errores
3. **Confirma que Gmail esté configurado** correctamente
4. **Prueba con una cuenta de Gmail diferente** temporalmente

## 📞 Soporte

Si sigues teniendo problemas:

- **Email:** devalliance25@gmail.com
- **WhatsApp:** +54 261-249-7770

---

**💡 Consejo:** Las contraseñas de aplicación son más seguras que permitir acceso de aplicaciones menos seguras. ¡Úsalas siempre!
