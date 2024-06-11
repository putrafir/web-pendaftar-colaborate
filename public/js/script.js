// pop up modal pilih gelombang
document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll("[data-modal-toggle]");
  const hideButtons = document.querySelectorAll("[data-modal-hide]");
  const modal = document.getElementById("popup-modal");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      modal.classList.toggle("hidden");
      modal.classList.toggle("flex");
    });
  });

  hideButtons.forEach((button) => {
    button.addEventListener("click", function () {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });
  });
});

// nav button
document
  .getElementById("dropdownDefaultButton")
  .addEventListener("click", function () {
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("hidden");
  });
