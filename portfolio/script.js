// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize boot sequence first
    initBootSequence();
});

// Boot sequence animation
function initBootSequence() {
    const bootOverlay = document.querySelector('.boot-sequence');
    const bootText = document.querySelector('.boot-text');
    const bootProgress = document.querySelector('.boot-progress-bar');
    
    if (!bootOverlay || !bootText || !bootProgress) {
        // If boot sequence elements don't exist, initialize everything immediately
        initializeEverything();
        return;
    }
    
    // Show boot overlay
    bootOverlay.style.display = 'flex';
    
    // Boot text typing animation
    let bootLines = [
        'INITIALIZING NEURAL INTERFACE v2.0.45...',
        'ESTABLISHING SECURE CONNECTION...',
        'LOADING CORE MODULES...',
        'CALIBRATING VISUAL SYSTEMS...',
        'OPTIMIZING MEMORY ALLOCATION...',
        'ACTIVATING NEURAL NETWORK...',
        'SYSTEM BOOT COMPLETE.'
    ];
    
    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = '';
    
    // Progress bar animation
    anime({
        targets: bootProgress,
        width: ['0%', '100%'],
        duration: 4000,
        easing: 'linear'
    });
    
    // Typing effect
    const typingInterval = setInterval(() => {
        if (lineIndex < bootLines.length) {
            if (charIndex < bootLines[lineIndex].length) {
                currentLine += bootLines[lineIndex].charAt(charIndex);
                bootText.innerHTML = currentLine + '<span class="blink">_</span>';
                charIndex++;
            } else {
                currentLine += '<br>';
                lineIndex++;
                charIndex = 0;
            }
        } else {
            clearInterval(typingInterval);
            
            // After typing is complete, fade out boot sequence
            setTimeout(() => {
                anime({
                    targets: bootOverlay,
                    opacity: 0,
                    duration: 800,
                    easing: 'easeInOutQuad',
                    complete: function() {
                        bootOverlay.style.display = 'none';
                        // Initialize everything else after boot sequence
                        initializeEverything();
                    }
                });
            }, 1000);
        }
    }, 50);
}

// Initialize all other animations and interactions
function initializeEverything() {
    initNeuralBackground();
    initCustomCursor();
    initNavbar();
    initHeroAnimations();
    initSkillBars();
    initProjectFilters();
    initScrollAnimations();
    initBackToTop();
    initContactForm();
    initHUDElements();
    initGlitchEffects();
}

