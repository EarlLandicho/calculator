const fs = require('fs');


console.log('starting the app')
fs.readFile('./test.txt', 'utf8', (err, data) => {
    console.log(data);
});
console.log('end of the app')


console.log('start');

var p = new Promise();

console.log(p);

console.log('Message no. 1: Sync');
setTimeout(function() {
   console.log('Message no. 2: setTimeout');
}, 0);


//------------
var promise = new Promise(function(resolve, reject) {
   resolve();
});

setImmediate( () => console.log('imidiate'));


 promise.then(function(resolve) {
    console.log('Message no. 3: 1st Promise');
    setTimeout(function() {
        console.log('Message no. 2: setTimeout');
     }, 2000);
 })
 .then(function(resolve) {
    console.log('Message no. 4: 2nd Promise');
 });







function bigFunc( )
{
    let newArr = new Array(700).fill("heart")
    return (element)=>  newArr[element];
}
let elementGetting = bigFunc()
console.log(elementGetting(588));
console.log(elementGetting(670));


var arr = [7,2,3,4,5];

function rotate(arr)
{
    var numOfRotation = 2;
    
    //reverer array
    var newArr = arr.reverse();

    for(let i = 0; i < numOfRotation; i++)
    {
        //remove first element then add to the end
        var element = newArr.shift()
        newArr.push(element);
        
    }
    newArr.reverse();
    return arr;

}

console.log(rotate(arr));