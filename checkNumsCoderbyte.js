/*Have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2
is greater than num1, otherwise return the string false. If the parameter values are equal to each other then 
return the string -1.

Sample Test Cases:

Input:3 & num2 = 122
Output:"true"

Input:67 & num2 = 67
Output:"-1"*/

function CheckNums(num1,num2) { 
 
    let result = true
    
    if (num2 < num1) {
      result = false
    }
    
    else if (num2 == num1) {
      result  = -1
    }
     return result 
   }
      
   // keep this function call here 
   console.log(CheckNums(readline()));