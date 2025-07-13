const faqs = document.querySelectorAll(".faqbox");

faqs.forEach(box => {
  box.addEventListener("click", () => {
    box.classList.toggle("open");
  });
});
