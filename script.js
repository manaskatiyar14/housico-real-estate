document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('search-bar');
    const suggestionsBox = document.getElementById('suggestions');
    const properties = [
        "2BHK Apartment - Mumbai",
        "3BHK Villa - Delhi",
        "1BHK Flat - Pune",
        "Luxury Villa - Bangalore",
        "Penthouse - Mumbai"
    ];

    searchBar.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        suggestionsBox.innerHTML = '';

        if (!query) {
            suggestionsBox.style.display = 'none';
            return;
        }

        const matches = properties.filter(p => p.toLowerCase().includes(query));

        if (matches.length === 0) {
            const noResult = document.createElement('div');
            noResult.textContent = 'No results found';
            suggestionsBox.appendChild(noResult);
        } else {
            matches.forEach(match => {
                const div = document.createElement('div');
                div.textContent = match;
                div.addEventListener('click', () => {
                    searchBar.value = match;
                    suggestionsBox.style.display = 'none';
                });
                suggestionsBox.appendChild(div);
            });
        }

        suggestionsBox.style.display = 'block';
    });
});
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');

    // Change button icon
    if (body.classList.contains('dark-mode')) {
      themeToggle.textContent = '☀️'; // Sun icon for light mode
    } else {
      themeToggle.textContent = '🌙'; // Moon icon for dark mode
    }
  });
});

const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginModal = document.getElementById('login-modal');
const closeLogin = document.getElementById('close-login');

// Open modal
loginBtn.addEventListener('click', () => loginModal.style.display = 'block');
signupBtn.addEventListener('click', () => loginModal.style.display = 'block'); // can use same modal

// Close modal
closeLogin.addEventListener('click', () => loginModal.style.display = 'none');

// Close if click outside content
window.addEventListener('click', (e) => {
  if (e.target === loginModal) loginModal.style.display = 'none';
});

