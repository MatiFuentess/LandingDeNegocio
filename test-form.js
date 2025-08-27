// Script de prueba para verificar el formulario
// Ejecuta este archivo para probar el envío de correos

const testFormSubmission = async () => {
    console.log('🧪 Iniciando prueba del formulario...');
    
    // Datos de prueba
    const testData = {
        nombre: 'Usuario de Prueba',
        email: 'test@example.com',
        empresa: 'Empresa Test S.A.',
        telefono: '+54 261-123-4567',
        mensaje: 'Esta es una consulta de prueba para verificar que el formulario funcione correctamente. Por favor, confirma que recibiste este mensaje.'
    };
    
    try {
        console.log('📤 Enviando datos de prueba:', testData);
        
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testData)
        });
        
        const result = await response.json();
        
        if (result.success) {
            console.log('✅ Prueba exitosa:', result.message);
            console.log('📧 Verifica tu correo en: devalliance25@gmail.com');
        } else {
            console.error('❌ Error en la prueba:', result.message);
        }
        
    } catch (error) {
        console.error('❌ Error de conexión:', error.message);
        console.log('💡 Asegúrate de que el servidor esté corriendo en http://localhost:3000');
    }
};

// Función para probar la validación del formulario
const testFormValidation = () => {
    console.log('🔍 Probando validación del formulario...');
    
    const testCases = [
        { nombre: '', email: 'test@test.com', mensaje: 'Test', expected: 'El nombre es requerido' },
        { nombre: 'Test', email: '', mensaje: 'Test', expected: 'El email es requerido' },
        { nombre: 'Test', email: 'invalid-email', mensaje: 'Test', expected: 'El email no es válido' },
        { nombre: 'Test', email: 'test@test.com', mensaje: '', expected: 'El mensaje es requerido' },
        { nombre: 'Test', email: 'test@test.com', mensaje: 'Test', expected: 'success' }
    ];
    
    testCases.forEach((testCase, index) => {
        console.log(`\n📝 Caso de prueba ${index + 1}:`);
        console.log('Datos:', testCase);
        
        // Simular validación
        const errors = [];
        if (!testCase.nombre.trim()) errors.push('El nombre es requerido');
        if (!testCase.email.trim()) errors.push('El email es requerido');
        if (!testCase.mensaje.trim()) errors.push('El mensaje es requerido');
        
        if (testCase.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(testCase.email)) {
            errors.push('El email no es válido');
        }
        
        if (errors.length === 0) {
            console.log('✅ Validación exitosa');
        } else {
            console.log('❌ Errores de validación:', errors);
        }
    });
};

// Función para verificar la conectividad del servidor
const testServerConnectivity = async () => {
    console.log('🌐 Probando conectividad del servidor...');
    
    try {
        const response = await fetch('/');
        if (response.ok) {
            console.log('✅ Servidor respondiendo correctamente');
            console.log('📱 Página principal accesible');
        } else {
            console.log('⚠️ Servidor respondiendo con estado:', response.status);
        }
    } catch (error) {
        console.error('❌ No se puede conectar al servidor');
        console.log('💡 Verifica que el servidor esté corriendo: npm start');
    }
};

// Función principal de pruebas
const runAllTests = async () => {
    console.log('🚀 Iniciando suite completa de pruebas...\n');
    
    // Probar conectividad
    await testServerConnectivity();
    
    // Probar validación
    testFormValidation();
    
    // Probar envío (solo si el servidor está corriendo)
    console.log('\n📧 ¿Quieres probar el envío real del formulario? (y/n)');
    // En un entorno real, esto se manejaría con input del usuario
    
    console.log('\n✨ Pruebas completadas. Revisa la consola para resultados.');
};

// Ejecutar pruebas si se llama directamente
if (typeof window !== 'undefined') {
    // En el navegador
    window.testForm = {
        testFormSubmission,
        testFormValidation,
        testServerConnectivity,
        runAllTests
    };
    
    console.log('🧪 Herramientas de prueba disponibles en window.testForm');
    console.log('💡 Ejecuta: testForm.runAllTests() para iniciar las pruebas');
} else {
    // En Node.js
    module.exports = {
        testFormSubmission,
        testFormValidation,
        testServerConnectivity,
        runAllTests
    };
}

// Auto-ejecutar si es el archivo principal
if (require.main === module) {
    runAllTests();
}
