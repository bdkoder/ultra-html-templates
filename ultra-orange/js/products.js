$(document).ready(function () {

//    start: Range Slider
    $(".demo_1").ionRangeSlider({
        skin: "square",
        type: "double",
        grid: true,
        min: 0,
        max: 1000,
        from: 200,
        to: 800,
        prefix: "$"
    });
    $(".demo_2").ionRangeSlider({
        skin: "round",
        grid: true,
        min: 0,
        max: 100,
        from: 50,
        step: 5,
        max_postfix: "+",
        prefix: "$",
        // postfix: " €/ ₽",
    });

    $(".demo_3").ionRangeSlider({
        skin: "sharp",
        type: "double",
        grid: true,
        min: -12.8,
        max: 12.8,
        from: -3.2,
        to: 3.2,
        step: 0.1
    });
    $(".demo_4").ionRangeSlider({
        skin: "modern",
        grid: true,
        min: 0,
        max: 100,
        from: 50,
        step: 5,
        max_postfix: "+",
        prefix: "$",
    });
//    end: Range Slider




//    for product
//    $('.flip-card').click(function () {
//        $(this).addClass('flip-card-hovered');
//    });
//    
//    

//start for show and remove back flip card
    $('.view-gallary-btn').click(function () {
        'use strict';
//        var itemlist = document.querySelector('.view-gallary-btn');
        var itemlist = this;
//        var hi = itemlist.parentNode.parentNode.parentNode.parentNode;
//        console.log(hi);

        $(itemlist.parentNode.parentNode.parentNode.parentNode).addClass('flip-card-hovered');
    });

//    start for show front flip card by click cross icon
    $('.cross-icon').click(function () {
        'use strict';
//        var itemlist = document.querySelector('.view-gallary-btn');
        var itemlist = this;
//        var hi = itemlist.parentNode.parentNode.parentNode.parentNode;
//        console.log(hi);
        console.log(itemlist.parentNode.parentNode.parentNode);

        $(itemlist.parentNode.parentNode.parentNode).removeClass('flip-card-hovered');
    });



//start for: carusel of product
    $('.carousel').carousel({
        interval: 15
    });

//end for: carusel of product

});

$(document).ready(function () {
    $('#cart').simpleCart();
});


// start for: fly cart item

// $('.product-front-main-img').css({"min-width":"300px"});

$('.product-area').flyto({
    item: '.product',
    target: '.flyto-shopping',
    button: '.sc-add-to-cart'
});
// end for: fly cart item

//start for: Search product
function search() {

    input = document.getElementById('searchProduct');
    filter = input.value.toUpperCase();

    var elements = document.querySelectorAll('.product-col');

    for (i = 0; i < elements.length; i++) {

        title = elements[i].querySelector('.product-title');

        if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {

            elements[i].style.display = "";
        } else {
//                    console.log(elements[i]);
            elements[i].style.display = "none";


        }

    }
    searchNoFound();
}

function searchNoFound() {
    let a = $('.product-col').parent().height();
    if (a <= 10) {
//        alert('No Data');
        $('.searchNoFound').removeClass('d-none');
    } else {
//        alert('bal');
        $('.searchNoFound').addClass('d-none');
    }
}

//        ...........................,/
  