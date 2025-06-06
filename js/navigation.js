// Navigation active state handling
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        // Remove all active classes first
        link.classList.remove('active');
        
        // Handle home page
        if (currentPath === '/' && link.getAttribute('href') === '/') {
            link.classList.add('active');
        }
        // Handle other pages
        else if (currentPath !== '/' && link.getAttribute('href').includes(currentPath)) {
            link.classList.add('active');
        }
    });

    // Dropdown menu enhancements
    const dropdowns = document.querySelectorAll('.has-dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        // Handle hover on desktop
        if (window.innerWidth > 992) {
            dropdown.addEventListener('mouseenter', () => {
                menu.style.display = 'block';
                setTimeout(() => menu.style.opacity = '1', 10);
            });
            
            dropdown.addEventListener('mouseleave', () => {
                menu.style.opacity = '0';
                setTimeout(() => menu.style.display = 'none', 300);
            });
        }
        
        // Handle click on mobile
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});
