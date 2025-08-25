const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        hamburger.textContent = navLinks.classList.contains("show") ? "☰" : "☰";
    })


// contact form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Stop page reload

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mwppdxyz", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        status.textContent = "✅ Thank you! Your message has been sent.";
        status.style.color = "green";
        form.reset();
      } else {
        status.textContent = "❌ Oops! Something went wrong. Try again.";
        status.style.color = "red";
      }
    } catch (error) {
      status.textContent = "⚠️ Network error. Please try again.";
      status.style.color = "red";
    }
  });
});
