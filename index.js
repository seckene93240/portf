const burger = document.getElementById("burger");
const closeBtn = document.getElementById("closeBtn");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.classList.add("active");
  closeBtn.classList.add("active");
  burger.classList.add("hide");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
  closeBtn.classList.remove("active");
  burger.classList.remove("hide");
});

