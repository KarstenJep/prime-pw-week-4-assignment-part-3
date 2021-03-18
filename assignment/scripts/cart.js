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
  for (object of basket) {
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
  if (isFull() = false) {
    console.log('Using "addItem" function;', item);
    basket.push(item);
    return true;
  } return false;
}

addItemUpdated('Item1');
addItemUpdated('Item2');
addItemUpdated('Item3');
addItemUpdated('Item4');
console.log('Test - should say true', addItemUpdated());
