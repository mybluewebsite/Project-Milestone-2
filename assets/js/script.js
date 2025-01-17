// Takes user back to top of the screen

const backToTop = () => window.scrollTo({top: 0, behavior: "smooth"});

// Detects dark-mode

const darkMode = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      // If the user prefers dark mode, apply dark mode styles
      document.documentElement.classList.add('dark'); 
    } else {
      // If the user prefers light mode, apply light mode styles (or remove dark mode class)
      document.documentElement.classList.remove('dark'); 
    }
};
  
// Call the function to initiate
darkMode();
  
// Add an event listener to handle system preference changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', darkMode);