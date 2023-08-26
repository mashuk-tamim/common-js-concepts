/*
truthy:
1. true
2. non-zero number (both positive and negative)
3. {} //empty or non-empty object
4. [] //empty or non-empty array
5. any string (except empty string '');
6. '0', 'false' //they are truthy because they are actually string now


falsy:
1. false
2. 0
3. undefined
4. null
5. '' (empty string)
*/

let x = null;
if(x){
    console.log('the value of x is truthy');
}
else{
    console.log('the value of x is falsy'); //falsy
}

x = undefined;
if(x){
    console.log('the value of x is truthy');
}
else{
    console.log('the value of x is falsy'); //falsy
}

x = 0;
if(x){
    console.log('the value of x is truthy');
}
else{
    console.log('the value of x is falsy'); //falsy
}

x = '';
if(x){
    console.log('the value of x is truthy');
}
else{
    console.log('the value of x is falsy'); //falsy
}

x = [];
if(x){
    console.log('the value of x is truthy'); //truthy
}
else{
    console.log('the value of x is falsy'); 
}