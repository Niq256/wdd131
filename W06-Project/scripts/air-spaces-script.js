document.getElementById("pageForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (confirm("Thank you for signing up")) {
        window.location.href = "index.html";
    }
});
// Hamburger menu toggle for mobile
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

if (hamburger && navigation) {
    hamburger.addEventListener("click", () => {
        navigation.classList.toggle("active");
    });
}

// Live Chat
const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.querySelector('#chat-input');
const sendBtn = document.querySelector('#send-btn');

// new chat message
function addMessage(message, sender = 'You') {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `${sender}: ${message}`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Send button
sendBtn.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        addMessage(message);
        chatInput.value = '';
        
        // reply from the admin
        setTimeout(() => {
            addMessage("Thank you for reaching out! We'll get back to you shortly.", 'Admin');
        }, 1000);
    }
});
