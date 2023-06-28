$(function () {
    //caches a jQuery object containing the header element
    var nav = $(".menu");

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            nav.addClass("bg-light shadow-lg")
                .data('bs-theme', 'light');
        } else {
            nav.removeClass("bg-light shadow-lg")
                .data('bs-theme', 'dark');
        }
    });
});