// Neural network background
function initNeuralBackground() {
    const canvas = document.getElementById('neural-network');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Resize canvas when window is resized
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    // Neural network nodes and connections
    const nodes = [];
    const connections = [];
    const nodeCount = Math.floor(window.innerWidth * window.innerHeight / 20000);
    
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            vx: Math.random() * 0.5 - 0.25,
            vy: Math.random() * 0.5 - 0.25
        });
    }
    
    // Create connections between nodes
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
                connections.push({
                    from: i,
                    to: j,
                    distance: distance,
                    opacity: 1 - distance / 150
                });
            }
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw connections
        for (let i = 0; i < connections.length; i++) {
            const connection = connections[i];
            const fromNode = nodes[connection.from];
            const toNode = nodes[connection.to];
            
            const dx = fromNode.x - toNode.x;
            const dy = fromNode.y - toNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
                ctx.beginPath();
                ctx.moveTo(fromNode.x, fromNode.y);
                ctx.lineTo(toNode.x, toNode.y);
                ctx.strokeStyle = `rgba(0, 255, 204, ${connection.opacity * 0.2})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
        
        // Update and draw nodes
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            
            // Update position
            node.x += node.vx;
            node.y += node.vy;
            
            // Bounce off edges
            if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
            
            // Draw node
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 255, 204, 0.7)';
            ctx.fill();
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Custom cursor
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing1 = document.querySelector('.cursor-ring-1');
    const cursorRing2 = document.querySelector('.cursor-ring-2');
    const cursorText = document.querySelector('.cursor-text');
    
    if (!cursor || !cursorDot) return;
    
    document.addEventListener('mousemove', (e) => {
        // Main cursor follows immediately
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Dot follows with slight delay
        anime({
            targets: cursorDot,
            left: e.clientX,
            top: e.clientY,
            duration: 50,
            easing: 'linear'
        });
        
        // Rings follow with more delay
        if (cursorRing1) {
            anime({
                targets: cursorRing1,
                left: e.clientX,
                top: e.clientY,
                duration: 100,
                easing: 'linear'
            });
        }
        
        if (cursorRing2) {
            anime({
                targets: cursorRing2,
                left: e.clientX,
                top: e.clientY,
                duration: 150,
                easing: 'linear'
            });
        }
    });
    
    // Add hover effect for clickable elements
    const clickables = document.querySelectorAll('a, button, .project-card, .skill-card, input[type="submit"], .cyber-btn');
    
    clickables.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorDot.classList.add('cursor-dot-hover');
            
            if (cursorText) {
                cursorText.textContent = 'INTERACT';
                cursorText.style.opacity = '1';
            }
            
            if (cursorRing1) cursorRing1.classList.add('cursor-ring-hover');
            if (cursorRing2) cursorRing2.classList.add('cursor-ring-hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorDot.classList.remove('cursor-dot-hover');
            
            if (cursorText) {
                cursorText.style.opacity = '0';
            }
            
            if (cursorRing1) cursorRing1.classList.remove('cursor-ring-hover');
            if (cursorRing2) cursorRing2.classList.remove('cursor-ring-hover');
        });
    });
}

// Navbar functionality
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');
    const navScanner = document.querySelector('.nav-scanner');
    
    // Glitch effect for logo
    const logo = document.querySelector('.logo');
    if (logo) {
        const logoGlitch = document.querySelector('.logo-glitch');
        
        if (logoGlitch) {
            setInterval(() => {
                // Random glitch effect
                if (Math.random() > 0.95) {
                    logoGlitch.style.opacity = '1';
                    
                    setTimeout(() => {
                        logoGlitch.style.opacity = '0';
                    }, 200);
                }
            }, 2000);
        }
    }
    
    // Navbar scroll effect with cyberpunk animation
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            if (!navbar.classList.contains('scrolled')) {
                navbar.classList.add('scrolled');
                
                // Add glitch effect when navbar changes
                anime({
                    targets: navbar,
                    translateY: ['-5px', '0px'],
                    opacity: [0.9, 1],
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            }
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Move scanner based on scroll position
        if (navScanner) {
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            navScanner.style.top = `${scrollPercent}%`;
        }
    });
    
    // Mobile menu toggle with animation
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Glitch animation when opening/closing menu
        anime({
            targets: navLinks,
            translateX: ['-5px', '0px'],
            opacity: [0.8, 1],
            duration: 300,
            easing: 'easeInOutQuad'
        });
    });
    
    // Close mobile menu when clicking on a link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            
            // Highlight effect when clicking nav links
            anime({
                targets: item,
                opacity: [0.5, 1],
                translateY: ['-2px', '0px'],
                duration: 300,
                easing: 'easeInOutQuad'
            });
        });
    });
    
    // Active link on scroll with cyberpunk highlight
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
                
                // Add subtle pulse effect to active link
                anime({
                    targets: link,
                    boxShadow: [
                        '0 0 0 rgba(0, 255, 204, 0)',
                        '0 0 10px rgba(0, 255, 204, 0.5)',
                        '0 0 0 rgba(0, 255, 204, 0)'
                    ],
                    duration: 1500,
                    easing: 'easeOutQuad'
                });
            }
        });
    });
}

// Hero section animations with cyberpunk effects
function initHeroAnimations() {
    // Animate main heading with cyberpunk glitch effect
    const textWrapper = document.querySelector('.ml12');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: false})
        .add({
            targets: '.ml12 .letter',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 500 + 30 * i
        });
    
    // Add random glitch effect to heading
    setInterval(() => {
        if (Math.random() > 0.95) {
            const letters = document.querySelectorAll('.ml12 .letter');
            const randomLetter = letters[Math.floor(Math.random() * letters.length)];
            if (randomLetter) {
                randomLetter.style.color = 'var(--primary-color)';
                randomLetter.style.textShadow = '0 0 8px var(--primary-color)';
                
                setTimeout(() => {
                    randomLetter.style.color = '';
                    randomLetter.style.textShadow = '';
                }, 200);
            }
        }
    }, 2000);
    
    // Animate subtitle with cyberpunk effect
    const textWrapper2 = document.querySelector('.ml9 .letters');
    if (textWrapper2) {
        textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    } else {
        document.querySelector('.ml9 .text-wrapper').innerHTML = '<span class="letters">' + document.querySelector('.ml9 .text-wrapper').textContent + '</span>';
        document.querySelector('.ml9 .letters').innerHTML = document.querySelector('.ml9 .letters').textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }
    
    anime.timeline({loop: false})
        .add({
            targets: '.ml9 .letter',
            scale: [0, 1],
            duration: 1500,
            elasticity: 600,
            delay: (el, i) => 1000 + 45 * i
        });
    
    // Add terminal typing effect to hero description
    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) {
        const originalText = heroDescription.textContent;
        heroDescription.textContent = '';
        heroDescription.style.opacity = '1';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < originalText.length) {
                heroDescription.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
                // Add blinking cursor after typing
                heroDescription.insertAdjacentHTML('beforeend', '<span class="cursor">_</span>');
            }
        }, 30);
    } else {
        // Fallback to standard animation
        anime({
            targets: '.hero-description',
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutExpo',
            duration: 1000,
            delay: 1800
        });
    }
    
    // Animate hero buttons with neon glow effect
    anime({
        targets: '.hero-buttons .btn',
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: (el, i) => 2000 + 300 * i,
        complete: function() {
            // Add pulsing neon effect to buttons
            anime({
                targets: '.hero-buttons .btn',
                boxShadow: [
                    '0 0 5px rgba(0, 255, 204, 0.3)',
                    '0 0 15px rgba(0, 255, 204, 0.5)',
                    '0 0 5px rgba(0, 255, 204, 0.3)'
                ],
                duration: 2000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine'
            });
        }
    });
    
    // Animate shapes with cyberpunk colors
    anime({
        targets: '.shape1',
        translateX: [-200, 0],
        translateY: [200, 0],
        scale: [0.5, 1],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 500
    });
    
    anime({
        targets: '.shape2',
        translateX: [200, 0],
        translateY: [-100, 0],
        scale: [0.5, 1],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 700
    });
    
    anime({
        targets: '.shape3',
        translateX: [-100, 0],
        translateY: [100, 0],
        scale: [0.5, 1],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 900
    });
    
    // Continuous animation for shapes with digital distortion
    anime({
        targets: '.shape1',
        translateX: 15,
        translateY: -15,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: 3000
    });
    
    anime({
        targets: '.shape2',
        translateX: -15,
        translateY: 15,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: 4000
    });
    
    anime({
        targets: '.shape3',
        translateX: 10,
        translateY: -10,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: 5000
    });
}

// Animate skill bars on scroll
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = `${level}%`;
        });
    };
    
    // Use Intersection Observer to trigger animation when skills section is in view
    const skillsSection = document.getElementById('skills');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// Project filtering functionality
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    // Show all projects with animation
                    anime({
                        targets: card,
                        opacity: [0, 1],
                        translateY: [20, 0],
                        easing: 'easeOutExpo',
                        duration: 700,
                        delay: 300
                    });
                    card.style.display = 'block';
                } else if (card.getAttribute('data-category') === filterValue) {
                    // Show matching projects with animation
                    anime({
                        targets: card,
                        opacity: [0, 1],
                        translateY: [20, 0],
                        easing: 'easeOutExpo',
                        duration: 700,
                        delay: 300
                    });
                    card.style.display = 'block';
                } else {
                    // Hide non-matching projects
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Scroll animations for sections
function initScrollAnimations() {
    // Animate section headers on scroll
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    const observerHeaders = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target.querySelector('h2'),
                    opacity: [0, 1],
                    translateY: [50, 0],
                    easing: 'easeOutExpo',
                    duration: 1000
                });
                
                anime({
                    targets: entry.target.querySelector('.underline'),
                    opacity: [0, 1],
                    width: [0, 80],
                    easing: 'easeOutExpo',
                    duration: 1000,
                    delay: 300
                });
                
                observerHeaders.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    sectionHeaders.forEach(header => {
        observerHeaders.observe(header);
    });
    
    // Animate about section content
    const aboutContent = document.querySelector('.about-content');
    
    const observerAbout = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target.querySelector('.about-image'),
                    opacity: [0, 1],
                    translateX: [-100, 0],
                    easing: 'easeOutExpo',
                    duration: 1000
                });
                
                anime({
                    targets: entry.target.querySelector('.about-text'),
                    opacity: [0, 1],
                    translateX: [100, 0],
                    easing: 'easeOutExpo',
                    duration: 1000,
                    delay: 300
                });
                
                observerAbout.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    if (aboutContent) {
        observerAbout.observe(aboutContent);
    }
    
    // Animate skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    
    const observerSkills = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: skillCards,
                    opacity: [0, 1],
                    translateY: [50, 0],
                    easing: 'easeOutExpo',
                    duration: 800,
                    delay: anime.stagger(100)
                });
                
                observerSkills.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    if (skillCards.length > 0) {
        observerSkills.observe(document.querySelector('.skills-grid'));
    }
    
    // Animate project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    const observerProjects = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: projectCards,
                    opacity: [0, 1],
                    translateY: [50, 0],
                    easing: 'easeOutExpo',
                    duration: 800,
                    delay: anime.stagger(100)
                });
                
                observerProjects.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    if (projectCards.length > 0) {
        observerProjects.observe(document.querySelector('.projects-grid'));
    }
    
    // Animate contact section
    const contactContent = document.querySelector('.contact-content');
    
    const observerContact = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target.querySelector('.contact-info'),
                    opacity: [0, 1],
                    translateX: [-100, 0],
                    easing: 'easeOutExpo',
                    duration: 1000
                });
                
                anime({
                    targets: entry.target.querySelector('.contact-form'),
                    opacity: [0, 1],
                    translateX: [100, 0],
                    easing: 'easeOutExpo',
                    duration: 1000,
                    delay: 300
                });
                
                observerContact.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    if (contactContent) {
        observerContact.observe(contactContent);
    }
}

// Back to top button functionality
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add hover animation
    backToTopBtn.addEventListener('mouseenter', () => {
        anime({
            targets: backToTopBtn,
            scale: 1.1,
            duration: 300,
            easing: 'easeOutExpo'
        });
    });
    
    backToTopBtn.addEventListener('mouseleave', () => {
        anime({
            targets: backToTopBtn,
            scale: 1,
            duration: 300,
            easing: 'easeOutExpo'
        });
    });
}

// Contact form functionality with cyberpunk effects
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Add typing effect to form labels
        const formLabels = document.querySelectorAll('.form-label');
        formLabels.forEach(label => {
            const originalText = label.textContent;
            label.textContent = '';
            
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < originalText.length) {
                    label.textContent += originalText.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 50);
        });
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            
            // Glitch effect before submission animation
            anime({
                targets: contactForm,
                translateX: [5, -5, 5, 0],
                opacity: [0.8, 1],
                duration: 300,
                easing: 'easeInOutQuad',
                complete: () => {
                    // Animate form submission
                    anime({
                        targets: contactForm,
                        opacity: [1, 0],
                        translateY: [0, -20],
                        easing: 'easeOutExpo',
                        duration: 600,
                        complete: () => {
                            // Replace form with success message
                            const successMessage = document.createElement('div');
                            successMessage.className = 'success-message cyber-panel';
                            successMessage.innerHTML = `
                                <div class="cyber-panel-header">
                                    <span class="cyber-panel-id">SYS.MSG</span>
                                    <span class="cyber-panel-status">TRANSMISSION COMPLETE</span>
                                </div>
                                <div class="success-content">
                                    <div class="success-icon"><i class="fas fa-check-circle"></i></div>
                                    <h3>Neural Transmission Successful</h3>
                                    <p>Thank you for connecting, <span class="highlight">${name}</span>. Your message has been received.</p>
                                    <div class="cyber-btn" id="sendAnother">
                                        <span>New Transmission</span>
                                        <span class="btn-glitch"></span>
                                    </div>
                                </div>
                            `;
                            
                            contactForm.parentNode.replaceChild(successMessage, contactForm);
                            
                            // Animate success message with cyberpunk effect
                            anime({
                                targets: '.success-message',
                                opacity: [0, 1],
                                translateY: [20, 0],
                                easing: 'easeOutExpo',
                                duration: 600
                            });
                            
                            // Reset form on "Send Another Message" button click
                            document.getElementById('sendAnother').addEventListener('click', () => {
                                // Glitch effect before hiding
                                anime({
                                    targets: '.success-message',
                                    translateX: [5, -5, 5, 0],
                                    opacity: [0.8, 1],
                                    duration: 300,
                                    easing: 'easeInOutQuad',
                                    complete: () => {
                                        anime({
                                            targets: '.success-message',
                                            opacity: [1, 0],
                                            translateY: [0, -20],
                                            easing: 'easeOutExpo',
                                            duration: 600,
                                            complete: () => {
                                                // Reset form
                                                contactForm.reset();
                                                successMessage.parentNode.replaceChild(contactForm, successMessage);
                                                
                                                // Animate form
                                                anime({
                                                    targets: contactForm,
                                                    opacity: [0, 1],
                                                    translateY: [20, 0],
                                                    easing: 'easeOutExpo',
                                                    duration: 600
                                                });
                                            }
                                        });
                                    }
                                });
                            });
                        }
                    });
                }
            });
        });
        
        // Form input animations with cyberpunk effects
        const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
        
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                // Pulse effect on focus
                anime({
                    targets: input,
                    boxShadow: [
                        '0 0 0 rgba(0, 255, 204, 0)',
                        '0 0 10px rgba(0, 255, 204, 0.5)',
                        '0 0 0 rgba(0, 255, 204, 0)'
                    ],
                    borderColor: ['#2a2a40', 'var(--primary-color)'],
                    easing: 'easeOutExpo',
                    duration: 800
                });
                
                // Highlight the label
                const label = input.parentNode.querySelector('.form-label');
                if (label) {
                    anime({
                        targets: label,
                        color: 'var(--primary-color)',
                        textShadow: '0 0 5px var(--primary-color)',
                        easing: 'easeOutExpo',
                        duration: 300
                    });
                }
            });
            
            input.addEventListener('blur', () => {
                // Reset label style
                const label = input.parentNode.querySelector('.form-label');
                if (label) {
                    anime({
                        targets: label,
                        color: '#fff',
                        textShadow: 'none',
                        easing: 'easeOutExpo',
                        duration: 300
                    });
                }
            });
        });
    }
}

// Initialize HUD elements
function initHUDElements() {
    // Update date and time
    const dateElement = document.querySelector('.hud-date');
    const timeElement = document.querySelector('.hud-time');
    
    if (dateElement || timeElement) {
        const updateDateTime = () => {
            const now = new Date();
            
            if (dateElement) {
                dateElement.textContent = now.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                }).replace(/\//g, '.');
            }
            
            if (timeElement) {
                timeElement.textContent = now.toLocaleTimeString('en-US', {
                    hour12: false,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                });
            }
        };
        
        // Update immediately and then every second
        updateDateTime();
        setInterval(updateDateTime, 1000);
    }
    
    // Update CPU and memory usage simulation
    const cpuElement = document.querySelector('.hud-cpu');
    const memElement = document.querySelector('.hud-mem');
    
    if (cpuElement || memElement) {
        const updateSystemStats = () => {
            if (cpuElement) {
                // Simulate CPU usage between 10-90%
                const cpuUsage = Math.floor(10 + Math.random() * 80);
                cpuElement.textContent = `CPU: ${cpuUsage}%`;
                
                // Change color based on usage
                if (cpuUsage > 75) {
                    cpuElement.style.color = 'var(--danger-color)';
                } else if (cpuUsage > 50) {
                    cpuElement.style.color = 'var(--warning-color)';
                } else {
                    cpuElement.style.color = 'var(--success-color)';
                }
            }
            
            if (memElement) {
                // Simulate memory usage between 20-80%
                const memUsage = Math.floor(20 + Math.random() * 60);
                memElement.textContent = `MEM: ${memUsage}%`;
                
                // Change color based on usage
                if (memUsage > 75) {
                    memElement.style.color = 'var(--danger-color)';
                } else if (memUsage > 50) {
                    memElement.style.color = 'var(--warning-color)';
                } else {
                    memElement.style.color = 'var(--success-color)';
                }
            }
        };
        
        // Update immediately and then every 3 seconds
        updateSystemStats();
        setInterval(updateSystemStats, 3000);
    }
    
    // Status message cycling
    const statusElement = document.querySelector('.hud-status');
    
    if (statusElement) {
        const statusMessages = [
            'SYSTEM OPERATIONAL',
            'DATA STREAM ACTIVE',
            'NEURAL LINK STABLE',
            'SCANNING ENVIRONMENT',
            'PROCESSING INPUT'
        ];
        
        let currentStatus = 0;
        
        const updateStatus = () => {
            // Glitch effect before changing text
            statusElement.classList.add('glitch');
            
            setTimeout(() => {
                currentStatus = (currentStatus + 1) % statusMessages.length;
                statusElement.textContent = statusMessages[currentStatus];
                statusElement.classList.remove('glitch');
            }, 500);
        };
        
        // Update status every 5 seconds
        setInterval(updateStatus, 5000);
    }
}

// Initialize glitch effects
function initGlitchEffects() {
    // Random glitch effect for various elements
    const glitchElements = document.querySelectorAll('.section-header h2, .cyber-panel-header, .logo');
    
    setInterval(() => {
        // Only trigger glitch occasionally
        if (Math.random() > 0.9) {
            // Select random element to glitch
            const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
            
            if (randomElement) {
                // Add glitch class
                randomElement.classList.add('text-glitch');
                
                // Remove glitch class after short duration
                setTimeout(() => {
                    randomElement.classList.remove('text-glitch');
                }, 200);
            }
        }
    }, 2000);
    
    // Project card scan effect on hover
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const scanLine = card.querySelector('.project-scan');
        
        if (scanLine) {
            card.addEventListener('mouseenter', () => {
                scanLine.style.opacity = '1';
                scanLine.style.top = '0';
                
                anime({
                    targets: scanLine,
                    top: '100%',
                    duration: 1500,
                    easing: 'linear',
                    complete: () => {
                        scanLine.style.opacity = '0';
                    }
                });
            });
        }
    });
}