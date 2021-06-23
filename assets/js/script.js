$(function(){
    /* Smooth Scroll */
    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var gato = this.hash;
  
        $("html, body").animate({
          scrollTop: $(gato).offset().top
        }, 100, function(){
          window.location.hash = gato;
        });
      }
    });
    /* El mismisimo Toggle */
    $('[data-toggle="popover"]').popover();

    /* Intervalo de imagen del Carousel */
    $('.carousel').carousel({
        interval: 5000
      })

     /* Script Boostrap tooltip */
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
      })

      /* Abrir y cerrar texto imagenes */
    $(".abrirtexto").click(function(){
      $(".eltexto").toggle();
    });
  });