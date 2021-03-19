console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a fuction addItem
let basket = [];
function addItem(item){
  console.log('Using "addItem" function;', item);
  basket.push(item);
  return true
}
addItem('sandwich'); // Calling function
addItem('blanket'); // Calling function
addItem('beer'); // Calling function
console.log('Test - should be 3 items in basket', basket); // Testing function

// Create a function called listItems
function listItems( ){
console.log('Using "listItems" function;');
  for (let object of basket) {
    console.log(object);
  }
}
listItems(); // Calling function
console.log('Test - should still be 3 items in basket', basket); // Testing function

// Create a function called empty
function empty( ){
console.log('Using "empty" function;');
  basket.length = 0;
}
empty(); // Calling function
console.log('Test - basket should be empty', basket); // Testing function

// SSTTRRREEEEECCHHH GOALS
// 1.
const maxItems = 5;

// 2.
function isFull( ){
  if (maxItems > basket.length) {
    return false;
  } return true;
}
console.log('Test - should say false', isFull()); // Testing function

// 3.
function addItemUpdated(item){
  if (isFull() === false) {
    console.log('Using "addItem" function;', item);
    basket.push(item);
    return true;
  } return false;
}

addItemUpdated('Item1'); // Calling function
addItemUpdated('Item2'); // Calling function
addItemUpdated('Item3'); // Calling function
addItemUpdated('Item4'); // Calling function
console.log('Test - should say true', addItemUpdated()); // Testing function
console.log('Test - should be 4 items', basket); // Testing function
addItemUpdated('Item5'); // Calling function
addItemUpdated('Item6'); // Calling function
console.log('Test - should be say false', addItemUpdated()); // Testing function
console.log('Test - should be 5 items', basket); // Testing function
// After using the addItemUpdated function to add 4 items, a 'undefined' item was
// added the the basket as well. I am not sure why that's happening...

// 4.
function removeItem( item ){

}
