/* $(window).on('scroll', function(){
    if($(window).scrollTop() > 900 ) {
        // Navigation
        $('nav.navbar').addClass('bg-white');
        // Back to top Button
        $('#backtotopbutton').addClass('d-inline');
    } else{
        // Navigation back
        $('nav.navbar').removeClass('bg-white');
        $('#backtotopbutton').removeClass('d-inline')
    }
}); */
/* Ende Klannsenänderung */

/* Start Smooth scroll */
// Sicherstellen, dass alle DOM-Elemente geladen sind
$(document).ready(function() {
    $('a.smooth').on('mouseover', function(event) {
        if(this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

/* Start aktuelle Jahreszahl */
var aktuellesJahr = (new Date).getFullYear();
$(document).ready(function(){
    $('#jahr').text(aktuellesJahr);
    $('#jahr > time').attr('datetime', aktuellesJahr);
});
/* Ende aktuelle jahreszahl */
/* Start AOS */
AOS.init({
    duration: 800,
    easing: 'ease-out',
    offset: 300,
    disable: 'mobile',
});
/* Ende AOS */