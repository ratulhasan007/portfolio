


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


    
    $(window).scroll(function(){
    
        $('.zoom-in').each(function(){        
            var zoomIn = 1, zoomOut = 0;
            
            if(isScrolledIntoView($(this))){        
                $(this).css({
                    '-webkit-transform': 'scale(' + zoomIn + ')',
                    'transform': 'scale(' + zoomIn + ')'
                });
            }
            
        });

        //Fade-in
        $('.fade-in').each(function(){        
        
        if(isScrolledIntoView($(this))){        
         $(this).css({
          'opacity':1,
           'visibility':'visible'
           });
         }
        });
    });
    
    
    function isScrolledIntoView(elem){
        var $elem = $(elem);
        var $window = $(window);
      
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();
      
        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();
      
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }


    const body = document.body,
      jsScroll = document.getElementsByClassName('js-scroll')[0],
      height = jsScroll.getBoundingClientRect().height - 1,
      speed = 0.07

        var offset = 0

        body.style.height = Math.floor(height) + "px"

        function smoothScroll() {
            offset += (window.pageYOffset - offset) * speed
            
            var scroll = "translateY(-" + offset + "px) translateZ(0)"
            jsScroll.style.transform = scroll
            
            raf = requestAnimationFrame(smoothScroll)
        }
        smoothScroll()
