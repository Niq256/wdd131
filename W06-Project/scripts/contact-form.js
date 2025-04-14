document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (confirm("Thank you! We'll get back to you soon.")) {
        window.location.href = "index.html";
    }
});