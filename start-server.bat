@echo off
echo ========================================
echo    INICIANDO SERVIDOR DE FORMULARIO
echo ========================================
echo.
echo Antes de continuar, asegurate de:
echo 1. Tener Node.js instalado
echo 2. Haber creado el archivo .env con tus credenciales de Gmail
echo 3. Haber instalado las dependencias con: npm install
echo.
echo ========================================
echo.

REM Verificar si existe el archivo .env
if not exist ".env" (
    echo ❌ ERROR: No existe el archivo .env
    echo.
    echo Crea el archivo .env con el siguiente contenido:
    echo.
    echo EMAIL_USER=devalliance25@gmail.com
    echo EMAIL_PASS=tu_contraseña_de_aplicacion_gmail
    echo PORT=3000
    echo.
    echo Para obtener la contraseña de aplicación de Gmail:
    echo 1. Ve a tu cuenta de Google
    echo 2. Seguridad ^> Verificación en dos pasos
    echo 3. Contraseñas de aplicación
    echo 4. Genera una nueva para "Correo"
    echo.
    pause
    exit /b 1
)

REM Verificar si existen las dependencias
if not exist "node_modules" (
    echo 📦 Instalando dependencias...
    npm install
    if errorlevel 1 (
        echo ❌ Error al instalar dependencias
        pause
        exit /b 1
    )
)

echo ✅ Dependencias instaladas
echo 🚀 Iniciando servidor...
echo.
echo El formulario estará disponible en: http://localhost:3000
echo.
echo Para detener el servidor, presiona Ctrl+C
echo.

npm start

pause
