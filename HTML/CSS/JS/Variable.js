
// let cant let you redeclare same variable again
let a=50;
console.log(a);

a=54;
console.log(a);

// var let you redeclare same varibale again
 var std=34;
 var std=43;
 console.log(std);

// const is used for constants
const b=50;
console.log(b)


            // Data Types //
let ab=450;
let bc=45.3;
let cd="Yasir ALi"

console.log(ab," ",bc," ",cd)

// variable without value is undefined
// but const declaration mendatory

let t;
console.log(t)

// bigint for storing big values
let y=1234324543223
console.log(y)

// null
let x=null
console.log(x)



        // Non-Primtive Data Types
        // Type of all non-primitive DT is Object

// Arrays
let arr=["Yasir",23,'c'];
console.log(arr)

// Objects literal -> proper define

/*let user={
    name:"Rhoit",
    rollNo:45,
    class:5,
    Address:"Shoaib Town SDK"
}*/


// Function

let s=function add(){
    console.log("Hello");
}

console.log(s());

// type of

let l=5;
console.log(typeof a);



/* primitve data is immutable wheveer we reassign new
value to variable it will create new memory*/

// let f=45
// f=34
// console.log(f)


// Non primitve DT are mutable

let ob={
    name:"Yasir",
    Roll:34
}

Object.Roll=45

console.log(ob.name," ",ob.Roll)