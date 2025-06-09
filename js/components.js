// Navigation initialization function
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const hamburger = navbar.querySelector('.hamburger');
    const navLinks = navbar.querySelector('.nav-links');
    const dropdowns = navbar.querySelectorAll('.has-dropdown');

    // Hamburger menu toggle
    if (hamburger && navLinks) {
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
    }

    // Handle dropdown menus
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (window.innerWidth <= 992) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
            });
        }
    });

    // Scroll handler for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Function to determine base path based on current location
function getBasePath() {
    const path = window.location.pathname;
    const isFile = window.location.protocol === 'file:';
    const isIndex = path.endsWith('index.html') || path.endsWith('/') || path.endsWith('\\');
    
    if (isFile) {
        // In root directory
        if (isIndex) {
            return '';
        }
        // In pages directory
        if (path.includes('pages/') || path.includes('pages\\')) {
            return '../';
        }
    } else {
        // Served from web server
        if (path.includes('/pages/')) {
            return '../';
        }
        return '';
    }
    
    return '';
}

// Simple navigation HTML for direct file access
const directNavHtml = `
<nav class="navbar">
    <div class="container">
        <div class="logo">
            <a href="index.html">
                <img src="images/logo.png" alt="AltekMed Logo" class="logo-img">
            </a>
        </div>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li class="has-dropdown">
                <a href="pages/products.html">Products <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown-menu">
                    <a href="pages/products.html#endoscopes">Endoscopes</a>
                    <a href="pages/products.html#glucose">Glucose Monitoring</a>
                    <a href="pages/products.html#insulin">Insulin Delivery</a>
                </div>
            </li>
            <li class="has-dropdown">
                <a href="pages/services.html">Services <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown-menu">
                    <a href="pages/services.html#development">Development</a>
                    <a href="pages/services.html#manufacturing">Manufacturing</a>
                    <a href="pages/services.html#quality">Quality Assurance</a>
                </div>
            </li>
            <li><a href="pages/technologies.html">Technologies</a></li>
            <li><a href="pages/news.html">News</a></li>
            <li><a href="pages/careers.html">Careers</a></li>
            <li><a href="#contact" class="btn-contact">Contact Us</a></li>
        </ul>
        <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</nav>
`;

// Navigation HTML for pages directory
const pagesNavHtml = `
<nav class="navbar">
    <div class="container">
        <div class="logo">
            <a href="../index.html">
                <img src="../images/logo.png" alt="AltekMed Logo" class="logo-img">
            </a>
        </div>
        <ul class="nav-links">
            <li><a href="../index.html">Home</a></li>
            <li class="has-dropdown">
                <a href="products.html">Products <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown-menu">
                    <a href="products.html#endoscopes">Endoscopes</a>
                    <a href="products.html#glucose">Glucose Monitoring</a>
                    <a href="products.html#insulin">Insulin Delivery</a>
                </div>
            </li>
            <li class="has-dropdown">
                <a href="services.html">Services <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown-menu">
                    <a href="services.html#development">Development</a>
                    <a href="services.html#manufacturing">Manufacturing</a>
                    <a href="services.html#quality">Quality Assurance</a>
                </div>
            </li>
            <li><a href="technologies.html">Technologies</a></li>
            <li><a href="news.html">News</a></li>
            <li><a href="careers.html">Careers</a></li>
            <li><a href="#contact" class="btn-contact">Contact Us</a></li>
        </ul>
        <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</nav>
`;

// Setup navigation functionality
function setupNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (!navbar || !hamburger || !navLinks) return;

    // Set active state for current page
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href')?.endsWith(currentPage)) {
            link.classList.add('active');
        }
    });

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && !navbar.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
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

    // Handle dropdown menus on mobile
    const dropdowns = document.querySelectorAll('.has-dropdown');
    dropdowns.forEach(dropdown => {
        if (window.innerWidth <= 992) {
            const link = dropdown.querySelector('a');
            const menu = dropdown.querySelector('.dropdown-menu');
            if (link && menu) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
                });
            }
        }
    });
}

// Components Loader

document.addEventListener('DOMContentLoaded', function() {
    async function loadComponent(elementId, componentPath) {
        try {
            const element = document.getElementById(elementId);
            if (!element) return;

            // Handle navigation for file:// protocol
            if (window.location.protocol === 'file:' && elementId === 'main-nav') {
                // Use static nav HTML for file access
                const isInPages = window.location.pathname.includes('/pages/') || window.location.pathname.includes('\\pages\\');
                element.innerHTML = isInPages ? pagesNavHtml : directNavHtml;
                setupNavigation();
                return;
            }

            // For http/https protocol, try to load component normally
            try {
                const response = await fetch(componentPath);
                if (!response.ok) throw new Error('Fetch failed');
                const html = await response.text();
                element.innerHTML = html;

                // Setup navigation if this was the nav component
                if (elementId === 'main-nav') {
                    initNavigation();
                }
            } catch (fetchError) {
                console.warn(`Failed to load component: ${componentPath}`, fetchError);
                // Use static navigation if fetch fails
                if (elementId === 'main-nav') {
                    const isInPages = window.location.pathname.includes('/pages/') || window.location.pathname.includes('\\pages\\');
                    element.innerHTML = isInPages ? pagesNavHtml : directNavHtml;
                    setupNavigation();
                }
            }
        } catch (error) {
            console.error('Error loading component:', error);
        }
    }

    // Load navigation
    loadComponent('main-nav', 'components/nav.html');
    // Load footer
    loadComponent('main-footer', 'components/footer.html');
});

// Navigation Initialization
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Update paths based on current location
    const basePath = getBasePath();
    
    // Update logo source
    const logo = document.querySelector('.logo-img');
    if (logo) {
        logo.src = basePath + 'images/logo.png';
    }    // Update navigation links for proper path handling
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#')) return; // Skip anchor links

        const basePath = getBasePath();
        if (window.location.protocol === 'file:') {
            // For file:// protocol, ensure paths are relative
            if (window.location.pathname.includes('/pages/') || window.location.pathname.includes('\\pages\\')) {
                // In pages directory, go up one level
                if (href.startsWith('pages/')) {
                    link.href = href.replace('pages/', '');
                } else if (!href.startsWith('../')) {
                    link.href = '../' + href;
                }
            }
        } else {
            // For http/https, use the basePath
            link.href = basePath + (href.startsWith('/') ? href.substring(1) : href);
        }
    });

    // Update active state
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop();
    
    document.querySelectorAll('.nav-links a').forEach(item => {
        const href = item.getAttribute('href');
        if (href && (href.endsWith(currentPage) || 
            (currentPath === '/' && href.endsWith('index.html')))) {
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
