/*
 * This JS file for Show Scroll Progrees Bar.
 * Date April 6, 2019
 * Shahidul Islam - www.shahidul.net
 */

if (typeof jQuery === 'undefined') {
    throw new Error('www.shahidul.net');
}

(function ($) {
    function Progress(el, options) {
        this.el = el;
        this.options = options;
        this._init();
    }

    Progress.prototype._init = function () {
//        var docHeight = $('body').height(); //  
        var docHeight = $(document).height(); //  
        var sercHeight = $(window).height(); //  
        var resHeight = docHeight - sercHeight;

        var config = this.options;

        var proConfig = {
            position: 'fixed',
            top: 51,
            left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: 'transparent',
            zIndex: 99
        };
        var innerConfig = {
            width: 0,
            backgroundColor: '#50bcb6',
            height: '100%',
            transitionProperty: 'width',
            transitionDuration: '.3s',
            transitionTimingFunction: 'linear'
        };

        var proMap = ['size', 'position', 'wapperBg'];
        var innerMap = ['innerBg', 'duration', 'effect'];
        var setMap = proMap.concat(innerMap);

        for (let key in config) {
            if (!setMap.includes(key))
                delete config[key];
            switch (key) {
                case 'size':
                    proConfig.height = config.size;
                    break;
                case 'position':
                    if (config.position === 'bottom') {
                        delete proConfig.top;
                        proConfig['bottom'] = 0;
                    }
                    break;
                case 'wapperBg':
                    proConfig.backgroundColor = config.wapperBg;
                    break;
                case 'innerBg':
                    innerConfig.backgroundColor = config.innerBg;
                    break;
                case 'duration':
                    innerConfig.transitionDuration = config.duration;
                    break;
                case 'effect':
                    innerConfig.transitionTimingFunction = config.effect;
                    break;
                default:
                    break;
            }
        }

        this.el.empty().css(proConfig);
        $('<div class="inner"></div>').appendTo(this.el).css(innerConfig);

        $(window).scroll(function (e) {
            window.requestAnimationFrame(function () {
                var width = Math.max(0, Math.min(1, $(window).scrollTop() / resHeight));
                $('.inner').show().css('width', width * 100 + '%');
                if (width > '0') {
//                    console.log(width);
//                    $('.inner').show().css('width', width * 100 + '%');
//                    $('#progress').css('z-index', '999');
//                    $('.dropdown').css('z-index', '9999');
                    $('.navbar-expand-lg.scrolling-navbar').css('z-index', '99');
                } else {
                    $('.inner').show().css('width', width * 100 + '%');
//                    $('#progress').css('z-index', '9');
                    $('.navbar-expand-lg.scrolling-navbar').css('z-index', '99');
                }
            });
        });


    };

    $.fn.progress = function (options) {
        this.each(function (el) {
            new Progress($(this), options || null);
        });
        return this;
    };

})(jQuery);


//start for: Active this Plugins

$('#progress').progress({
    size: '5px',
    wapperBg: 'transparent',
    // inner color
//    innerBg: '#DA4453'
    innerBg: '#2196f3'
});

