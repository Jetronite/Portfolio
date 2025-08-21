// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Contact form with EmailJS
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = "⚠️ Please fill out all fields.";
        formMessage.style.color = "red";
        return;
    }

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        message: message,
    })
        .then(() => {
            formMessage.textContent = "✅ Message sent successfully!";
            formMessage.style.color = "green";
            form.reset();
        }, () => {
            formMessage.textContent = "❌ Failed to send. Try again later.";
            formMessage.style.color = "red";
        });
});
