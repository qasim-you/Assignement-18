
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


    let string = valueToEnglish.toString(),
        units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;

    /* Is number zero? */
    if (parseInt(string) === 0) {
        return 'zero';
    }

    units = [
              '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'ten', 
              'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 
              'seventeen', 'eighteen', 'nineteen'
            ];

    /* Array of tens as words */
    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


    scales = ['', 'thousand', 'million', 'billion' ];


    start = string.length;
    chunks = [];
    while (start > 0) {
        end = start;
        start = Math.max(0, start - 3);
        chunks.push(string.slice(start, end));
    }

   
    chunksLen = chunks.length;
    if (chunksLen > scales.length) {
        return '';
    }


    words = [];
    for (i = 0; i < chunksLen; i++) {

        chunk = parseInt(chunks[i]);

        if (chunk) {

            ints = chunks[i].split('').reverse().map(parseFloat);

         
            if (ints[1] === 1) {
                ints[0] += 10;
            }

            if ((word = scales[i])) {
                words.push(word);
            }


            if ((word = units[ints[0]])) {
                words.push(word);
            }
            if ((word = tens[ints[1]])) {
                words.push(word);
            }

        
            if (ints[0] || ints[1]) {

                if (ints[2] || !i && chunksLen) {
                    words.push(custom_join_character);
                }
            }


            if ((word = units[ints[2]])) {
                words.push(word + ' hundred');
            }

        }
    }
    return words.reverse().join(' ');
}


let numberTextField = document.getElementById("number-text-field");   
let convertToWordBtn = document.getElementById("convert-to-word-btn");
let content = document.getElementById("content");


let convertToWordBtnClick = event => {     
  event = EventUtility.getEvent(event);
  EventUtility.preventDefault(event);


  if (numberTextField.value && !isNaN(numberTextField.value)) {
    content.innerHTML = numberToEnglish(numberTextField.value); 
  }else{
    content.innerHTML = "Invalid value please enter number";
  }
}

EventUtility.addHandler(convertToWordBtn , "click" , convertToWordBtnClick);

 
numberTextField.focus();
