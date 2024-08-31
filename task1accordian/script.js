document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const icon = this.querySelector(".accordion-icon");
    const isActive = content.style.maxHeight;

    // Close all sections
    document.querySelectorAll(".accordion-content").forEach((sec) => {
      sec.style.maxHeight = null;
      sec.previousElementSibling.querySelector(
        ".accordion-icon"
      ).style.transform = "rotate(0deg)";
    });

    // Toggle the clicked section
    if (isActive) {
      content.style.maxHeight = null;
      icon.style.transform = "rotate(0deg)";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.style.transform = "rotate(180deg)";
    }
  });
});
