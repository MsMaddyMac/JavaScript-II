// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

function website(isLike){
  const color1 = 'white';
  const iAmA = 'website';
  console.log(`A ${iAmA} is like a ${isLike}.`);

  function html(bones){ 
    console.log(`I contain the ${bones} of the ${iAmA}.`);

    function css(style){
      const color2 = 'blue';
      console.log(`I have nothing to do with the ${bones} and everything to do with the ${style} and decor. Like colors, ${color1} and ${color2}.`);

      function javaScript(performance){
        const element1 = 'hover';
        const element2 = 'click';
        console.log(`I make the website ${performance}. I determine what happens when you ${element1} and ${element2}.`);

      } //closes javaScript
      javaScript('interactive');

    } //closes css
    css('styling');

  } //closes html
  html('structure');

} // closes website
website('house');

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
function counterMaker() {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!

  let count = 0;
  // 2- Declare a function `counter`. It should increment and return `count`.

  function counter() {
    count++; 
    //return count;
  };

  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
};
// Example usage: 
//const myCounter = counterMaker();
counterMaker(); // 1
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
