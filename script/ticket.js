// show hambarger menu
document.getElementById("navHambarger").addEventListener("click", function () {
  addClassById("navHambarger", "hidden");
  removeClassById("navHambargerCross", "hidden");
  removeClassById("hambargerMenu", "opacity-0");
});

// hide hambarger menu
document
  .getElementById("navHambargerCross")
  .addEventListener("click", function () {
    removeClassById("navHambarger", "hidden");
    addClassById("navHambargerCross", "hidden");
    addClassById("hambargerMenu", "opacity-0");
  });

addValueById("fullName", "");
addValueById("phoneNumber", "");
addValueById("emailId", "");
addValueById("couponInput", "");
addAttributeById("couponInput", "disabled", "");
addAttributeById("couponBtn", "disabled", "");

let seats = document.getElementsByClassName("bus_seat");
let clickedSeatArry = [];
let discount = 0;

for (let seat of seats) {
  seat.addEventListener("click", function (event) {
    let clickSeatFirst = event.target.innerText;

    if (clickedSeatArry.includes(clickSeatFirst)) {
      alert("already selected");
    } else {
      if (clickedSeatArry.length < 4) {
        // set clicked seat as array list
        clickedSeatArry.push(clickSeatFirst);
        //change the selected seat background color
        for (let clickSeat of clickedSeatArry) {
          removeClassById(clickSeat, "bg-color_third");
          addClassById(clickSeat, "bg-color_primary");
        }
        // total price
        let totalPrice = clickedSeatArry.length * 550;
        setElementTextById("totalPrice", totalPrice);
        //decrease avail seat count
        let currentSeat = parseInt(getElementTextById("availableSeatCount"));
        let availSeat = currentSeat - 1;
        // set selected seat details
        updateClickedSeatDetails();
        // set the avail seat
        setElementTextById("availableSeatCount", availSeat);
        // grand total price
        setElementTextById("grandTotal", totalPrice);
        // set selected seat count
        setElementTextById("selectSeatCount", clickedSeatArry.length);

        //remove disabled from coupon when 4 seat is selected
        removeCouponDisabled();
      } else {
        alert("You can't select over 4 seat");
      }
    }
    console.log(clickedSeatArry);
  });
}

//update clicked seat details
function updateClickedSeatDetails() {
  let seatDetailsBox = document.getElementById("clickedSeatDetails");
  let ul = document.createElement("ul");
  ul.classList.add("flex");
  ul.classList.add("justify-between");
  ul.classList.add("py-1");
  ul.innerHTML = `
  <li>${event.target.innerText}</li>
  <li>Economy</li>
  <li>550</li>
  `;
  seatDetailsBox.appendChild(ul);
}

//enable coupon option by selection 4 element
function removeCouponDisabled() {
  if (clickedSeatArry.length === 4) {
    removeAttributeById("couponInput", "disabled");
    removeAttributeById("couponBtn", "disabled");
  } else {
    addAttributeById("couponInput", "disabled", "");
    addAttributeById("couponBtn", "disabled", "");
  }
}

//coupon discount

document.getElementById("couponBtn").addEventListener("click", function () {
  let coupon = getValueById("couponInput");

  let price = parseInt(getElementTextById("totalPrice"));

  if (coupon == "") {
    alert("empty coupon field");
  } else if (coupon === "NEW15") {
    discount = (price * 15) / 100;
    price = price - discount;
    setElementTextById("grandTotal", price);
    addClassById("couponInputBox", "hidden");
    setElementTextById("discountValue", discount);
    removeClassById("discountBox", "hidden");
    addClassById("discountBox", "flex");
  } else if (coupon === "Couple 20") {
    discount = (price * 20) / 100;
    price = price - discount;
    setElementTextById("grandTotal", price);
    addClassById("couponInputBox", "hidden");
    setElementTextById("discountValue", discount);
    removeClassById("discountBox", "hidden");
    addClassById("discountBox", "flex");
  } else {
    alert("Enter valid coupon");
  }
});

//passenger info

document.getElementById("buyBtn").addEventListener("click", function () {
  event.preventDefault();
  console.log("Hi Amma");
  let fullName = getValueById("fullName");
  let phoneNumber = getValueById("phoneNumber");
  let emailId = getValueById("emailId");
  let selectedSeat = parseInt(getElementTextById("selectSeatCount"));
  //..........
  if (fullName == "") {
    alert("Enter your name");
  } else if (phoneNumber == "") {
    alert("Enter your Phone Number");
  } else if (emailId == "") {
    alert("Enter your Email Address");
  } else if (selectedSeat > 0) {
    removeClassById("confirmModal", "hidden");
    addClassById("confirmModal", "flex");
  } else {
    alert("select at least 1 seat");
  }
});
