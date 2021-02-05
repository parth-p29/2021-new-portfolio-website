
const texts = ['software developer....', 'leader....', 'designer....', 'problem-solver....'];

let count = 0;
let index = 0;
let current_word = '';
let letter = '';
let rev_index = 0;


function type(){


    current_word = texts[count];

    rev_index = current_word.length;
    
    letter = current_word.substring(0, index++);

    document.querySelector('.typing').textContent = letter;

    if (letter == current_word){

        count++;
        
        if (count == 4){
            count = 0;
        }

        
        index = 0;
    }

    setTimeout(type, 350);

}

document.addEventListener("DOMContentLoaded", () => {

    setTimeout(type, 300);

})







/*
setInterval(() => {
    

    current_text = texts[count];
    letter = current_text.slice(0, ++index);
    
    document.querySelector('.typing').textContent = letter;
    
    if(document.querySelector('.typing').textContent == current_text){

        //once word is complete, I need to add code to make it backspace the word


        count++
        index = 0;

    }


}, 400);
*/