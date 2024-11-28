// DOM Elements
const themeToggle = document.getElementById("themeToggle");
const skillBars = document.querySelectorAll(".skill-bar");
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.id = "scrollToTop";
scrollToTopBtn.innerHTML = "↑";
document.body.appendChild(scrollToTopBtn);

// Theme Toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeToggle.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
});

// Animate Skill Bars
const animateSkillBars = () => {
    const triggerHeight = window.innerHeight / 1.3;
    skillBars.forEach((bar) => {
        const skillPosition = bar.getBoundingClientRect().top;
        if (skillPosition < triggerHeight) {
            const progress = bar.getAttribute("data-progress");
            bar.style.width = progress;
        }
    });
};
window.addEventListener("scroll", animateSkillBars);

Scroll-to-Top Button
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// Contact Form Validation
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            formFeedback.textContent = "All fields are required!";
            formFeedback.style.color = "red";
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            formFeedback.textContent = "Please enter a valid email address!";
            formFeedback.style.color = "red";
            return;
        }

        // Simulate form submission
        formFeedback.textContent = "Sending...";
        formFeedback.style.color = "blue";

        setTimeout(() => {
            formFeedback.textContent = "Thank you for reaching out! I'll get back to you soon.";
            formFeedback.style.color = "green";
            contactForm.reset();
        }, 2000);
    });
}
// Interactive Skill Cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const skill = card.getAttribute('data-skill');
        card.style.background = 'rgba(255, 255, 255, 0.2)';
        card.innerHTML += `<p class="tooltip">I am highly skilled in ${skill}!</p>`;
    });

    card.addEventListener('mouseleave', () => {
        const tooltip = card.querySelector('.tooltip');
        if (tooltip) tooltip.remove();
        card.style.background = 'rgba(255, 255, 255, 0.1)';
    });
});
