const input = document.getElementById("calculationBox");
const p = document.getElementsByTagName("p")[0];

function calculate() {
  p.innerText = eval(input.value);
}
