// Sistema de partículas animadas
class ParticleSystem {
    constructor() {
        this.container = document.getElementById('particles');
        this.particles = [];
        this.particleCount = 80;
        this.colors = [
            '#667eea', '#764ba2', '#fbbf24', '#f59e0b', 
            '#10b981', '#3b82f6', '#8b5cf6', '#ef4444'
        ];
        this.init();
    }

    init() {
        this.createParticles();
        this.animate();
        this.handleResize();
    }

    createParticles() {
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Tamaños aleatorios
        const sizes = ['small', 'medium', 'large'];
        const sizeClass = sizes[Math.floor(Math.random() * sizes.length)];
        particle.classList.add(sizeClass);
        
        // Efecto glow aleatorio
        if (Math.random() > 0.7) {
            particle.classList.add('glow');
        }
        
        // Color aleatorio
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        particle.style.backgroundColor = color;
        particle.style.color = color;
        
        // Posición inicial aleatoria
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Velocidades aleatorias
        particle.vx = (Math.random() - 0.5) * 2;
        particle.vy = (Math.random() - 0.5) * 2;
        particle.vz = (Math.random() - 0.5) * 0.5;
        
        // Duración de animación aleatoria
        const duration = 4 + Math.random() * 8;
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = Math.random() * 4 + 's';
        
        this.container.appendChild(particle);
        this.particles.push(particle);
    }

    animate() {
        this.particles.forEach(particle => {
            const rect = particle.getBoundingClientRect();
            const containerRect = this.container.getBoundingClientRect();
            
            // Actualizar posición
            let left = parseFloat(particle.style.left);
            let top = parseFloat(particle.style.top);
            
            left += particle.vx * 0.1;
            top += particle.vy * 0.1;
            
            // Rebotar en los bordes
            if (left <= 0 || left >= 95) {
                particle.vx *= -1;
                left = Math.max(0, Math.min(95, left));
            }
            if (top <= 0 || top >= 95) {
                particle.vy *= -1;
                top = Math.max(0, Math.min(95, top));
            }
            
            particle.style.left = left + '%';
            particle.style.top = top + '%';
        });
        
        requestAnimationFrame(() => this.animate());
    }

    handleResize() {
        window.addEventListener('resize', () => {
            // Recrear partículas en nuevas posiciones
            this.particles.forEach(particle => particle.remove());
            this.particles = [];
            this.createParticles();
        });
    }
}

// Sistema de efectos visuales avanzados
class VisualEffects {
    constructor() {
        this.init();
    }

    init() {
        this.initParallax();
        this.initMouseEffects();
        this.initScrollProgress();
        this.addGlobalStyles();
    }

    initParallax() {
        const parallaxElements = document.querySelectorAll('.hero-image, .hero-visual');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            
            parallaxElements.forEach(element => {
                element.style.transform = `translateY(${rate}px)`;
            });
        });
    }

    initMouseEffects() {
        // Efecto cursor personalizado
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, #667eea, transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });

        // Efecto hover en elementos interactivos
        const interactiveElements = document.querySelectorAll('a, button, .feature-card, .testimonial-card');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursor.style.background = 'radial-gradient(circle, #fbbf24, transparent)';
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = 'radial-gradient(circle, #667eea, transparent)';
            });
        });
    }

    initScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0;
            height: 3px;
            background: linear-gradient(90deg, #667eea, #764ba2, #fbbf24);
            z-index: 10001;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = scrollProgress + '%';
        });
    }

    addGlobalStyles() {
        const styles = document.createElement('style');
        styles.textContent = `
            @keyframes confettiFall {
                to {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
            
            .form-group.focused label {
                color: #667eea;
                transform: translateY(-2px);
            }
            
            .form-group.error input,
            .form-group.error textarea {
                border-color: #ef4444;
                box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
            }
            
            .form-group.success input,
            .form-group.success textarea {
                border-color: #10b981;
                box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                line-height: 1;
                opacity: 0.8;
                transition: opacity 0.3s ease;
            }
            
            .notification-close:hover {
                opacity: 1;
            }
            
            /* Ocultar cursor por defecto en elementos interactivos */
            a, button, .feature-card, .testimonial-card {
                cursor: none;
            }
            
            /* Animación para elementos que entran en viewport */
            .animated {
                animation: slideInUp 0.8s ease-out;
            }
            
            @keyframes slideInUp {
                from {
                    opacity: 0;
                    transform: translateY(50px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            /* Mejoras en el menú móvil */
            @media (max-width: 768px) {
                .nav-menu.active {
                    animation: slideDown 0.4s ease-out;
                }
                
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            }
        `;
        document.head.appendChild(styles);
    }
}

