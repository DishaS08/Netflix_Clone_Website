let faqs = document.querySelectorAll(".faqbox");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");

    let answer = faq.querySelector(".answer");
    if (answer) {
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    }
  });
});
