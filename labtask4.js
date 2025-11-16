// Portfolio Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Social media card interactions
    const socialCards = document.querySelectorAll('.social-card');
    
    socialCards.forEach(card => {
        card.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            let url = '';
            
            switch(platform) {
                case 'linkedin':
                    url = 'https://www.linkedin.com/in/tanjim-hossain-9882821b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
                    break;
                case 'github':
                    url = 'https://github.com/Tanjim003';
                    break;
                case 'facebook':
                    url = 'https://www.facebook.com/share/1CC6ytZwrQ/';
                    break;
                case 'instagram':
                    url = 'https://www.instagram.com/tonmoy.hossainn?igsh=Z3Nza3diaTM4MjRu';
                    break;
               
            }
            
            if(url) {
                window.open(url, '_blank');
            }
        });
    });
    
    // Project card interactions
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const projectName = this.closest('.project-card').querySelector('h3').textContent;
            if (projectName === 'Uniswap Clone') {
            window.open('https://github.com/Tanjim003/UniSwap', '_blank');
        } else if (projectName === 'Currency Converter') {
            window.open('https://github.com/Tanjim003/Currency-Converter', '_blank');
        }
        });
    });
    
    // Scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Dynamic year update for education
    const currentYear = new Date().getFullYear();
    const educationDate = document.querySelector('.education-date');
    if (educationDate) {
        educationDate.textContent = `2022 - ${currentYear + 2} (Expected)`;
    }
    
    // Add active state to social cards on hover
    socialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Theme toggle functionality (optional)
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.position = 'fixed';
    themeToggle.style.bottom = '20px';
    themeToggle.style.right = '20px';
    themeToggle.style.width = '50px';
    themeToggle.style.height = '50px';
    themeToggle.style.borderRadius = '50%';
    themeToggle.style.background = 'var(--primary-color)';
    themeToggle.style.color = 'white';
    themeToggle.style.border = 'none';
    themeToggle.style.cursor = 'pointer';
    themeToggle.style.boxShadow = 'var(--shadow)';
    themeToggle.style.zIndex = '1000';
    themeToggle.style.display = 'flex';
    themeToggle.style.alignItems = 'center';
    themeToggle.style.justifyContent = 'center';
    themeToggle.style.fontSize = '1.2rem';
    
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            // In a real implementation, you would update CSS variables for dark theme
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
    
    // Print functionality
    const printButton = document.createElement('button');
    printButton.innerHTML = '<i class="fas fa-print"></i>';
    printButton.className = 'print-button';
    printButton.style.position = 'fixed';
    printButton.style.bottom = '80px';
    printButton.style.right = '20px';
    printButton.style.width = '50px';
    printButton.style.height = '50px';
    printButton.style.borderRadius = '50%';
    printButton.style.background = 'var(--secondary-color)';
    printButton.style.color = 'white';
    printButton.style.border = 'none';
    printButton.style.cursor = 'pointer';
    printButton.style.boxShadow = 'var(--shadow)';
    printButton.style.zIndex = '1000';
    printButton.style.display = 'flex';
    printButton.style.alignItems = 'center';
    printButton.style.justifyContent = 'center';
    printButton.style.fontSize = '1.2rem';
    
    document.body.appendChild(printButton);
    
    printButton.addEventListener('click', function() {
        window.print();
    });
});