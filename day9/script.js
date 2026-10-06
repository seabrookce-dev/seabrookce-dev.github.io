const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const checklist = document.getElementById("checklist");

addButton.addEventListener("click", function () {
  const itemText = itemInput.value.trim();

  if (itemText === "") {
    return;
  }

  const listItem = document.createElement("li");

  listItem.textContent = itemText;

  checklist.appendChild(listItem);

  itemInput.value = "";
  itemInput.focus();
});
