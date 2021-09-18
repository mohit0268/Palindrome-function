//reversing a string
function reverseString(str){
    var listOfCharacters=str.split('');
    var reverseCharacter=listOfCharacters.reverse();
    var reverseStr=reverseCharacter.join('');
    return reverseStr;
}

