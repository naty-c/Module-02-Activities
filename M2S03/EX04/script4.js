const albuns = [
    { name: "SHINee", price: 29.99, image: "images/shinee-atlantis.jpeg", url:"https://open.spotify.com/track/0BBUGRUURDjwcXmDS3kQkN?si=f98fe9b4e9b749e3" },
    { name: "Stray Kids", price: 49.99, image: "images/stray-kids-lose-my-breath.jpg", url:"https://open.spotify.com/track/2DXavoWAmIHlrECHPM1Vca?si=6cf05dd9d22642e6" },
    { name: "TXT", price: 79.99, image: "images/txt-deja-vu.jpg", url:"https://open.spotify.com/track/0m5FEDhEXHx1ZUNabbnX4l?si=4b4d7a4fe63e4a49" },
    { name: "ATEEZ", price: 14.99, image: "images/ateez-work.jpg", url:"https://open.spotify.com/track/3VHD84tIdyxRTtRc167YSR?si=7119c76168db45f6" }
];

function loadAlbuns() {
    const albumList = document.getElementById('albunsList');

    albuns.forEach(album => {
        const albumItem = document.createElement('div');
        albumItem.classList.add('album-item');

        const albumImage = document.createElement('img');
        albumImage.src = album.image;
        albumImage.alt = album.name;
        albumImage.classList.add('album-image');

        const albumName = document.createElement('h2');
        albumName.textContent = album.name;

        const albumPrice = document.createElement('p');
        albumPrice.textContent = `$ ${album.price.toFixed(2)}`;

        const listenButton = document.createElement('a');
        listenButton.textContent = 'Listen';
        listenButton.href = album.url;
        listenButton.classList.add('listen-button');
        listenButton.addEventListener('click', () => {
            alert(`Enjoy a preview listening on Spotify :)`)
        })

        albumItem.appendChild(albumImage);
        albumItem.appendChild(albumName);
        albumItem.appendChild(albumPrice);
        albumItem.appendChild(listenButton);
        
        albumList.appendChild(albumItem);
    });
}

loadAlbuns();
