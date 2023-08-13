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
     if (num.value.length === 2 && +num.value > 19 ) {
        converted.innerHTML = prefixes[] ;
     }
} ;