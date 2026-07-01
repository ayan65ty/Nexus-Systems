// SCROLL ANIMATION
const hiddenElements = document.querySelectorAll('.hidden');

function showOnScroll() {
    hiddenElements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (top < screenHeight - 100) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);
showOnScroll();


// CHATBOT OPEN / CLOSE
function toggleChat() {
    const box = document.getElementById("chatbox");

    if (box.style.display === "flex") {
        box.style.display = "none";
    } else {
        box.style.display = "flex";
    }
}


// TIME GREETING
function getGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) {
        return "Good morning ☀️";
    } else if (hour < 18) {
        return "Good afternoon 🌤️";
    } else {
        return "Good evening 🌙";
    }
}


// CHATBOT RESPONSE
function sendMessage() {
    const input = document.getElementById("userInput");
    const messages = document.getElementById("chatMessages");

    const text = input.value.trim();

    if (!text) return;

    messages.innerHTML += `
        <div class="user-message">${text}</div>
    `;

    const msg = text.toLowerCase();

    let reply = "I'm Nexus AI 🤖. Could you tell me more about what you need?";

    // Greetings
    if (
        msg.includes("hello") ||
        msg.includes("hi") ||
        msg.includes("hey")
    ) {
        reply = `${getGreeting()} 👋 Welcome to Nexus Digital Lab. How can I help you today?`;
    }

    // Pricing
    else if (
        msg.includes("price") ||
        msg.includes("cost") ||
        msg.includes("how much")
    ) {
        reply = "Pricing depends on your project requirements. We offer custom quotes for websites, automation systems, and SaaS products.";
    }

    // Services
    else if (
        msg.includes("services") ||
        msg.includes("what do you do")
    ) {
        reply = "We offer website development, automation systems, SaaS development, and premium UI/UX design.";
    }

    // Website
    else if (
        msg.includes("website")
    ) {
        reply = "Yes, we build premium websites designed for businesses, brands, startups, and creators.";
    }

    // Automation
    else if (
        msg.includes("automation")
    ) {
        reply = "Automation helps businesses save time by reducing repetitive manual tasks using smart workflows.";
    }

    // Contact
    else if (
        msg.includes("contact") ||
        msg.includes("whatsapp") ||
        msg.includes("reach")
    ) {
        reply = "You can contact Nexus Digital Lab through the contact form or WhatsApp button on this website.";
    }

    // Founder
    else if (
        msg.includes("founder") ||
        msg.includes("owner") ||
        msg.includes("who made")
    ) {
        reply = "Nexus Digital Lab was founded by Ayomide Samuel to build smart digital products for modern businesses.";
    }

    // Portfolio
    else if (
        msg.includes("portfolio") ||
        msg.includes("projects")
    ) {
        reply = "Our portfolio includes web platforms, digital tools, automation systems, and SaaS products like our video downloader.";
    }

    // Time / Response delay
    setTimeout(() => {
        messages.innerHTML += `
            <div class="bot-message">${reply}</div>
        `;

        messages.scrollTop = messages.scrollHeight;
    }, 700);

    input.value = "";
}


// ENTER KEY SEND
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
