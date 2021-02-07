//getting modal section
let openModal = document.querySelectorAll('section');

openModal.forEach(function(btn){

    btn.onclick= function(){

        let modal = btn.getAttribute('data-modal');
        document.getElementById(modal).style.display = 'flex';

    };
});

let closeModal = document.querySelectorAll('.close-modal');

closeModal.forEach(function(btn){

    btn.onclick= function(){

        let modal = (btn.closest(".modal").style.display='none');
        
    };

});



