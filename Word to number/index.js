
let EventUtility = {
	addHandler : (element , type , handler) => {
		if (element.addEventListener) {
			element.addEventListener(type , handler , false);
		} else if (element.attachEvent) {
			element.attachEvent('on' + type , handler);
		} else{ 
			element['on' + type] = handler;
		}
	},

  getEvent : (event) => {
    return event ? event : window.event;
  },

  getTarget : (event) => {
    return event.target || event.srcElement;
  },

  preventDefault : (event) => {
    if (event.preventDefault) {
      return event.preventDefault();
    } else {
      return returnValue = false;
    }
  } 
};


function numberToEnglish(valueToEnglish, custom_join_character = "and") {

// variable Declearation
    let string = valueToEnglish.toString(),
        units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;

    /* Is number zero? */
    if (parseInt(string) === 0) {
        return 'zero';
    }

    /* Array of units as words */
    units = [
              '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'ten', 
              'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 
              'seventeen', 'eighteen', 'nineteen'
            ];

    /* Array of tens as words */
    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    /* Array of scales as words */
    scales = ['', 'thousand', 'million', 'billion' ];

    /* Split user argument into 3 digit chunks from right to left */
    start = string.length;
    chunks = [];
    while (start > 0) {
        end = start;
        start = Math.max(0, start - 3);
        chunks.push(string.slice(start, end));
    }

    /* Check if function has enough scale words to be able to stringify the user argument */
    chunksLen = chunks.length;
    if (chunksLen > scales.length) {
        return '';
    }

    /* Stringify each integer in each chunk */
    words = [];
    for (i = 0; i < chunksLen; i++) {

        chunk = parseInt(chunks[i]);

        if (chunk) {

            /* Split chunk into array of individual integers */
            ints = chunks[i].split('').reverse().map(parseFloat);

            /* If tens integer is 1, i.e. 10, then add 10 to units integer */
            if (ints[1] === 1) {
                ints[0] += 10;
            }

            /* Add scale word if chunk is not zero and array item exists */
            if ((word = scales[i])) {
                words.push(word);
            }

            /* Add unit word if array item exists */
            if ((word = units[ints[0]])) {
                words.push(word);
            }

            /* Add tens word if array item exists */
            if ((word = tens[ints[1]])) {
                words.push(word);
            }

            /* Add 'and' string after units or tens integer if: */
            if (ints[0] || ints[1]) {

                /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
                if (ints[2] || !i && chunksLen) {
                    words.push(custom_join_character);
                }
            }

            /* Add hundreds word if array item exists */
            if ((word = units[ints[2]])) {
                words.push(word + ' hundred');
            }

        }
    }
    return words.reverse().join(' ');
}

// variable Declearation
let numberTextField = document.getElementById("number-text-field");   
let convertToWordBtn = document.getElementById("convert-to-word-btn");
let content = document.getElementById("content");

 // callback funtion when convert to word button is click
let convertToWordBtnClick = event => {     
  event = EventUtility.getEvent(event);
  EventUtility.preventDefault(event);

  //check if value is number then display the number equivalent to British
  // else display Invalid value please enter number
  if (numberTextField.value && !isNaN(numberTextField.value)) {
    content.innerHTML = numberToEnglish(numberTextField.value); 
  }else{
    content.innerHTML = "Invalid value please enter number";
  }
}

// call the callback funtion on convert to word button when clicked 
EventUtility.addHandler(convertToWordBtn , "click" , convertToWordBtnClick);

// set focus 
numberTextField.focus();