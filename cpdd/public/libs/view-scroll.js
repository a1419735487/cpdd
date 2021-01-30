var header = $(".section").offset().top;

window.addEventListener('scroll', function(){
    var s = $(window).scrollTop();
    if(s > header){
        $('.nav').addClass("nav-active");
        $('.tool').addClass("tool-active");
    }else{
        $('.nav').removeClass("nav-active");
        $('.tool').removeClass("tool-active");
    }
});
