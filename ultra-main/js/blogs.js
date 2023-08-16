/* 
 *    Created on : April 5, 2019, 3:20:37 AM
 *    Author     : Shahidul Islam
 *    Pages      : Blogs, Blogger.
 */

//========  start send message  Blogger ========= 


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

//========  end send message   Blogger========= 



$(document).ready(function () {

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







//end for: blogs page search box

});



//start for: blogs page search box
function searchContent() {


    setTimeout(function () {
        window.location='search-results.html';
//        $('form').submit();
    }, 3000);

}