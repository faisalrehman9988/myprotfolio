document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    
    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        icon.className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.querySelector('i').className = 'fas fa-bars';
        });
    });

    // Skills data
    const skills = {
        frontend: [
            "HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap 5", 
            "Tailwind CSS", "Responsive Design", "DOM Manipulation"
        ],
        backend: [
            "PHP", "MySQL", "REST APIs", "XAMPP/WAMP", 
            "Session Management", "User Authentication"
        ],
        tools: [
            "Git & GitHub", "VS Code", "Postman", "Figma",
            "Chrome DevTools", "Problem Solving", "Team Collaboration"
        ]
    };

    // Load skills into categories
    function loadSkills() {
        const frontendContainer = document.getElementById('frontendSkills');
        const backendContainer = document.getElementById('backendSkills');
        const toolsContainer = document.getElementById('toolsSkills');

        skills.frontend.forEach(skill => {
            const tag = document.createElement('span');
            tag.className = 'skill-tag';
            tag.textContent = skill;
            frontendContainer.appendChild(tag);
        });

        skills.backend.forEach(skill => {
            const tag = document.createElement('span');
            tag.className = 'skill-tag';
            tag.textContent = skill;
            backendContainer.appendChild(tag);
        });

        skills.tools.forEach(skill => {
            const tag = document.createElement('span');
            tag.className = 'skill-tag';
            tag.textContent = skill;
            toolsContainer.appendChild(tag);
        });
    }

    // Projects data
    const projects = [
        {
            title: "E-Commerce Store",
            description: "Full-featured online shopping platform with user authentication, admin dashboard, product management (CRUD), shopping cart, and order processing system. Features include secure payment integration and responsive design.",
            technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
            icon: "fas fa-shopping-cart",
            status: "Completed",
            features: ["User Auth", "Admin Panel", "Shopping Cart", "Payment System"]
        },
        {
            title: "University Management System",
            description: "Comprehensive web application for university operations including student registration, course management, faculty dashboards, and grade tracking. Features role-based access control and real-time notifications.",
            technologies: ["PHP", "MySQL", "JavaScript", "AJAX", "Chart.js"],
            icon: "fas fa-university",
            status: "Completed",
            features: ["Student Portal", "Course Management", "Grade System", "Reporting"]
        },
        {
            title: "Personal Portfolio Website",
            description: "Modern, responsive portfolio showcasing projects and skills. Implemented with CSS Grid and Flexbox, featuring smooth animations, contact form with validation, and optimized performance.",
            technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
            icon: "fas fa-laptop-code",
            status: "Completed",
            features: ["Responsive Design", "Contact Form", "Project Showcase", "Performance Optimized"]
        }
    ];

    // Load projects
    function loadProjects() {
        const container = document.getElementById('projectsContainer');
        
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            projectCard.innerHTML = `
                <div class="project-img">
                    <i class="${project.icon}"></i>
                    <div class="project-status" style="background: ${project.status === 'Completed' ? '#10b981' : '#f59e0b'}">
                        ${project.status}
                    </div>
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div style="margin: 15px 0;">
                        <strong>Key Features:</strong>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px;">
                            ${project.features.map(feature => `<span style="background: rgba(37, 99, 235, 0.1); color: #60a5fa; padding: 4px 10px; border-radius: 12px; font-size: 0.8rem;">${feature}</span>`).join('')}
                        </div>
                    </div>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            `;
            
            container.appendChild(projectCard);
        });
    }

    // Schedule call button functionality
    const scheduleCallBtn = document.getElementById('scheduleCallBtn');
    scheduleCallBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const modal = document.createElement('div');
        modal.className = 'modal';
        
        modal.innerHTML = `
            <div class="modal-content">
                <h3 style="margin-bottom: 20px;">Schedule a Call</h3>
                <p style="margin-bottom: 25px;">Let's set up a 30-minute video call to discuss your project. Please choose your preferred platform:</p>
                
                <div style="display: flex; flex-direction: column; gap: 15px; margin-bottom: 25px;">
                    <a href="https://calendly.com/faisalrehman" target="_blank" class="btn" style="width: 100%; justify-content: center;">
                        <i class="fas fa-calendar-alt"></i> Calendly
                    </a>
                    <a href="https://meet.google.com" target="_blank" class="btn btn-outline" style="width: 100%; justify-content: center;">
                        <i class="fab fa-google"></i> Google Meet
                    </a>
                    <a href="https://zoom.us" target="_blank" class="btn btn-outline" style="width: 100%; justify-content: center;">
                        <i class="fas fa-video"></i> Zoom
                    </a>
                </div>
                
                <button id="closeModal" style="background: none; border: none; color: var(--gray); cursor: pointer; display: block; margin: 0 auto;">
                    <i class="fas fa-times"></i> Close
                </button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        modal.querySelector('#closeModal').addEventListener('click', function() {
            document.body.removeChild(modal);
        });
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact buttons functionality
    document.querySelectorAll('.contact-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.id === 'scheduleCallBtn') return;
            
            const action = this.querySelector('h4').textContent;
            console.log(`Contact action: ${action}`);
            
            if (action === 'Send an Email') {
                // Email already handled by mailto link
            } else if (action === 'WhatsApp Message') {
                // WhatsApp already handled by link
            } else if (action === 'View GitHub') {
                // GitHub already handled by link
            }
        });
    });

    // Initialize
    loadSkills();
    loadProjects();
    
    // Debug message
    console.log("Portfolio loaded successfully!");
});