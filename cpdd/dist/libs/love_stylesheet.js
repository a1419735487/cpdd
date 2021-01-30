//vue开发中需判断love页状态
$(document).ready(function () {
    if(location.href.indexOf("#reloaded")==-1){
        location.href=location.href+"#reloaded";
        location.reload();
    }
})

function styleload(){
    $('.card-shadow').removeClass("text-dark");
    $('.card-shadow').addClass("text-danger");
    
    $('.card-title').removeClass("text-dark");
    $('.card-title').addClass("text-danger");
    
    $('.card-type').removeClass("text-dark");
    $('.card-type').addClass("text-danger");
    
    $('.card-type').removeClass("text-decoration-dark");
    $('.card-type').addClass("text-decoration-danger");
    
    $('#page').removeClass("text-dark");
    $('#page').addClass("text-danger");
    
    $('.border-change').removeClass("border-dark");
    $('.border-change').addClass("border-danger");
    
    $('.sunfire').removeClass("text-dark");
    $('.sunfire').addClass("text-danger");
    
    $('#title').removeClass("text-dark");
    $('#title').addClass("text-danger");
    
    $('#time').removeClass("text-dark");
    $('#time').addClass("text-danger");
    
    $('#texttype').removeClass("type-dark");
    $('#texttype').addClass("type-danger");
    
    $(".clock").attr("src", "/images/far fa-clock red.svg");
    $(".tag").attr("src", "/images/fas fa-tags Copy red.svg");
    
}

function Btn(){
    if($(".page-right").prop("disabled") == true){
        $(".page-right").css("background-image","url('./images/fas\ fa-chevron-circle-right\ disable.svg')");
        $('.page-right').removeClass("btn-radius-alive");
    }else{
        $(".page-right").css("background-image","url('./images/fas\ fa-chevron-circle-right\ red.svg')");
        $('.page-right').addClass("btn-radius-alive");
    };
    if($(".page-left").prop("disabled") == true){
        $(".page-left").css("background-image","url('./images/fas\ fa-chevron-circle-left\ disable.svg')");
        $('.page-left').removeClass("btn-radius-alive");
    }else{
        $(".page-left").css("background-image","url('./images/fas\ fa-chevron-circle-left\ red.svg')");
        $('.page-left').addClass("btn-radius-alive");
    };
}

window.onload = function(){ 
    styleload();
    Btn();
};

$(".page-left").on('click', function(){
    styleload();
    Btn();
});

$(".page-right").click(function(){
    styleload();
    Btn();
});