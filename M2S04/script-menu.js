function underConstruction(event) {
    event.preventDefault();
    alert('Page under construction');
}

document.querySelectorAll('.menu a').forEach(item => {
    item.addEventListener('click', underConstruction);
});

document.getElementById('logo').addEventListener('click', () => {
    window.open('https://www.netflix.com/br-en/', '_blank');
})