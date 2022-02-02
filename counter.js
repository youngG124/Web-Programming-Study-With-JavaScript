const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
    const current = Number(number.innerText);
    number.innerText = current + 1;
};

decrease.onclick = () => {
    const current = Number(number.innerText);
    number.innerText = current - 1;
};