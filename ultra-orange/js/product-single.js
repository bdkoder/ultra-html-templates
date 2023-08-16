/* 
 *    Created on : April 2, 2019, 3:15:02 PM
 *    Author     : Shahidul Islam
 */


//for cart js
$(document).ready(function () {
    $('#cart').simpleCart();
});
//end



//for review js
$(document).ready(function () {

    $(function () {

        $("#exzoom").exzoom({

            // thumbnail nav options
            "navWidth": 90,
            "navHeight": 60,
            "navItemNum": 5,
            "navItemMargin": 7,
            "navBorder": 1,

            // autoplay
            "autoPlay": true,
            // autoplay interval in milliseconds
            "autoPlayTimeout": 2000
            

        });

    });


});


//$('.collapse').collapse();


var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide shadow");
    for (j = 1; j < selElmnt.length; j++) {
        /*for each option in the original select element,
         create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /*when an item is clicked, update the original select box,
             and the selected item:*/
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
         and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
     except the current select box:*/
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
/*if the user clicks anywhere outside the select box,
 then close all select boxes:*/
document.addEventListener("click", closeAllSelect);






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


/**************************************/
/********* start for Cart & wish btn *****/
/**************************************/

var buyProduct = function () {
    //...do something
    $('.buy-btn-loader').append('<i class="fa fa-spinner fa-spin fa-1x ml-1 white-text mr-2"> </i>');
    $(".btn-buy-text").text('Shopping...');
    $('.buy-btn').unbind('click', buyProduct);
//    alert('hi');
    setTimeout(function () {
//            window.location='login.html';
        $(".btn-buy-text").text('Added on Cart.');
        $('.buy-btn-loader').html('');
        $('.buy-btn-loader').append('<i class="fa fa-check fa-1x ml-1 white-text mr-2"> </i>');

//        $(".login-btn").unbind("click");
//        alert('Login Failed');
//        $('.send-message-modal').click();
//        $('.buy-btn').bind('click', buyProduct);
    }, 3000);

};
$('.buy-btn').bind('click', buyProduct);

//for wish
var wishProduct = function () {
    //...do something
    $('.wish-btn-loader').append('<i class="fa fa-spinner fa-spin fa-1x ml-1 white-text mr-2"> </i>');
    $(".wish-buy-text").text('Wishing...');
    $('.wish-btn').unbind('click', wishProduct);
//    alert('hi');
    setTimeout(function () {
//            window.location='login.html';
        $(".btn-wish-text").text('Added on Wish.');
        $('.wish-btn-loader').html('');
        $('.wish-btn-loader').append('<i class="fa fa-heart fa-1x ml-1 white-text mr-2"> </i>');

//        $(".login-btn").unbind("click");
//        alert('Login Failed');
//        $('.send-message-modal').click();
//        $('.buy-btn').bind('click', buyProduct);
    }, 3000);

};
$('.wish-btn').bind('click', wishProduct);

//for main comments post
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

//for inner comments post
var postCommentsInner = function () {
    //...do something
    $('.post-btn-loader-inner').append('<i class="fa fa-spinner fa-spin fa-1x ml-1 white-text mr-2"> </i>');
    $(".btn-post-text-inner").text('Posting...');
    $('.post-btn-inner').unbind('click', postCommentsInner);
//    alert('hi');
    setTimeout(function () {
//            window.location='login.html';
        $(".btn-post-text-inner").text('Posted.');
        $('.post-btn-loader-inner').html('');
        $('.post-btn-loader-inner').append('<i class="fa fa-check fa-1x ml-1 white-text mr-2"> </i>');

//        $(".login-btn").unbind("click");
//        alert('Login Failed');
//        $('.send-message-modal').click();
//        $('.post-btn').bind('click', postComments); 
    }, 3000);

};
$('.post-btn-inner').bind('click', postCommentsInner);


/**************************************/
/********* end  *****/
/**************************************/


//start for : page auto refresh when window size will be change
$(window).resize(function () {
    location.reload(true);

});

window.addEventListener("resize", myFunction);
function myFunction() {
    location.reload();
    window.location.reload();
    window.location = window.location;

}
//end