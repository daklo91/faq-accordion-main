function accordionInteraction(accordionNumber) {
  const accordionContainer = document.getElementById(
    `accordion-container-${accordionNumber}`
  );
  const accordionIcon = document.getElementById(
    `accordion-icon-${accordionNumber}`
  );
  const accordionButton = accordionIcon.closest("button");

  if (accordionContainer.style.gridTemplateRows !== "min-content 1fr") {
    accordionContainer.style.gridTemplateRows = "min-content 1fr";
    accordionContainer.tabIndex = "0";
    accordionIcon.src = "./assets/images/icon-minus.svg";
    accordionButton.setAttribute("aria-expanded", "true");
  } else {
    accordionContainer.style.gridTemplateRows = "";
    accordionContainer.removeAttribute("tabindex");
    accordionIcon.src = "./assets/images/icon-plus.svg";
    accordionButton.setAttribute("aria-expanded", "false");
  }
}
