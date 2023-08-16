/* 
 * 
 Author      : Shahidul Islam
 Contact     : bdkoder@gmail.com / www.shahidul.net
 *
 */
new WOW().init();

"use strict";
jQuery('ul.nav  li.dropdown').hover(function () {
//jQuery('.navbar  .dropdown').hover(function () {
    jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
}, function () {
    jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
});

$('.carousel').carousel({
//    interval: 200
});



$(window).on('load', function () {
//  alert("Window Loaded");
    $("#loading").fadeOut();

});


//for small menu

$(document).ready(function () {

    $(".stellarnav").addClass("sm-menu");
    $(".stellarnav").addClass("fixed-top");
    $(window).on("scroll", function () {

        if ($(window).scrollTop() > 50) {
//        $(".stellarnav").removeClass("sm-menu-large").addClass("sm-menu-small");
            $(".stellarnav").removeClass("sm-menu-no-scroll").addClass("sm-menu-scroll");
            $(".sm-menu-logo").removeClass("sm-img-no-scroll").addClass("sm-img-scroll");

        } else {
//        $(".sm-menu").removeClass("sm-menu-small").addClass("sm-menu-large");
            $(".stellarnav").removeClass("sm-menu-scroll").addClass("sm-menu-no-scroll");
            $(".sm-menu-logo").removeClass("sm-img-scroll").addClass("sm-img-no-scroll");

        }

    });


});


jQuery(document).ready(function ($) {
    jQuery('.stellarnav').stellarNav({
        theme: 'light',
        breakpoint: 991,
        position: 'left',
        phoneBtn: '+8801793330005',
        locationBtn: 'https://www.google.com/maps',

//        theme: 'plain',
//	breakpoint: 960,
        menuLabel: 'Menu',

//	sticky: true,
//	position: 'scroll',
        openingSpeed: 250,
//	closingDelay: 250,
        showArrows: true,
//	phoneBtn: '',
//	locationBtn: '',
//	closeBtn: false,
        mobileMode: true,
        scrollbarFix: true


    });
    $('.stellarnav').append('<div> <i class="fa fa-home fa-2x sm-menu-home-icon"></i> </div>');

});


//        ................... start for faqs
//uses classList, setAttribute, and querySelectorAll
//if you want this to work in IE8/9 youll need to polyfill these
(function () {
    var d = document,
            accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
            setAria,
            setAccordionAria,
            switchAccordion,
            touchSupported = ('ontouchstart' in window),
            pointerSupported = ('pointerdown' in window);

    skipClickDelay = function (e) {
        e.preventDefault();
        e.target.click();
    }

    setAriaAttr = function (el, ariaType, newProperty) {
        el.setAttribute(ariaType, newProperty);
    };
    setAccordionAria = function (el1, el2, expanded) {
        switch (expanded) {
            case "true":
                setAriaAttr(el1, 'aria-expanded', 'true');
                setAriaAttr(el2, 'aria-hidden', 'false');
                break;
            case "false":
                setAriaAttr(el1, 'aria-expanded', 'false');
                setAriaAttr(el2, 'aria-hidden', 'true');
                break;
            default:
                break;
        }
    };
//function
    switchAccordion = function (e) {
        console.log("triggered");
        e.preventDefault();
        var thisAnswer = e.target.parentNode.nextElementSibling;
        var thisQuestion = e.target;
        if (thisAnswer.classList.contains('is-collapsed')) {
            setAccordionAria(thisQuestion, thisAnswer, 'true');
        } else {
            setAccordionAria(thisQuestion, thisAnswer, 'false');
        }
        thisQuestion.classList.toggle('is-collapsed');
        thisQuestion.classList.toggle('is-expanded');
        thisAnswer.classList.toggle('is-collapsed');
        thisAnswer.classList.toggle('is-expanded');

        thisAnswer.classList.toggle('animateIn');
    };
    for (var i = 0, len = accordionToggles.length; i < len; i++) {
        if (touchSupported) {
            accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
        }
        if (pointerSupported) {
            accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
        }
        accordionToggles[i].addEventListener('click', switchAccordion, false);
    }
})();
//        ................... end for faqs


//start for Number finder from String

//Right now not used any where , u can use it..>- call the Update() function
///*
// <p>Hi, I'm Numex, the Number Extractor Oracle.
// <p>What is your string? <input id="str" value="42abc"></p>
// <p>What number do you want to extract? <input id="num" value="42"></p>
// <p><button onclick="update()">Insert Coin</button></p>
// <p id="re"></p>
// */
function getre(str, num) {
    if (str === num)
        return 'nice try';
    var res = [/^\D+/g, /\D+$/g, /^\D+|\D+$/g, /\D+/g, /\D.*/g, /.*\D/g, /^\D+|\D.*$/g, /.*\D(?=\d)|\D+$/g];
    for (var i = 0; i < res.length; i++)
        if (str.replace(res[i], '') === num)
            return 'num = str.replace(/' + res[i].source + '/g, "")';
    return 'no idea';
}
;
function update() {
    $ = function (x) {
        return document.getElementById(x)
    };
    var re = getre($('str').value, $('num').value);
    $('re').innerHTML = 'Numex speaks: <code>' + re + '</code>';
}

//end for Number finder from String










//start for: add to cart icon color change when this going over footer on small device



$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};


$(window).on('resize scroll', function () {
    if ($('footer').isInViewport()) {
        // do something sm-cart-show
//        alert('Footer');
        $('.sm-cart-show i').css('color', '#fff');
    } else {
        // do something else
        $('.sm-cart-show i').css('color', '#bd64da');
    }
});


//end

// start for : footer subscribe

var footerNewsletter = function () {
    //...do something
    $('.footer-newsletter-btn-loader').append('<i class="fa fa-spinner fa-spin fa-1x ml-1 white-text mr-2"> </i>');
    $(".footer-newsletter-text").text('Submitting...');
    $('.footer-newsletter-btn').unbind('click', footerNewsletter);
//    alert('hi');
    setTimeout(function () {
//            window.location='login.html';
        $(".footer-newsletter-text").html('Submitted <i class="fa fa-envelope ml-2"></i>');
        $('.footer-newsletter-btn-loader').html('');
        $('.footer-newsletter-btn-loader').append('<i class="fa fa-check fa-1x ml-1 white-text mr-2"> </i>');

        setTimeout(function () {
//            subscribe after every 3 seconds
            $('.footer-newsletter-btn').bind('click', footerNewsletter);
            $(".footer-newsletter-btn").html(' <span class="footer-newsletter-btn-loader"></span> <span class="footer-newsletter-text">Submit <i class="fa fa-envelope ml-2"></i></span>');
            $(".footer-newsletter-input").val('');
        }, 3000);

    }, 3000);

};
$('.footer-newsletter-btn').bind('click', footerNewsletter);


// end for : footer subscribe
 
 
//$('body').append('<p><a href="http://jigsaw.w3.org/css-validator/check/referer"><img style="border:0;width:88px;height:31px" src="http://jigsaw.w3.org/css-validator/images/vcss" alt="Valid CSS!" /> </a></p> ');


// <a href="http://jigsaw.w3.org/css-validator/check/referer">
  //  <img style="border:0;width:88px;height:31px"
    //    src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
      //  alt="Valid CSS!" />
//    </a>
//</p>















