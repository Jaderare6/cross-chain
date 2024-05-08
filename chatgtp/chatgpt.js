// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Gather form data
    const formData = new FormData(event.target);
    const fromToken = formData.get('fromToken');
    const toToken = formData.get('toToken');
    const amount = parseFloat(formData.get('amount'));
    const orderType = formData.get('orderType');
    const limitPrice = parseFloat(formData.get('limitPrice'));
    const expiration = parseFloat(formData.get('expiration'));
    
    // Perform validation and processing
    if (!fromToken || !toToken || isNaN(amount) || amount <= 0) {
      alert('Please fill in all fields correctly.');
      return;
    }
  
    // Simulate API request to fetch token information
    getTokenInfo(fromToken)
      .then(tokenInfo => {
        // Simulate API request to estimate gas fee
        return estimateGasFee(fromToken, toToken, amount);
      })
      .then(gasFee => {
        // Simulate user approval for token spending
        return approveTokenSpending(fromToken);
      })
      .then(approvalSuccess => {
        if (approvalSuccess) {
          // Simulate token swap
          swapTokens(fromToken, toToken, amount, orderType, limitPrice, expiration);
        } else {
          alert('Failed to get approval for token spending.');
        }
      })
      .catch(error => {
        console.error('Error during swap:', error);
        alert('An error occurred during the swap. Please try again later.');
      });
  }
  
  // Function to fetch token information from an API (simulated)
  function getTokenInfo(token) {
    return new Promise((resolve, reject) => {
      // Simulate API request
      setTimeout(() => {
        const tokenInfo = { name: 'Ethereum', symbol: 'ETH', decimals: 18 };
        resolve(tokenInfo);
      }, 1000);
    });
  }
  
  // Function to estimate gas fee (simulated)
  function estimateGasFee(fromToken, toToken, amount) {
    return new Promise((resolve, reject) => {
      // Simulate API request
      setTimeout(() => {
        const gasFee = 0.005; // Simulated gas fee
        resolve(gasFee);
      }, 1000);
    });
  }
  
  // Function to request user approval for token spending (simulated)
  function approveTokenSpending(token) {
    return new Promise((resolve, reject) => {
      // Simulate user interaction
      const approved = confirm('Do you approve token spending?');
      resolve(approved);
    });
  }
  
  // Function to simulate token swap
  function swapTokens(fromToken, toToken, amount, orderType, limitPrice, expiration) {
    // Simulate token swap process
    console.log('Token swap initiated:', { fromToken, toToken, amount, orderType, limitPrice, expiration });
    alert('Token swap initiated. Check console for details.');
  }
  
  // Function to initialize the application
  function initializeApp() {
    const swapForm = document.getElementById('swap-form');
    swapForm.addEventListener('submit', handleSubmit);
  }
  
  // Initialize the application when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', initializeApp);

  // animations

// Function to animate the header
function animateHeader() {
    // Select the header element
    const header = document.querySelector('.header');
  
    // Animate the header with Anime.js
    anime({
      targets: header,
      opacity: [0, 1], // Fade in from opacity 0 to opacity 1
      duration: 1000, // Animation duration in milliseconds
      easing: 'easeInOutQuad', // Easing function for smooth transition
    });
  }
  
  // Call the animateHeader function when the page loads
  window.addEventListener('load', animateHeader);
  

  // JavaScript

// Function to animate sections when they come into view
function animateSections() {
    // Select all sections
    const sections = document.querySelectorAll('section');
  
    // Loop through each section and animate them
    sections.forEach((section, index) => {
      // Define the direction of animation based on the section index
      const direction = index % 2 === 0 ? 'left' : 'right';
  
      // Animate the section with Anime.js
      anime({
        targets: section,
        translateX: [direction === 'left' ? '-100%' : '100%', 0], // Slide in from left or right
        opacity: [0, 1], // Fade in from opacity 0 to opacity 1
        duration: 1000, // Animation duration in milliseconds
        easing: 'easeInOutQuad', // Easing function for smooth transition
        delay: anime.stagger(200), // Delay animation for each section
      });
    });
  }
  
  // Call the animateSections function when the page loads
  window.addEventListener('load', animateSections);

  // JavaScript

// Function to animate text elements when they come into view
function animateTextElements() {
    // Select all text elements
    const textElements = document.querySelectorAll('.fade-in');
  
    // Loop through each text element and animate them
    textElements.forEach((element) => {
      // Animate the text element with Anime.js
      anime({
        targets: element,
        opacity: [0, 1], // Fade in from opacity 0 to opacity 1
        translateY: [20, 0], // Slide up from 20px below
        duration: 1000, // Animation duration in milliseconds
        easing: 'easeInOutQuad', // Easing function for smooth transition
        delay: anime.stagger(200), // Delay animation for each text element
      });
    });
  }
  
  // Call the animateTextElements function when the page loads
  window.addEventListener('load', animateTextElements);
  // Function to toggle between light and dark themes
function toggleDarkTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');
}

// Function to handle logo click event
function handleLogoClick() {
  const logo = document.querySelector('.logo-container img');
  logo.addEventListener('click', toggleDarkTheme);
}

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  handleLogoClick();
});





// Function to toggle between light and dark themes
function toggleDarkTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
  }
  
  // Function to handle logo click event
  function handleLogoClick() {
    const logo = document.querySelector('.logo-container img');
    logo.addEventListener('click', toggleDarkTheme);
  }
  
  // Initialize the application when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    handleLogoClick();
  });
  // Function to toggle between light and dark themes
function toggleDarkTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');

  // Save the current theme preference to local storage
  const isDarkTheme = body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

// Function to handle logo click event
function handleLogoClick() {
  const logo = document.querySelector('.logo-container img');
  logo.addEventListener('click', toggleDarkTheme);

  // Check if the user has a preferred theme stored in local storage
  const preferredTheme = localStorage.getItem('theme');
  if (preferredTheme === 'dark') {
    // If the preferred theme is dark, set the dark theme
    document.body.classList.add('dark-theme');
  }
}

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  handleLogoClick();
});
// Function to toggle navigation on mobile
function toggleNavigation() {
  const navigation = document.querySelector('.navigation');
  navigation.classList.toggle('active');
}

// Function to handle hamburger menu click event
function handleHamburgerClick() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  hamburgerMenu.addEventListener('click', toggleNavigation);
}

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  handleLogoClick();
  handleHamburgerClick();
});
