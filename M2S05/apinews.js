// Using 'async/await' to handle the requests
async function getNews() {
    try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release');
        const data = await response.json();    

        const firstNewsTitle = data.items[0].titulo;
        const firstNewsUrl = data.items[0].link;

        document.querySelector('.today-title-news').innerHTML = `<a href="${firstNewsUrl}" target="_blank">${firstNewsTitle}</a>`;

    }  catch (error) {
            console.log('An error occurred when trying to retrieve the news: ', error);
    }
}

getNews();

// Using 'then' to handle the requests
// const url = 'https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release';

//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
        
//         const firstNewsTitle = data.items[0].titulo;
//         const firstNewsUrl = data.items[0].link;

//         document.querySelector('.today-title-news').innerHTML = `<a href="${firstNewsUrl}" target="_blank">${firstNewsTitle}</a>`;
//     })
//     .catch(error => {
//         console.log('An error occurred when trying to retrieve the news: ', error);
//     });

