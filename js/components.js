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

// Simple navigation HTML for direct file access
const directNavHtml = `
<nav class="navbar">
    <div class="container">
        <div class="logo">
            <a href="/index.html">
                <img src="/images/logo-altekmed.png" alt="AltekMed Logo" class="logo-img">
            </a>
        </div>
        <ul class="nav-links">
            <li><a href="/index.html">Home</a></li>
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
            <a href="/index.html">
                <img src="/images/logo-altekmed.png" alt="AltekMed Logo" class="logo-img">
            </a>
        </div>
        <ul class="nav-links">
            <li><a href="/index.html">Home</a></li>
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

// Static Footer HTML (content copied from components/footer.html)
const staticFooterHtml = `
<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-info">
                <img src="/images/logo-altekmed.png" alt="AltekMed Logo" class="footer-logo">
                <p>Your Trusted Partner in Medical Device Innovation</p>
                <div class="social-links">
                    <a href="https://linkedin.com/company/altekmed" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                    <a href="https://twitter.com/altekmed" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="https://facebook.com/altekmed" target="_blank" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                    <a href="https://youtube.com/altekmed" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            <div class="footer-links">
                <div class="footer-column">
                    <h4>Products</h4>
                    <ul>
                        <li><a href="/pages/products.html#endoscopes">Endoscopes</a></li>
                        <li><a href="/pages/products.html#glucose">Glucose Monitoring</a></li>
                        <li><a href="/pages/products.html#insulin">Insulin Delivery</a></li>
                        <li><a href="/pages/products.html#upcoming">New Products</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="/pages/services.html#development">Development</a></li>
                        <li><a href="/pages/services.html#manufacturing">Manufacturing</a></li>
                        <li><a href="/pages/services.html#quality">Quality Assurance</a></li>
                        <li><a href="/pages/services.html#support">Support</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="/pages/about.html">About Us</a></li>
                        <li><a href="/pages/news.html">News</a></li>
                        <li><a href="/pages/careers.html">Careers</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Contact</h4>
                    <ul class="contact-info">
                        <li>
                            <i class="fas fa-map-marker-alt"></i>
                            <span>No. 12, Li-Hsin Rd., Hsinchu Science-Based Industrial Park<br>Hsinchu City 300, Taiwan</span>
                        </li>
                        <li>
                            <i class="fas fa-phone"></i>
                            <span>+886-3-578-4567</span>
                        </li>
                        <li>
                            <i class="fas fa-envelope"></i>
                            <span>MedicalSales_Inquiry@altek.com.tw</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 AltekMed. All rights reserved.</p>
            <div class="footer-legal">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Use</a>
                <a href="#">Cookie Policy</a>
            </div>
        </div>
    </div>
</footer>
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

            const isFileProtocol = window.location.protocol === 'file:';
            const isInPagesDir = window.location.pathname.includes('/pages/') || window.location.pathname.includes('\\pages\\');
            let actualComponentPath = componentPath;

            if (isFileProtocol) {
                if (isInPagesDir) {
                    // If in /pages/ and componentPath is like 'components/footer.html', it needs to be '../components/footer.html'
                    if (!componentPath.startsWith('../')) {
                        actualComponentPath = '../' + componentPath;
                    }
                } else {
                    // If in root and componentPath is like '../components/footer.html' (which it shouldn't be), fix it
                    if (componentPath.startsWith('../')) {
                        actualComponentPath = componentPath.substring(3);
                    }
                }
            }
            // For HTTP, assume componentPath is already correct relative to the HTML file or root-relative if served.
            // The provided componentPath 'components/nav.html' or 'components/footer.html' works for root.
            // For pages in /pages/, their script src for components.js is already '../js/components.js',
            // so fetch('../components/footer.html') would be relative to js/components.js, which is not what we want.
            // The fetch path should be relative to the HTML document.

            if (elementId === 'main-nav' && isFileProtocol) {
                element.innerHTML = isInPagesDir ? pagesNavHtml : directNavHtml;
                setupNavigation(); // Uses static HTML, then sets up its internal logic
                // We still call adjustComponentPaths for nav even with static HTML to fix its internal links/images
                adjustComponentPaths(element, isInPagesDir, isFileProtocol, true);
                return;
            }

            if (elementId === 'main-footer' && isFileProtocol) {
                element.innerHTML = staticFooterHtml;
                adjustComponentPaths(element, isInPagesDir, isFileProtocol, false);
                return;
            }
            
            // Fetch and inject component for HTTP/HTTPS or if not caught by file protocol specific logic above
            const response = await fetch(actualComponentPath);
            if (!response.ok) {
                throw new Error(`Failed to load ${actualComponentPath}: ${response.status} ${response.statusText}`);
            }
            const html = await response.text();
            element.innerHTML = html;

            // Post-load adjustments
            if (elementId === 'main-nav') {
                initNavigation(); // For dynamically loaded nav
                adjustComponentPaths(element, isInPagesDir, isFileProtocol, true);
            } else if (elementId === 'main-footer') {
                adjustComponentPaths(element, isInPagesDir, isFileProtocol, false);
            }

        } catch (error) {
            console.error(`Error loading component ${elementId} from ${componentPath}:`, error);
            const element = document.getElementById(elementId);
            if (element) {
                const isInPagesDir = window.location.pathname.includes('/pages/') || window.location.pathname.includes('\\pages\\');
                if (elementId === 'main-nav') { // Fallback for nav if dynamic load fails
                    element.innerHTML = isInPagesDir ? pagesNavHtml : directNavHtml;
                    setupNavigation();
                    adjustComponentPaths(element, isInPagesDir, true, true); // Adjust static nav too
                } else if (elementId === 'main-footer') { // Fallback for footer if fetch fails (e.g. on HTTP if file is missing)
                    element.innerHTML = staticFooterHtml;
                    adjustComponentPaths(element, isInPagesDir, window.location.protocol === 'file:', false);
                }
            }
        }
    }

    // Determine base path for loading components from HTML file location
    const isInPages = window.location.pathname.includes('/pages/') || window.location.pathname.includes('\\pages\\');
    const navComponentPath = isInPages ? '../components/nav.html' : 'components/nav.html';
    const footerComponentPath = isInPages ? '../components/footer.html' : 'components/footer.html';

    loadComponent('main-nav', navComponentPath);
    loadComponent('main-footer', footerComponentPath);
});


