const episodes = [
    { id: 1, episode: 'S1:01', duration: '24min' },
    { id: 2, episode: 'S1:02', duration: '24min' },
    { id: 3, episode: 'S1:03', duration: '24min' },
];

const episodesList = document.getElementById('episodes-list');

episodes.forEach(episode => {
    const cardEpisode = document.createElement('div');
    cardEpisode.className = 'card-episode';
    cardEpisode.innerHTML = `
                            <span class="episode-span">${episode.episode}</span>
                            <span class="episode-span">${episode.duration}</span>
                            <i class="fa-regular fa-circle-play" onclick="watchEpisode(${episode.id})"></i>
                            `;
    episodesList.appendChild(cardEpisode);
})

function watchEpisode(id) {
    console.log('Clicked to watch the episode', id);
}

watchEpisode();

