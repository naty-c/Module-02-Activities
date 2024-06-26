const itemList = document.getElementById('packlist');
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
function createListItem(itemText) {
    const li = document.createElement('li');
    li.textContent = itemText;

    // Adding edit button for each item
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
    editButton.classList.add('edit-item-btn');
    editButton.addEventListener('click', (event) => {
        const newText = prompt('Edit item:', itemText);
        if (newText) {
            const storedItems = localStorage.getItem('my-trip-packlist');
            if (storedItems) {
                const packList = JSON.parse(storedItems);
                const itemIndex = packList.indexOf(itemText);
                if (itemIndex !== -1) {
                    packList[itemIndex] = newText;
                    localStorage.setItem('my-trip-packlist', JSON.stringify(packList));
                    event.preventDefault(); // Prevent default behavior
                    li.textContent = newText; // Update existing item
                }
            }
        }
    });

    // Adding clean button for each item
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    deleteButton.classList.add('del-item-btn');
    deleteButton.addEventListener('click', () => {
    
        if(confirm('Are you sure you want to delete this item?')) {
        itemList.removeChild(li); // Remove the icon from DOM
    
        // Update the localStorage too when an item is deleted
        const storedItems = localStorage.getItem('my-trip-packlist');
        if (storedItems) {
            const packList = JSON.parse(storedItems);
            const updatedPackList = packList.filter(packItem => packItem !== itemText);
            localStorage.setItem('my-trip-packlist', JSON.stringify(updatedPackList));
        }
    }
});
    
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    
    return li;
}

// Add new items to the list and also to the localStorage
function addItem() {
    const itemText = itemInput.value.trim();
    
    if (itemText !== "") {
        const storedItems = localStorage.getItem('my-trip-packlist');
        const packList = storedItems ? JSON.parse(storedItems) : [];

        packList.push(itemText);
        localStorage.setItem('my-trip-packlist', JSON.stringify(packList));

        itemInput.value = ""; // Clean the input before adding a new item

        loadItems(); // Update the displayed list

        const lastItem = itemList.lastElementChild;
        lastItem.classList.add('added');
        setTimeout(() => lastItem.classList.remove('added'), 1000);
    }
}

// Clean items form the list and the localstorage
function cleanItems() {
    if(confirm('Are you sure you want to clean the entire list?')) {
        localStorage.removeItem('my-trip-packlist');
        loadItems(); 
    }
}

loadItems();

// Refresh checklist every second
setInterval(loadItems, 1000);

loadItems();

export { loadItems, createListItem, addItem, cleanItems, itemInput };