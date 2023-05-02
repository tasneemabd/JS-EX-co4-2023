console.log("_____________________________________")
console.log(" Exercise 1");
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
}); 
console.log("_____________________________________")
console.log(" Exercise 2");

let arrayNumber=[1,2,3,4,5 ]

map1=arrayNumber.map(num=>num*2)
console.log(map1);

console.log("_____________________________________")
console.log(" Exercise 3");
let number= [1, 2, 3, 4, 5];
const evenNum = number.filter(number => number % 2 === 0 );
    console.log(evenNum);

    console.log("_____________________________________")
    console.log(" Exercise 5");

    let food=[  "cherry","apple", "banana"];
    console.log(food.sort()); 
    console.log(" Exercise 6");
    console.log(food.reverse()); 
    console.log("_____________________________________")
    console.log(" Exercise 7");
   let arr1= [1, 2, 3], arr2= [7, 5, 6];
   console.log(arr1.concat(arr2));
   console.log("_____________________________________")
   console.log(" Exercise 8");

   let arrslice=[1, 2, 3, 4, 5, 6];
   let newArray= arrslice.slice(0,2) + ','+ arrslice.slice(4,6);
   console.log(newArray);

   console.log("_____________________________________")
   console.log(" Exercise 9");
   let arrsplice = [1, 2, 3, 4, 5];
   let spliced =arrsplice.splice(0)
   console.log(spliced);
   arrsplice.splice(1,0,'hs','jdh')
   console.log([spliced+ arrsplice]);
   console.log("_____________________________________")
   console.log(" Exercise 10");
   let list =[1, 2, 3, 4, 5];
   console.log(list.indexOf(4));

   console.log("_____________________________________")
   console.log(" Exercise 11");
 let arrayjoin= [1,2,3,4,5];
 console.log(arrayjoin.join(','));

   console.log("_____________________________________")
   console.log(" Exercise 12");
   let array3 =[1,2,3,4,5];

   let n =array3.toString().split().join(' ');
 console.log(n);

 console.log("_____________________________________")
 console.log(" Exercise 13");
 let lenofarr =[1, 2, 3, 4, 5];

 console.log(lenofarr.length);
 console.log("_____________________________________")
   console.log(" Exercise 14");

   let arrs= [1, 2, 3, 4, 5];
   for( let i in arrs)

   {
    console.log(i);
   }
   console.log("_____________________________________")
   console.log(" Exercise 15");
   for (let i of arrs) {
   
    console.log(i);
   } 
   console.log("_____________________________________")
   console.log(" Exercise 16");

console.log(Array.isArray([1, 2, 3, 4, 5]));
console.log("_____________________________________")
console.log(" Exercise 17");
let as= {0: "a", 1: "b", 2: "c", length: 3};

console.log(Array.from(as));

console.log("_____________________________________")
console.log(" Exercise 18");
let ar= [1, 2, 3];


console.log(Array.from(ar));

console.log("_____________________________________")
console.log(" Exercise 19");
let d=[1, 2, 3, 4, 5];
console.log(d.fill(0, 0, 3));



console.log("_____________________________________")
console.log(" Exercise 20");
const arr = [1, 2, 3, 4, 5];

arr.copyWithin( 0,3,1);

console.log(arr);