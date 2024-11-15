// script.js
const button = document.querySelector('#sidebar-toggle'); // Button to toggle sidebar
const wrapper = document.querySelector('#wrapper'); // Main wrapper for the sidebar

button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default action
    wrapper.classList.toggle('toggled'); // Toggle the 'toggled' class on the wrapper
});