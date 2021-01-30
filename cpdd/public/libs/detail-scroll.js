var header = $("#add").offset().top;

window.addEventListener('scroll', function(){
    var s = $(window).scrollTop();
    if(s > header){
        $('.nav').addClass("nav-active");
        $('.tool').addClass("tool-active");
        // $('.rewrite').addClass("rewrite-active");
    }else{
        $('.nav').removeClass("nav-active");
        $('.tool').removeClass("tool-active");
        // $('.rewrite').removeClass("rewrite-active");
    }
});
