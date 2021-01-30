
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

function eraseLastLetter(curr_word){

    let reduced_word = "";
    for(i = 0; i < curr_word.length-1; i++){

        reduced_word += curr_word[i];

    }
    return reduced_word;
}



setInterval(() => {
    

    current_text = texts[count];
    letter = current_text.slice(0, ++index);
    
    document.querySelector('.typing').textContent = letter;
    
    if(document.querySelector('.typing').textContent== current_text){

        //once word is complete, I need to add code to make it backspace the word
    

        count++
        index = 0;

    }


}, 600);
