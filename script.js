const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');


yesBtn.addEventListener('click', () => {
    question.innerHTML = 'YEII TE AMO ATT:STIVEN';

});


noBtn.addEventListener('click', () => {
    question.innerHTML = 'ESTA BIEN OKI';
});