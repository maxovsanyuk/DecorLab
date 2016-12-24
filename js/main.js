    var hellopreloader = document.getElementById("hellopreloader_preload");

    function fadeOutnojquery(el) {
        el.style.opacity = 1;
        var interhellopreloader = setInterval(function() {
            el.style.opacity = el.style.opacity - 0.05;
            if (el.style.opacity <= 0.05) {
                clearInterval(interhellopreloader);
                hellopreloader.style.display = "none";
            }
        }, 16);
    }
    window.onload = function() {
        setTimeout(function() {
            fadeOutnojquery(hellopreloader);
        }, 1000);
    };

    $(document).ready(function() {
        $('.fade').slick({
            dots: true,
            infinite: true,
            speed: 600,
            fade: true,
            cssEase: 'linear'
        });

        $('.filtering').slick({
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 2
        });
    });


    var linkNav = document.querySelectorAll('[href^="#photo"]'),
        V = .4; // скорость, может иметь дробное значение через точку
    for (var i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function(e) {
            e.preventDefault();
            var w = window.pageYOffset, // прокрутка
                hash = this.href.replace(/[^#]*(.*)/, '$1'); // id элемента, к которому нужно перейти
            t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
                start = null;
            requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
            function step(time) {
                if (start === null) start = time;
                var progress = time - start,
                    r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
                window.scrollTo(0, r);
                if (r != w + t) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash // URL с хэшем
                }
            }
        }, false);
    }