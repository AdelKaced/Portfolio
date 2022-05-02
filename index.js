console.log("it's working")

const toogle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

// change class of tooggle whenn cliking on it 
toogle.addEventListener('click', ()=> {
    toogle.classList.contains('toggle') ? toogle.className = 'toggle-active' : toogle.className = 'toggle' ;
    // hide Bannner after clicking on it 
    menu.classList.toggle('hide');
    console.log(menu.classList)
})