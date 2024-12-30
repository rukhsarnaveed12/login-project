

document.getElementById('signupButton').addEventListener('click', function() {
    document.getElementById('signupForm').classList.remove('hidden');
});


document.getElementById('closeButtonSignup').addEventListener('click', function() {
    document.getElementById('signupForm').classList.add('hidden');
});


document.getElementById('loginButton').addEventListener('click', function() {
    document.getElementById('loginForm').classList.remove('hidden');
});


document.getElementById('closeButtonLogin').addEventListener('click', function() {
    document.getElementById('loginForm').classList.add('hidden');
});

document.getElementById('signupFormElement').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

  
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('signupUsername').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';
});


document.getElementById('loginFormElement').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    console.log('Login Username:', username);
    console.log('Login Password:', password);


    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
});

const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});