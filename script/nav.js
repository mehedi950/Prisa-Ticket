document.getElementById("navHambarger").addEventListener("click", function () {
  addClassById("navHambarger", "hidden");
  removeClassById("navHambargerCross", "hidden");
  removeClassById("hambargerMenu", "opacity-0");
});
document
  .getElementById("navHambargerCross")
  .addEventListener("click", function () {
    removeClassById("navHambarger", "hidden");
    addClassById("navHambargerCross", "hidden");
    addClassById("hambargerMenu", "opacity-0");
  });
