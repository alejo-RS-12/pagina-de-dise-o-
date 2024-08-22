document.addEventListener('DOMContentLoaded', function () {
    const blckntButtons = document.querySelectorAll('.boton-blcknt');
    
    blckntButtons.forEach(function(blcknthButton) {
        blcknthButton.addEventListener('click', function (event) {
            event.preventDefault();
            const targetUrl = blcknthButton.parentElement.href;
            
            document.body.classList.add('fade-out');

            setTimeout(function () {
                window.location.href = targetUrl;
            }, 1000); // Ajuste el tiempo de espera según la duración de la animación CSS
        });
    });
});
