/*!
 
 */

// self-invoking
;
(function ($, window, document, undefined) {
    $.fn.flyto = function (options) {

        // Establish default settings

        var settings = $.extend({
            item: '.flyto-item',
            target: '.flyto-target',
            button: '.flyto-btn',
            shake: true
        }, options);


        return this.each(function () {
            var
                    $this = $(this),
                    flybtn = $this.find(settings.button),
                    target = $(settings.target),
                    itemList = $this.find(settings.item);

            flybtn.on('click', function () {
                var _this = $(this),
                        eltoDrag = _this.parent().parent().parent().parent().find("img").eq(0);
//                console.log(eltoDrag.height() / 2);
//                eltoDrag.css({"display":"none"});
                if (eltoDrag) {
                    var imgclone = eltoDrag.clone()
                            .offset({
                                top: eltoDrag.offset().top,
                                left: eltoDrag.offset().left
                            })
                            .css({
                                'opacity': '0.9',
                                'position': 'absolute',
                                'height': eltoDrag.height() / 15,
                                'width': eltoDrag.width() / 3,
//                                'max-height': '150px !important',
//                                'width': '150px',
//                                'z-index': '99999',
                                 'border':'2px solid #ddd'
//                                'max-height':'80px !important'
                            })
                            .appendTo($('body'))
                            .animate({
                                'top': target.offset().top + 10,
                                'left': target.offset().left + 15,
                                'height': eltoDrag.height() / 2,
                                'width': eltoDrag.width() / 2
//                                'width': 75,
//                                'height': 75
                            }, 1000, 'easeInOutExpo');

                    if (settings.shake) {
                        setTimeout(function () {
                            target.effect("shake", {
                                times: 2
                            }, 200);
                        }, 1500);
                    }


                    imgclone.animate({
                        'width': 0,
                        'height': 0 
                          
                    }, function () {
                        $(this).detach();

                    });
                }
            });
        });
    };
})(jQuery, window, document);