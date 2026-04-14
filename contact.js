function handleSubmit() {
  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all required fields.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Show success
  document.getElementById('successMsg').classList.add('show');
  document.getElementById('sendBtn').disabled = true;
  document.getElementById('sendBtn').textContent = 'Message Sent!';
  document.getElementById('sendBtn').style.background = 'var(--green)';
  document.getElementById('sendBtn').style.color = '#000';

  // Reset after 4 seconds
  setTimeout(() => {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    document.getElementById('successMsg').classList.remove('show');
    const btn = document.getElementById('sendBtn');
    btn.disabled = false;
    btn.innerHTML = 'Send Message <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:17px;height:17px;display:inline-block;vertical-align:middle;margin-left:6px"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
    btn.style.background = '';
    btn.style.color = '';
  }, 4000);
}