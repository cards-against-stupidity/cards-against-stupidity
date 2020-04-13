const wrapper = document.querySelector('#wrapper');
const navBar = document.querySelector('#mainNav');
const navButton = document.querySelector('#menuToggler')

const navBarExpand = (e) => {
    wrapper.classList.toggle('toggled');
    navButton.checked ^= true;
    console.log('yes');
}

navBar.addEventListener('click', (e) => {
    navBarExpand(e);
})

// const newDeckInputs = document.querySelectorAll(`.add-deck-form input, textarea`)
// const submitButton = document.querySelector('.submit-button');
// newDeckInputs.forEach(input => {
//     input.addEventListener('focus', ()=>{

//         submitButton.classList.add('focused');
//     })
//     input.addEventListener('blur', ()=>{
//          submitButton.classList.remove('focused');
//     })
// })

