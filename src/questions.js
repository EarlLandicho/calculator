/*


1. What are the main features of ES6?

1. Variables:

    1. What is hoisting?
        - used to describe the moving of variables and functions to the top of their (global or function) 
        scope on where we define that variable or function
    2. Why is hoisting useful?
        - enables us to call functions before they appear in the code.
    3. Where does hoisting not work?
        - the let and const keywords to declare a variable and using function expression will not hoist it.
    4. What are the different scopes of variables?
        Block{}, global, local or functional or class based, lexical
        What is the difference between global and lexical scope?
        global is lexical but lexical is not necessarily global

2. Operators:
    1. What is the difference between == and ===
    2. What are the miscellaneous operators in js?
        
    3. What is the difference between the rest and spread operator?

3. Decision making and loops:
    1. What is the difference between for of and for in loop?
        For of
    2. When do we use default case in a switch?

4. Arrays:
    1. What is the difference between a single dimensional array and a multi-dimensional array?
    2. What are the different ways of assigning to an array?
    3. What are the main methods for arrays?
        Map, find, filter, reduce, (slice, splice, )

5. Strings:
    1. What are the main string methods?
        trim, replace, split, indexOf, concat, slice, splice, substring, toUpperCase, toLowerCase

6. Numbers:
    1. What are the main number methods?
        isInteger
7. Dates:
    1. What are the main date methods?
        

8. Math:
    1. What are the main Math methods?
        Math.random, Math.floor

9. Functions:
    1. What are the different types of functions in ES6?
        Anonymous
    2. What is the difference between a generic function and an anonymous function?
    3. What is IIFE?
    4. Why do we use IIFE?
        
    5. What is tail call optimization?
    6. What is a recursive function?
    7. What is a lambda/=> function?
    8. Why do we use lambda functions?
    9. What is functional hoisting?
    10. What are generator functions?
    11. What are callback functions? (When and why do we use them?)
    12. What are prototype functions?

10. Promises:
    1. What are promises?
    2. Why do we use promises?
    3. When do we use promises?
    4. What are the different types of promise methods?
        Then, catch, resolve, reject, pending
    5. Promise.race Promise.all
    The Promise.race() method returns a promise that fulfills or rejects 
    as soon as one of the promises in an iterable fulfills or rejects, 
    with the value or reason from that promise.

    The Promise.all() method takes an iterable of promises as an input, 
    and returns a single Promise that resolves to an array of the results of the input promises. 
    This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. 
    It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, 
    and will reject with this first rejection message / error.

11. Async Await:
    1. What are the keywords?

12. Closures:
    1. What is closure?

13. Collections:
    1. What are collections?
    2. What are the different types of collections?
    3. What is the difference between a Map and Weakmap

14. Proxies:

15. Streams:
    - Read and write data continously
        e.g] save(), find(), etc. are streams
    - Types: 
        Readable Streams = reading operations
        Writable Streams = writing operations
        Duplex Streams = writing and reading both
        Transform Stream = output is computed based on the input

16. Control Flow Functions:
    - controls the order of execution
    - collect data
    - limit the concurrency
    - call the next step in a program
        e.g.] fs.readFileSync()

17. Buffer Class
    1. What is Buffer Class? = stores raw data similar to an array
        - Whatever raw memory allocation outside the V8 heap will be in Buffer (heap = temporary memory is stored in heap)
        - buffer is purely JS.

18. Piping/Chaining
    - Mechanism to connect one output of one stream to another stream. 
        e.g] Retrieve data from one stream and use it another stream. update(), findOne()
             Chaining: .then() gets input from one stream and outputs to another stream.
    - You can chain functions which contain data. You are piping the data through the chain.

19. Reactor Pattern
    - concept of non-blocking I/O operations.
    - as soon as an I/O request is generated, it is then committed to a demultiplexer.
    - demultiplexer = takes a single input and routes it to single or multiple outputs.

20. Test Pyramid
    - Three types of tests:
        - Unit Tests = individual units of code
        - Integration Tests = integration among dissimilar units.
            e.g] third party dependency testing.
        - End-to-end Tests = includes the whole application. From UI to data store to backend.

21. Exit Codes
    - Specific codes used to finish specific process.
        e.g] ctrl + c in REPL terminal
             uncaught fatal exception
             unused
             fatal error
             internal exception handler
             internal javascript evaluation failures

22. Middleware
    - Function that receives the receive and request objects.


23. Stub
    - General functions or programs that simulate the behaviour of components or modules.
        var fs = require('fs') 
        var sinon = require("sinon")
        var writeFileStub = sinon.stub(fs, 'writeFile', function (path, data, cb) {​​ return cb(null) }​​) 
        expect(writeFileStub).to.be.called 
        writeFileStub.restore()
*/


