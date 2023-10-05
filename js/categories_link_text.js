const linkTitles = [
    {
        id: 1,
        name: 'Red Wine ',
    },
    {
        id: 2,
        name: 'Blanc Wine ',
    },
    {
        id: 3,
        name: 'Rose Wine ',
    },
]

renderCards(linkTitles);

function renderCards(titles) {
    const linkContainer = document.querySelector('.contnet__link');
    linkContainer.innerHTML = '';
    for (const title of titles) {
        linkContainer.innerHTML += `
            <a class="contnet__link-text sub-fonts" href="collection.html"> <em><u>${title.name}</u></em> </a><span class="highlighted-item-brand-color" ;font-size:24px">→ </span>
        `;
    }
}