const toogle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav')

// change class of tooggle whenn cliking on it
toogle.addEventListener('click', () => {
    toogle.classList.contains('toggle') ?
        (toogle.className = 'toggle-active') :
        (toogle.className = 'toggle');
    // hide Bannner after clicking on it
    menu.classList.toggle('hide');
    console.log(menu.classList);
});

window.addEventListener('scroll', () => {
    nav.classList.toggle('sticky', window.scrollY > 0)
})



window.onload = function() {
    document
        .getElementById('contact-form')
        .addEventListener('submit', function(event) {
            event.preventDefault();
            // generate a five digit number for the contact_number variable
            // this.contact_number.value = (Math.random() * 100000) | 0;

            var params = {
                user_name: document.getElementById('user_name').value,
                user_email: document.getElementById('email').value,
                message: document.getElementById('message').value,
            };
            emailjs.init('user_De6CgtinIQTtm3Ygioanq');
            emailjs
                .send('service_eafpre8', 'template_ahhdjsk', params)
                .then(function(res) {
                    alert('Thank you for your message');
                    document.getElementById('user_name').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('message').value = '';
                });
        });
};
