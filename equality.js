// === checks value and datatype
//== checks only value. if the datatypes are not same then it applies 'Coercion' or 'Casting' or 'Conversion'. 
let x = 2;
let y = 2;

// x = '2';
// if(x == y)
//     console.log('equal'); // also equal
// else
//     console.log('not equal');

// if(x === y)
//     console.log('equal'); 
// else
//     console.log('not equal'); //not equal

//--------------------------------------
/*
x = 1;
y = true;
if (x == y)
    console.log('equal'); //equal
else
    console.log('not equal');
if (x === y)
    console.log('equal');
else
    console.log('not equal'); //not equal
*/

//--------------------------------------
/*
x = '0';
y = false;

if (x == y)
    console.log('equal'); //equal
else
    console.log('not equal');
if (x === y)
    console.log('equal');
else
    console.log('not equal'); //not equal
*/

//--------------------------------------
//for non-primitive datatype, == or === checks the reference and then value. As x and y has different reference, it returns false.
/*
x = { a: 5 }
y = { a: 5 } // x and y has different reference
if(x == y)
    console.log('equal');
else
    console.log('not equal'); //not equal
if(x === y)
    console.log('equal');
else
    console.log('not equal'); //not equal
*/

//--------------------------------------

x = [1, 2, 3];
y = [1, 2, 3]; // x and y has different reference
if(x == y)
    console.log('equal');
else
    console.log('not equal'); //not equal
if(x === y)
    console.log('equal');
else
    console.log('not equal'); //not equal

//---------------------------------------------

x = {a:5};
y = x; // here x and y has the same reference
if(x == y)
    console.log('equal'); //equal
else
    console.log('not equal');
if(x === y)
    console.log('equal'); //equal
else
    console.log('not equal');