export function renderFeed(container) {
  const html = `
    <div class="feed-container fade-in">
      <!-- Top Navigation -->
      <div class="top-nav">
        <img class="insta-logo-text" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png" alt="Instagram" style="filter: invert(1); height: 28px; width: auto; object-fit: contain;">
        <div class="top-nav-icons">
          <!-- Heart Icon -->
          <svg class="nav-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <!-- Send/Message Icon -->
          <svg class="nav-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </div>
      </div>

      <!-- Feed Content -->
      <div class="feed-content">
        <div class="post">
          <!-- Post Header -->
          <div class="post-header">
            <div class="user-info">
              <img src="assets/profile.png" alt="Profile" class="profile-pic">
              <div class="user-details">
                <span class="username">friends_forever</span>
                <span class="location">Urban Sunset</span>
              </div>
            </div>
            <div class="more-options">
              <svg fill="#fff" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="12" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="12" r="2"></circle>
              </svg>
            </div>
          </div>
          
          <!-- Post Media (Black Rectangle matching prototype) -->
          <div class="post-media">
            <div class="video-duration">3:00</div>
          </div>
          
          <!-- Post Actions -->
          <div class="post-actions">
            <div class="actions-left">
              <svg class="nav-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <svg class="nav-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <svg class="nav-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </div>
            <div class="actions-right">
              <svg class="nav-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
          </div>
          
          <div class="post-likes">1,249 likes</div>
          <div class="post-caption">
            <span class="caption-username">friends_forever</span>
            Catching the golden hour with the best crew! 🌅✨ 
            <span class="hashtags">#vibe #sunset #friends</span>
          </div>
          <div class="view-comments">View all 86 comments</div>
          <div class="post-time">2 HOURS AGO</div>
        </div>
      </div>

      <!-- Bottom Navigation -->
      <div class="bottom-nav">
        <!-- Home -->
        <svg class="nav-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <!-- Search -->
        <svg class="nav-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <!-- Reels (Video) -->
        <svg class="nav-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
          <line x1="7" y1="2" x2="7" y2="22"></line>
          <line x1="17" y1="2" x2="17" y2="22"></line>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <line x1="2" y1="7" x2="7" y2="7"></line>
          <line x1="2" y1="17" x2="7" y2="17"></line>
          <line x1="17" y1="17" x2="22" y2="17"></line>
          <line x1="17" y1="7" x2="22" y2="7"></line>
        </svg>
        <!-- Profile -->
        <div class="profile-icon-wrapper">
          <img src="assets/profile.png" alt="Profile">
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;
}
