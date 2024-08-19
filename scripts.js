// Optional: Add interactive or animated elements
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-content img');
    
    images.forEach((image, index) => {
        image.style.animationDelay = `${index * 0.3}s`;
        image.classList.add('fadeInUp');
    });
});
