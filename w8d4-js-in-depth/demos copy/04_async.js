/* ---------------------------------------------------------------------------------
Part 1: A simple recipe to boil an egg; all steps in order
--------------------------------------------------------------------------------- */

// initial egg state
// let eggState = "raw";

// steps of our recipe
// function putEggInBoilingWater() {
//     console.log(`1. Putting ${eggState} egg in boiling water`);
//     eggState = "cooked";
//     console.log(`2. Egg is ${eggState}!`);
// }

// function takeEggOutOfPot() {
//     console.log(`3. Taking ${eggState} egg out of pot`);
// }

// function eatEgg() {
//     console.log(`4. Eating ${eggState} egg`);
// }


// // now try to perform the steps in the right order
// putEggInBoilingWater();
// takeEggOutOfPot();
// eatEgg();
// nothing in this code is asynchronous





// What is an asynchronous function?
//      a function that won't wait for its work to be completed
//      schedules the work to be done in the background and returns immediately, so it doesn't block subsequent code from running
//      this is why it feels like we can multi-task in JS even if it's still just a single thread
// Why do we use it?
//      The work we're wanting to do could take variable amounts of time
//      Making web requests
//          servers can take a while to respond, so we can execute other code while waiting for data to be fetched
//          users can keep interacting with the website while we wait for this request to come in in the background
//      Events (user interaction)
//          ex: clicking, scrolling, something we need a user to do
//          We'll add an asynchronous event handler that will execute a callback when the event we're "listening" for occurs



/* --------------------------------------------------------------------------------- 
Part 2: Introducing asynchronicity: in reality, some steps take an indefinite 
amount of time to complete
    - Takeaway: 
        - Asynchrous functions don't wait for their work to be complete
        - All Asynch callbacks wait for all synchronous code to be run before they are executed
--------------------------------------------------------------------------------- */

// initial egg state
// let eggState = "raw";

// // steps of our recipe
// function putEggInBoilingWater() {
//     console.log(`1. Putting ${eggState} egg in boiling water`);
//     setTimeout(() => { //setTimeout is an asynch function taking in a callback and an interval in milliseconds
//         eggState = "cooked";
//         console.log(`2. Egg is ${eggState}!`);
//     }, 2500);
// }
// // 2.5 seconds after we've invoked setTimeout, the callback will be invoked
// // Even with a 0 second timeout, it's still asynchronous behavior
// function takeEggOutOfPot() {
//     console.log(`3. Taking ${eggState} egg out of pot`);
// }

// function eatEgg() {
//     if (eggState === "raw") {
//         console.log(`4. Eating RAW egg. What a mess! 🤢`);
//     } else {
//         console.log(`4. Eating COOKED egg. Yum! 😋`);
//     }
    
//     showImage(eggState);
// }

// // now try to perform the steps in the right order
// putEggInBoilingWater();
// takeEggOutOfPot();
// eatEgg();










/* ---------------------------------------------------------------------------------
Part 3: Ensuring the correct order of operations between async and sync code
    - Takeaway: 
        - generally, synchronous code won't wait for asynchronous code to run
        - if we want synchronous code to wait for asynchronous code, we need to put the synchronous code inside of the callback
--------------------------------------------------------------------------------- */

// TODO: Modify code from Part 2 so recipe steps run in the right order

// // initial egg state
let eggState = "raw";

// steps of our recipe
function putEggInBoilingWater() {
    console.log(`1. Putting ${eggState} egg in boiling water`);
    setTimeout(() => { //setTimeout is an asynch function taking in a callback and an interval in milliseconds
        eggState = "cooked";
        console.log(`2. Egg is ${eggState}!`);
        takeEggOutOfPot(); // by placing these function invocations inside the callback, we maintain the order despite the 2.5 second delay
        eatEgg();
    }, 2500);
}
// Everything that happens INSIDE the callback is executed synchronously, but the callback being executed itself is happening asynchronously
function takeEggOutOfPot() {
    console.log(`3. Taking ${eggState} egg out of pot`);
}

function eatEgg() {
    if (eggState === "raw") {
        console.log(`4. Eating RAW egg. What a mess! 🤢`);
    } else {
        console.log(`4. Eating COOKED egg. Yum! 😋`);
    }
    
    showImage(eggState);
}

// now try to perform the steps in the right order
putEggInBoilingWater();
// /






























/* ---------------------------------------------------------------------------------
Part 4: Asynchronous code is non-blocking
    - Takeaway: 
        - Asynchronous code is "non-blocking" - we can do other things while waiting 
--------------------------------------------------------------------------------- */

// initial egg state
// let eggState = "raw";

// // steps of our recipe
// function putEggInBoilingWater() {
//     console.log(`1. Putting ${eggState} egg in boiling water`);
//     setTimeout(() => {
//         eggState = "cooked";
//         console.log(`2. Egg is ${eggState}!`);
//         takeEggOutOfPot();
//         eatEgg();
//     }, 2500);
// }

// function takeEggOutOfPot() {
//     console.log(`3. Taking ${eggState} egg out of pot`);
// }

// function eatEgg() {
//     if (eggState === "raw") {
//         console.log(`4. Eating RAW egg. What a mess! 🤢`);
//     } else {
//         console.log(`4. Eating COOKED egg. Yum! 😋`);
//     }

//     showImage("fancy");
// }

// function setTable() {
//     console.log("Setting the table 🍽️");
// }

// // now try to perform the steps in the right order
// // if we want to set the table while the egg is cooking, where should we invoke `setTable`???
// putEggInBoilingWater();
// setTable();



































/* helper function for adding images to demo: */
function showImage(className) {
    document.querySelector(`.${className}`).classList.add("revealed");
}