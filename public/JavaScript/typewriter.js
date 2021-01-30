
const texts = ['Developer', 'Student', 'Leader', 'Designer', 'Problem-Solver'];

let count = 0;
let index = 0;
let current_text = '';
let letter = '';


function reverseType(){

    
    letter = current_text.slice(current_text.length, --index);
    document.querySelector(".typing").textContent = letter;

   // if (letter.length ==)

}


(function type(){  //self evoked function

    if (count === texts.length){

        count = 0;
    }

    current_text = texts[count];
    letter = current_text.slice(0, ++index);
    
    document.querySelector('.typing').textContent = letter;
    if(letter.length == current_text.length){

        count++
        index = 0;

    }

    setTimeout(type, 300);


}());