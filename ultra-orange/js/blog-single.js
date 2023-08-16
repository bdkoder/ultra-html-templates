/* 
 *    Created on : April 12, 2019, 6:43:02 PM
 *    Author     : Shahidul Islam
 */
//start for rating
$.ratePicker("#rating-1", {
    max: 5,
    rgbOn: "#bd64da",
    rgbOff: "#ecf0f1",
    rgbSelection: "#bd64da",
    cursor: "pointer",
//        rate : function (stars){
//            alert('Sample 3\'s Rate is ' + stars);
//        }
});

//end for rating

//start for thumb/like
$(function () {
    $('.js-rating-simple').thumbs();
    $('.js-rating').thumbs({
        onLike: function (value) {
            console.log('Like ' + value);
        },
        onDislike: function (value) {
            console.log('Dislike ' + value)
        }
    });
})
//end for thumb/like


//    for social share
$("#share").jsSocials({
    shareIn: "popup",
    showCount: true,
    showLabel: true,
    shares: [
//        "facebook", 
        {share: "facebook", label: "Share"}, //thats custom Label
        "twitter",
        "linkedin",
        "whatsapp",
        "email"
    ]
});



//for comments post inner
var postComments = function () {
    //...do something
    $('.post-btn-loader').append('<i class="fa fa-spinner fa-spin fa-1x ml-1 white-text mr-2"> </i>');
    $(".btn-post-text").text('Posting...');
    $('.post-btn').unbind('click', postComments);
//    alert('hi');
    setTimeout(function () {
//            window.location='login.html';
        $(".btn-post-text").text('Posted.');
        $('.post-btn-loader').html('');
        $('.post-btn-loader').append('<i class="fa fa-check fa-1x ml-1 white-text mr-2"> </i>');
        
//        $(".login-btn").unbind("click");
//        alert('Login Failed');
//        $('.send-message-modal').click();
//        $('.post-btn').bind('click', postComments); 
    }, 3000);

};
$('.post-btn').bind('click', postComments);


//end




//for main comments post
var postCommentsMain = function () {
    //...do something
    $('.post-btn-loader-main').append('<i class="fa fa-spinner fa-spin fa-1x ml-1 white-text mr-2"> </i>');
    $(".btn-post-text-main").text('Posting...');
    $('.post-btn-main').unbind('click', postCommentsMain);
//    alert('hi');
    setTimeout(function () {
//            window.location='login.html';
        $(".btn-post-text-main").text('Posted.');
        $('.post-btn-loader-main').html('');
        $('.post-btn-loader-main').append('<i class="fa fa-check fa-1x ml-1 white-text mr-2"> </i>');
        
//        $(".login-btn").unbind("click");
//        alert('Login Failed');
//        $('.send-message-modal').click();
//        $('.post-btn').bind('click', postComments); 
    }, 3000);

};
$('.post-btn-main').bind('click', postCommentsMain);


//end





//start for:  start for Sign  
    var notifySignIn = function () {
        //...do something
        $('.notify-sign-btn-loader').append('<i class="fa fa-spinner fa-spin fa-1x ml-1 white-text mr-2"> </i>');
        $(".notify-sign-text").text('Signing...');
        $('.notify-sign-btn').unbind('click', notifySignIn);
//    alert('hi');
        setTimeout(function () {
//            window.location='login.html';
            $(".notify-sign-text").text('Sign Done.');
            $('.notify-sign-btn-loader').html('');
            $('.notify-sign-btn-loader').append('<i class="fa fa-check fa-1x ml-1 white-text mr-2"> </i>');

//        $(".login-btn").unbind("click");
//        alert('Login Failed');
//        $('.send-message-modal').click();
//        $('.post-btn').bind('click', postComments); 
        }, 3000);

    };
    $('.notify-sign-btn').bind('click', notifySignIn);
//end for:  start for Sign  /













