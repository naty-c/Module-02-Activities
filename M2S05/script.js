const itemList = document.getElementById('packlist');
const addButton = document.getElementById('add-item-btn');
const cleanButton = document.getElementById('clean-list-btn');
const itemInput = document.getElementById('item-input');

// Retrieve and show items from localStorage
function loadItems() {
    const storedItems = localStorage.getItem('my-trip-packlist');

    itemList.innerHTML = ""; // Clean the list before adding new items

    if (storedItems) {
        const packList = JSON.parse(storedItems);

        packList.forEach(item => {
            const packItem = createListItem(item);
            itemList.appendChild(packItem);
        });
    }
}

// Create each item to the list using <li>
function createListItem(item) {
    const li = document.createElement('li');
    li.textContent = item;
    return li;
}

// Add new items to the list and also to the localStorage
function addItem() {
    const item = itemInput.value.trim();
    if (item !== "") {
        const storedItems = localStorage.getItem('my-trip-packlist');
        const packList = storedItems ? JSON.parse(storedItems) : [];

        packList.push(item);
        localStorage.setItem('my-trip-packlist', JSON.stringify(packList));

        itemInput.value = ""; // Clean the input before adding a new item
    }
    loadItems(); // Update the displayed list
}

// Clean items form the list and the localstorage
function cleanItems() {
    localStorage.removeItem('my-trip-packlist');
    loadItems(); 
}

loadItems();

// Event listeners for the buttons 'add' and 'clean'
addButton.addEventListener('click', addItem);
cleanButton.addEventListener('click', cleanItems);

// Accessibility to add and clean items using the 'enter' key
itemInput.addEventListener('keydown', (event) => {
    event.preventDefault();
    if (event.key === 'Enter') {
        addItem();
    }
});

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    if (event.key === 'Enter' && document.activeElement === cleanButton) {
        cleanItems();
    }
});

// Refresh checklist every second
setInterval(loadItems, 1000);

loadItems();