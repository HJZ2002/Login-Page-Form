const container   = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn    = document.getElementById('login');

let animating = false;
const DURATION = 550;

registerBtn.addEventListener('click', () => {
    if (animating) return;
    animating = true;
    container.classList.add('active');
    setTimeout(() => { animating = false; }, DURATION);
});

loginBtn.addEventListener('click', () => {
    if (animating) return;
    animating = true;
    container.classList.remove('active');
    setTimeout(() => { animating = false; }, DURATION);
});
