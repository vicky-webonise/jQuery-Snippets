var _init = function() {
    var touchBtn = $('.responsiveButton'),
        body = $('body'),
        vsMenu = $('.vsMenu'),
        vsMenuPosition = parseInt(vsMenu.css('left')),
        vsMenuWidth = parseInt(vsMenu.width()),
        windowWidth = parseInt($(window).width());

    var _open = function(this_) {
        this_.addClass('vsMenuOpen');
        vsMenu.animate({
            left: '0'
        });
        body.animate({
            left: vsMenuWidth
        });
        body.css({
            position: 'absolute',
            overflow: 'hidden',
            width: windowWidth
        });
    }

    var _close = function(this_) {
        this_.removeClass('vsMenuOpen');
        vsMenu.animate({
            left: -vsMenuWidth
        }, function() {
            vsMenu.removeAttr('style');
        });
        body.stop().animate({
            left: '0'
        }, function() {
            body.removeAttr('style');
        });
    }

    touchBtn.click(function(e) {
        e.preventDefault();
        vsMenuPosition = parseInt(vsMenu.css('left'));
        if (vsMenuPosition == -vsMenuWidth) {
            _open($(this));
        } else {
            _close($(this));
        }
    });

    $('body').click(function() {
        vsMenuPosition = parseInt(vsMenu.css('left'));
        if (vsMenuPosition === 0) {
            _close(touchBtn);
        }
    });
    $('body').on("click", ".vsMenu", function(event) {
        event.stopPropagation();
    });

    $(window).resize(function() {
        windowWidth = $(window).width();
        touchBtn = $('.responsiveButton');
        if (windowWidth > 767) {
            if (touchBtn.hasClass('vsMenuOpen')) {
                touchBtn.trigger('click');
            }
        }
    });

};