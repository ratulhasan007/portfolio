

/* ===== typing animation ===== */

var typed = new Typed(".typing",{
    strings:["", "Web Designer.", "WP Developer.", "Content Writer."],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('section').each(function(i) {
    // The number at the end of the next line is how pany pixels you from the top you want it to activate.
            if ($(this).position().top <= windscroll - 0) {
                $('.nav li a.active').removeClass('active');
                $('.nav li a').eq(i).addClass('active');
            }
        });

    } else {

        $('.nav li a.active').removeClass('active');
        $('.nav li a:first').addClass('active');
    }

    }).scroll();