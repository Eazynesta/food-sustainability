// JavaScript for IFJAD Landing Page

// Function to scroll to a specific section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Search functionality
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
      const query = searchBar.value.trim();
      if (query) {
          alert(`Searching for: ${query}`); // Placeholder for search functionality
      } else {
          alert('Please enter a search term.');
      }
  }
});
