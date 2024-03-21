function createRow(container, userName, userInputData) {
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);

  const rowItem = document.createElement("div");
  rowItem.innerHTML = userName;
  rowItem.classList.add("rowItem");
  row.appendChild(rowItem);

  for (let userData of userInputData) {
    const { id, item, user_id } = userData;
    const dataContainer = document.createElement("div");
    dataContainer.id = "data_" + id;
    dataContainer.classList.add("dataContainer");

    const drawingItem = document.createElement("div");
    drawingItem.innerHTML = item;
    dataContainer.appendChild(drawingItem);

    const img = document.createElement("img");
    img.src = constants.IMG_DIR + "/" + id + ".png";
    img.classList.add("thumb");
    if (utils.flaggedUsers.includes(user_id)) {
      img.classList.add("blur");
    }
    dataContainer.appendChild(img);

    row.appendChild(dataContainer);
  }
}
