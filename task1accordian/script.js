document.querySelectorAll(".header").forEach((header) => {
  header.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const icon = this.querySelector(".ac-icon");
    const isActive = content.style.maxHeight;

    // Close all sections
    document.querySelectorAll(".content").forEach((sec) => {
      sec.style.maxHeight = null;
      sec.previousElementSibling.querySelector(".ac-icon").style.transform =
        "rotate(0deg)";
    });

    // Toggle the clicked section
    if (isActive) {
      // if header is open then it will rotate the arrow
      content.style.maxHeight = null;
      icon.style.transform = "rotate(0deg)";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.style.transform = "rotate(180deg)";
    }
  });
});
