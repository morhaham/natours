window.addEventListener("DOMContentLoaded", () => {
  const navigationSection = document.querySelector(".navigation");

  navigationSection.addEventListener("click", (e) => {
    const el = e.target;
    if (el.classList.contains("navigation__link")) {
      navigationSection.querySelector(".navigation__checkbox").checked = false;
    }
  });
});
