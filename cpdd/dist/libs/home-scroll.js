var section1 = $(".section1").offset().top;
var section2 = $(".section2").offset().top;

$(document).ready(function() {
    $("#jump").click(function() {
        $("html, body").animate({
            scrollTop: $("#target").offset().top }, {duration: 800,easing: "swing"});
        return false;
    });
});

//滚动显示
$(window).scroll ( function() {
    var s = $(window).scrollTop();
    if((s>section1)&&(s<section2)){
        $(".section2").addClass("active");
    }
});