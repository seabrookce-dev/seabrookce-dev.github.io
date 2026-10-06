const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const checklist = document.getElementById("checklist");

addButton.addEventListener("click", addItem);

itemInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addItem();
  }
});

function addItem() {
  const itemText = itemInput.value.trim();

  if (itemText === "") {
    return;
  }

  // Create list item
  const listItem = document.createElement("li");

  // Create checkbox
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("check-box");

  // Cross out item when checked
  checkBox.addEventListener("change", function () {
    listItem.classList.toggle("completed", checkBox.checked);
  });

  // Create item text
  const itemName = document.createElement("span");
  itemName.textContent = itemText;

  // Create remove button
  const removeButton = document.createElement("button");

  removeButton.textContent = "Remove 🗑️";
  removeButton.classList.add("remove-button");

  // Remove item
  removeButton.addEventListener("click", function () {
    listItem.remove();
  });

  // Put everything together
  listItem.appendChild(checkBox);
  listItem.appendChild(itemName);
  listItem.appendChild(removeButton);

  checklist.appendChild(listItem);

  // Clear input
  itemInput.value = "";
  itemInput.focus();
}
