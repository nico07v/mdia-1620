// MIDTERM
// creating an array with objects
let currentlyInCart = [{name: "Orange Juice", price: 5,}, {name: "Captain Crunch", price: 7,}, {name: "Avocados", price: 4,}];


// creating an object representing an item to add
let soap = {
    name: "Dish Soap",
    price: 6,
};


function itemsInMyCart(currentlyInCart, newItem) {
    // adding new object to array
    let totalItemsInCart = currentlyInCart + soap;
    // returning new total amount of items in cart
    return totalItemsInCart
};

//adding my argument
itemsInMyCart(3, 1)

// logging out a message that lets the user know the name of the item added to the cart
console.log(soap " Added To Cart!")