/*Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. 
If there are two or more words that are the same length, return the first word from the string with that length.
Ignore punctuation and assume sen will not be empty.
Sample Test Cases
Input:"fun&!! time"

Output:"time"


Input:"I love dogs"

Output:"love"
*/

function LongestWord(maxWord) { 

  let splitedSen = maxWord.replace(/[^a-z0-9]/gmi, " ").split(' ');
  maxWord = splitedSen[0];
    
  for (i = 0; i < splitedSen.length; i++) {
      if (splitedSen[i].length >maxWord.length) {
        maxWord = splitedSen[i];
      }
    }
      return maxWord
  }
   
// keep this function call here 
console.log(LongestWord(readline()));