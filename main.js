const humburgery = document.querySelector(".humburgery");
const mobilemenue = document.querySelector(".mobile-menue");
const icons = document.querySelectorAll("i");

humburgery.addEventListener("click", function (event) {
  const isVisible = mobilemenue.getAttribute("data-visible");
  if (isVisible == "true") {
    // qari hiding
    mobilemenue.setAttribute("data-visible", "false");
    icons[0].setAttribute("data-visible", "true");
    icons[1].setAttribute("data-visible", "false");
  } else if (isVisible == "false") {
    // soo bandhig showing
    mobilemenue.setAttribute("data-visible", "true");
    icons[0].setAttribute("data-visible", "false");
    icons[1].setAttribute("data-visible", "true");
  }
  
});