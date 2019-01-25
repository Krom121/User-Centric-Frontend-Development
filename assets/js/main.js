///// IMAGE GALLERY ////////

const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    // re-set the opacity
    imgs.forEach(img => (img.style.opacity = 1));
    
    // Change current image to src of clicked img
    current.src = e.target.src;

    // Add fade in class.

    current.classList.add('fade-in');

    // Remove fade-in class after .5 seconds

    setTimeout(() => current.classList.remove('fade-in'), 1000);

    // Change the opactiy to var.
    e.target.style.opacity = opacity;
}


//////// FORM VALIDATION ////////////// 
class forView {
    constructor(){
       this.form = document.querySelector("form");
       this.form.onsubmit = this.onSubmit;
    }
    onSubmit(e){
        e.preventDefault();
        console.log(e);
    }
}

new forView();

/////////////// MODAL FORM //////////// 
// Get modal element
var modal = document.getElementById('myModal');
// Open modal
var modalBtn = document.getElementById('modalBtn');
/// get close btn
var closeBtn = document.getElementsByClassName('closeBtn')[0];


// Listen for click to open modal

modalBtn.addEventListener('click', openModal);

///// Listen for click to close modal

closeBtn.addEventListener('click', closeModal);

//// Listen to close modal outside window

window.addEventListener('click', clickOutside);

// Function for opening modal
function openModal(){
    modal.style.display = 'block';
}

//// Function to close modal
function closeModal(){
    modal.style.display = 'none';
}

//// Function to close modal outside modal box
function clickOutside(e){
    if(e.target == modal){
    modal.style.display = 'none';
}
}