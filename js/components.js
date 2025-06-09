// Components Loader
document.addEventListener('DOMContentLoaded', function() {
    // Function to determine base path based on current location
    function getBasePath() {
        const path = window.location.pathname;
        const isFile = window.location.protocol === 'file:';
        
        if (isFile) {
            if (path.includes('pages/')) {
                return '../';
            }
            // Check if we're in the root directory
            if (path.includes('index.html') || path.endsWith('altekmed2_new/')) {
                return './';
            }
            // Fallback for direct file access
            return '';
        }
        
        return path.includes('/pages/') ? '../' : './';
    }

    // Function to create fallback navigation
    function createFallbackNav() {
        const navHtml = `
            <nav class="navbar">
                <div class="container">
                    <div class="logo">
                        <a href="index.html">
                            <img src="images/logo.png" alt="AltekMed Logo" class="logo-img">
                        </a>
                    </div>
                    <ul class="nav-links">
                        <li><a href="index.html" class="active">Home</a></li>
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
        return navHtml;
    }

    // Function to load HTML components
    async function loadComponent(elementId, componentPath) {
        try {
            const basePath = getBasePath();
            const fullPath = basePath + componentPath;
            const element = document.getElementById(elementId);
            
            if (!element) return;

            try {
                const response = await fetch(fullPath);
                if (response.ok) {
                    const html = await response.text();
                    element.innerHTML = html;
                } else {
                    throw new Error('Fetch failed');
                }
            } catch (fetchError) {
                // If fetch fails and we're loading nav, use fallback
                if (elementId === 'main-nav' && window.location.protocol === 'file:') {
                    element.innerHTML = createFallbackNav();
                }
            }

            // Dispatch event when component is loaded
            window.dispatchEvent(new CustomEvent('componentLoaded', {
                detail: { id: elementId }
            }));
        } catch (error) {
            console.error('Error loading component:', error);
        }
    }

    // Load navigation
    loadComponent('main-nav', 'components/nav.html');
    
    // Load footer
    loadComponent('main-footer', 'components/footer.html');

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
    
    // Update paths based on current location
    const basePath = getBasePath();
    
    // Update logo source
    const logo = document.querySelector('.logo-img');
    if (logo) {
        logo.src = basePath + 'images/logo.png';
    }

    // Update navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href !== '#' && href !== 'javascript:void(0)') {
            if (href.startsWith('#')) {
                // Keep anchor links as is
                return;
            }
            if (href.includes('index.html')) {
                link.href = basePath + 'index.html';
            } else {
                link.href = href.startsWith('/') ? basePath + href.substring(1) : basePath + href;
            }
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
