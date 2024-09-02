const box = document.getElementById("box");
box.style.position = "absolute";

function mousemove(e) {
  box.style.top = e.pageY + "px";
  box.style.left = e.pageX + "px";
}

document.addEventListener("mousemove", _.debounce(mousemove, 100));
