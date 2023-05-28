function createPopup() {
  var popupContent = "<div style='background-color: white; padding: 20px;'><video width='400' height='300' controls><source src='./images/Biocare.mp4' type='video/mp4'>Jettez un coup d'oeil pour appreciez les merveille du produit Biocare.</video><button id='closeBtn'>Fermer</button></div>";

  var popupContainer = document.createElement("div");
  popupContainer.innerHTML = popupContent;

  popupContainer.style.position = "fixed";
  popupContainer.style.top = "50%";
  popupContainer.style.left = "50%";
  popupContainer.style.transform = "translate(-50%, -50%)";
  popupContainer.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  popupContainer.style.color = "white";
  popupContainer.style.padding = "20px";
  popupContainer.style.zIndex = "9999";

  document.body.appendChild(popupContainer);

  function closePopup() {
    document.body.removeChild(popupContainer);
  }

  var closeBtn = document.getElementById("closeBtn");
  closeBtn.addEventListener("click", closePopup);
}

window.addEventListener("load", createPopup);
