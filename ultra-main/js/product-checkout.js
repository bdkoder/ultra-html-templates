/* 
 *    Created on : April 13, 2019, 3:15:02 PM
 *    Author     : Shahidul Islam
 */

 

//for remove product from cart

$(document).ready(function (c) {
    $('.remove-cart').on('click', function (c) {
//        $('.rem1').fadeOut('slow', function (c) {
//var test = $(this).parent().parent();
//console.log(test);
        $(this).parent().parent().fadeOut('slow', function (c) {
            $(this).remove();
//            var test = $(this).parent();
//console.log(test);
        });
    });
});

 
//================================================================================================
//================================================================================================
//================================================================================================
//================================================================================================

//for cart js
$(document).ready(function () {
    $('#cart').simpleCart();



//for add qty 
    $('.value-plus').on('click', function () {
        var divUpd = $(this).parent().find('.value'), newVal = parseInt(divUpd.val(), 10) + 1;
        divUpd.val(newVal);
    });

//for remove qty
    $('.value-minus').on('click', function () {
        var divUpd = $(this).parent().find('.value'), newVal = parseInt(divUpd.val(), 10) - 1;
        if (newVal >= 1)
            divUpd.val(newVal);
    });

});
//end


//var a = localStorage.getItem("shoppingCart");
var retrievedData = localStorage.getItem("shoppingCart");
// storing our array as a string
// retrieving our data and converting it back into an array
var movies2 = JSON.parse(retrievedData);
//making sure it still is an array
//alert(movies2.length);

for (var i in movies2) {
//    console.log(movies2[i].name);
    var hi = " <!--start product row-->  <tr class='cart-each-product'>  <td> <div class='remove-cart'>   <i class='fa fa-close cross-icon'></i> </div>  </td> <td> \n\
\n\ <a href='#!'>     <img src='" + movies2[i].img + "' />     </a>     </td>    \n\
\n\ <td>     <div class='d-flex pro-qty-area'>     <div class='qty-minus value-minus w-40 text-right'>   <i class='fa fa-minus'></i>     </div>         <div class='qty w-20 text-center quantityContainer'> \n\
\n\  <input class='qty-input value quantity   item-count' type='text' data-name='" + movies2[i].name + "' data-price='" + movies2[i].price + "' value=" + movies2[i].count + " name='number'/>            </div>        <div class='qty-plus value-plus w-40 text-left'>       <i class='fa fa-plus'></i>    </div>       </div>   </td> \n\
\n\   <td>" + movies2[i].name + "</td>    <td>$" + movies2[i].price + " \n\
 </td>     </tr>  ";

//    $('.dynamic-cart').append(hi);
    $('.dynamic-cart').prepend(hi);
}
for (var i in movies2) {
//    console.log(movies2[i].name);
    var hi = "    <!--start product row-->    <tr> <td>        <div class='remove-cart'>     <i class='fa fa-close'></i>     </div>     </td>      <td > \n\
     <a href='#!'>     <img   src='" + movies2[i].img + "'/>   </a>     </td>    \n\
 <td>      <div class=' pro-qty-area'>   <div class='qty-minus value-minus text-center mb-2'>     <i class='fa fa-minus'></i>    </div>     <div class='qty text-center mb-2'>    \n\
<input class='qty-input value' type='text'  data-name='" + movies2[i].name + "' data-price='" + movies2[i].price + "' value=" + movies2[i].count + " name='number' />           </div>     <div class='qty-plus value-plus text-center'>       <i class='fa fa-plus'></i>     </div>   </div>     </td>  \n\
 <td>" + movies2[i].name + "</td>    <td>$" + movies2[i].price + "</td>   </tr>   <!--end product row--> ";

//    $('.sm-dynamic-cart').append(hi);
    $('.sm-dynamic-cart').prepend(hi);
}

