// 1️⃣ Burger menu toggle for mobile
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 2️⃣ Education toggle
const eduBtn = document.getElementById('edu-btn');
const eduContent = document.getElementById('edu-content');
eduBtn.addEventListener('click', () => {
    eduContent.classList.toggle('hidden');
    eduBtn.textContent = eduContent.classList.contains('hidden') 
        ? "Click to See Education Details" 
        : "Hide Education Details";
});

// 3️⃣ Animate skill bars on scroll
const skillBars = document.querySelectorAll('.progress div');
function animateSkills(){
    const trigger = window.innerHeight;
    skillBars.forEach(bar=>{
        const rect = bar.getBoundingClientRect();
        if(rect.top < trigger-50){
            bar.style.width = bar.getAttribute('data-width');
        }
    });
}
window.addEventListener('scroll', animateSkills);
