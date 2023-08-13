const  form = document.getElementById("form") ;
const num = document.getElementById("num") ;
const converted = document.getElementById("converted") ;
form.onsubmit = (event) => {
  event.preventDefault() ;

  converted.innerHTML  = num.value ;
} ;