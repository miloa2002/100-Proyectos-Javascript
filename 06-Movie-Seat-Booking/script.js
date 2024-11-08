const seats = document.querySelectorAll(".seat");
const movie = document.querySelector("#movie");
const count = document.querySelector("#count");
const resultTotal = document.querySelector("#total");

movie.addEventListener("change", movieChange);
let selectedSeats = [];

function randomSeat() {
  for(let i = 0; i < 10; i++) {
    const random = Math.floor(Math.random() * seats.length);
    seats[random].classList.add("occupied");
  }  
}

function movieChange(e) {
  clearSeats();
  
  if(e.target.value) {
    randomSeat();
    calculateTotal(Number(e.target.value));
  }
}

function clearSeats() {
  seats.forEach(element => {
    element.classList.remove("occupied");
    element.classList.remove("selected");
  });
}

function calculateTotal(price) {
  seats.forEach(element => {
    element.addEventListener("click", () => {
      element.classList.add("selected");
      selectedSeats.push(price);
      calculateTotalPrice(selectedSeats);
    });
  });
}

function calculateTotalPrice(selectedSeats) {
  const total = selectedSeats.reduce((accum, currentValue) => accum + currentValue, 0);
  count.textContent = selectedSeats.length;
  resultTotal.textContent = total;
}
