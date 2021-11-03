$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#menu').addClass('active');
    } else {
       $('#menu').removeClass('active');
    }
});