import { renderLogin } from './pages/login.js?v=2';
import { renderFeed } from './pages/feed.js?v=2';

const app = document.getElementById('app');

function navigateTo(page) {
  // Simple fade transition
  app.style.opacity = 0;
  
  setTimeout(() => {
    app.innerHTML = '';
    
    if (page === 'login') {
      renderLogin(app, () => navigateTo('feed'));
    } else if (page === 'feed') {
      renderFeed(app);
    }
    
    app.style.transition = 'opacity 0.3s ease';
    app.style.opacity = 1;
  }, 150);
}

// Initial render
navigateTo('login');
