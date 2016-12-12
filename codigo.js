$(document).ready(function () {

    /* 2.2) Animación del inicio:
    
        En esta parte, la dificultad ha sido averiguar que es imprescindible configurar
        la propiedad 'display' como 'relative' y 'absolute' para aquellos elementos 
        a manipular, así como sus contenedores.
    */
    $("span:first-child").slideDown(1500);
    $("span:nth-child(3)").delay(1500);
    $("span:nth-child(3)").slideDown(2000);
    $("#portada").delay(6500);
    $("#portada").fadeOut(1500);
    $("#hueso").delay(3500);
    $("#hueso").fadeIn(800);
    $("#hueso").animate({
        right: '800px'
    }, 3000);
    $("#perro").delay(3500);
    $("#perro").fadeIn(800);
    $("#perro").animate({
        right: '800px'
    }, 3500);

    /* FIN 2.2) */

    /* 2.3) Botones jQuery de internet. */

    /* http://codepen.io/lsburton/pen/BhLaj */
    $(".circle").click(function () {
        $(".box").toggleClass('purple');
    });

    /* http://codepen.io/rtm/pen/zBGGXJ */
    $('.btn').click(function () {
        $('.hidden-banner').toggle('slow');
    });

    /* FIN: 2.3) */

    /* 2.4) Animación del Libro */
    $("#pulsar").click(function () {
        if ($(".animacion").is(":hidden")) {
            $(".animacion").slideDown("slow");
        } else {
            $(".animacion").slideUp("slow");
        }
    });
    /* FIN: 2.4) Animación del Libro */

});