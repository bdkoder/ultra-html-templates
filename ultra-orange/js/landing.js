/* global once */

/* 
 *    Created on : Jan 2, 2019, 3:20:37 PM
 *    Author     : Shahidul Islam
 *    Pages      : Sign In, Sign Up, Forget Password, Error 404, 500
 */
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function () {
    if (animating)
        return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = (now * 50) + "%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
                'transform': 'scale(' + scale + ')',
                'position': 'absolute'
            });
            next_fs.css({'left': left, 'opacity': opacity});
        },
        duration: 800,
        complete: function () {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});

$(".previous").click(function () {
    if (animating)
        return false;
    animating = true;

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //de-activate current step on progressbar
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = ((1 - now) * 50) + "%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({'left': left});
            previous_fs.css({'transform': 'scale(' + scale + ')', 'opacity': opacity});
        },
        duration: 800,
        complete: function () {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});

$(".submit").click(function () {
    return false;
});

$("#centralModalSuccess").on('show.bs.modal', function () {
//   alert("Hello World!");

});
$('.submit').click(function () {
    $('.click-submit').click();
//    alert('a');

});

//****************************************
// ************ start for Sign In / Login *******
//*****************************************



var loginMyEventFunc = function () {
    //...do something
    $('.login-loader').append('<i class="fa fa-spinner fa-spin fa-1x ml-1 white-text mr-2"> </i>');
    $(".btn-login-text").text('Logging your Account...');
    $('.login-btn').unbind('click', loginMyEventFunc);
//    alert('hi');
    setTimeout(function () {
//            window.location='login.html';
        $(".btn-login-text").text('Login Account.');
        $('.login-loader').html('');
//        $(".login-btn").unbind("click");
//        alert('Login Failed');
        $('.click-failed').click();
        $('.login-btn').bind('click', loginMyEventFunc);
    }, 2000);

};
$('.login-btn').bind('click', loginMyEventFunc);



//$('.login-btn').on("click", function () {
//    'use strict';
//    $('.login-loader').append('<i class="fa fa-spinner fa-spin fa-1x ml-1 white-text mr-2"> </i>');
//    $(".btn-login-text").text('You are  Logging In...');
//    $(".login-btn").unbind("click");
//
//    setTimeout(function () {
////            window.location='login.html';
//        $(".btn-login-text").text('Login Account.');
//        $('.login-loader').html('');
////        $(".login-btn").unbind("click");
//        alert('Login Failed');
//        event.stopPropagation();
//    }, 2000);
//
//});

//    $(".login-btn").bind("click");


//****************************************
// ************ end for Sign In / Login *******
//*****************************************




//****************************************
// ************ start for Forgot Password *******
//*****************************************





var forgetMyEventFunc = function () {
    //...do something
    $('.forget-pass-loader').append('<i class="fa fa-spinner fa-spin fa-1x ml-1 white-text mr-2"> </i>');
    $(".btn-forget-pass-text").text('Forgetting your Password...');
    $('.forget-pass-btn').unbind('click', forgetMyEventFunc);
//    alert('hi');
    setTimeout(function () {
//            window.location='login.html';
        $(".btn-forget-pass-text").text('Forgot Password.');
        $('.forget-pass-loader').html('');
//        $(".login-btn").unbind("click");
//        alert('Login Failed');
        $('.forget-pass-modal').click();
        $('.forget-pass-btn').bind('click', forgetMyEventFunc);
    }, 2000);

};
$('.forget-pass-btn').bind('click', forgetMyEventFunc);


//****************************************
// ************ end for Forgot Password *******
//*****************************************



///**************************************/
///********* start for error -404*****/
///**************************************/

///**************************************/
///********* end for error -404*****/
///**************************************/


/**************************************/
/********* start for subscribe news letter*****/
/**************************************/
var subscribeMyEventFunc = function () {
    //...do something
    $('.subscribe-loader').append('<i class="fa fa-spinner fa-spin fa-1x ml-1 white-text mr-2"> </i>');
    $(".btn-subscribe-text").text('Subscribing Newsletter...');
    $('.subscribe-btn').unbind('click', subscribeMyEventFunc);
//    alert('hi');
    setTimeout(function () {
//            window.location='login.html';
        $(".btn-subscribe-text").text('Subscribe Newsletter.');
        $('.subscribe-loader').html('');
//        $(".login-btn").unbind("click");
//        alert('Login Failed');
        $('.subscribe-modal').click();
        $('.subscribe-btn').bind('click', subscribeMyEventFunc);
    }, 2000);

};
$('.subscribe-btn').bind('click', subscribeMyEventFunc);



/**************************************/
/********* end for subscribe news letter*****/
/**************************************/



/**************************************/
/********* start for About Us *****/
/**************************************/

//send-message-btn
//send-message-modal
//

var aboutMyEventFunc = function () {
    //...do something
    $('.send-message-loader').append('<i class="fa fa-spinner fa-spin fa-1x ml-1 white-text mr-2"> </i>');
    $(".btn-send-message-text").text('Message Sending...');
    $('.send-message-btn').unbind('click', aboutMyEventFunc);
//    alert('hi');
    setTimeout(function () {
//            window.location='login.html';
        $(".btn-send-message-text").text('Message Send Successfully.');
        $('.send-message-loader').html('');
//        $(".login-btn").unbind("click");
//        alert('Login Failed');
        $('.send-message-modal').click();
        $('.send-message-btn').bind('click', aboutMyEventFunc);
    }, 2000);

};
$('.send-message-btn').bind('click', aboutMyEventFunc);


/**************************************/
/********* end for About Us *****/
/**************************************/


/**************************************/
/********* start for 500.html *****/
/**************************************/

var redirecthome = function () {
    //...do something
    $('.redirect-home-btn-loader').append('<i class="fa fa-spinner fa-spin fa-1x ml-1 white-text mr-2"> </i>');
    $(".redirect-home-btn-text").text('Redirecting on Home page...');
    $('.redirect-home').unbind('click', redirecthome);
//    alert('hi');
    setTimeout(function () {
        window.location = 'index.html';
//        $(".redirect-home-btn-text").text('Posted.');
//        $('.redirect-home-btn-loader').html('');
//        $('.redirect-home-btn-loader').append('<i class="fa fa-check fa-1x ml-1 white-text mr-2"> </i>');
//        

    }, 2500);

};
$('.redirect-home').bind('click', redirecthome);



//start for redirect login page

$('.sign-up-btn').click(function(){
    setTimeout(function(){
        window.location = './sign-in.html';
    },2000);
});

//endfor redirect login page

/**************************************/
/********* end for 500.html *****/
/**************************************/


