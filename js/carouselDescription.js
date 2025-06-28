$(document).ready(function() {
    // Constante de las descripciones a usar.
    const descripciones = [
        {
            titulo: "<h5>Ransomware: WannaCry (2017)</h5>", 
            texto:  "<p>Este ataque afectó a cientos de miles de computadoras en todo el mundo, cifrando archivos y exigiendo un rescate en Bitcoin.</p>"
        },
        {
            titulo: "<h5>Malware: Stuxnet (2010)</h5>",
            texto: "<p>Un gusano informático diseñado para sabotear instalaciones nucleares, demostrando el poder del ciberarmamento.</p>"
        },
        {
            titulo: "<h5>Phishing: Ataque a Google Docs (2017)</h5>",
            texto: "<p>Un sofisticado ataque de phishing que se disfrazó de una invitación de Google Docs para robar credenciales de millones de usuarios.</p>"
        }
    ];

    // Obtener elementos.
    const carousel = $("#casos-reales-carousel");
    const carouselDescripciones = $("#carousel-description");
    
    // Funcion para actualizar los textos.
    function updateDescripciones(index) {
        const descripcionActual = descripciones[index];
        
        // Se usa la nueva variable para acceder al título y al texto.
        if (descripcionActual) {
            carouselDescripciones.html(descripcionActual.titulo + descripcionActual.texto);
        }
    }

    // Actualizar el texto en la entrada.
    updateDescripciones(0);

    // Se activa cuando cambia el slide.
    carousel.on("slide.bs.carousel", function(event) {
        updateDescripciones(event.to);
    });
});