function adjustComponentPaths(componentElement, isInPagesDir, isFileProtocol, isNav) {
    const links = componentElement.querySelectorAll('a[href]');
    const images = componentElement.querySelectorAll('img[src]');

    images.forEach(img => {
        let src = img.getAttribute('src');
        if (src && !src.startsWith('http') && !src.startsWith('data:')) {
            if (isFileProtocol) {
                if (isInPagesDir) { // Current HTML is in /pages/
                    // Original src in component is like '/images/logo.png' or 'images/logo.png'
                    img.setAttribute('src', '../' + src.replace(/^\//, '')); // Make it ../images/logo.png
                } else { // Current HTML is in root
                    // Original src is like '/images/logo.png' or 'images/logo.png'
                    img.setAttribute('src', src.replace(/^\//, '')); // Make it images/logo.png
                }
            } else { // HTTP protocol
                // Ensure paths are root relative if they start with / or convert to root relative
                 if (!src.startsWith('/')) {
                    img.setAttribute('src', '/' + src);
                 }
            }
        }
    });

    links.forEach(link => {
        let href = link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
            if (isFileProtocol) {
                if (isInPagesDir) { // Current HTML is in /pages/
                    // Original href in component is like '/pages/products.html' or 'pages/products.html' or '/index.html'
                    if (href.toLowerCase().includes('index.html')) {
                        link.setAttribute('href', '../' + href.replace(/^\//, '')); // ../index.html
                    } else {
                        // For links like '/pages/products.html' -> 'products.html'
                        // For links like 'products.html' (if footer had them) -> 'products.html'
                        link.setAttribute('href', href.replace(/^\//, '').replace(/^pages\//, ''));
                    }
                } else { // Current HTML is in root
                    // Original href is like '/pages/products.html' or 'pages/products.html' or '/index.html'
                    // For '/pages/products.html' -> 'pages/products.html'
                    // For '/index.html' -> 'index.html'
                    link.setAttribute('href', href.replace(/^\//, ''));
                }
            } else { // HTTP protocol
                // Ensure paths are root relative
                if (!href.startsWith('/')) {
                    link.setAttribute('href', '/' + href);
                }
            }
        }
    });
}

// Ensure initNavigation and setupNavigation are defined and correctly used.
// The provided snippet for js/components.js had multiple initNavigation definitions.
// Consolidating and ensuring the correct one is called after nav is loaded.

// (The rest of your js/components.js, including a single initNavigation, setupNavigation, etc.)
// Make sure the getBasePath function is removed if adjustComponentPaths handles all its use cases,
// or ensure it's used correctly if still needed.
// For now, getBasePath is not directly used by the new adjustComponentPaths.

// Remove or comment out the old getBasePath, adjustNavPaths, adjustFooterPaths if they are fully replaced.
/*
function getBasePath() { ... }
function adjustNavPaths(navElement, basePath) { ... }
function adjustFooterPaths(footerElement, basePath) { ... }
*/

// Smooth scroll, back to top, etc. should remain.
