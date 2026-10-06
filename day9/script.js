// =========================================
// GAMECOCK GAMEDAY CHECKLIST
// =========================================

// Default checklist items
let checklistItems = [
  "Clear stadium bag",
  "Game ticket",
  "Carolina shirt",
  "Sunglasses",
  "Phone charger"
];


// Get elements from the HTML
const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const checklist = document.getElementById("checklist");


// =========================================
// DISPLAY THE LIST
// =========================================

function displayItems() {

  // Clear the current list
  checklist.innerHTML = "";

  // Loop through the array
  checklistItems.forEach(function (item, index) {

    // Create the list item
    const listItem = document.createElement("li");

    // Create checkbox
    const checkBox = document.createElement("input");

    checkBox.type = "checkbox";
    checkBox.classList.add("check-box");

    // Create item text
    const itemName = document.createElement("span");

    itemName.textContent = item;

    // Cross out item when checked
    checkBox.addEventListener("change", function () {

      listItem.classList.toggle(
        "completed",
        checkBox.checked
      );

    });


    // Create remove button
    const removeButton = document.createElement("button");

    removeButton.textContent = "Remove 🗑️";

    removeButton.classList.add("remove-button");


    // Remove item from the array
    removeButton.addEventListener("click", function () {

      checklistItems.splice(index, 1);

      displayItems();

    });


    // Put everything together
    listItem.appendChild(checkBox);

    listItem.appendChild(itemName);

    listItem.appendChild(removeButton);


    // Add item to the webpage
    checklist.appendChild(listItem);

  });
}


// =========================================
// ADD A NEW ITEM
// =========================================

function addItem() {

  const itemText = itemInput.value.trim();


  // Don't add empty items
  if (itemText === "") {
    return;
  }


  // Add the new item to the array
  checklistItems.push(itemText);


  // Update the website
  displayItems();


  // Clear the textbox
  itemInput.value = "";


  // Put cursor back in textbox
  itemInput.focus();
}


// =========================================
// BUTTON EVENT
// =========================================

addButton.addEventListener("click", addItem);


// =========================================
// PRESS ENTER TO ADD
// =========================================

itemInput.addEventListener("keydown", function (event) {

  if (event.key === "Enter") {
    addItem();
  }

});


// =========================================
// LOAD DEFAULT ITEMS
// =========================================

displayItems();
