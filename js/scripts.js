function newItem() {
  // 1. Adding a new line item to the list of items:
  let li = $("<li></li>");
  let input = $("#input").val();
  let text = document.createTextNode(input);

  li.append(text);

  if (input === "") {
    alert("You must write something");
  } else {
    let list = $("#list");
    list.append(li);
  }

  // 2. Crossing out an item from the list of items:
  function crossOut() {
    li.toggleClass("strike");
  }
  li.on("dblclick", crossOut);

  // 3(i). Adding the delete button "X":
  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));

  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);

  // 3(ii). Adding Class delete (display:none) from the css:
  function deleteListItem() {
    li.addClass("delete");
  }
}
