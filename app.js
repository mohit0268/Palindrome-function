//reversing a string
function reverseString(str){
    var listOfCharacters=str.split('');
    var reverseCharacter=listOfCharacters.reverse();
    var reverseStr=reverseCharacter.join('');
    return reverseStr;
}
//checking string is palindrome or not
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
// function convertDateToString(day,month,year){
//     var date={
//         day:15,
//         month:1,
//         year:2020
//     }
//     if(date.day<10){
//         date.day='0'+date.day;
//     }
//     else{
//         date.day=date.day.toString();
//     }
//     if(date.month<10){
//         date.month='0'+date.month;
//     }
//     else{
//         date.month=date.month.toString();
//     }
//     date.year=date.year.toString();
//     return date;
    

// }
// console.log(convertDateToString(2,10))



//converting date format into string format
function convertDateToString(date){
    var dateStr={
        day:'',
        month:'',
        year:''
    }
    if(date.day<10){
        dateStr.day='0' + date.day;
    }
    else{
        dateStr.day=date.day.toString();
    }
    if(date.month<10){
        dateStr.month='0' + date.month;
    }
    else{
        dateStr.month=date.month.toString();
    }
    dateStr.year=date.year.toString();
    return dateStr;
}

function allDateFormats(date){
    var dateStr=convertDateToString(date);

    var ddmmyyyy=dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy=dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd=dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy=dateStr.day + dateStr.month + (dateStr.year.slice(-2));
    var mmddyy=dateStr.month + dateStr.day + (dateStr.year.slice(-2));
    var yymmdd=(dateStr.year.slice(-2)) + dateStr.month + dateStr.day;

    var formats=[ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];

    return formats;
}


function checkDateFormatsOnPalindrome(date){
var listOfpalindrome=allDateFormats(date);
var flag=false;

for(var i=0;i<listOfpalindrome.length;i++){
    if(isPalindrome(listOfpalindrome[i])){
        flag=true;
        break;
    }

}
return flag;

}

function isLeapYear(year){
    if(year % 400 === 0 && year % 4 === 0){
        return "It is a leap year."
    }
    else{
        return "It is not a leap year."
    }

}
