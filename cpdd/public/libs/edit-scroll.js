var container_width = $ ('.contain').width();
$(".tool-bar").css("width",container_width);

$(window).resize( function(){
    var container_width = $ ('.contain').width();
    $(".tool-bar").css("width",container_width);
});

var header = $("#add").offset().top;

window.addEventListener('scroll', function(){
    var s = $(window).scrollTop();
    if(s > header){
        $('.tool').addClass("tool-active");
        $('.tool2').addClass("tool2-hide");
    }else{
        $('.tool').removeClass("tool-active");
        $('.tool2').removeClass("tool2-hide");
    }
});

