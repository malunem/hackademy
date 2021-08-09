const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');

loginLink.addEventListener('click', () => {toggleLoginRegister()});
registerLink.addEventListener('click', () => {toggleLoginRegister()});

function toggleLoginRegister() {
    loginForm.classList.toggle('d-none');
    registerForm.classList.toggle('d-none');
}