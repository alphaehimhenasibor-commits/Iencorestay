// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObs.observe(el));

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  q.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(open => open.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// Contact form — opens mail client with pre-filled enquiry
function handleSubmit(e) {
  e.preventDefault();
  const status = document.getElementById('form-status');
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const type = document.getElementById('type').value;
  const message = document.getElementById('message').value;

  const subject = encodeURIComponent('Enquiry from ' + name + ' — iEncore Stay');
  const body = encodeURIComponent(
    'Name: ' + name + '\n' +
    'Email: ' + email + '\n' +
    'Phone: ' + phone + '\n' +
    'Type: ' + type + '\n\n' +
    message
  );
  window.location.href = 'mailto:info@iencorestay.com.au?subject=' + subject + '&body=' + body;
  status.textContent = 'Opening your email client...';
}
