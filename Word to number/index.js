const  form = document.getElementById("form") ;
const num = document.getElementById("num") ;
const converted = document.getElementById("converted") ;
const ones = {
0 : "zero", 
1 : "one", 
2 : "two", 
3 : "three", 
4 : "four", 
5 : "five", 
6 : "six", 
7 : "seven", 
8 : "eight", 
9 : "nine", 
10 : "ten", 
11 : "eleven", 
12 : "twelve", 
13 : "thirteen", 
14 : "fourteen", 
15 : "fifteen", 
16 : "sixteen", 
17 : "seventeen", 
18: "eighteen", 
19 : "nineteen" 
} ;
const prefixes = {
    2: "tewnty",
    3: "thirty",
    4: "fourty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety"
 } ; 


form.onsubmit = (event) => {
  event.preventDefault() ;

     if(+num.value in ones ){
        converted.innerHTML  = ones[+num.value] ;
     }

     const numArray = num.value.split("") 
     if(numArray.length === 2 && +num.value > 19){
        converted.innerHTML = prefixes[numArray[0]] + "" 
        + ones[numArray[1]] ;
     }
     if (numArray.length === 3 ) {
        if (+numArray[1] === 0) {
            converted.innerHTML = ones[numArray[0]] + 'Hndred'
             + '' + ones[numArray[2]] ;
        }
        else if(+numArray[1] < 2 ) ;
        
     }
} ;
