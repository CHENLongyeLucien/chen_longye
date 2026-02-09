const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const scrollTopBtn = document.getElementById("scrollTopBtn");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelector('.btn-main').addEventListener('click', function(e) {
    e.preventDefault();
    const headerOffset = document.querySelector('header').offsetHeight;
    const aboutSection = document.querySelector('#home');
    const elementPosition = aboutSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const info = card.querySelector('.project-info');
        info.style.display = info.style.display === 'block' ? 'none' : 'block';
    });
});

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
