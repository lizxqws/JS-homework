const btn = document.getElementById("btn");

function greet() {
  btn.textContent = "Привіт!";
  btn.style.color = "red";
}

btn.addEventListener("click", greet);
