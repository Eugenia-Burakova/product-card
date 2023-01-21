let basicPrice = 1000;
let servicePrice = 0;
let guaranteePrice = 0;

let services = document.querySelectorAll(".service");
services.forEach(service => service.addEventListener("click", (event) => {
    servicePrice = parseInt(service.dataset.service);
    printPrice();
}))

let guarantees = document.querySelectorAll(".guarantee");
guarantees.forEach(guarantee => guarantee.addEventListener("click", (event) => {
    guaranteePrice = parseInt(guarantee.dataset.guarantee);
    printPrice();
}))

function printPrice() {
    let totalPrice = basicPrice + servicePrice + guaranteePrice;
    document.querySelector(".price-output").textContent = `${totalPrice} $`;
}