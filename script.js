// ── Element references ──
const container   = document.getElementById('container');
const registerBtn = document.getElementById('registerBtn');
const loginBtn    = document.getElementById('loginBtn');
const signInForm  = document.getElementById('signInForm');
const signUpForm  = document.getElementById('signUpForm');
const toggleLeft  = document.getElementById('toggleLeft');
const toggleRight = document.getElementById('toggleRight');

// ── State ──
const DURATION = 550;
let animating  = false;
let isMobile   = window.innerWidth <= 600;

// ── Mobile init: show Sign In form + right toggle panel by default ──
function initMobile() {
  isMobile = true;
  signInForm.classList.add('active');
  signUpForm.classList.remove('active');
  toggleRight.classList.add('active');
  toggleLeft.classList.remove('active');
}

// ── Desktop init: clear mobile classes; animation handled via CSS + container.active ──
function initDesktop() {
  isMobile = false;
  [signInForm, signUpForm, toggleLeft, toggleRight].forEach(el => el.classList.remove('active'));
}

// ── Switch to Sign Up ──
function switchToSignUp() {
  if (animating) return;
  animating = true;

  if (isMobile) {
    signInForm.classList.remove('active');
    signUpForm.classList.add('active');
    toggleRight.classList.remove('active');
    toggleLeft.classList.add('active');
  } else {
    container.classList.add('active');
  }

  setTimeout(() => { animating = false; }, DURATION);
}

// ── Switch to Sign In ──
function switchToSignIn() {
  if (animating) return;
  animating = true;

  if (isMobile) {
    signUpForm.classList.remove('active');
    signInForm.classList.add('active');
    toggleLeft.classList.remove('active');
    toggleRight.classList.add('active');
  } else {
    container.classList.remove('active');
  }

  setTimeout(() => { animating = false; }, DURATION);
}

// ── Button listeners ──
registerBtn.addEventListener('click', switchToSignUp);
loginBtn.addEventListener('click',    switchToSignIn);

// ── Handle window resize (e.g. rotating phone to landscape) ──
function handleResize() {
  const nowMobile = window.innerWidth <= 600;

  if (nowMobile && !isMobile) {
    // Switched to mobile — reset desktop state
    container.classList.remove('active');
    initMobile();
  } else if (!nowMobile && isMobile) {
    // Switched to desktop — reset mobile state
    initDesktop();
  }
}

window.addEventListener('resize', handleResize);

// ── Run on load ──
if (isMobile) {
  initMobile();
}
