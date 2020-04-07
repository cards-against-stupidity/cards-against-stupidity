const wrapper = document.querySelector('#wrapper');
const navBar = document.querySelector('#mainNav');
const navButton = document.querySelector('#menuToggler')

const navBarExpand = (e) => {
    wrapper.classList.toggle('toggled');
    navButton.checked ^= true;
    console.log('yes');
}

navBar.addEventListener('click', (e) => {
    navBarExpand();
})