// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });
}

// Animation on Scroll
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements that should animate on scroll
document.querySelectorAll('.service-card, .expertise-card, .capability').forEach(el => {
    observer.observe(el);
});

// Service Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const tabIndicator = document.querySelector('.tab-indicator');

if (tabBtns.length && tabIndicator) {
    // Initialize tab indicator position
    const activeTab = document.querySelector('.tab-btn.active');
    if (activeTab) {
        tabIndicator.style.width = `${activeTab.offsetWidth}px`;
        tabIndicator.style.left = `${activeTab.offsetLeft}px`;
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            const tabId = btn.dataset.tab;
            document.getElementById(tabId).classList.add('active');

            // Move indicator
            tabIndicator.style.width = `${btn.offsetWidth}px`;
            tabIndicator.style.left = `${btn.offsetLeft}px`;
        });
    });
}

// News Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const newsCards = document.querySelectorAll('.news-card');

if (filterBtns.length) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;
            
            // Filter news cards
            newsCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Load header and footer
const loadComponent = async (elementId, componentPath) => {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
    }
};

// Initialize components on page load
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('nav-placeholder', '../components/nav.html');
    loadComponent('footer-placeholder', '../components/footer.html');

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Parallax effect for sections with parallax class
    window.addEventListener('scroll', () => {
        const parallaxElements = document.querySelectorAll('.parallax-section');
        parallaxElements.forEach(element => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            element.style.backgroundPosition = `center ${rate}px`;
        });
    });

    // Story slider functionality
    const storySlides = document.querySelectorAll('.story-slide');
    const nextBtn = document.querySelector('.slider-controls .next');
    const prevBtn = document.querySelector('.slider-controls .prev');
    let currentSlide = 0;

    function showSlide(index) {
        storySlides.forEach(slide => {
            slide.classList.remove('active');
        });
        storySlides[index].classList.add('active');
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % storySlides.length;
            showSlide(currentSlide);
        });

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + storySlides.length) % storySlides.length;
            showSlide(currentSlide);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form animation
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        if (input) {
            input.addEventListener('focus', () => {
                group.classList.add('focused');
            });
            input.addEventListener('blur', () => {
                if (!input.value) {
                    group.classList.remove('focused');
                }
            });
        }
    });

    // Stats counter animation
    const stats = document.querySelectorAll('.stat-number');
    const animateStats = () => {
        stats.forEach(stat => {
            const value = stat.textContent;
            if (value.includes('+')) {
                const number = parseInt(value);
                let count = 0;
                const increment = number / 30;
                const timer = setInterval(() => {
                    count += increment;
                    if (count >= number) {
                        stat.textContent = value;
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(count) + '+';
                    }
                }, 50);
            }
        });
    };

    // Intersection Observer for stats animation
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }
});

// Solutions Explorer
const categoryBtns = document.querySelectorAll('.category-btn');
const solutionContents = document.querySelectorAll('.solution-content');

if (categoryBtns.length) {
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            categoryBtns.forEach(b => b.classList.remove('active'));
            solutionContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            const category = btn.dataset.category;
            document.getElementById(category).classList.add('active');
        });
    });
}

// Employee Stories Slider
const storySlides = document.querySelectorAll('.story-slide');
const sliderDots = document.querySelector('.slider-dots');
const prevBtn = document.querySelector('.slider-controls .prev');
const nextBtn = document.querySelector('.slider-controls .next');

if (storySlides.length) {
    // Create dots
    storySlides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showSlide(index));
        sliderDots.appendChild(dot);
    });

    let currentSlide = 0;
    const dots = document.querySelectorAll('.dot');

    function showSlide(n) {
        storySlides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = n;
        if (currentSlide >= storySlides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = storySlides.length - 1;

        storySlides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
        nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
    }
}

// Job Filters
const departmentSelect = document.getElementById('department');
const locationSelect = document.getElementById('location');
const typeSelect = document.getElementById('type');
const jobList = document.querySelector('.job-list');

if (departmentSelect && locationSelect && typeSelect) {
    // Sample job data (in real application, this would come from an API)
    const jobs = [
        {
            title: 'Senior R&D Engineer',
            department: 'engineering',
            location: 'taiwan',
            type: 'full-time'
        },
        // Add more job listings here
    ];

    function filterJobs() {
        const department = departmentSelect.value;
        const location = locationSelect.value;
        const type = typeSelect.value;

        const filteredJobs = jobs.filter(job => {
            return (department === 'all' || job.department === department) &&
                   (location === 'all' || job.location === location) &&
                   (type === 'all' || job.type === type);
        });

        displayJobs(filteredJobs);
    }

    function displayJobs(jobs) {
        jobList.innerHTML = jobs.map(job => `
            <div class="job-card">
                <h3>${job.title}</h3>
                <div class="job-details">
                    <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                    <span><i class="fas fa-briefcase"></i> ${job.type}</span>
                </div>
                <a href="#" class="btn-apply">Apply Now</a>
            </div>
        `).join('');
    }

    [departmentSelect, locationSelect, typeSelect].forEach(select => {
        select.addEventListener('change', filterJobs);
    });

    // Initial display
    filterJobs();
}

// Add smooth scrolling for the application process navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});
