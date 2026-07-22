const prompt = require("prompt-sync")();

        // Multiplication Table

/*
let i=5;

for(let j=1;j<=10;j++){
    console.log(i,"x",j,"=",i*j);
}

*/


    // Sum of first N numbers
  /*
    let n=Number(prompt("Enter the value of N ="));
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }

    console.log(sum) */

// ------------------------------------
    // Sum even number 1-100

/*
let sum=0;
for(let i=1;i<100;i++){
    if(i%2==0){
        sum+=i;
    }
}

console.log(sum);
*/

// -----------------------------------

        // FizzBuzz
/*
        for(let i=1;i<=100;i++){
            if(i%3==0){
                console.log("Fizz");
            }
        if(i%5==0){
                 console.log("Buzz");
            }
        if(i%3==0 && i%5==0){
                console.log("FizzBuzz");
        }
        }
    */

// --------------------------------------

let a=13;
if(a<1){
    return 0;
}

let b=true;

for(let i=2;i<=a/2;i++){
    if(a%i==0){
        b=false;
        break;
    }
    
}
if(b){
    console.log("Its prime");
}
else{
    console.log("Its not prime");
}

