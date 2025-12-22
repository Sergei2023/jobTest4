const signupBtn = document.querySelector('.signup-btn');
const modal = document.getElementById('signupModal');
const closeBtn = document.getElementById('closeModal');

signupBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});