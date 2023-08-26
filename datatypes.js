let myArray = [1, 2 , 3, 4, 5, 6];
console.log(myArray, typeof myArray); //object
console.log(Array.isArray(myArray)); //true

let obj = {

}
console.log(obj, typeof obj);

let x;
console.log(`type of x is ${typeof x}`); //undefined

x = null;
console.log(`type of x is ${typeof x}`); //object

x = [1, 'mashuk', {roll: 1603113}];
console.log(`type of x is ${typeof x}`); //object
console.log(Array.isArray(x)); //true

let p = [1, 2, 3, 4, 5];
let q = p;
console.log(p, q); //[ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ]

q.push(6);
console.log(p, q); //[ 1, 2, 3, 4, 5, 6 ] [ 1, 2, 3, 4, 5, 6 ] both of the array got the pushed value 6. because non-primitive datatype like array and object always keep the reference and show the value from the reference. here, both p and q point to a reference