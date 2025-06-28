$(function() {
    $("#newsletter-form").on("submit", function(event) {
        // Evitar que la pagina se recargue.
        event.preventDefault();
        
        // Obtener elementos.
        const emailInput = $("#email-input");
        const feedbackDiv = $("#form-feedback");
        const email = emailInput.val();

        // Expresión regular para una validación simple de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            feedbackDiv.html('<div class="text-danger">Por favor, ingresa tu correo electrónico.</div>');
        } else if (!emailRegex.test(email)) {
            feedbackDiv.html('<div class="text-danger">Por favor, ingresa un correo válido.</div>');
        } else {
            feedbackDiv.html('<div class="text-success">¡Gracias por suscribirte!</div>');
            emailInput.val(''); // Limpia el campo
        }
    });
});