// Sistema de animaciones de entrada
class AnimationObserver {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        this.createObserver();
        this.observeElements();
        this.initCounterAnimations();
    }

    createObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.classList.add('animated');
                }
            });
        }, this.observerOptions);
    }

    observeElements() {
        const animatedElements = document.querySelectorAll(
            '.feature-card, .testimonial-card, .section-header, .form-container'
        );
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            this.observer.observe(el);
        });
    }

    initCounterAnimations() {
        const stats = document.querySelectorAll('.stat');
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    const statNumber = entry.target.querySelector('h3');
                    this.animateCounter(statNumber);
                }
            });
        }, { threshold: 0.5 });

        stats.forEach(stat => statsObserver.observe(stat));
    }

    animateCounter(element) {
        const target = parseInt(element.textContent.replace(/\D/g, ''));
        const suffix = element.textContent.replace(/\d/g, '');
        let current = 0;
        const increment = target / 60; // 60 frames para la animación
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                element.textContent = Math.floor(current) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + suffix;
            }
        };
        
        updateCounter();
    }
}

// Sistema de formulario mejorado
class ContactFormHandler {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (this.form) {
            this.handleSubmission();
            this.handleInputAnimations();
        }
    }

    handleSubmission() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(this.form);
            const data = {
                nombre: formData.get('nombre'),
                email: formData.get('email'),
                empresa: formData.get('empresa'),
                telefono: formData.get('telefono'),
                mensaje: formData.get('mensaje')
            };
            
            // Validación
            if (!this.validateForm(data)) {
                return;
            }
            
            // Simular envío
            this.submitForm(data);
        });
    }

    validateForm(data) {
        const errors = [];
        
        // Validación estricta - TODOS los campos son obligatorios
        if (!data.nombre || !data.nombre.trim()) {
            errors.push('El nombre es obligatorio');
        }
        
        if (!data.email || !data.email.trim()) {
            errors.push('El email es obligatorio');
        } else if (!this.isValidEmail(data.email)) {
            errors.push('El formato del email no es válido');
        }
        
        if (!data.empresa || !data.empresa.trim()) {
            errors.push('El nombre de la empresa es obligatorio');
        }
        
        if (!data.telefono || !data.telefono.trim()) {
            errors.push('El teléfono es obligatorio');
        }
        
        if (!data.mensaje || !data.mensaje.trim()) {
            errors.push('El mensaje es obligatorio');
        } else if (data.mensaje.trim().length < 10) {
            errors.push('El mensaje debe tener al menos 10 caracteres');
        }
        
        if (errors.length > 0) {
            this.showNotification(errors.join('. '), 'error');
            return false;
        }
        
        return true;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async submitForm(data) {
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Estado de carga
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        try {
            // Enviar datos al servidor
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (result.success) {
                this.showNotification(result.message, 'success');
                this.form.reset();
                
                // Efecto de confetti
                this.showConfetti();
                
                // Log para debugging
                console.log('✅ Formulario enviado exitosamente:', data);
            } else {
                throw new Error(result.message || 'Error en el servidor');
            }
            
        } catch (error) {
            console.error('❌ Error al enviar formulario:', error);
            this.showNotification(
                error.message || 'Error al enviar la consulta. Inténtalo nuevamente.', 
                'error'
            );
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    handleInputAnimations() {
        const inputs = this.form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            // Efecto de focus mejorado
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
            
            // Validación en tiempo real
            input.addEventListener('input', () => {
                this.validateInput(input);
            });
        });
    }

    validateInput(input) {
        const value = input.value.trim();
        const inputGroup = input.parentElement;
        
        // Remover estados anteriores
        inputGroup.classList.remove('error', 'success');
        
        // Validación estricta para cada campo
        if (input.hasAttribute('required') && !value) {
            inputGroup.classList.add('error');
        } else if (input.type === 'email' && value && !this.isValidEmail(value)) {
            inputGroup.classList.add('error');
        } else if (input.name === 'mensaje' && value && value.length < 10) {
            inputGroup.classList.add('error');
        } else if (value) {
            inputGroup.classList.add('success');
        }
        
        // Mostrar mensaje de error específico
        this.showFieldError(input, value);
    }
    
    showFieldError(input, value) {
        const inputGroup = input.parentElement;
        let errorMessage = '';
        
        if (input.hasAttribute('required') && !value) {
            switch(input.name) {
                case 'nombre':
                    errorMessage = 'El nombre es obligatorio';
                    break;
                case 'email':
                    errorMessage = 'El email es obligatorio';
                    break;
                case 'empresa':
                    errorMessage = 'La empresa es obligatoria';
                    break;
                case 'telefono':
                    errorMessage = 'El teléfono es obligatorio';
                    break;
                case 'mensaje':
                    errorMessage = 'El mensaje es obligatorio';
                    break;
            }
        } else if (input.type === 'email' && value && !this.isValidEmail(value)) {
            errorMessage = 'Formato de email inválido';
        } else if (input.name === 'mensaje' && value && value.length < 10) {
            errorMessage = 'El mensaje debe tener al menos 10 caracteres';
        }
        
        // Mostrar/ocultar mensaje de error
        let errorElement = inputGroup.querySelector('.field-error');
        if (errorMessage && !errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            errorElement.style.cssText = `
                color: #ef4444;
                font-size: 0.875rem;
                margin-top: 0.25rem;
                display: flex;
                align-items: center;
                gap: 0.25rem;
            `;
            errorElement.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${errorMessage}`;
            inputGroup.appendChild(errorElement);
        } else if (!errorMessage && errorElement) {
            errorElement.remove();
        }
    }

    showConfetti() {
        const colors = ['#667eea', '#764ba2', '#fbbf24', '#f59e0b', '#10b981'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                this.createConfettiPiece(colors[Math.floor(Math.random() * colors.length)]);
            }, i * 10);
        }
    }

    createConfettiPiece(color) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            left: ${Math.random() * 100}vw;
            top: -10px;
            animation: confettiFall 3s ease-out forwards;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle'
        };
        
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#3b82f6'
        };
        
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${icons[type]}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">&times;</button>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${colors[type]};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            max-width: 400px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            transform: translateX(100%);
            transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            backdrop-filter: blur(10px);
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            this.hideNotification(notification);
        });
        
        setTimeout(() => {
            this.hideNotification(notification);
        }, 5000);
    }

    hideNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 400);
    }
}

// Función para manejar las preguntas frecuentes
function toggleFAQ(element) {
    const faqItem = element.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Cerrar todas las preguntas
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Abrir la pregunta seleccionada si no estaba activa
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Funciones de navegación suave mejoradas (SIN desplazamiento automático)
function scrollToForm() {
    const element = document.getElementById('contacto');
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function scrollToServices() {
    const element = document.getElementById('servicios');
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Sistema de navegación moderna
class ModernNavigation {
    constructor() {
        this.header = document.getElementById('header');
        this.navToggle = document.getElementById('nav-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-menu a');
        this.isMenuOpen = false;
        this.init();
    }

    init() {
        this.handleScrollEffects();
        this.handleMobileMenu();
        this.handleSmoothScrolling();
        this.handleActiveLinks();
    }

    handleScrollEffects() {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Agregar clase scrolled para efecto glassmorphism
            if (currentScrollY > 50) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
            
            // Ocultar/mostrar navbar en scroll
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                this.header.style.transform = 'translateY(-100%)';
            } else {
                this.header.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        });
    }

    handleMobileMenu() {
        this.navToggle.addEventListener('click', () => {
            this.toggleMenu();
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!this.header.contains(e.target) && this.isMenuOpen) {
                this.closeMenu();
            }
        });

        // Cerrar menú en enlaces
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        this.navMenu.classList.toggle('active');
        this.navToggle.classList.toggle('active');
        
        // Prevenir scroll cuando el menú está abierto
        document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    }

    closeMenu() {
        this.isMenuOpen = false;
        this.navMenu.classList.remove('active');
        this.navToggle.classList.remove('active');
        document.body.style.overflow = '';
    }

    handleSmoothScrolling() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = this.header.offsetHeight;
                    const elementPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    handleActiveLinks() {
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY + this.header.offsetHeight + 50;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    this.navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }
}

// Sistema de Header Sticky con transformación
class StickyHeader {
    constructor() {
        this.header = document.getElementById('header');
        this.scrollThreshold = 100; // Píxeles de scroll para activar la transformación
        this.init();
    }

    init() {
        this.handleScroll();
        this.handleResize();
    }

    handleScroll() {
        // Mantener el header siempre en estado compacto
        this.header.classList.add('scrolled');
        
        // Opcional: Si quieres que cambie solo en móviles, descomenta esto:
        /*
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            
            if (scrollY > this.scrollThreshold) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
        });
        */
    }

    handleResize() {
        window.addEventListener('resize', () => {
            // Ajustar threshold en dispositivos móviles
            if (window.innerWidth <= 768) {
                this.scrollThreshold = 50;
            } else {
                this.scrollThreshold = 100;
            }
        });
    }
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar todos los sistemas
    new ParticleSystem();
    new ModernNavigation();
    new AnimationObserver();
    new ContactFormHandler();
    new VisualEffects();
    new StickyHeader();
    
    // Preloader opcional
    const preloader = document.createElement('div');
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #0f0f23, #1a1a2e);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    `;
    preloader.innerHTML = `
        <div style="text-align: center; color: white;">
            <i class="fas fa-rocket" style="font-size: 3rem; color: #667eea; animation: bounce 1s infinite;"></i>
            <p style="margin-top: 1rem; font-size: 1.2rem;">Cargando experiencia...</p>
        </div>
        <style>
            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                40% { transform: translateY(-20px); }
                60% { transform: translateY(-10px); }
            }
        </style>
    `;
    
    document.body.appendChild(preloader);
    
    // Ocultar preloader cuando todo esté listo
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 1000);
    });
});

// Funciones utilitarias exportadas
window.TechSolutions = {
    scrollToForm,
    scrollToServices,
    toggleFAQ,
    
    // API para personalización externa
    addParticle: (color, size = 'medium') => {
        const container = document.getElementById('particles');
        if (container) {
            const particle = document.createElement('div');
            particle.className = `particle ${size}`;
            particle.style.backgroundColor = color;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            container.appendChild(particle);
        }
    },
    
    showNotification: (message, type = 'info') => {
        const formHandler = new ContactFormHandler();
        formHandler.showNotification(message, type);
    }
}; 