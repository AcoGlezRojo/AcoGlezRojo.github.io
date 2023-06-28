$(function () {
    //caches a jQuery object containing the header element
    var nav = $(".menu");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            nav.removeClass('navbar-dark').addClass("navbar-light bg-light shadow-lg");
        } else {
            nav.removeClass("navbar-dark bg-light shadow-lg").addClass('navbar-dark');
        }
    });
});