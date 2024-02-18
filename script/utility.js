//delete class from html element
function removeClassById(elementId, value) {
  document.getElementById(elementId).classList.remove(value);
}

//add class from html element
function addClassById(elementId, value) {
  document.getElementById(elementId).classList.add(value);
}
