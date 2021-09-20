const DateInput=document.querySelector("#date-input")
const btn=document.querySelector(".btn-palindrome")
const output=document.querySelector("#output");

function clickHandler(){
    var palinStr=DateInput.value;
    if(palinStr!==''){
        var listOfDate=palinStr.split('-')
        var date={
            day:Number(listOfDate[2].value),
            month:Number(listOfDate[1].value),
            year:Number(listOfDate[0].value)
        }
        var isPalindrome=checkDateFormatsOnPalindrome(date);
        if(isPalindrome){
          output.innerText="Hurray! Your Birthday is palindrome";
        }
        else{
          var [ctr,nextDate]=getNextPalindromeDate(date);
          output.innerText=`The Next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, You have missed it by ${ctr} days.`;
        }
    }
    
}



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
    return str === reverse;
    

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

function getNextDate(date){
    var day = date.day + 1;  // increment the day  => 32
    var month = date.month;
    var year = date.year;
  
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 0 - 11
  
     // check for february
    if(month === 2){ 
      // check for leap year
      if(isLeapYear(year)){ // 2020 => true
         if(day > 29){ // false
           day = 1;
           month++;  // increment the month
         }
      }
      else {
         if(day > 28){
           day = 1;
           month++;  // increment the month
         }
      }
    }
    // check for other months
    else {
      //  check if the day exceeds the max days in month
      if(day > daysInMonth[month - 1]){ 
        day = 1; 
        month++;  // increment the month
      }
    }
  
    // increment the year if month is greater than 12
    if(month > 12){
      month = 1;
      year++; 
    }
  
    return {
      day: day,  
      month: month,
      year: year
    };
}

function getNextPalindromeDate(date){
    var ctr = 0;
  var nextDate = getNextDate(date);

  while(1){
    ctr++;
    var isPalindrome = checkDateFormatsOnPalindrome(nextDate);
    if(isPalindrome){
      break;
    }
    nextDate = getNextDate(nextDate);
  }
  return [ctr, nextDate];
}

btn.addEventListener('click',clickHandler);
