$(function() {
    // Lógica para el test de seguridad del modal.
    $('#check-test-btn').on('click', function() {
        let score = 0;
        const resultsDiv = $('#test-results');

        // Revisar respuestas
        if ($('input[name="q1"]:checked').val() === 'correcto') {
            score++;
        }
        if ($('input[name="q2"]:checked').val() === 'correcto') {
            score++;
        }
        if ($('input[name="q3"]:checked').val() === 'correcto') {
            score++;
        }

        // Mostrar retroalimentación
        let feedbackMessage = '';
        if (score === 3) {
            feedbackMessage = '<div class="alert alert-success"><strong>¡Excelente! (3/3)</strong> Tienes muy buenos hábitos de seguridad. ¡Sigue así!</div>';
        } else if (score >= 1) {
            feedbackMessage = `<div class="alert alert-warning"><strong>Vas bien, pero puedes mejorar. (${score}/3)</strong> Revisa nuestros consejos para fortalecer tus puntos débiles.</div>`;
        } else {
            feedbackMessage = `<div class="alert alert-danger"><strong>¡Cuidado! (${score}/3)</strong> Necesitas repasar los conceptos básicos de seguridad. ¡Esta página es un buen comienzo!</div>`;
        }
        
        resultsDiv.html(feedbackMessage);
    });   

    // Limpiar el resultado del test cuando se cierra el modal
    $('#securityTestModal').on('hidden.bs.modal', function () {
        $('#test-results').html('');
        $('#test-form')[0].reset();
    });
})