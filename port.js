 // Mobile menu toggle
 const mobileMenuButton = document.getElementById('mobile-menu-button');
 const mobileMenu = document.getElementById('mobile-menu');
 mobileMenuButton.addEventListener('click', () => {
     mobileMenu.classList.toggle('hidden');
     // Toggle icon
     const icon = mobileMenuButton.querySelector('i');
     if (mobileMenu.classList.contains('hidden')) {
         icon.classList.remove('fa-times');
         icon.classList.add('fa-bars');
     } else {
         icon.classList.remove('fa-bars');
         icon.classList.add('fa-times');
     }
 });

 // Close mobile menu when a link is clicked
 mobileMenu.addEventListener('click', (event) => {
     if (event.target.tagName === 'A') {
         mobileMenu.classList.add('hidden');
         mobileMenuButton.querySelector('i').classList.remove('fa-times');
         mobileMenuButton.querySelector('i').classList.add('fa-bars');
     }
 });
 
 // Navbar shrink on scroll
 const navbar = document.getElementById('navbar');
 window.addEventListener('scroll', () => {
     if (window.scrollY > 50) {
         navbar.classList.add('py-3', 'shadow-2xl');
         navbar.classList.remove('py-4');
     } else {
         navbar.classList.remove('py-3', 'shadow-2xl');
         navbar.classList.add('py-4');
     }
 });

 // Update current year in footer
 document.getElementById('currentYear').textContent = new Date().getFullYear();

 // Scroll to top button
 const scrollToTopBtn = document.getElementById('scrollToTopBtn');
 window.addEventListener('scroll', () => {
     if (window.pageYOffset > 300) {
         scrollToTopBtn.classList.remove('opacity-0', 'invisible');
         scrollToTopBtn.classList.add('opacity-100', 'visible');
     } else {
         scrollToTopBtn.classList.remove('opacity-100', 'visible');
         scrollToTopBtn.classList.add('opacity-0', 'invisible');
     }
 });
 scrollToTopBtn.addEventListener('click', () => {
     window.scrollTo({ top: 0, behavior: 'smooth' });
 });
 

 // Simple fade-in animation for sections on scroll (optional)
 const sections = document.querySelectorAll('section');
 const options = {
     threshold: 0.1, // Trigger when 10% of the section is visible
     rootMargin: "0px 0px -50px 0px" // Adjust bottom margin to trigger a bit earlier
 };

 const observer = new IntersectionObserver((entries, observer) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('fade-in-visible');
             // observer.unobserve(entry.target); // Optional: stop observing after it's visible
         } else {
             // Optional: remove class if you want fade-out on scroll up
             // entry.target.classList.remove('fade-in-visible'); 
         }
     });
 }, options);

 sections.forEach(section => {
     section.classList.add('fade-in-initial'); // Initial state for animation
     observer.observe(section);
 });
