const openIconDiv = document.querySelector('.open-icon');
const closeIconDiv = document.querySelector('.close-icon');

const menuOpenedDiv = document.querySelector('#menu-opened');
const backgroundDiv = document.querySelector('#background');

const optionsDiv = document.querySelectorAll('.title-option');
const arrowsImg = document.querySelectorAll('.arrow');
const suboptionsUl = document.querySelectorAll('.suboptions');

const buttons = document.querySelectorAll('button');

const srcArrowUp = "./assets/images/icon-arrow-up.svg";
const srcArrowDown = "./assets/images/icon-arrow-down.svg";

function closeOptions(optionTitle, optionImage, subOption, src) {
    optionTitle.forEach((_, index) => {
        if(optionImage[index].src.includes('arrow-up')) {
            optionImage[index].setAttribute('src', src);
            subOption[index].style.display = 'none';
        };
    });
};

openIconDiv.addEventListener('click', () => {
    backgroundDiv.classList.toggle('hide');
    menuOpenedDiv.classList.toggle('active');
    closeOptions(optionsDiv, arrowsImg, suboptionsUl, srcArrowDown);
    buttons[0].classList.add('remove-border');
    buttons[1].classList.remove('remove-border');
});

closeIconDiv.addEventListener('click', () => {
    backgroundDiv.classList.toggle('hide');
    menuOpenedDiv.classList.toggle('active');
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttons.forEach((btn) => {
            if(!btn.classList.contains('remove-border')) {
                btn.classList.add('remove-border');
            };
        });
        button.classList.remove('remove-border');
    });
});

optionsDiv.forEach((option,index) => {
    option.addEventListener('click', () => {
        if(arrowsImg[index].src.includes('arrow-up')) {
            closeOptions(optionsDiv, arrowsImg, suboptionsUl, srcArrowDown);
            arrowsImg[index].setAttribute('src', srcArrowDown);
            suboptionsUl[index].style.display = 'none';
        } else if(arrowsImg[index].src.includes('arrow-down')) {
            closeOptions(optionsDiv, arrowsImg, suboptionsUl, srcArrowDown);
            arrowsImg[index].setAttribute('src', srcArrowUp);
            suboptionsUl[index].style.display = 'flex';
        }
    });
});
