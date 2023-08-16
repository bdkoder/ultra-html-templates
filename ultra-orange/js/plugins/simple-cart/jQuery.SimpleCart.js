/*
 * jQuery Simple Shopping Cart v0.1
 * Basis shopping cart using javascript/Jquery.
 *
 */


/* '(function(){})();' this function is used, to make all variables of the plugin Private */

(function ($, window, document, undefined) {

    /* Default Options */
    var defaults = {
        cart: [],
        addtoCartClass: '.sc-add-to-cart',
        cartProductListClass: '.cart-products-list',
//        checkOutcartProductListClass: '.cart-products-listX',
        totalCartCountClass: '.total-cart-count',
        totalCartCostClass: '.total-cart-cost',
        showcartID: '#show-cart',
        itemCountClass: '.item-count'
//        imgClass: '.hi-img'
    };

    function Item(name, price, count, img) {
        this.name = name;
        this.price = price;
        this.count = count;
        this.img = img;
    }
    /*Constructor function*/
    function simpleCart(domEle, options) {

        /* Merge user settings with default, recursively */
        this.options = $.extend(true, {}, defaults, options);
        //Cart array
        this.cart = [];
        //Dom Element
        this.cart_ele = $(domEle);
        //Initial init function
        this.init();
    }


    /*plugin functions */
    $.extend(simpleCart.prototype, {
        init: function () {
            this._setupCart();
            this._setEvents();
            this._loadCart();
            this._updateCartDetails();
        },
// OLD        _setupCart: function () {
////            this.cart_ele.addClass("cart-grid panel panel-defaults");
//            this.cart_ele.append("<div class='total-cart-count font-italic'>No items in cart.</div>");
//            this.cart_ele.append("<table class='table cart-products-list mb-4 mt-4' id='show-cart'><!-- Dynamic Code from Script comes here--></table>");
//            this.cart_ele.append("<div class='cart-summary-container'>\n\
//                                <div class='cart-offer'></div>\n\
//                                        <!--<div class='cart-total-amount'>\n\
//                                            <div>Total: <i class='fa fa-dollar total-cart-cost'>0</i></div>\n\
//                                            </div>\n\
//                                             <div class='cart-checkout'>\n\
//                                            <form action='#'>\n\
//                                                <a href='product-cart.html' class='btn btn-primary m-l-n-xxs d-block'> Checkout</a>\n\
//                                            </form>\n\
//                                        </div> -->\n\
//                                 </div>");
//            this.cart_ele.append("\n\<div class='cart-total-amount'>\n\
//                                            <div>Total: <i class='fa fa-dollar total-cart-cost'>+</i></div>\n\
//                                            </div>\n\
//                                            <div class='cart-checkout'>\n\
//                                            <form action='#'>\n\
//                                                <a href='product-cart.html' class='btn btn-primary m-l-n-xxs d-block'> Checkout</a>\n\
//                                            </form>\n\
//                                        </div>");
//        },

// NEW
        _setupCart: function () {
//            this.cart_ele.addClass("cart-grid panel panel-defaults");
            // this.cart_ele.append("<div class='total-cart-count font-italic'>No items in cart.</div>");
            this.cart_ele.append("<table class='table cart-products-list my-2' id='show-cart'><!-- Dynamic Code from Script comes here--></table>");
            this.cart_ele.append("<div class='cart-summary-container'>\n\
                                <div class='cart-offer'></div>\n\
                                        <!--<div class='cart-total-amount'>\n\
                                            <div>Total: <i class='fa fa-dollar total-cart-cost'>0</i></div>\n\
                                            </div>\n\
                                             <div class='cart-checkout'>\n\
                                            <form action='#'>\n\
                                                <a href='product-cart.html' class='btn btn-primary m-l-n-xxs d-block'> Checkout</a>\n\
                                            </form>\n\
                                        </div> -->\n\
                                 </div>");
            this.cart_ele.append("\n\<div class='cart-total-amount'>\n\
                                            <div>Total: <i class='fa fa-dollar total-cart-cost'>+</i></div>\n\
                                            </div>\n\
                                            <!--<div class='cart-checkout'>\n\
                                            <form action='#'>\n\
                                                <a href='product-cart.html' class='btn btn-primary m-l-n-xxs d-block'> Checkout</a>\n\
                                            </form>-->\n\
                                        </div>");
        },
        _addProductstoCart: function () {
        },
        _updateCartDetails: function () {
            var mi = this;
            $(this.options.cartProductListClass).html(mi._displayCart());
//            $(this.options.checkOutcartProductListClass).html(mi._displayCheckOutCart());
            $(this.options.totalCartCountClass).html("Your Cart " + mi._totalCartCount() + " items");
            $(".cart-menu-count").html(mi._totalCartCount());
            $(this.options.totalCartCostClass).html(mi._totalCartCost());
        },
        _setCartbuttons: function () {

        },
        _setEvents: function () {
            var mi = this;
            $(this.options.addtoCartClass).on("click", function (e) {
                e.preventDefault();
                var name = $(this).attr("data-name");
                var cost = Number($(this).attr("data-price"));
                var img = $(this).attr("data-image");
                mi._addItemToCart(name, cost, 1, img);
                mi._updateCartDetails();
            });

            $(this.options.showcartID).on("change", this.options.itemCountClass, function (e) {
                var ci = this;
                e.preventDefault();
                var count = $(this).val();
                var name = $(this).attr("data-name");
                var cost = Number($(this).attr("data-price"));
                var img = $(this).attr("data-image");
                mi._removeItemfromCart(name, cost, count, img);
                mi._updateCartDetails();
            });

        },
        /* Helper Functions */
        _addItemToCart: function (name, price, count, img) {
            for (var i in this.cart) {
                if (this.cart[i].name === name) {
                    this.cart[i].count++;
                    this.cart[i].price = price * this.cart[i].count;
                    this.cart[i].img = img;
                    this._saveCart();
                    return;
                }
            }
            var item = new Item(name, price, count, img);
            this.cart.push(item);
            this._saveCart();
        },
        _removeItemfromCart: function (name, price, count, img) {

            for (var i in this.cart) {
                if (this.cart[i].name === name) {
                    var singleItemCost = Number(price / this.cart[i].count);
                    this.cart[i].count = count;
                    this.cart[i].price = singleItemCost * count;
//                    this.cart[i].img = img;
                    if (count == 0) {
                        this.cart.splice(i, 1);
                    }
                    break;
                }
            }
            this._saveCart();
        },
        _clearCart: function () {
            this.cart = [];
            this._saveCart();
        },
        _totalCartCount: function () {
            return this.cart.length;
        },
        _displayCart: function () {
            var cartArray = this._listCart();
//            console.log("Cart array = " + cartArray);////////////////
            var output = "";
            if (cartArray.length <= 0) {
                output = "No items in cart.";
            }
            for (var i in cartArray) {
                output += "<tr class='cart-each-product grey-text'>\n\
                        <td class='name w-10'><img class='cart-product-img' src='" + cartArray[i].img + "'/></td>\n\
                       <td class='name w-50 pl-2'>" + cartArray[i].name + "<br/> <strong>$ " + cartArray[i].price + "</strong></td>\n\
                       <td class='quantityContainer w-25' align='middle'>\n\
                            <input type='number' class='quantity form-control item-count' data-name='" + cartArray[i].name + "' data-price='" + cartArray[i].price + "' min='0' value=" + cartArray[i].count + " name='number'>\n\
                       </td>\n\
                        <td class='cross-icon w-15 pl-2 text-right curoso-pointer'><i class='fa fa-times'></i></td>\n\
                       </tr>";
            }
            return output;
        },
//        _displayCheckOutCart: function () {
//            var cartArray = this._listCart();
//            console.log("Cart array = " + cartArray);
//            var output = "";
//            if (cartArray.length <= 0) {
//                output = "No items in cart.";
//            }
//            for (var i in cartArray) {
//                output += " <!--start product row-->  <tr class='cart-each-product'>  <td> <div class='remove-cart'>   <i class='fa fa-close cross-icon'></i> </div>  </td> <td> \n\
//\n\ <a href='#!'>     <img src='" + cartArray[i].img + "' />     </a>     </td>    \n\
//\n\ <td>     <div class='d-flex pro-qty-area'>     <div class='qty-minus value-minus w-40 text-right'>   <i class='fa fa-minus'></i>     </div>         <div class='qty w-20 text-center quantityContainer'> \n\
//\n\  <input class='qty-input value quantity   item-count' type='text' data-name='" + cartArray[i].name + "' data-price='" + cartArray[i].price + "' value=" + cartArray[i].count + " name='number'/>            </div>        <div class='qty-plus value-plus w-40 text-left'>       <i class='fa fa-plus'></i>    </div>       </div>   </td> \n\
//\n\   <td>" + cartArray[i].name + "</td>    <td>$" + cartArray[i].price + " \n\
// </td>     </tr>  ";
//            }
//            return output;
//        },
        _totalCartCost: function () {
            var totalCost = 0;
            for (var i in this.cart) {
                totalCost += this.cart[i].price;
            }
            if (totalCost > 0) {
//                console.log('Good');
//$('.cus-checkout-btn-area').html()
                $('.cus-checkout-btn-area').html('  <a href="product-checkout.html" class="btn btn-rounded btn-outline-orange waves-effect waves-light cus-checkout-btn">Checkout</a>');
                $('.cart-total-amount').removeClass('d-none');
            } else {
//                console.log('Bad');
                $('.cus-checkout-btn-area').html(' ');
                $('.cart-total-amount').addClass('d-none');
            }
            return totalCost;
        },
        _listCart: function () {
            var cartCopy = [];
            for (var i in this.cart) {
                var item = this.cart[i];
                var itemCopy = {};
                for (var p in item) {
                    itemCopy[p] = item[p];
                }
                cartCopy.push(itemCopy);
            }
            return cartCopy;
        },
        _calGST: function () {
            var GSTPercent = 18;
            var totalcost = this.totalCartCost();
            var calGST = Number((totalcost * GSTPercent) / 100);
            return calGST;
        },
        _saveCart: function () {
            localStorage.setItem("shoppingCart", JSON.stringify(this.cart));
        },
        _loadCart: function () {
            this.cart = JSON.parse(localStorage.getItem("shoppingCart"));
            if (this.cart === null) {
                this.cart = [];
            }
        }
    });
    /* Defining the Structure of the plugin 'simpleCart'*/
    $.fn.simpleCart = function (options) {
        return this.each(function () {
            $.data(this, "simpleCart", new simpleCart(this));
//            console.log($(this, "simpleCart"));//////////////////
        });
    }
    ;
})(jQuery, window, document);



//        ... start for remove cart
$(document).ready(function () {
    'use strict';
    $(document).on('click', '.cross-icon', function () {


//    $(".cross-icon").click(function () {

        var itemlist = this;
//        let all = (itemlist.parentNode);
//        console.log(all);
//        let qtn = $(".quantity");
//        $(all.childNode).addClass('flip-card-hovered');
        console.log('Abl');
//        $('.item-count').attr("hi");
        $(itemlist.parentNode).addClass('p-remove');
//          $('.flip-card-hovered .quantity').addClass('XXXXXXXXXXX').attr("value","0");

        var timer = setTimeout(function () {
            $('.p-remove .quantity').val('0').trigger('change');
        }, 500);


//          $('.flip-card-hovered .quantity').addClass('XXXXXXXXXXX').val('0').trigger('change');
//          $('.flip-card-hovered .quantity').click('5');
//    });
    });
});

var a = localStorage.getItem("shoppingCart");
var retrievedData = localStorage.getItem("shoppingCart");
// storing our array as a string


// retrieving our data and converting it back into an array

var movies2 = JSON.parse(retrievedData);

//making sure it still is an array
//alert(movies2.length);

for (var i in movies2) {
// console.log(movies2[i].name);
}


