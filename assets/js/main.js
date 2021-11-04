// Cambio de color nav bar

$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#menu').addClass('active');
    } else {
       $('#menu').removeClass('active');
    }
});


// Smooth scrolling y tooltip
$(function(){
   $("a").click(function(event){
      if(this.hash !==""){
         event.preventDefault();
         var gato = this.hash;
         $("html, body").animate({
            scrollTop: $(gato).offset().top
         },800, function(){
            window.location.hash = gato;
         });
      }

   });
   $('[data-toggle="tooltip"]').tooltip();
});