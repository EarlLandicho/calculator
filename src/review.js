// Code 1:
function func1(){​​
  setTimeout(()=>{​​
    console.log(x);
    console.log(y);
  }​​,3000);
  var x = 2;
  let y = 12;
}​​
func1();

// Code 2:
function func2(){​​
  for(let i = 0; i < 3; i++){​​
    setTimeout(()=> console.log(i),2000);
    }​​
}​​
func2();


// Code 3:
(function(){​​
  setTimeout(()=> console.log(1),2000);
  console.log(2);
  setTimeout(()=> console.log(3),0);
  console.log(4);
}​​)();


let x = {}, y = {name:"Rony"}, z = {name:"John"};
x[y] = {name:"Vivek"};
x[z] = {name: "Akki"};
console.log(x[y]);  
Hopper
Profile picture of Kismat.
Profile picture of MOHAMMED.
MOHAMMED
Profile picture of Lawrence.
Lawrence
Profile picture of Maged.
Maged
Profile picture of Hopper.
Hopper
Profile picture of IT Programs.
IT Programs
Profile picture of Johnathan.
Johnathan
Meeting chat

Message List
Meeting started
Yesterday 8:55 AM Meeting started
Profile picture of IT Programs.function cb(){​​​​ console.log('Processed i... by IT Programs
IT Programs
Yesterday 9:28 AM
function cb(){​​​​
console.log('Processed in next iteration');
}​​​​
process.nextTick(cb);
console.log('Processed in the first iteration');

function  cb() {​​​​     console.log( 'Proc... by Earl
Earl
Yesterday 9:41 AM
function cb()

{​​​​

    console.log('Processed in next iteration');

}​​​​

process.nextTick(cb);

console.log('Processed in the first iteration');

console.log('Processed in the second iteration');

console.log('Processed in the third iteration');

setTimeout(() => {​​​​console.log('Processed in the fourth iteration');}​​​​, 0)

setImmediate(() => {​​​​ console.log('Processed in the fifth iteration'); }​​​​);

//1 Event Cycle: // 1. process.nextTick(cb)... by Earl
EarlYesterday 9:42 AM
//1 Event Cycle:

// 1. process.nextTick(cb) -> it should run it only after first cycle and skipped it

// 2. console.log(First Iteration) // Delayed execution of time

// 3. second iteration 

// 4. third iteration

// 5. setTimeot -> callback queue

// 6. setImediate -> call back queue



// process.nextTick() -. first event cycle 

// next time when event loop started teh first immediate function should run is setImmediate

Message by Earl
Earl
Yesterday 9:59 AM
https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/

Url Preview for Overview of Blocking vs Non-Blocking | Node.js
Overview of Blocking vs Non-Blocking | Node.js

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

nodejs.org
Profile picture of IT Programs.// Node.js program to demonstrate the   ... by IT Programs
IT Programs
Yesterday 10:07 AM
// Node.js program to demonstrate the  // fs.readFileSync() method   // Include fs moduleconst fs = require('fs');   // Calling the readFileSync() method// to read 'input.txt' fileconst data = fs.readFileSync('./input.txt',            {​​​​encoding:'utf8', flag:'r'}​​​​);  // Display the file dataconsole.log(data);
Profile picture of IT Programs.What is the difference between   readFile  ... by IT Programs
IT Programs
Yesterday 10:14 AM
What is the difference between readFile vs createReadStream in Node.js?

readFile — is for asynchronously reads the entire contents of a file. It will read the file completely into memory before making it available to the User. readFileSync is synchronous version of readFile.

createReadStream — It will read the file in chunks of the default size 64 kb which is specified before hand.

Message by IT Programs
IT ProgramsYesterday 10:15 AM
https://medium.com/@vigowebs/frequently-asked-node-js-interview-questions-and-answers-b74fa1f20678

Url Preview for Frequently asked: Node JS Interview Questions and Answers
Frequently asked: Node JS Interview Questions and Answers
Q1. What is Node.js? What is it used for?

medium.com
Meeting ended:
Yesterday 10:39 AM Meeting ended: 1h 43m 53s
Recording Meeting

1h 30m 57s
Context menu available
Meeting

Recorded by: IT Programs
Today
Meeting started
8:57 AM Meeting started
Recording Meeting
Recording has started
Profile picture of IT Programs.function add (a) {​​​​return functio... by IT Programs
IT Programs
9:32 AM
function add (a) {​​​​
  return function(b){​​​​
    return a + b;
  }​​​​
}​​​​

add(3)(4)
Profile picture of IT Programs.x = 23 ; // Gives reference error let ... by IT Programs
IT Programs
9:45 AM
x = 23; // Gives reference errorlet x;


function anotherRandomFunc(){​​​​
  message = "Hello"; // Throws a reference errorlet message;
}​​​​
anotherRandomFunc();
Profile picture of Hopper.x = 23; // Gives reference error let x; ... by Hopper
Hopper
9:46 AM
x = 23; // Gives reference error
let x;
 
function anotherRandomFunc(){​​​​​​
  message = "Hello"; // Throws a reference error
  let message;
}​​​​​​
anotherRandomFunc();
Profile picture of IT Programs.// Code 1: function func1(){​​​​   setTim... by IT Programs
IT Programs
10:07 AM
// Code 1:







function func1(){​​​​



  setTimeout(()=>{​​​​



    console.log(x);



    console.log(y);



  }​​​​,3000);







  var x = 2;



  let y = 12;



}​​​​







func1();







// Code 2:







function func2(){​​​​



  for(var i = 0; i < 3; i++){​​​​



    setTimeout(()=> console.log(i),2000);



}​​​​







}​​​​







func2();











// Code 3:











(function(){​​​​



  setTimeout(()=> console.log(1),2000);



  console.log(2);



  setTimeout(()=> console.log(3),0);



  console.log(4);



}​​​​)();

Profile picture of IT Programs.// Code 1: let x = {​​​​}​​​​, y = {​​​... by IT Programs
IT Programs
10:27 AM
// Code 1:let x= {​​​​}​​​​, y = {​​​​name:"Ronny"}​​​​,z = {​​​​name:"John"}​​​​;

x[y] = {​​​​name:"Vivek"}​​​​;
x[z] = {​​​​name:"Akki"}​​​​;

console.log(x[y]);



// Code 2:function runFunc(){​​​​
  console.log("1" + 1);
  console.log("A" - 1);
  console.log(2 + "-2" + "2");
  console.log("Hello" - "World" + 78);
  console.log("Hello"+ "78");
}​​​​

runFunc();


// Code 3:let a = 0;
let b = false;
console.log((a == b));
console.log((a === b));
\
Last read
Profile picture of IT Programs.var x = 23 ; ( function (){​​var ... by IT Programs
IT Programs
10:35 AM
var x = 23;

(function(){​​
  var x = 43;
  (function random(){​​
    x++;
    console.log(x);
    var x = 21;
  }​​)();
}​​)();
function random(){​​var x; // x is h... by IT Programs
IT Programs10:39 AM
function random(){​​
  var x; // x is hoisted
  x++; // x is not a number since it is not initialized yet
  console.log(x); // Outputs NaN
  x = 21; // Initialization of x
}​​
// Code 1 let hero = {​​powerLevel ... by IT Programs
IT Programs10:44 AM
// Code 1let hero = {​​
    powerLevel: 99,
    getPower(){​​
      return this.powerLevel;
    }​​
  }​​
  
  let getPower = hero.getPower;
  
  let hero2 = {​​powerLevel:42}​​;
  console.log(getPower());
  console.log(getPower.apply(hero2));
  
  
  
  // Code 2
  const a = function(){​​
    console.log(this);
  
    const b = {​​
      func1: function(){​​
        console.log(this);
      }​​  
    }​​
  
    const c = {​​
      func2: ()=>{​​
        console.log(this);
      }​​
    }​​
  
    b.func1();
    c.func2();
  }​​
  
  a();
  
  
  
  // Code 3
  const b = {​​
    name:"Vivek",
    f: function(){​​
      var self = this;
      console.log(this.name);
      (function(){​​
        console.log(this.name);
        console.log(self.name);
      }​​)();
    }​​
  }​​
  
  b.f();