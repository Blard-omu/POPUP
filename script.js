let modalContent = document.querySelector('.modal_content');
let openModal = document.querySelector('.open_modal');
let closeModal = document.querySelector('.close_modal');
let blurbg = document.querySelector('.blur_bg');


openModal.addEventListener('click', function(){
    modalContent.classList.remove('hidden_modal');
    blurbg.classList.remove('hidden_modal');
});

closeModal.addEventListener('click', function(){
    modalContent.classList.add('hidden_modal');
});

blurbg.addEventListener('click', function(){
    blurbg.classList.add('hidden_blur');
});

let closeModalFunction = function(){
    modalContent.classList.add('hidden_modal');
    blurbg.classList.add('hidden_blur');
};

blurbg.addEventListener('click', closeModalFunction);
closeModal.addEventListener('click', closeModalFunction);

document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){

        if(!modalContent.classList.contains('hidden')){
            closeMadalFunction();
        }
    }
});


