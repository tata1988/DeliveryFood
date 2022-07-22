const buttonAuth = document.querySelector('.button-auth'),
    modalAuth = document.querySelector('.modal-auth'),
    closeAuth = document.querySelector('.close-auth'),
    logInForm = document.getElementById('logInForm'),
    inputLogin = document.getElementById('login'),
    inputPassword = document.getElementById('password'),
    buttonOut = document.querySelector('.button-out'),
    userName = document.querySelector('.user-name');

const login = (user) => {
    buttonAuth.style.display = 'none';
    buttonOut.style.display = 'flex';

    userName.style.display = 'flex';
    userName.textContent = user.login;
    modalAuth.style.display = 'none';
};
const logout = () => {
    buttonAuth.style.display = 'flex';
    buttonOut.style.display = 'none';

    userName.style.display = 'none';
    userName.textContent = '';
    modalAuth.style.display = 'none';

    localStorage.removeItem('user');
};



buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex';
});

closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none';
});

buttonOut.addEventListener('click', () => {
    logout();
});

logInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = {
        login: inputLogin.value,
        password: inputPassword.value
    };

    localStorage.setItem('user', JSON.stringify(user));
    login(user);
});

if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')));
}
