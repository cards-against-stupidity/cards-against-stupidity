const wrapper = document.querySelector('#wrapper');
const navBar = document.querySelector('#mainNav');
const navButton = document.querySelector('#menuToggler')

const navBarExpand = () => {
    wrapper.classList.toggle('toggled');
    navButton.checked ^= true;
    console.log('open!');
}
const navBarCollapse = () => {
    wrapper.classList.toggle('toggled');
    navButton.checked = false;
    console.log('close!');
}

const mouseOverExpand = () => {
    if(navButton.checked == false){
        navBarExpand();
    }
}


navBar.addEventListener('click', (e) => {
    navBarExpand(e);
})

navBar.addEventListener('mouseover', () => {
    mouseOverExpand();
})

navBar.addEventListener('mouseleave', () => {
    navBarCollapse();
})


const newDeckInputs = document.querySelectorAll(`.add-deck-form input, textarea`)
const submitButton = document.querySelector('.submit-button');
newDeckInputs.forEach(input => {
    input.addEventListener('focus', ()=>{

        submitButton.classList.add('focused');
    })
    input.addEventListener('blur', ()=>{
         submitButton.classList.remove('focused');
    })
})