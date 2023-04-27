let btn = document.querySelector(".button-two");

btn.addEventListener("mousemove", (e) => {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX * 3 - rect.left;
  btn.style.setProperty("--x", x + "deg");
});
