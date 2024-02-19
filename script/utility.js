//delete class from html element
function removeClassById(elementId, value) {
  document.getElementById(elementId).classList.remove(value);
}

//add class from html element
function addClassById(elementId, value) {
  document.getElementById(elementId).classList.add(value);
}

// get inner text by element id
function getElementTextById(elementId) {
  let result = document.getElementById(elementId).innerText;
  return result;
}

// set inner text by element id
function setElementTextById(elementId, value) {
  document.getElementById(elementId).innerText = value;
}

//remove attribute by id
function removeAttributeById(elementId, attribute) {
  document.getElementById(elementId).removeAttribute(attribute);
}

//add attribute by id
function addAttributeById(elementId, attribute, value) {
  document.getElementById(elementId).setAttribute(attribute, value);
}

// get value form input by id
function getValueById(elementId) {
  let result = document.getElementById(elementId).value;
  return result;
}

// add value form input by id
function addValueById(elementId, value) {
  document.getElementById(elementId).value = value;
}
