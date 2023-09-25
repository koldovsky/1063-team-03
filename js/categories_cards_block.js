const infoCards = [
    {
        id: 1,
        name: ' Vintage Wines ',
        description: 'Enjoy wines bottled in the 1980s and 1990s. Taste them and order delivery.',
        image: 'img/img.categories.partial/illustration_info_wines.png',
    },
    {
        id: 2,
        name: ' The Best Grape ',
        description: 'We use only the highest quality grapes from our plantations in Texas.',
        image: 'img/img.categories.partial/illustration_info_grape.png',
    },
    {
        id: 3,
        name: ' Beautiful Bottles ',
        description: 'We work with designers to create the most beautiful wine bottles.',
        image: 'img/img.categories.partial/illustration_info_bottles.png',
    },
    {
        id: 4,
        name: ' Interesting Tours ',
        description: 'Sign up for a tour and tasting and learn more about our wines.',
        image: 'img/img.categories.partial/illustration_info_tours.png',
    },
]

renderCards(infoCards);

function renderCards(cards) {
    const cardsContainer = document.querySelector('.content__info');
    cardsContainer.innerHTML = '';
    for (const card of cards) {
        cardsContainer.innerHTML += 
            `<div class="cards-block">
                <img class="info-img" src="${card.image}" alt="${card.name}">
                <h3 class="main-text sub-fonts">${card.name}</h3>
                <p class="sub-text">${card.description}</p>
                <span class="highlighted-item-brand-color">
                    <a class="button" href="about-us.html"> Learn More </a>
                </span>
            </div>`;
    }
}