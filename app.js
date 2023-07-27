// app.js

const itemForm = document.getElementById('item-form');
const itemsList = document.getElementById('items-list');

// Function to fetch and display items
async function fetchItems() {
  try {
    const response = await fetch('/api/items');
    const data = await response.json();

    itemsList.innerHTML = '';

    data.forEach((item) => {
      const itemElement = document.createElement('div');
      itemElement.textContent = `${item.itemNo} - ${item.itemName} | Stock: ${item.stockQuantity} | Price: ${item.price}`;
      itemsList.appendChild(itemElement);
    });
  } catch (err) {
    console.error('Error fetching items:', err);
  }
}

// Function to handle form submission
async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(itemForm);
  const newItem = {
    itemNo: formData.get('itemNo'),
    itemName: formData.get('itemName'),
    stockQuantity: formData.get('stockQuantity'),
    price: formData.get('price'),
  };

  try {
    await fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });
    itemForm.reset();
    fetchItems();
  } catch (err) {
    console.error('Error adding item:', err);
  }
}

// Event listener for form submission
itemForm.addEventListener('submit', handleSubmit);

// Fetch and display items when the page loads
fetchItems();
