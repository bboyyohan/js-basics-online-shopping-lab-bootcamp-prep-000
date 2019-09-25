var cart = [];

function getCart() {
<<<<<<< HEAD
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObj = {itemName:`${item}`, itemPrice: Math.floor(Math.random()*100)}
  // console.log(itemObj);
  cart.push(itemObj);
  return itemObj.itemName + " has been added to your cart."
=======
  return cart;
}


function setCart(newCart) {	function setCart(newCart) {
  cart = newCart;	  cart = newCart;
}	}


function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var item_object = {};
  item_object[item] = price
  cart.push(item_object)
  console.log(item + " has been added to your cart.");
  return cart
>>>>>>> da5161ceae7ccadad7ce22020660c01ed0e3b492
}

function viewCart() {
  if (cart.length === 0) {
<<<<<<< HEAD
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var myString = "In your cart, you have "
    for(var i = 0; i < cart.length - 1; i++) {
      myString = myString + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    return myString + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  }
}

function total() {
  total = 0;
  for(var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {


  for (var i = 0; i < cart.length; i++){
    if (item === cart[i].itemName) {
      cart.splice(i, 1); //removes 1 item at index i
      return cart;
    }
  }

  if (item != cart[item]) {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {

  if (typeof(cardNumber) === "undefined"){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    cart = [];
    return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`
  }
}

=======
    console.log("Your shopping cart is empty.")
  } else {
    var items = [];
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        items.push(item + " at $" + cart[i][item])
      }
    }
    console.log("In your cart, you have " + items.join(", ") + ".");
  }
}

function removeFromCart(item) {
  var itemInCart = false
  for(var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart.splice(i, 1);
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }
  return cart
}
function placeOrder(creditCard) {
  if (!creditCard) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCard + ".");
    cart = [];
  }
}
>>>>>>> da5161ceae7ccadad7ce22020660c01ed0e3b492
