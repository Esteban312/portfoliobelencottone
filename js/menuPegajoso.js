window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.pageYOffset > 0) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.width = '100%';
        navbar.style.zIndex = '1000';
    } else {
        navbar.style.position = 'static';
    }
});


// Función para desplazarse suavemente hacia una sección
function scrollToSection(id) {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }

        // Selecciona todos los enlaces del menú de navegación
        const navLinks = document.querySelectorAll('#navbar a');

        // Agrega un event listener a cada enlace
        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                // Evita el comportamiento predeterminado del enlace
                event.preventDefault();

                // Obtiene el ID de la sección a la que se debe desplazar
                const targetId = this.getAttribute('href').substring(1);

                // Desplázate suavemente hacia la sección correspondiente
                scrollToSection(targetId);
            });
        });
        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
        });