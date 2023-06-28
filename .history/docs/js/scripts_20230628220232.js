$(function () {
    //caches a jQuery object containing the header element
    var nav = $(".menu");

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            nav.addClass("bg-light shadow-lg");
            nav.attr('data-bs-theme', 'light');
        } else {
            nav.removeClass("bg-light shadow-lg")
                .setAttribute('data-bs-theme', 'dark');
        }
    });
});