// Components Loader
document.addEventListener('DOMContentLoaded', function() {
    // Function to load HTML components
    async function loadComponent(elementId, componentPath) {
        try {
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`Failed to load component: ${componentPath}`);
            }
            const html = await response.text();
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = html;
                // Dispatch event when component is loaded
                window.dispatchEvent(new CustomEvent('componentLoaded', {
                    detail: { id: elementId }
                }));
            }
        } catch (error) {
            console.error('Error loading component:', error);
        }
    }

    // Load navigation
    loadComponent('main-nav', '/components/nav.html');
    
    // Load footer
    loadComponent('main-footer', '/components/footer.html');

    // Initialize components after loading
    window.addEventListener('componentLoaded', function(e) {
        if (e.detail.id === 'main-nav') {
            // Initialize navigation functionality
            initNavigation();
        }
    });
});

// Navigation Initialization
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Update active nav item based on current page
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPath) {
            item.classList.add('active');
        }
    });

    // Hamburger menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.classList.contains('active')) {
            if (!navbar.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });

    // Scroll event for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}
