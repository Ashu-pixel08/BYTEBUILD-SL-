// ═══════════════════════════════════════════
//  ByteBuilds – auth.js
//  Handles: Login, Signup, Logout,
//           Form validation, Password strength,
//           Session persistence (localStorage)
// ═══════════════════════════════════════════

// ── DOM refs ──────────────────────────────
const authOverlay  = document.getElementById('authOverlay');
const authModal    = document.getElementById('authModal');
const loginForm    = document.getElementById('loginForm');
const signupForm   = document.getElementById('signupForm');
const authSuccess  = document.getElementById('authSuccess');
const tabLogin     = document.getElementById('tabLogin');
const tabSignup    = document.getElementById('tabSignup');
const navAuth      = document.getElementById('navAuth');
const navUser      = document.getElementById('navUser');
const userAvatar   = document.getElementById('userAvatar');
const userName     = document.getElementById('userName');

// ── Open / Close Modal ────────────────────
document.getElementById('openLogin').addEventListener('click', () => openModal('login'));
document.getElementById('openSignup').addEventListener('click', () => openModal('signup'));
document.getElementById('closeAuth').addEventListener('click', closeModal);
document.getElementById('logoutBtn').addEventListener('click', logout);

authOverlay.addEventListener('click', (e) => {
  if (e.target === authOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

function openModal(tab) {
  authOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  switchTab(tab);
  clearAllErrors();
}

function closeModal() {
  authOverlay.classList.remove('open');
  document.body.style.overflow = '';
  // reset success state after close
  setTimeout(() => {
    authSuccess.style.display = 'none';
    loginForm.style.display   = 'block';
    signupForm.style.display  = 'none';
    switchTab('login');
    clearAllErrors();
    resetForms();
  }, 300);
}

// ── Tab switching ─────────────────────────
function switchTab(tab) {
  if (tab === 'login') {
    tabLogin.classList.add('active');
    tabSignup.classList.remove('active');
    loginForm.style.display  = 'block';
    signupForm.style.display = 'none';
    authSuccess.style.display = 'none';
  } else {
    tabSignup.classList.add('active');
    tabLogin.classList.remove('active');
    signupForm.style.display = 'block';
    loginForm.style.display  = 'none';
    authSuccess.style.display = 'none';
  }
  clearAllErrors();
}

// ── Helpers ───────────────────────────────
function setError(fieldId, errId, msg) {
  const input = document.getElementById(fieldId);
  const err   = document.getElementById(errId);
  if (msg) {
    input.classList.add('input-error');
    input.classList.remove('input-ok');
    err.textContent = msg;
    return false;
  } else {
    input.classList.remove('input-error');
    input.classList.add('input-ok');
    err.textContent = '';
    return true;
  }
}

function clearError(fieldId, errId) {
  const input = document.getElementById(fieldId);
  const err   = document.getElementById(errId);
  if (input) { input.classList.remove('input-error', 'input-ok'); }
  if (err)   { err.textContent = ''; }
}

function clearAllErrors() {
  [
    ['loginEmail','loginEmailErr'],
    ['loginPassword','loginPasswordErr'],
    ['signupFirst','signupFirstErr'],
    ['signupLast','signupLastErr'],
    ['signupEmail','signupEmailErr'],
    ['signupPassword','signupPasswordErr'],
    ['signupConfirm','signupConfirmErr'],
  ].forEach(([f, e]) => clearError(f, e));
  const termsErr = document.getElementById('signupTermsErr');
  if (termsErr) termsErr.textContent = '';
}

function resetForms() {
  ['loginEmail','loginPassword','signupFirst','signupLast',
   'signupEmail','signupPassword','signupConfirm'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.value = ''; el.classList.remove('input-ok','input-error'); }
  });
  const rem   = document.getElementById('rememberMe');
  const terms = document.getElementById('agreeTerms');
  if (rem)   rem.checked   = false;
  if (terms) terms.checked = false;
  document.getElementById('strengthFill').style.width = '0%';
  document.getElementById('strengthLabel').textContent = '';
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ── Toggle password visibility ─────────────
function togglePw(inputId, btn) {
  const input = document.getElementById(inputId);
  if (input.type === 'password') {
    input.type = 'text';
    btn.innerHTML = `<svg class="eye-hide" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
  } else {
    input.type = 'password';
    btn.innerHTML = `<svg class="eye-show" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
  }
}

// ── Password strength meter ───────────────
function updateStrength() {
  const pw   = document.getElementById('signupPassword').value;
  const fill  = document.getElementById('strengthFill');
  const label = document.getElementById('strengthLabel');

  let score = 0;
  if (pw.length >= 8)              score++;
  if (pw.length >= 12)             score++;
  if (/[A-Z]/.test(pw))           score++;
  if (/[0-9]/.test(pw))           score++;
  if (/[^A-Za-z0-9]/.test(pw))    score++;

  const levels = [
    { pct: '0%',  color: '',              text: '' },
    { pct: '25%', color: '#ef4444',       text: 'Weak' },
    { pct: '50%', color: '#f97316',       text: 'Fair' },
    { pct: '75%', color: '#eab308',       text: 'Good' },
    { pct: '90%', color: '#22c55e',       text: 'Strong' },
    { pct: '100%',color: 'var(--green)',  text: 'Very Strong' },
  ];

  const lvl = levels[Math.min(score, 5)];
  fill.style.width      = pw.length ? lvl.pct  : '0%';
  fill.style.background = lvl.color;
  label.textContent     = pw.length ? lvl.text : '';
  label.style.color     = lvl.color;
}

// ── LOGIN handler ─────────────────────────
function handleLogin() {
  clearAllErrors();
  const email    = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  let valid = true;

  if (!email) {
    valid = setError('loginEmail', 'loginEmailErr', 'Email is required') && valid;
  } else if (!emailRegex.test(email)) {
    valid = setError('loginEmail', 'loginEmailErr', 'Please enter a valid email') && valid;
  } else {
    setError('loginEmail', 'loginEmailErr', '');
  }

  if (!password) {
    valid = setError('loginPassword', 'loginPasswordErr', 'Password is required') && valid;
  } else if (password.length < 6) {
    valid = setError('loginPassword', 'loginPasswordErr', 'Password must be at least 6 characters') && valid;
  } else {
    setError('loginPassword', 'loginPasswordErr', '');
  }

  if (!valid) return;

  // Check if user exists in localStorage
  const users = JSON.parse(localStorage.getItem('bb_users') || '[]');
  const match = users.find(u => u.email === email && u.password === password);

  if (!match) {
    setError('loginEmail', 'loginEmailErr', '');
    setError('loginPassword', 'loginPasswordErr', 'Incorrect email or password');
    return;
  }

  // Simulate loading
  const btn = document.getElementById('loginSubmit');
  btn.textContent = 'Logging in…';
  btn.disabled = true;

  setTimeout(() => {
    // Save session
    const remember = document.getElementById('rememberMe').checked;
    const storage = remember ? localStorage : sessionStorage;
    storage.setItem('bb_session', JSON.stringify({ email: match.email, firstName: match.firstName, lastName: match.lastName }));

    showSuccess(`Welcome back, ${match.firstName}!`, 'You have been logged in successfully.');
    setUserLoggedIn(match);
    btn.textContent = 'Log In';
    btn.disabled = false;
  }, 800);
}

// ── SIGNUP handler ────────────────────────
function handleSignup() {
  clearAllErrors();
  const first    = document.getElementById('signupFirst').value.trim();
  const last     = document.getElementById('signupLast').value.trim();
  const email    = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  const confirm  = document.getElementById('signupConfirm').value;
  const terms    = document.getElementById('agreeTerms').checked;
  let valid = true;

  // First name
  if (!first) {
    valid = setError('signupFirst', 'signupFirstErr', 'First name is required') && valid;
  } else if (first.length < 2) {
    valid = setError('signupFirst', 'signupFirstErr', 'Must be at least 2 characters') && valid;
  } else { setError('signupFirst', 'signupFirstErr', ''); }

  // Last name
  if (!last) {
    valid = setError('signupLast', 'signupLastErr', 'Last name is required') && valid;
  } else if (last.length < 2) {
    valid = setError('signupLast', 'signupLastErr', 'Must be at least 2 characters') && valid;
  } else { setError('signupLast', 'signupLastErr', ''); }

  // Email
  if (!email) {
    valid = setError('signupEmail', 'signupEmailErr', 'Email is required') && valid;
  } else if (!emailRegex.test(email)) {
    valid = setError('signupEmail', 'signupEmailErr', 'Please enter a valid email') && valid;
  } else {
    // Check duplicate
    const users = JSON.parse(localStorage.getItem('bb_users') || '[]');
    if (users.find(u => u.email === email)) {
      valid = setError('signupEmail', 'signupEmailErr', 'An account with this email already exists') && valid;
    } else { setError('signupEmail', 'signupEmailErr', ''); }
  }

  // Password
  if (!password) {
    valid = setError('signupPassword', 'signupPasswordErr', 'Password is required') && valid;
  } else if (password.length < 8) {
    valid = setError('signupPassword', 'signupPasswordErr', 'Password must be at least 8 characters') && valid;
  } else if (!/[A-Z]/.test(password)) {
    valid = setError('signupPassword', 'signupPasswordErr', 'Include at least one uppercase letter') && valid;
  } else if (!/[0-9]/.test(password)) {
    valid = setError('signupPassword', 'signupPasswordErr', 'Include at least one number') && valid;
  } else { setError('signupPassword', 'signupPasswordErr', ''); }

  // Confirm
  if (!confirm) {
    valid = setError('signupConfirm', 'signupConfirmErr', 'Please confirm your password') && valid;
  } else if (confirm !== password) {
    valid = setError('signupConfirm', 'signupConfirmErr', 'Passwords do not match') && valid;
  } else { setError('signupConfirm', 'signupConfirmErr', ''); }

  // Terms
  if (!terms) {
    document.getElementById('signupTermsErr').textContent = 'You must agree to the terms to continue';
    valid = false;
  } else {
    document.getElementById('signupTermsErr').textContent = '';
  }

  if (!valid) return;

  // Simulate loading
  const btn = document.getElementById('signupSubmit');
  btn.textContent = 'Creating account…';
  btn.disabled = true;

  setTimeout(() => {
    // Save user
    const users = JSON.parse(localStorage.getItem('bb_users') || '[]');
    const newUser = { firstName: first, lastName: last, email, password };
    users.push(newUser);
    localStorage.setItem('bb_users', JSON.stringify(users));

    // Auto-login
    sessionStorage.setItem('bb_session', JSON.stringify({ email, firstName: first, lastName: last }));

    showSuccess(`Welcome, ${first}!`, 'Your account has been created. Happy building! 🎉');
    setUserLoggedIn(newUser);
    btn.textContent = 'Create Account';
    btn.disabled = false;
  }, 900);
}

// ── Show success overlay ──────────────────
function showSuccess(title, msg) {
  document.getElementById('successTitle').textContent = title;
  document.getElementById('successMsg').textContent   = msg;
  loginForm.style.display   = 'none';
  signupForm.style.display  = 'none';
  authSuccess.style.display = 'block';
  setTimeout(closeModal, 2200);
}

// ── Update nav UI ─────────────────────────
function setUserLoggedIn(user) {
  navAuth.style.display = 'none';
  navUser.classList.add('visible');
  userAvatar.textContent = user.firstName.charAt(0).toUpperCase();
  userName.textContent   = user.firstName;
}

function setUserLoggedOut() {
  navAuth.style.display = 'flex';
  navUser.classList.remove('visible');
}

// ── Logout ────────────────────────────────
function logout() {
  localStorage.removeItem('bb_session');
  sessionStorage.removeItem('bb_session');
  setUserLoggedOut();
}

// ── Check session on page load ────────────
(function checkSession() {
  const session =
    JSON.parse(localStorage.getItem('bb_session') || 'null') ||
    JSON.parse(sessionStorage.getItem('bb_session') || 'null');

  if (session) {
    setUserLoggedIn(session);
  } else {
    setUserLoggedOut();
  }
})();