console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
// Create a fuction addItem
function addItem(item){
  console.log('In "addItem" function;', item);// Testing function
  basket.push(item);
  return true
}
addItem('sandwich'); // Calling function
addItem('blanket'); // Calling function
addItem('beer'); // Calling function
console.log('Test - should be 3 items in basket', basket); // Testing function

// Create a function called listItems
function listItems( array ){
console.log('In "listItems" function;', array); // Testing function
  for (let item of basket) {
    console.log(item);
  }
}
listItems(basket); // Calling & Testing function
console.log('Test - should still be 3 items in basket', basket); // Testing function

// // Create a function called empty
function empty(array){
console.log('In "empty" function;', array); // Testing function
  array.length = 0;
}
empty(basket); // Calling function
console.log('Test - basket should be empty', basket); // Testing function

// SSTTRRREEEEECCHHH GOALS
// 1.
const maxItems = 5;

// 2.
function isFull(){
  if (maxItems > basket.length) {
    return false;
  } return true;
}
console.log('Test - should say false', isFull()); // Testing function

// 3.
function addItemUpdated(item){
  if (isFull() === false) {
    console.log('Using "addItem" function;', item); // Testing function
    basket.push(item);
    return true;
  } return false;
}

addItemUpdated('Item1'); // Calling function
addItemUpdated('Item2'); // Calling function
addItemUpdated('Item3'); // Calling function
addItemUpdated('Item4'); // Calling function
addItemUpdated('Item5'); // Calling function
addItemUpdated('Item6'); // Calling function
console.log('Test - should say true', addItemUpdated()); // Testing function
console.log('Test - should be 4 items', basket); // Testing function
console.log('Test - should be say false', addItemUpdated()); // Testing function
console.log('Test - should be 5 items', basket); // Testing function


// 4.
function removeItem(item){
  console.log('In "removeItem" function', item);
  for (let i=0; i<basket.length; i++){
    if (item === basket.indexOf(i), 1) {
      basket.splice(basket.indexOf(item), 1);
    } return item;
  } return null;
}
removeItem('Item4')
console.log('Test - should remove Item4', basket);
