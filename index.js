window.addEventListener('DOMContentLoaded', function() {
    let animacion = document.getElementById('inicio');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight; 

    if (posicionObj1 < tamañoDePantalla) {
        animacion.style.animation = 'mover 1s ease-out';
        animacion.style.opacity = '1';
    }
});

window.addEventListener('scroll', function() {
    let animacion = document.getElementById('flecha');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight; 
    

    if (posicionObj1 < tamañoDePantalla) {
        animacion.style.animation = 'mover 1s ease';
        animacion.style.opacity = '1';
    }
});
