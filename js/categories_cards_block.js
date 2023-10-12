const response = await fetch('api/info-cards.json');
const infoCards = await response.json();

renderCards(infoCards);

function renderCards(cards) {
    const cardsContainer = document.querySelector('.content__info');
    cardsContainer.innerHTML = '';
    for (const card of cards) {
        cardsContainer.innerHTML += 
            `<div class="cards-block">
                <img class="info-img" src="${card.image}" alt="${card.name}">
                <h4 class="info-title main-text sub-fonts">${card.name}</h4>
                <p class="info-description sub-text">${card.description}</p>
                <span class="highlighted-item-brand-color">
                    <a class="button" href="about-us.html"> Learn More </a>
                </span>
            </div>`;
    }
}