var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000, // Tiempo entre cada diapositiva (en milisegundos)
        disableOnInteraction: false, // No desactiva el autoplay cuando el usuario interactúa
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 800, // Transición más lenta (800 ms)
});

const hamburguesa = document.getElementById("hamburguesa");
const menu = document.getElementById("menu");

hamburguesa.addEventListener("click", function() {
  menu.classList.toggle("active"); // Muestra/oculta el menú
  hamburguesa.classList.toggle("active"); // Cambia el ícono de la hamburguesa
});

// Función para animar la aparición de las tarjetas cuando entran en la vista
const animarPlanes = () => {
    const planes = document.querySelectorAll('.plan');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Deja de observar después de que se ha mostrado
            }
        });
    }, {
        threshold: 0.5 // El 50% de la tarjeta debe ser visible para que se active la animación
    });

    // Observamos cada plan individualmente
    planes.forEach(plan => observer.observe(plan));
};

// Función para animar el título
const animarTitulo = () => {
    const titulo = document.querySelector('.titulo-seccion');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                titulo.classList.add('titulo-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(titulo);
};

// Llamamos a las funciones cuando el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
    animarPlanes();
    animarTitulo();
});