function cb()
{
    console.log('Processed in next iteration');
}

console.log('Processed in the first iteration');
console.log('Processed in the second iteration');
console.log('Processed in the third iteration');
setTimeout(() => {console.log('Processed in the fourth iteration');}, 0)
setImmediate(() => { console.log('Processed in the fifth iteration'); });

process.nextTick(cb);

//1 Event Cycle:
// 1. process.nextTick(cb) -> it should run it only after first cycle and skipped it
// 2. console.log(First Iteration) // Delayed execution of time
// 3. second iteration 
// 4. third iteration
// 5. setTimeot -> callback queue
// 6. setImediate -> call back queue

// process.nextTick() -. first event cycle 
// next time when event loop started teh first immediate function should run is setImmediate


//Import events module
var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {​​
   console.log('connection succesful.');

   eventEmitter.emit('data_received');
}​​

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function() {​​
   console.log('data received succesfully.');
}​​);

eventEmitter.emit('connection');
console.log("Program Ended.");

// 
// let arr = [1, 2, 3]
// arr.foo = "hello";
// console.log(arr);

// for(let i in arr)
// {
//     console.log(i.foo);
// }
function logFunction() {
    console.log(this);
}

new logFunction(); // logs logFunction {}

(function introduce(name, interest) {
    console.log('Hi! I\'m '+ name +' and I like '+ interest +'.');
    console.log('The value of this is '+ this +'.')
}).bind(logFunction, 'Hammad', 'Cosmology')();

const obj = {
    method2: () =>
    {
        console.log(this);  
    },
    method: function()
    {
        console.log(this);

    }

}
console.log(this);
obj.method2();
obj.method();

let a = 5;
let b = 7;

a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);



function random(){​​​​
    var x; // x is hoisted
    x++; // x is not a number since it is not initialized yet
    console.log(x); // Outputs NaN
    x = 21; // Initialization of x
  }​​​​

// Code 3:
(function () {​​​​
    setTimeout(() => console.log(1), 2000);
   
    console.log(2);
   
    setTimeout(() => console.log(3), 0);
   
    console.log(4);
  }​​​​)(); //2 4 3 1
   
  
  // Code 1:
  let x= {​​​​}​​​​, y = {​​​​name:"Ronny"}​​​​,z = {​​​​name:"John"}​​​​;
  x[y] = {​​​​name:"Vivek"}​​​​;
  x[z] = {​​​​name:"Akki"}​​​​;
  console.log(x[y]); //
   
  // Code 2:
  function runFunc(){​​​​
    console.log("1" + 1);
    console.log("A" - 1);
    console.log(2 + "-2" + "2");
    console.log("Hello" - "World" + 78);
    console.log("Hello"+ "78");
  }​​​​
  runFunc();
   
  // Code 3:
  let a = 0;
  let b = false;
  console.log((a == b));
  console.log((a === b));
   
  // Code 4:
  var x = 23;
  console.log(x);
  (function(){​​​​
    var x = 43;
    console.log(x);
   
    (function random(){​​​​
      x++;
      console.log(x);
      var x = 21;
    }​​​​)();
  }​​​​)();
   
  
  //Code Explanation:
  function random(){​​​​
      var x; // x is hoisted
      x++; // x is not a number since it is not initialized yet
      console.log(x); // Outputs NaN
      x = 21; // Initialization of x
    }​​​​
   
   
  // SECTION 2
  // Code 1
  let hero = {​​​​
      powerLevel: 99,
      getPower(){​​​​
        return this.powerLevel;
      }​​​​
    }​​​​
  
    let getPower = hero.getPower;
  
    let hero2 = {​​​​powerLevel:42}​​​​;
    console.log(getPower()); //undefined
    console.log(getPower.apply(hero2)); //42
  
  
  
    // Code 2
  
    const a = function(){​​​​
      console.log("fn 1 " + this);
  
      const b = {​​​​
        func1: function(){​​​​
          console.log("fn 2 " + this);
        }​​​​  
      }​​​​
  
      const c = {​​​​
        func2: ()=>{​​​​
          console.log("fn 3 " + this);
        }​​​​
      }​​​​
  
      b.func1();
      c.func2();
    }​​​​
  
    a();
  
  
  
    // Code 3
  
    const b = {​​​​
      name:"Vivek",
      f: function(){​​​​
        var self = this;
        console.log(this.name);
        (function(){​​​​
          console.log(this.name);
          console.log(self.name);
        }​​​​)();
      }​​​​
    }​​​​
  
    b.f();