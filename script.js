function accordionInteraction(accordionNumber) {
  const accordionContainer = document.getElementById(
    `accordion-container-${accordionNumber}`
  );
  const accordionIcon = document.getElementById(
    `accordion-icon-${accordionNumber}`
  );
  if (accordionContainer.style.gridTemplateRows != "min-content 1fr") {
    accordionContainer.style.gridTemplateRows = "min-content 1fr";
    accordionIcon.src = "../assets/images/icon-minus.svg";
  } else {
    accordionContainer.style.removeProperty("grid-template-rows");
    accordionIcon.src = "../assets/images/icon-plus.svg";
  }
}
