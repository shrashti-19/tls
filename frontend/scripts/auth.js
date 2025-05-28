// document.addEventListener('DOMContentLoaded', function() {
//     // Tab switching functionality
//     const signinTab = document.getElementById('signin-tab');
//     const signupTab = document.getElementById('signup-tab');
//     const signinForm = document.getElementById('signin-form');
//     const signupForm = document.getElementById('signup-form');
    
//     signinTab.addEventListener('click', function() {
//         signinTab.classList.add('active');
//         signupTab.classList.remove('active');
//         signinForm.classList.add('active');
//         signupForm.classList.remove('active');
//     });
    
//     signupTab.addEventListener('click', function() {
//         signupTab.classList.add('active');
//         signinTab.classList.remove('active');
//         signupForm.classList.add('active');
//         signinForm.classList.remove('active');
//     });
    
//     // Password strength indicator (mock)
//     const passwordInput = document.getElementById('password');
//     const strengthIndicator = document.getElementById('strength-indicator');
    
//     passwordInput.addEventListener('input', function() {
//         const password = passwordInput.value;
//         if (password.length === 0) {
//             strengthIndicator.textContent = 'Weak';
//             strengthIndicator.style.color = '';
//         } else if (password.length < 8) {
//             strengthIndicator.textContent = 'Weak';
//             strengthIndicator.style.color = 'var(--danger-color)';
//         } else if (password.length < 12) {
//             strengthIndicator.textContent = 'Medium';
//             strengthIndicator.style.color = 'var(--warning-color)';
//         } else {
//             strengthIndicator.textContent = 'Strong';
//             strengthIndicator.style.color = 'var(--success-color)';
//         }
//     });
    
//     // Signup form password strength (mock)
//     const signupPasswordInput = document.getElementById('signup-password');
//     const signupStrengthIndicator = document.getElementById('signup-strength-indicator');
    
//     signupPasswordInput.addEventListener('input', function() {
//         const password = signupPasswordInput.value;
//         if (password.length === 0) {
//             signupStrengthIndicator.textContent = 'Weak';
//             signupStrengthIndicator.style.color = '';
//         } else if (password.length < 8) {
//             signupStrengthIndicator.textContent = 'Weak';
//             signupStrengthIndicator.style.color = 'var(--danger-color)';
//         } else if (password.length < 12) {
//             signupStrengthIndicator.textContent = 'Medium';
//             signupStrengthIndicator.style.color = 'var(--warning-color)';
//         } else {
//             signupStrengthIndicator.textContent = 'Strong';
//             signupStrengthIndicator.style.color = 'var(--success-color)';
//         }
//     });
    
//     // Form submission (mock - would be API calls in real implementation)
//     signinForm.addEventListener('submit', function(e) {
//         e.preventDefault();
//         // Mock login - redirect to dashboard
//         window.location.href = 'dashboard.html';
//     });
    
//     signupForm.addEventListener('submit', function(e) {
//         e.preventDefault();
//         // Mock signup - redirect to dashboard
//         window.location.href = 'dashboard.html';
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
  const signinTab = document.getElementById('signin-tab');
  const signupTab = document.getElementById('signup-tab');
  const signinForm = document.getElementById('signin-form');
  const signupForm = document.getElementById('signup-form');

  // Tab switching
  signinTab.addEventListener('click', function () {
    signinTab.classList.add('active');
    signupTab.classList.remove('active');
    signinForm.classList.add('active');
    signupForm.classList.remove('active');
  });

  signupTab.addEventListener('click', function () {
    signupTab.classList.add('active');
    signinTab.classList.remove('active');
    signupForm.classList.add('active');
    signinForm.classList.remove('active');
  });

  // Sign In submission
  signinForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const res = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = 'dashboard.html';
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Something went wrong during login.');
    }
  });

  // Sign Up submission
  signupForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const username = document.getElementById('signup-username').value.trim();
  const name = document.getElementById('signup-name').value.trim();
  const title = document.getElementById('signup-title').value.trim();
  const linkedin = document.getElementById('signup-linkedin').value.trim();
  const github = document.getElementById('signup-github').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value;

  try {
    const res = await fetch('http://localhost:4000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, name, title, linkedin, github, email, password })
    });

    const data = await res.json();

    if (res.ok) {
      alert('Registration successful. You can now sign in.');
      signinTab.click(); // switch to sign-in tab
    } else {
      alert(data.message || 'Signup failed');
    }
  } catch (err) {
    console.error('Signup error:', err);
    alert('Something went wrong during signup.');
  }
});

});
