document.addEventListener("DOMContentLoaded", () => {
  const buttonHeader = document.getElementById("btn");
  const logoNav = document.getElementById("logo");

  buttonHeader.addEventListener("click", () => {
    logoNav.classList.toggle("hidden");
  });
});
