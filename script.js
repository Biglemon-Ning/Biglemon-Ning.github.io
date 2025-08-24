// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functionality
    initSidebar();
    initSmoothScrolling();
    initScrollAnimations();
    initUniverseBackground();
    
});

// Sidebar functionality
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    
    // Add scroll effect to sidebar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            sidebar.classList.add('scrolled');
        } else {
            sidebar.classList.remove('scrolled');
        }
    });
    
    // Enhanced dropdown menu functionality
    initSidebarDropdown();
    
    // Initialize navigation link active states
    initNavigationActiveStates();
}

// Sidebar dropdown menu functionality
function initSidebarDropdown() {
    const dropdowns = document.querySelectorAll('.sidebar-item.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.sidebar-dropdown');
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        
        if (!dropdownMenu || !dropdownToggle) return;
        
        // Toggle dropdown on click
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const isOpen = dropdownMenu.classList.contains('show');
            
            // Close all other dropdowns
            dropdowns.forEach(d => {
                if (d !== dropdown) {
                    const dMenu = d.querySelector('.sidebar-dropdown');
                    if (dMenu) {
                        dMenu.classList.remove('show');
                    }
                }
            });
            
            // Toggle current dropdown
            if (isOpen) {
                dropdownMenu.classList.remove('show');
            } else {
                dropdownMenu.classList.add('show');
            }
        });
        
        // Desktop hover behavior (optional)
        if (window.innerWidth > 992) {
            dropdown.addEventListener('mouseenter', function() {
                const sidebar = document.getElementById('sidebar');
                if (sidebar && !sidebar.classList.contains('collapsed')) {
                    dropdownMenu.classList.add('show');
                }
            });
            
            dropdown.addEventListener('mouseleave', function() {
                dropdownMenu.classList.remove('show');
            });
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.sidebar-item.dropdown')) {
            dropdowns.forEach(dropdown => {
                const dropdownMenu = dropdown.querySelector('.sidebar-dropdown');
                if (dropdownMenu) {
                    dropdownMenu.classList.remove('show');
                }
            });
        }
    });
}

// Navigation link active state management
function initNavigationActiveStates() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link:not(.dropdown-toggle)');
    const dropdownItems = document.querySelectorAll('.sidebar-dropdown-item');
    
    // Function to remove active class from all links
    function removeAllActiveStates() {
        sidebarLinks.forEach(link => {
            link.classList.remove('active');
        });
        dropdownItems.forEach(item => {
            item.classList.remove('active');
        });
    }
    
    // Add click event listeners to sidebar links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active state from all links
            removeAllActiveStates();
            
            // Add active state to clicked link
            this.classList.add('active');
            
            // If this is a Research link, also activate the dropdown
            if (this.textContent.trim() === 'Research') {
                const dropdown = this.closest('.sidebar-item').querySelector('.sidebar-dropdown');
                if (dropdown) {
                    dropdown.classList.add('show');
                }
            }
        });
    });
    
    // Add click event listeners to dropdown items
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Remove active state from all links and items
            removeAllActiveStates();
            
            // Add active state to parent Research link
            const researchLink = this.closest('.sidebar-item').querySelector('.sidebar-link');
            if (researchLink) {
                researchLink.classList.add('active');
            }
            
            // Add active state to clicked dropdown item
            this.classList.add('active');
        });
    });
    
    // Set initial active state based on current page
    setInitialActiveState();
}

// Set initial active state based on current page
function setInitialActiveState() {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    
    // Remove all active states first
    const sidebarLinks = document.querySelectorAll('.sidebar-link:not(.dropdown-toggle)');
    const dropdownItems = document.querySelectorAll('.sidebar-dropdown-item');
    
    sidebarLinks.forEach(link => link.classList.remove('active'));
    dropdownItems.forEach(item => item.classList.remove('active'));
    
    // Set active state based on current page
    if (currentPath.includes('publications.html')) {
        const researchLink = Array.from(sidebarLinks).find(link => link.textContent.trim().includes('Research'));
        const publicationsItem = document.querySelector('.sidebar-dropdown-item[href="publications.html"]');
        if (researchLink) researchLink.classList.add('active');
        if (publicationsItem) publicationsItem.classList.add('active');
    } else if (currentPath.includes('awards.html')) {
        const awardsLink = Array.from(sidebarLinks).find(link => link.textContent.trim().includes('Awards'));
        if (awardsLink) awardsLink.classList.add('active');
    } else if (currentPath.includes('tutorials.html')) {
        const researchLink = Array.from(sidebarLinks).find(link => link.textContent.trim().includes('Research'));
        const tutorialsItem = document.querySelector('.sidebar-dropdown-item[href="tutorials.html"]');
        if (researchLink) researchLink.classList.add('active');
        if (tutorialsItem) tutorialsItem.classList.add('active');
    } else if (currentPath.includes('services.html')) {
        const researchLink = Array.from(sidebarLinks).find(link => link.textContent.trim().includes('Research'));
        const servicesItem = document.querySelector('.sidebar-dropdown-item[href="services.html"]');
        if (researchLink) researchLink.classList.add('active');
        if (servicesItem) servicesItem.classList.add('active');
    } else if (currentPath.includes('index.html') || currentPath.endsWith('/')) {
        // Home page
        if (currentHash === '#home' || !currentHash) {
            const homeLink = Array.from(sidebarLinks).find(link => link.textContent.trim().includes('Home'));
            if (homeLink) homeLink.classList.add('active');
        } else if (currentHash === '#news') {
            const newsLink = Array.from(sidebarLinks).find(link => link.textContent.trim().includes('News'));
            if (newsLink) newsLink.classList.add('active');
        } else if (currentHash === '#contact') {
            const contactLink = Array.from(sidebarLinks).find(link => link.textContent.trim().includes('Contact'));
            if (contactLink) contactLink.classList.add('active');
        }
    }
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
                const offsetTop = targetSection.offsetTop - 20; // Account for sidebar
                
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
        
        .sidebar-collapse-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(255, 255, 255, 0.1);
            border: none;
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .sidebar-collapse-btn:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.1);
        }
        
        .sidebar.scrolled {
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        }
        
        @media (max-width: 992px) {
            .sidebar-collapse-btn {
                display: none;
            }
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
