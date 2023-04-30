console.log("________________________________________")
console.log("Exercise 1");
console.log("Use for loop ");

for (let i=0; i<=50;i++){

    if(i%2==0)
    {
        console.log(i)
    }

}

console.log("Use while loop ");
let i=0;
 while (i <50) {
    if (i%2==0)
    {
    console.log(i)
    }
  i++;

 }
 console.log("________________________________________")
console.log("Exercise 2");
console.log("Using a single for loop");

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
  }
  console.log("________________________________________")
  console.log("Exercise 3");
  console.log(" The Even  Number")
  for (let i=0; i<=50;i++){
   

    if(i%2==0)
    {
       
            console.log(i )
       
      
    }
}
    console.log(" The Odd Number")
    for (let i=0; i<=50;i++){
       
        if(i%2 !=0)
        {
           
            console.log(i )
           
          
        }
    }
    console.log("________________________________________")
    console.log("Exercise 4");

    for(let i=1;i<100;i++)
    {
        if( i%5==0 && i% 3==0)
        {
            console.log("FizzBuzz")
        }
    
        else if (i% 3==0)
        {
            console.log("Fizz")
        }
        else if( i%5==0)
        {
            console.log("Buzz")
        }
     
        else
        console.log(`${i} `)

    }   
    
    console.log("________________________________________")
    console.log("Exercise 5");
    function fizzBuzz(num) {

        if (num% 3==0 && num%5==0)
        return "Fizz Buzz";
       else if (num% 3==0)

        return "fizz";

        else if(num% 5==0)
        return " Buzz";
        else 
        return num;

      }
     

       let n= fizzBuzz(1)
        console.log(n )
        let n1= fizzBuzz(15)
        console.log(n1 )
      
    console.log("________________________________________")
    console.log("Exercise 6");

    function fizzBuzz(num) {

        if (num% 3==0 && num%5==0)
        return "Fizz Buzz";
       else if (num% 3==0)

        return "fizz";

        else if(num% 5==0)
        return " Buzz";
        else 
        return num;

      }
      for(let i=1;i<100;i++){
let n=[];
        n= fizzBuzz(i)
        console.log(n )
      }
      console.log("________________________________________")
      console.log("Exercise 7");
      function banknotes(Number1, array) {
        let result1 = [];
        for (let i = 0; i < array.length; i++) {
          while (Number1 >= array[i]) {
            result1.push(array[i]);
            Number1 -= array[i];
          }
        }
        return result1;
      }
    
      let Number1 = 57;
    let array = [25, 10, 5, 1];
    let result1 = banknotes(Number1, array);
    console.log(result1); 
      console.log("________________________________________")
    console.log("Exercise 8");

    function countStr (str1, character ) {
        let count=0;
        for(let i=0;i<str1.length ;i++)
        {
            
           
            if (str1.charAt(i)==character)
            {

                count+=1;
            }
           
        }
          
        return count;
}

    let str2 ="Coding Academy by orange"
    let char='o'
    result1 = countStr(str2,char)
    console.log(result1);
    console.log("________________________________________")
    console.log("Exercise 9-A");

    for(i=0;i<=20;i++)
    {
        console.log(i)
    }
    console.log("________________________________________")
    console.log("Exercise 9-B");
    for (let i = 3; i <= 29; i += 2) {
        console.log(i);
      }
      console.log("________________________________________")
      console.log("Exercise 9-C");
      for (let i = 12; i >= -14; i -= 2) {
        console.log(i);
      }
      console.log("________________________________________")
      console.log("Exercise 9-D");
      for (let i = 50; i >= 20; i --) {
        if(i%3===0)
        {
            console.log(i);
        }
      
      }
      console.log("________________________________________")
      console.log("Exercise 10");
      let text ="CodingAcademy";
      let arr =[7, 500, 'KH404', 'black',36];

      for(i=0;i<=arr.length;i++)
      {
        console.log(arr[i])
      }
      console.log("________________________________________")
     
      for (let i = text.length - 1; i >= 0; i--) 

      {
        console.log(text[i])
      }
      console.log("________________________________________")
      console.log("Exercise 11");
      let nums = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
      let evens = [];
let odds = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evens.push(nums[i]);
    } else {
      odds.push(nums[i]);
    }
  }
  console.log(' The Even Numbers:', evens);
  console.log(' The Odd Numbers:', odds);  
  console.log("________________________________________")
      console.log("Exercise 12");
      const proteinOptions = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
      const grainOptions = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
      const vegetableOptions = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
      const beverageOptions = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
      const dessertOptions = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];
      
      const numMeals = prompt('How many meals would you ?');
      
      const meals = [];
      
      for (let i = 0; i < numMeals; i++) {
        let protein = '';
        let grain = '';
        let vegetable = '';
        let beverage = '';
        let dessert = '';
      
        protein = proteinOptions[Math.floor(Math.random() * proteinOptions.length)];
        grain = grainOptions[Math.floor(Math.random() * grainOptions.length)];
        vegetable = vegetableOptions[Math.floor(Math.random() * vegetableOptions.length)];
        beverage = beverageOptions[Math.floor(Math.random() * beverageOptions.length)];
        dessert = dessertOptions[Math.floor(Math.random() * dessertOptions.length)];
      
        const isDuplicate = meals.some((meal) => {
          return (
            meal.protein === protein &&
            meal.grain === grain &&
            meal.vegetable === vegetable &&
            meal.beverage === beverage &&
            meal.dessert === dessert
          );
        });
      
        if (isDuplicate) {
          i--;
          continue;
        }
      
       
        meals.push({
          protein,
          grain,
          vegetable,
          beverage,
          dessert,
        });
      }
      
      
      console.log(`Generated ${numMeals} meals:`);
      meals.forEach((meal, index) => {
        console.log(`Meal ${index + 1}:`);
        console.log(`- Protein: ${meal.protein}`);
        console.log(`- Grain: ${meal.grain}`);
        console.log(`- Vegetable: ${meal.vegetable}`);
        console.log(`- Beverage: ${meal.beverage}`);
        console.log(`- Dessert: ${meal.dessert}`);
      });
      