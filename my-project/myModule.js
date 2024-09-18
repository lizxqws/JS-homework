export function submitForm(event) {
  event.preventDefault();
  console.log("hi");

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (name.value && email.value && message.value) {
    alert("Ваша форма була успішно відіправленна!");
    name.value = "";
    email.value = "";
    message.value = "";
  } else {
    alert("Заповніть всі поля!");
  }
}
