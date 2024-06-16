function handleSocialClick(event) {
    event.preventDefault(); // Prevent default link behavior
    const socialNetwork = event.currentTarget.id;
    alert(`Sharing on ${socialNetwork}`);
    console.log(`Sharing on ${socialNetwork}`);
}

function showTooltip(event) {
    const tooltip = document.getElementById('tooltip');
    const socialNetwork = event.currentTarget.id;
    tooltip.textContent = `Share on ${socialNetwork}`;
    tooltip.style.display = 'block';
    tooltip.style.left = `${event.pageX}px`;
    tooltip.style.top = `${event.pageY}px`;
}

function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}

// function addHighlight(event) {
//     event.currentTarget.classList.add('highlight');
// }

// function removeHighlight(event) {
//     event.currentTarget.classList.remove('highlight');
// }

const socialIcons = document.querySelectorAll('.social img');
socialIcons.forEach(icon => {
    icon.addEventListener('click', handleSocialClick);
    icon.addEventListener('mouseover', showTooltip);
    icon.addEventListener('mouseout', hideTooltip);
    // icon.addEventListener('focus', addHighlight);
    // icon.addEventListener('blur', removeHighlight);
});