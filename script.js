// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
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

// Form submission handler
const feedbackForm = document.querySelector('.feedback-form');
if (feedbackForm) {
  const textarea = feedbackForm.querySelector('textarea');
  const submitBtn = feedbackForm.querySelector('.btn-secondary');
  
  submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const feedback = textarea.value.trim();
    
    if (feedback) {
      alert('Thank you for your feedback!');
      textarea.value = '';
    } else {
      alert('Please enter your feedback.');
    }
  });
}

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});
