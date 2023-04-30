console.log("________________________________________")
console.log("Exercise 1");
let number =" ";
for (let i=0;i<10;i++){
    number+= i + " ";
}
console.log(number); 
console.log("________________________________________")
console.log("Exercise 2");
let k= 0;
let number1 =" ";
while (k < 11) {
    number1 += " " + k;
    k++;
    
  } console.log(number1);
console.log("________________________________________")
console.log("Exercise 3");
  let num=[1,2,3,4,5];
  for(let i=0; i <num.length;i++){

   
    console.log(num[i]);
  } 
  //exercise 4
  console.log("________________________________________")
  console.log("Exercise 4");
  for(let i=0; i <10 ; i++){
    if (i % 2 == 0){
    console.log(` The  ${i} is Even Numbers`);
  }}
  console.log("________________________________________")
  console.log("Exercise 5");

  let sum=0;
  for(let i=0; i <11 ; i++){
    sum=sum+i;

  } console.log(` Sum of numbers from 1 to 10 = ${sum}`);
  console.log("________________________________________")
  console.log("Exercise 6");

  let maxNum =0;
  for(let i=0; i <6 ; i++){
    if(i>maxNum )
    {
        maxNum=i;
    }

  } console.log(` the largest number = ${maxNum}`)

  console.log("________________________________________")
  console.log("Exercise 7");
 let i=0;
 let minNum=5;
  let array=[5,4,3,2,1];
  for(; i <=array.length ; i++){
  
    if(array[i] <minNum )
    {
        minNum= array[i];
    }
   
  } console.log(` the smallest number = ${minNum}`) 
  console.log("________________________________________")
  console.log("Exercise 11");
  let array_number=[5,4,3,2,1];
  let average;
  let sum_number=0;
  for(let i=0; i <array_number.length ; i++){
    sum_number=(sum_number+array_number[i]);
    average=sum_number/array_number.length;
  

}console.log(`The average = ${average}`);
console.log("________________________________________")
  console.log("Exercise 12");
  let fact = 1;
  n=5;
  for (let i=1;i<=n;i++){
    fact *= i;


  }console.log(`factorial of 5 = ${fact}`);

  console.log("________________________________________")
  console.log("Exercise 13");
  console.log('Fibonacci Series for 10:');
  let n1=0, n2=1 ,fibonacci;

  for(let j=0;j<=10 ;j++)
  if(n1<10){
  {

    fibonacci =n1+n2;
    console.log(n1);
    n1=n2;
    n2 =fibonacci;
  }

}
console.log("________________________________________")
console.log("Exercise 14");
for (let counter = 0; counter <= 20; counter++) {

    var notPrime = false;
    for (let i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}
console.log("________________________________________")
console.log("Exercise 15");

for (let i=1;i<=10;i++){
    let num=5
n=num*i 
console.log(` ${num} * ${i}= ${n}`)

}
console.log("________________________________________")
console.log("Exercise 16");

let arr= [[1, 2, 3], 
[4, 5, 6], 
[7, 8, 9]];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
}
console.log("________________________________________")
console.log("Exercise 17");
let reverse=  [1, 2, 3, 4, 5];
console.log(reverse);
for (let i = reverse.length - 1; i >= 0; i--) { 


    
      console.log(reverse[i]);
    
}
console.log("________________________________________")
console.log("Exercise 18");
let array1 =[1, 2, 3, 4, 5];
let start = 2; // start index
let end = 4; // end index

for (let i = start; i <= end; i++) {
  console.log(array1[i]);
}

console.log("________________________________________")
console.log("Exercise 19");
let array2 =[1, 2, 3, 4, 5];
let next = 2; 
for (let i = 0; i <= array2.length;i+= next) {
  console.log(array2[i]);
}
console.log("________________________________________")
console.log("Exercise 20");
let list=[1, 2, 3, 4, 5];
let result;
for(i=0;i<list.length;i++){
     result = list[i]==4 ? true : false;
    {
           
            if(result== true){
           break;
          }
         
        }
       
}  console.log(result)
console.log("________________________________________")
console.log("Exercise 20");
let count=0;
frequencynum=1;
let list1=[1, 2, 1, 3, 2, 1];
for(i=0;i<list1.length;i++){
   

  

    if (list1[i]==frequencynum){

    count++;
    }
    
}console.log(count); 
 