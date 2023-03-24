const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registrationLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');

const iconClose = document.querySelector('.icon-close');

document.getElementById('regBtn').addEventListener('click', () => {
    document.getElementById('register').style.display = 'block';
    document.getElementById('login').style.display = 'none';
})

document.getElementById('logbtn').addEventListener('click', () => {
    document.getElementById('login').style.display = 'block';
    document.getElementById('register').style.display = 'none';
})

document.getElementById('register').style.display = 'none';
document.querySelector('.wrapper').style.display = 'none';
document.querySelector('.btnLogin-popup').addEventListener('click', () => {
    document.querySelector('.wrapper').style.display = 'flex';
})
document.querySelector('.icon-close').addEventListener('click', () => {

    document.querySelector('.wrapper').style.display = 'none';
})
registerlink.addeventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginlink.addeventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addeventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addeventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

