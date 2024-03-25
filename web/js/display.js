function createRow(container, userName, userInputData) {
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);

  const rowlabel = document.createElement("div");
  rowlabel.innerHTML = userName;
  rowlabel.classList.add("rowlabel");
  row.appendChild(rowlabel);

  for (let userData of userInputData) {
    const { id, label, user_id } = userData;
    const dataContainer = document.createElement("div");
    dataContainer.id = "data_" + id;
    dataContainer.classList.add("dataContainer");

    const drawinglabel = document.createElement("div");
    drawinglabel.innerHTML = label;
    dataContainer.appendChild(drawinglabel);

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
