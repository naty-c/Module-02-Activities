import { addItem, cleanItems, itemInput } from "./script.js";

// Event listeners for the buttons 'add' and 'clean'
const addButton = document.getElementById('add-item-btn');
const cleanButton = document.getElementById('clean-list-btn');

addButton.addEventListener('click', addItem);
cleanButton.addEventListener('click', cleanItems);

// Event listeners for 'enter' when using the keyboard
itemInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        addItem();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && document.activeElement === cleanButton) {
        event.preventDefault();
        cleanItems();
    }
});

// Event listeners to expand/compress list
const packListContainer = document.getElementById('bag-items');
const packListExpanded = document.getElementById('bag-items-expanded');
const packList = document.getElementById('packlist');
const expand = document.getElementById('expand-icon');
const compress = document.getElementById('compress-icon');

packListContainer.addEventListener('mouseover', () => {
    if (!packListExpanded.style.display || packListExpanded.style.display === 'none') {
        expand.style.display = 'flex';
    }
});

packListContainer.addEventListener('mouseout', () => {
    if (!packListExpanded.style.display || packListExpanded.style.display === 'none') {
        expand.style.display = 'none';
    }
});

// Function to expand the list
function expandList() {
    packListContainer.classList.add('bag-items-expanded');
    expand.style.display = 'none';
    compress.style.display = 'flex';

    // Move the pack list to the expanded container
    packListExpanded.appendChild(packList);
    packListExpanded.style.display = 'flex';
    packListContainer.style.display = 'none';
}

// Function to compress the list
function compressList() {
    packListContainer.classList.remove('bag-items-expanded');
    compress.style.display = 'none';
    expand.style.display = 'flex';

    // Move the pack list back to the normal container
    packListContainer.appendChild(packList);
    packListExpanded.style.display = 'none';
    packListContainer.style.display = 'flex';
}

packListContainer.addEventListener('click', expandList);
compress.addEventListener('click', compressList);

// Animation for the 'clean' button
const buttonSpin = document.querySelector('.clean-btn');

buttonSpin.addEventListener('mouseenter', () => {
    const icon = buttonSpin.querySelector('.fa-arrow-rotate-right');
    icon.classList.add('fa-spin');
});

buttonSpin.addEventListener('mouseleave', () => {
    const icon = buttonSpin.querySelector('.fa-arrow-rotate-right');
    icon.classList.remove('fa-spin');
});