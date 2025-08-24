// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functionality
    initNavbar();
    initSmoothScrolling();
    initScrollAnimations();
    initUniverseBackground();
    
});

// Navigation bar functionality
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
    
    // Enhanced dropdown menu functionality
    initDropdownMenu();
}

// Dropdown menu functionality
function initDropdownMenu() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        
        // Desktop hover behavior
        if (window.innerWidth > 992) {
            // Show dropdown on hover
            dropdown.addEventListener('mouseenter', function() {
                dropdownMenu.style.display = 'block';
                dropdownMenu.style.opacity = '1';
                dropdownMenu.style.transform = 'translateY(0)';
            });
            
            // Hide dropdown when mouse leaves
            dropdown.addEventListener('mouseleave', function() {
                dropdownMenu.style.display = 'none';
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.transform = 'translateY(-10px)';
            });
        }
        
        // Mobile click behavior
        dropdownToggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                const isOpen = dropdownMenu.classList.contains('show');
                
                // Close all other dropdowns
                dropdowns.forEach(d => {
                    if (d !== dropdown) {
                        d.querySelector('.dropdown-menu').classList.remove('show');
                    }
                });
                
                // Toggle current dropdown
                if (isOpen) {
                    dropdownMenu.classList.remove('show');
                } else {
                    dropdownMenu.classList.add('show');
                }
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                const dropdownMenu = dropdown.querySelector('.dropdown-menu');
                dropdownMenu.classList.remove('show');
            });
        }
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.section-title, .interest-item, .timeline-item, .news-item, .contact-item, .tutorial-item');
    animatedElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
}

// Enhanced universe background
function initUniverseBackground() {
    const universe = document.getElementById('universe-background');
    
    // Add more dynamic stars
    for (let i = 0; i < 50; i++) {
        createStar(universe);
    }
    
    // Add shooting stars occasionally
    setInterval(() => {
        if (Math.random() > 0.7) {
            createShootingStar(universe);
        }
    }, 3000);
}

// Create individual stars
function createStar(container) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.cssText = `
        position: absolute;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 3 + 1}px;
        background: white;
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.8 + 0.2};
        animation: twinkle ${Math.random() * 3 + 2}s infinite;
    `;
    
    container.appendChild(star);
}

// Create shooting stars
function createShootingStar(container) {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: linear-gradient(90deg, white, transparent);
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 50}%;
        animation: shooting-star 1s linear forwards;
    `;
    
    container.appendChild(shootingStar);
    
    // Remove shooting star after animation
    setTimeout(() => {
        if (shootingStar.parentNode) {
            shootingStar.parentNode.removeChild(shootingStar);
        }
    }, 1000);
}

// Add CSS animations dynamically
function addDynamicCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes shooting-star {
            0% { 
                transform: translateX(0) translateY(0);
                opacity: 1;
            }
            100% { 
                transform: translateX(200px) translateY(100px);
                opacity: 0;
            }
        }
        
        .star {
            z-index: 1;
        }
        
        .shooting-star {
            z-index: 2;
        }
    `;
    document.head.appendChild(style);
}

// Add the dynamic CSS
addDynamicCSS();

// Parallax effect for universe background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const universe = document.getElementById('universe-background');
    
    if (universe) {
        universe.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add typing effect to the main title
function initTypingEffect() {
    const title = document.querySelector('.display-4');
    if (!title) return;
    
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect when element is visible
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(typeWriter, 500);
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe(title);
}

// Initialize typing effect
setTimeout(initTypingEffect, 1000);

// Add hover effects to interest items
document.addEventListener('DOMContentLoaded', function() {
    const interestItems = document.querySelectorAll('.interest-item');
    
    interestItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add counter animation for numbers (if any)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        
        let current = 0;
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Initialize counter animations when they come into view
const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
});

// Observe counter elements
document.addEventListener('DOMContentLoaded', function() {
    const counterElements = document.querySelectorAll('.counter');
    counterElements.forEach(el => counterObserver.observe(el));
});

// Add loading state to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('btn-loading')) {
                this.classList.add('btn-loading');
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                
                // Reset button after 2 seconds (simulate loading)
                setTimeout(() => {
                    this.classList.remove('btn-loading');
                    this.innerHTML = this.getAttribute('data-original-text') || this.innerHTML;
                }, 2000);
            }
        });
        
        // Store original text
        button.setAttribute('data-original-text', button.innerHTML);
    });
});

// Add CSS for button loading state
const buttonStyle = document.createElement('style');
buttonStyle.textContent = `
    .btn-loading {
        pointer-events: none;
        opacity: 0.7;
    }
    
    .btn-loading i {
        margin-right: 0.5rem;
    }
`;
document.head.appendChild(buttonStyle);
