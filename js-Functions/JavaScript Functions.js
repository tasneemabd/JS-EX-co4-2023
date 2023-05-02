console.log("_____________________________________")
console.log(" Exercise 1");

function findSmallest(number){
  
    for (let i=0;i<=4;i++){
    let numsmall = Math.min(number)
    
   return numsmall
    }
}
console.log(findSmallest([30,45,60,7]))

console.log("_____________________________________")
console.log(" Exercise 2");
function AlphabeticalOrder(str)
{
    return str.toLowerCase().split('').sort().join('')
}
console.log(AlphabeticalOrder('hello'));
console.log("_____________________________________")
console.log(" Exercise 3");
function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
  }
  console.log(factorial(8));
  console.log("_____________________________________")
  console.log(" Exercise 4");

  function checkNum(num)
  {
    if (num %2==0)
    return ("Evne Number")
    else 
    return ("odd Number")

  }
console.log( 'The Number is :' + checkNum(9));
console.log("_____________________________________")
console.log(" Exercise 5");

function EvenNumber(myArray)
{
    let newArray = [];
    
    for(let i = 0; i < myArray.length; i++){

        if(myArray[i] % 2 == 0) newArray.push(myArray[i]);
        
    }

    console.log(newArray);
    
}

console.log(EvenNumber([1, 2, 3, 4, 5, 6,7,8,9]));
console.log("_____________________________________")
console.log(" Exercise 6");

function cnumbersOnly(myArray1)
{
    let newArray1 = [];
    
    for(let i = 0; i < myArray1.length; i++){

        if(typeof myArray1[i] == 'number')newArray1.push(myArray1[i]);
        
    }
    
    console.log(newArray1);
}

console.log(cnumbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding']));
console.log("_____________________________________")
console.log(" Exercise 7");
function addUp(num){
    let sum=0;
   for(let i=num;i>=0;i--)
  {
    
      sum+=i
     
    
   }
   return sum
}

console.log(addUp(8));
console.log("_____________________________________")
console.log(" Exercise 8");


function minMaxLengthAverage(number)
{
    let sum=0,lowest;
    for (let i=0;i<number.length;i++){
      
       
   
    lowest = Math.min(...number) ;
 let highest =Math.max(...number);
  let length =number.length; 
  for (let i=0;i<number.length;i++){
    sum += number[i];
   avg =sum/length;
  }

  let newArray1 = [lowest,highest,length ,avg];

 return newArray1
    }
   

    }

console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));

console.log("_____________________________________")
console.log(" Exercise 9");

function convertToRoman(romannum) {
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
    let result = '';
  
    for (let key in romanNumerals) {
        while (romannum >= romanNumerals[key]) {
            result += key;
          romannum -= romanNumerals[key];
        }
      }
    return result
}
console.log(convertToRoman(1989));

console.log("_____________________________________")
console.log(" Exercise 10");
function countWords(str)
{
   
   
    return  str.split(' ').length
}

console.log(countWords('hello from CodingAcademy!')); 

console.log("_____________________________________")
console.log(" Exercise 11");

function MultiplyByLength(num)
{
    let newArray1=[];
    for (let i=0;i<num.length;i++){

        result= num[i]*num.length
        newArray1.push(result);
     
}
return newArray1
}
console.log( MultiplyByLength([4,2,5]));

console.log("_____________________________________")
console.log(" Exercise 12");

function checkEnding (str1 ,str2)
{
    
if( str1.charAt(str1.length-1)=== str2.charAt(0))
    return true
    else
    return false
   
}


console.log(checkEnding("CodingSchool", "Ac"));


console.log("_____________________________________")
console.log(" Exercise 13");
function doubleChar(str){
    let res= '';
    // str.split('');
    for(let i=0;i<str.length;i++)
    {  
        res += str[i].repeat(2);
    }
    return res
   
}
console.log(doubleChar('Coding'));
console.log("_____________________________________")
console.log(" Exercise 14");

function findIndex(arr,name)
{
 
    
 var index = arr.indexOf(name) 
 return index

 
}
console.log(findIndex(['Ali','Mazen','Ayham','Murad'],'Ayham'));

console.log("_____________________________________")
console.log(" Exercise 15");
function getAbsSum(num)
{
    let newArray1=[];
    for (let i = 0; i < num.length; i++) {
        if(num[i]<0)
        {
       num[i]=num[i]*-1
       newArray1.push(num[i]);
        }
        else
        newArray1.push(num[i]);
    }
    
    return newArray1
}



console.log( getAbsSum([-1, -3, -5, -4, -10, 0]));
