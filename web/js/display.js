function createRow(container, userName, userInputData) {
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);

  const rowItem = document.createElement("div");
  rowItem.innerHTML = userName;
  rowItem.classList.add("rowItem");
  row.appendChild(rowItem);

  for (let userData of userInputData) {
    const { id, item } = userData;
    const img = document.createElement("img");
    img.src = constants.IMG_DIR + "/" + id + ".png";
    img.classList.add("thumb");
    row.appendChild(img);
  }
}
