document.addEventListener('DOMContentLoaded', () => {
    // Global Configuration Variable
    let portfolioConfig = null;

    // --- DOM Elements ---
    const customCursor = document.getElementById('custom-cursor');
    const scrollProgress = document.getElementById('scroll-progress');
    const mainHeader = document.getElementById('main-header');
    const navToggleBtn = document.getElementById('nav-toggle-btn');
    const navMenu = document.getElementById('nav-menu');
    const backToTopBtn = document.getElementById('back-to-top');
    const rotativeTaglineEl = document.getElementById('rotative-tagline');
    
    // --- Initialize Cursor Tracking (Desktop Only) ---
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (!isMobile && customCursor) {
        document.body.classList.add('cursor-active');
        document.addEventListener('mousemove', (e) => {
            customCursor.style.left = `${e.clientX}px`;
            customCursor.style.top = `${e.clientY}px`;
        });

        // Add hover classes for interactive elements
        const setupCursorListeners = () => {
            const clickables = document.querySelectorAll('.interactive-element, a, button, input, textarea, .filter-btn');
            clickables.forEach(el => {
                el.addEventListener('mouseenter', () => customCursor.classList.add('hovered'));
                el.addEventListener('mouseleave', () => customCursor.classList.remove('hovered'));
            });
        };
        // Run initially and whenever DOM updates
        setTimeout(setupCursorListeners, 100);
    }

    // --- Navigation Scroll Progress & Styling ---
    window.addEventListener('scroll', () => {
        // Scroll Progress Bar
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (scrollProgress) {
            scrollProgress.style.width = `${scrolled}%`;
        }

        // Header Background Solidify
        if (mainHeader) {
            if (window.scrollY > 50) {
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
        }

        // Back to Top Button Visibility
        if (backToTopBtn) {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    });

    // Back to top click listener
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Mobile Navigation Toggle ---
    if (navToggleBtn && navMenu) {
        navToggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggleBtn.classList.toggle('active');
        });

        // Close menu on click of nav items
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggleBtn.classList.remove('active');
            });
        });
    }

    // --- Intersection Observer for Active Nav Link & Scroll Reveals ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { root: null, rootMargin: '-40% 0px -50% 0px', threshold: 0 });

    sections.forEach(sec => navObserver.observe(sec));

    // Scroll reveal observer
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // If it is the skills container, trigger progress bar width animations
                if (entry.target.id === 'skills-categories-container') {
                    animateSkillsProgress();
                }
                
                // If it is the stats container, trigger stats counting
                if (entry.target.id === 'stats-container') {
                    animateStatsCounters();
                }
            }
        });
    }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

    // --- Load Portfolio Data (Direct from global PORTFOLIO_CONFIG) ---
    if (typeof PORTFOLIO_CONFIG !== 'undefined') {
        portfolioConfig = PORTFOLIO_CONFIG;
        populatePortfolio(PORTFOLIO_CONFIG);
        
        // Re-setup custom cursor interactions on newly generated DOM elements
        if (!isMobile && customCursor) {
            const clickables = document.querySelectorAll('.interactive-element, a, button, input, textarea, .filter-btn');
            clickables.forEach(el => {
                el.addEventListener('mouseenter', () => customCursor.classList.add('hovered'));
                el.addEventListener('mouseleave', () => customCursor.classList.remove('hovered'));
            });
        }
    } else {
        console.error('PORTFOLIO_CONFIG non trouve ! Assurez-vous que portfolio.config.js est bien charge.');
    }


    function populatePortfolio(config) {
        // 1. Personal Info
        const personal = config.personal;
        
        // Availability Badge
        const availabilityBadge = document.getElementById('availability-badge');
        if (availabilityBadge) {
            if (personal.available) {
                availabilityBadge.style.display = 'inline-flex';
            } else {
                availabilityBadge.style.display = 'none';
            }
        }

        // Title and Name
        document.title = `${personal.name} | ${personal.title}`;
        const logoName = document.querySelector('.logo-name');
        if (logoName) logoName.textContent = personal.name.split(' ')[0]; // Display first name as logo
        
        // Background Signature Text
        const sigBgText = document.getElementById('sig-bg-text');
        if (sigBgText) {
            sigBgText.textContent = personal.name.split(' ').pop().toUpperCase(); // Display last name
        }

        // Hero Subtext
        const subtextDetails = document.getElementById('hero-subtext-details');
        if (subtextDetails) {
            subtextDetails.textContent = `Basé à ${personal.location}. Spécialisé en ${config.skills[0].items.slice(0, 3).map(s => s.name).join(', ')} et architecture moderne.`;
        }

        // Footer Copy
        const footerName = document.getElementById('footer-name');
        const footerYear = document.getElementById('footer-year');
        if (footerName) footerName.textContent = personal.name;
        if (footerYear) footerYear.textContent = new Date().getFullYear();

        // 2. Tagline Rotator (Hero)
        setupTaglineRotator(personal.taglines);

        // 3. About Section Bio Text
        const aboutBioContainer = document.getElementById('about-bio-text');
        if (aboutBioContainer) {
            if (personal.bio) {
                const paragraphs = personal.bio.split('\n\n').map(p => `<p>${p}</p>`).join('');
                aboutBioContainer.innerHTML = paragraphs;
            } else {
                aboutBioContainer.innerHTML = `
                    <p>Passionné par le développement logiciel et le design visuel, je conçois des solutions digitales qui allient esthétique, vitesse de chargement et robustesse.</p>
                    <p>Ce portfolio est géré de manière continue grâce à une intégration Git / GitHub. La modification de mes projets, de mes compétences et de mes informations est centralisée dans un unique fichier de configuration JavaScript.</p>
                `;
            }
        }

        // 4. Stats Generation
        const statsContainer = document.getElementById('stats-container');
        if (statsContainer && config.stats) {
            statsContainer.innerHTML = '';
            config.stats.forEach(stat => {
                const statItem = document.createElement('div');
                statItem.className = 'stat-item-panel';
                statItem.innerHTML = `
                    <div class="stat-val-wrap">
                        <span class="stat-counter-number" data-value="${stat.value}">${stat.value}</span>${stat.suffix}
                    </div>
                    <div class="stat-label-text">${stat.label}</div>
                `;
                statsContainer.appendChild(statItem);
            });
        }

        // 5. Skills Generation
        const skillsContainer = document.getElementById('skills-categories-container');
        if (skillsContainer && config.skills) {
            skillsContainer.innerHTML = '';
            config.skills.forEach(cat => {
                const catPanel = document.createElement('div');
                catPanel.className = 'skills-category-panel';
                
                let skillsItemsHTML = '';
                cat.items.forEach(skill => {
                    skillsItemsHTML += `
                        <li class="skill-row">
                            <div class="skill-info">
                                <span class="skill-label">${skill.name}</span>
                                <span class="skill-val">${skill.level}%</span>
                            </div>
                            <div class="skill-track">
                                <div class="skill-fill" data-level="${skill.level}"></div>
                            </div>
                        </li>
                    `;
                });

                catPanel.innerHTML = `
                    <div class="skills-category-title">
                        <span class="skills-category-icon">${cat.icon}</span>
                        <h3>${cat.category}</h3>
                    </div>
                    <ul class="skills-list">
                        ${skillsItemsHTML}
                    </ul>
                `;
                skillsContainer.appendChild(catPanel);
            });
        }

        // 6. Projects Generation (with Filtering)
        setupProjects(config.projects);

        // 7. Timeline Experience Generation
        const timelineContainer = document.getElementById('timeline-container');
        if (timelineContainer && config.experience) {
            // Clear existing timeline items (excluding the central line)
            const items = timelineContainer.querySelectorAll('.timeline-item');
            items.forEach(i => i.remove());

            config.experience.forEach(exp => {
                const timelineItem = document.createElement('div');
                timelineItem.className = `timeline-item ${exp.current ? 'current' : ''}`;
                timelineItem.innerHTML = `
                    <div class="timeline-dot"></div>
                    <div class="timeline-content-panel">
                        <span class="timeline-period">${exp.period}</span>
                        <h3>${exp.role}</h3>
                        <span class="timeline-company">${exp.company}</span>
                        <p class="timeline-desc">${exp.description}</p>
                    </div>
                `;
                timelineContainer.appendChild(timelineItem);
            });
        }

        // 8. Contact Details & Social Links
        const contactLocation = document.getElementById('contact-location');
        if (contactLocation) contactLocation.textContent = personal.location;

        // Email Obfuscation (antispam protection)
        const emailLink = document.getElementById('obfuscated-email');
        if (emailLink && personal.email) {
            const email = personal.email;
            emailLink.textContent = email;
            emailLink.href = `mailto:${email}`;
        }

        // Phone Number
        const phoneLink = document.getElementById('contact-phone');
        if (phoneLink && personal.phone) {
            phoneLink.textContent = personal.phone;
            phoneLink.href = `tel:${personal.phone.replace(/\s+/g, '')}`;
        }

        const socialContainer = document.getElementById('social-links');
        if (socialContainer && personal.socials) {
            socialContainer.innerHTML = '';
            const socials = personal.socials;
            
            if (socials.github) {
                socialContainer.innerHTML += `
                    <a href="${socials.github}" target="_blank" class="social-link-btn interactive-element" aria-label="GitHub">
                        <i class="fa-brands fa-github"></i>
                    </a>
                `;
            }
            if (socials.linkedin) {
                socialContainer.innerHTML += `
                    <a href="${socials.linkedin}" target="_blank" class="social-link-btn interactive-element" aria-label="LinkedIn">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                `;
            }
            if (socials.twitter) {
                socialContainer.innerHTML += `
                    <a href="${socials.twitter}" target="_blank" class="social-link-btn interactive-element" aria-label="Twitter">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                `;
            }
        }

        // Observe scroll reveals
        document.querySelectorAll('.reveal-on-scroll, #skills-categories-container, #stats-container').forEach(el => {
            revealObserver.observe(el);
        });
    }

    // --- Tagline Rotator Logic ---
    function setupTaglineRotator(taglines) {
        if (!rotativeTaglineEl || !taglines || taglines.length === 0) return;
        
        let index = 0;
        rotativeTaglineEl.textContent = taglines[0];

        setInterval(() => {
            rotativeTaglineEl.style.opacity = '0';
            rotativeTaglineEl.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                index = (index + 1) % taglines.length;
                rotativeTaglineEl.textContent = taglines[index];
                rotativeTaglineEl.style.opacity = '1';
                rotativeTaglineEl.style.transform = 'translateY(0)';
            }, 300);
        }, 3000);
        
        // CSS transitions for text rotation animation
        rotativeTaglineEl.style.transition = 'opacity 0.3s, transform 0.3s';
    }

    // --- Stats Counters Animation ---
    let statsAnimated = false;
    function animateStatsCounters() {
        if (statsAnimated) return;
        statsAnimated = true;

        document.querySelectorAll('.stat-counter-number').forEach(counter => {
            const target = parseInt(counter.getAttribute('data-value'), 10);
            if (isNaN(target)) return;
            
            let count = 0;
            const duration = 1500; // 1.5s
            const stepTime = Math.max(Math.floor(duration / target), 15);
            
            const timer = setInterval(() => {
                count += 1;
                counter.textContent = count;
                if (count >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                }
            }, stepTime);
        });
    }

    // --- Skills Progress Bars Animation ---
    let skillsAnimated = false;
    function animateSkillsProgress() {
        if (skillsAnimated) return;
        skillsAnimated = true;

        document.querySelectorAll('.skill-fill').forEach(fill => {
            const level = fill.getAttribute('data-level');
            fill.style.width = `${level}%`;
        });
    }

    // --- Projects Grid & Filters Handler ---
    function setupProjects(projects) {
        const grid = document.getElementById('projects-grid-container');
        const filters = document.querySelectorAll('.filter-btn');
        if (!grid || !projects) return;

        function renderProjects(filterValue) {
            grid.innerHTML = '';
            
            const filteredProjects = projects.filter(p => {
                if (filterValue === 'all') return true;
                return p.category === filterValue;
            });

            filteredProjects.forEach(proj => {
                const wrapper = document.createElement('div');
                wrapper.className = `project-card-wrapper ${proj.featured ? 'featured' : ''}`;
                
                // Stack badges
                const stackHTML = proj.stack.map(s => `<span class="stack-tag">${s}</span>`).join('');
                
                // Project links
                let linksHTML = '';
                if (proj.githubUrl) {
                    linksHTML += `
                        <a href="${proj.githubUrl}" target="_blank" class="proj-link interactive-element" aria-label="Github link">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    `;
                }
                if (proj.liveUrl) {
                    linksHTML += `
                        <a href="${proj.liveUrl}" target="_blank" class="proj-link interactive-element" aria-label="Demo live">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    `;
                }

                wrapper.innerHTML = `
                    <div class="project-card">
                        <div class="project-media-placeholder">
                            <i class="fa-solid ${proj.category === 'ia' ? 'fa-microchip' : proj.category === 'backend' ? 'fa-server' : 'fa-laptop-code'}"></i>
                        </div>
                        <div class="project-card-content">
                            <div class="project-category-tag">${proj.category}</div>
                            <div class="project-title-row">
                                <h3>${proj.title}</h3>
                                <div class="project-links">
                                    ${linksHTML}
                                </div>
                            </div>
                            <p class="project-desc">${proj.description}</p>
                            <div class="project-stack-tags">
                                ${stackHTML}
                            </div>
                        </div>
                    </div>
                `;
                grid.appendChild(wrapper);
            });
        }

        // Initial render
        renderProjects('all');

        // Filters click handler
        filters.forEach(btn => {
            btn.addEventListener('click', () => {
                filters.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                renderProjects(filterValue);
            });
        });
    }

    // --- Constellation Background Canvas Animation ---
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        const particleCount = isMobile ? 15 : 45;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', () => {
            resizeCanvas();
            initParticles();
        });
        resizeCanvas();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.color = Math.random() > 0.5 ? 'rgba(91, 110, 245, 0.2)' : 'rgba(155, 92, 246, 0.2)';
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }
        initParticles();

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw lines between particles
            if (!isMobile) {
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
                        if (dist < 100) {
                            const alpha = (1 - dist / 100) * 0.08;
                            ctx.strokeStyle = `rgba(120, 120, 200, ${alpha})`;
                            ctx.lineWidth = 0.5;
                            ctx.beginPath();
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            requestAnimationFrame(animate);
        }
        animate();
    }
});
