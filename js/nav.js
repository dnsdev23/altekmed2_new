// Navigation Scripts
document.addEventListener('DOMContentLoaded', () => {
    // Navigation scroll effect
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Scroll handler for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Handle dropdown menus on mobile
    const dropdowns = document.querySelectorAll('.has-dropdown');
    dropdowns.forEach(dropdown => {
        if (window.innerWidth <= 992) {
            dropdown.addEventListener('click', (e) => {
                e.preventDefault();
                const dropdownMenu = dropdown.querySelector('.dropdown-menu');
                dropdownMenu.style.display = 
                    dropdownMenu.style.display === 'none' ? 'flex' : 'none';
            });
        }
    });
});
