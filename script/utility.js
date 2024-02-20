function getValueById(elementId) {
  let result = document.getElementById(elementId).value;
  return result;
}

function addValueById(elementId, value) {
  document.getElementById(elementId).value = value;
}

function removeClassById(elementId, value) {
  document.getElementById(elementId).classList.remove(value);
}

function addClassById(elementId, value) {
  document.getElementById(elementId).classList.add(value);
}

function removeAttributeById(elementId, attribute) {
  document.getElementById(elementId).removeAttribute(attribute);
}

function addAttributeById(elementId, attribute, value) {
  document.getElementById(elementId).setAttribute(attribute, value);
}

function getElementTextById(elementId) {
  let result = document.getElementById(elementId).innerText;
  return result;
}

function setElementTextById(elementId, value) {
  document.getElementById(elementId).innerText = value;
}
