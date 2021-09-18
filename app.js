//reversing a string
function reverseString(str){
    var listOfCharacters=str.split('');
    var reverseCharacter=listOfCharacters.reverse();
    var reverseStr=reverseCharacter.join('');
    return reverseStr;
}

function isPalindrome(str){
    var reverse=reverseString(str);
    if(str === reverse){
        console.log("Is palindrome")
    }
    else{
        console.log("Is not palindrome")
    }
  return reverse;

}


