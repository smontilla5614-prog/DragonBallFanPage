// Esperamos a que todo el contenido de la página (HTML, CSS) se haya cargado
document.addEventListener("DOMContentLoaded", () => {

    // 1. Seleccionamos la imagen de Goku
    // Usamos el selector ".hero-visual img" que ya tienes en tu HTML y CSS
    const goku = document.querySelector(".hero-visual img");
    const gokuSound = document.getElementById("goku-sound");

    // 2. Añadimos un "escuchador" de evento para cuando el ratón se mueva
    document.addEventListener("mousemove", (e) => {
        // Obtenemos la posición X e Y del ratón en la pantalla
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Obtenemos el punto central de la ventana del navegador
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Calculamos cuánto se ha movido el ratón desde el centro
        // Dividimos por un número grande (ej. 25) para que el movimiento sea sutil y no exagerado
        const moveX = (mouseX - centerX) / 25;
        const moveY = (mouseY - centerY) / 25;

        // 3. Aplicamos ese movimiento a la imagen de Goku usando 'transform'
        // El 'rotate(0.001deg)' es un pequeño truco para que la animación sea más suave
        goku.style.transform = `translate(${moveX}px, ${moveY}px) rotate(0.001deg)`;
    });

    goku.addEventListener("click", () => {
        // 1. Reseteamos el sonido al principio (por si el usuario hace clic muy rápido)
        gokuSound.currentTime = 0;

        // 2. ¡Reproducimos el sonido!
        gokuSound.play();
    });
});