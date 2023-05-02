console.log("_____________________________________")
console.log(" Exercise 1");
function convstr (word1, word2)
{
    let array1=[];
    array1.push(word1,word2 );
    return array1
}

console.log(convstr('Orange','Jordan' ));

console.log("_____________________________________");
console.log(" Exercise 2");

function hidePhoneNumber(phoneNumber) {
    const firstSevenDigits = phoneNumber.substring(0, 7);
    const hiddenDigits = firstSevenDigits.replace(/\d/g, "*");
    
   
    return hiddenDigits + phoneNumber.substring(7);
  }

const hiddenPhoneNumber = hidePhoneNumber('0779907251');
console.log(hiddenPhoneNumber);
console.log("_____________________________________")
console.log(" Exercise 3");



function hide (email)
{
 let splitted , part1, part2, avg;
 splitted=email.split('@');
 part1 =splitted[0];
 avg=part1.length /2 +1;
 part1 =part1.substring(0,(part1.length-avg));
 part2=splitted[1];
 return part1 + "...@" + part2;};




console.log(hide('orange_academy@orange.jo'))
console.log("_____________________________________")
console.log(" Exercise 4");

function upper(statement)
{
  
  let   splitstatement=statement.split(' ');
   for(let i=0 ;i< splitstatement.length;i++)
   {
    splitstatement[i] = splitstatement[i].charAt(0).toUpperCase() + splitstatement[i].slice(1);
  }
     
   return splitstatement.join(' ');
};
console.log(upper('coding academy by orange'));

console.log("_____________________________________")
console.log(" Exercise 6");

function flips(number)
{
  let rev = parseInt(number.toString().split('').reverse().join(''));


return rev;

};
console.log(flips(92485));
console.log("_____________________________________")
console.log(" Exercise 7");

function swap(x,y)
{

  let temp ;

  temp=x;
  x=y;
  y=temp;
  return { 'a':x,'b':y};


}
console.log("a = 3,b = 4")
console.log( swap(3,4))

console.log("_____________________________________")
console.log(" Exercise 8");
function remov1(words,num)
{
 let newword= words.slice(0,num) + words.slice(num+1);
  return newword
}
console.log(remov1('orange',3));
console.log("_____________________________________")
console.log(" Exercise 9");
function merges(str1,str2)
{
  let newstr1= str1.substring(1);
  let newstr2= str2.substring(1);
  let newstr = newstr1+newstr2;
  return newstr


}
console.log(merges('lora', 'inge'));

console.log("_____________________________________")
console.log(" Exercise 10");

function charactercheck( char , str){
for (let i=0;i<str.length;i++)
{

  if (str.charAt(0)===char ||str.charAt(str.length-1)===char )

return true
else return false
}}
console.log(charactercheck('o','orange'));
console.log(charactercheck('z','orange'));

console.log("_____________________________________")
console.log(" Exercise 11");
function strconv(str){
  
return str.split(' ')
}
console.log(strconv('Coding Academy by Orange'));
console.log("_____________________________________")
console.log(" Exercise 12");
function alphabet_order(str)
{
  return str.toLowerCase().split('').sort().join('')
}
console.log(alphabet_order('Orange'))