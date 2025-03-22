document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners to all "Add to Order" buttons
    const orderButtons = document.querySelectorAll(".menu-item button");

    // Array to store selected items
    const selectedItems = [];

    orderButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const menuItem = event.target.parentElement;
            const itemName = menuItem.querySelector("span:first-of-type").textContent;
            const itemPrice = menuItem.querySelector(".price").textContent;

            // Add item to selected items array
            selectedItems.push({ name: itemName, price: itemPrice });

            // Show confirmation or console log
            alert(`Added to order: ${itemName} - ${itemPrice}`);
            console.log("Selected Items:", selectedItems);
        });
    });

    // You can create further features like displaying the selected items on the page or sending the data to a server.
});
