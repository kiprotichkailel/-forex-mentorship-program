// JavaScript for Interactivity and Form Validation
document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  
    // Form Validation
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (!name || !email || !message) {
        e.preventDefault();
        alert("Please fill in all fields.");
        return;
      }
  
      if (!validateEmail(email)) {
        e.preventDefault();
        alert("Please enter a valid email address.");
      }
    });
  
    // Email Validation Function
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });
  
