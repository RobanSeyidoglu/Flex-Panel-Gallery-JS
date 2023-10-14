// Start Selecting Needed Elements
let panels = document.querySelector(".panels");
let allpanels = document.querySelectorAll(".panel");

// Add a click event listener to each panel
allpanels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panel.classList.toggle("open");
    panel.classList.toggle("active");

    // Select the child p elements within the clicked panel
    let firstP = panel.querySelector("p:first-child");
    let lastP = panel.querySelector("p:last-child");

    // Apply the "translate" effect only to the child p elements
    firstP.style.transitionDelay = "0.8s";
    firstP.classList.toggle("translate1");

    lastP.style.transitionDelay = "0.8s";
    lastP.classList.toggle("translate2");
  });
});
