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
    dataContainer.onclick = () => {
      handleClick(userData, false);
    };
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

function handleClick(data, doScroll = true) {
  [...document.querySelectorAll(".emphasize")].forEach((element) =>
    element.classList.remove("emphasize")
  );
  const element = document.getElementById("data_" + data.id);
  element.classList.add("emphasize");
  if (doScroll) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  chart.selectSample(data);
}
