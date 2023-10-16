let sections = document.querySelectorAll('.section');
let currentIndex = 0;
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let whatsappBtn = document.getElementById('whatsapp');

function updateButtons() {
    if (currentIndex === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'inline-block';
    }

    if (currentIndex === sections.length - 1) {
        nextBtn.style.display = 'none';
        whatsappBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        whatsappBtn.style.display = 'none';
    }
}

prevBtn.addEventListener('click', () => {
    sections[currentIndex].classList.remove('active');
    currentIndex--;
    sections[currentIndex].classList.add('active');
    updateButtons();
});

nextBtn.addEventListener('click', () => {
    sections[currentIndex].classList.remove('active');
    currentIndex++;
    sections[currentIndex].classList.add('active');
    updateButtons();
});

updateButtons();
