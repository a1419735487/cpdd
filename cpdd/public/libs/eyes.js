var windowWidth = $(document.body).width();
var balls = document.getElementsByClassName("ballroll");

windowWidth > 1200 ? $('.ball').addClass("ballroll") : $('.ball').removeClass("ballroll");

document.onmousemove = function (e) {
    var x = e.clientX * 100 / window.innerWidth;
    var y = e.clientY * 100 / window.innerHeight;
    yy = y + 31.75
    for (var i = 0; i < 2; i++) {
        balls[i].style.left = x + "%";
        yy < 90 ? balls[i].style.top = yy + "%" : balls[i].style.top = 90 + "%";
    }
};

document.onmouseout = function (e) {
    for (var i = 0; i < 2; i++) {
        balls[i].style.left = 50 + "%";
        balls[i].style.top = 50 + "%"
    }
};