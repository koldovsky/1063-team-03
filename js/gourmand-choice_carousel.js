const slides = [
    `<div class="gourmand-choice__carousel--card"><article class="wine-card"><img src="./img/wine-carousel/wine_portwine.png" class="wine-card__image" alt="A bottle of Port Wine"/><p class="wine-card__product--name">Port Wine</p><p class="wine-card__product--description">Fortified Wine</p><a href="#" class="wine-card__button">Tasting</a></article></div>`,
    `<div class="gourmand-choice__carousel--card"><article class="wine-card"><img src="./img/wine-carousel/wine_eiswein.png" class="wine-card__image" alt="A bottle of Eiswein"/><p class="wine-card__product--name">Eiswein</p><p class="wine-card__product--description">Dessert wine</p><a href="#" class="wine-card__button">Tasting</a></article></div>`,
    `<div class="gourmand-choice__carousel--card"><article class="wine-card"><img src="./img/wine-carousel/wine_grenache-rose.png" class="wine-card__image" alt="A bottle of Grenache Rose"/><p class="wine-card__product--name">Grenache Rose</p><p class="wine-card__product--description">Vintage wine (2000)</p><a href="#" class="wine-card__button">Tasting</a></article></div>`,
    `<div class="gourmand-choice__carousel--card"><article class="wine-card"><img src="./img/wine-carousel/wine_pinot-noir.png" class="wine-card__image" alt="A bottle of Pinot Noir"/><p class="wine-card__product--name">Pinot Noir</p><p class="wine-card__product--description">Vintage Wine (1999)</p><a href="#" class="wine-card__button">Tasting</a></article></div>`
];   

let currentSlide = 0;

const slideContainer = document.querySelector('.gourmand-choice__carousel--slide');

function renderSlide() {
    slideContainer.innerHTML = slides[currentSlide]; 
    if (window.matchMedia('(min-width: 768px)').matches) {
        const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        slideContainer.innerHTML += slides[secondSlide];
        if (window.matchMedia('(min-width: 1024px)').matches) {
            const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
            slideContainer.innerHTML += slides[thirdSlide];
        }
    }
}

function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    renderSlide();
}

function prevSlide() {
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    renderSlide();
}

const nextButton = document.querySelector('.gourmand-choice__carousel--btn-next');
const prevButton = document.querySelector('.gourmand-choice__carousel--btn-prev');

nextButton.addEventListener('click', nextSlide);

prevButton.addEventListener('click', prevSlide);

renderSlide();

window.addEventListener('resize', renderSlide);