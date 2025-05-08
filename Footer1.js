let logo = document.getElementById('logo');

// Add an event listener to the button
toggleButton.addEventListener('click', () => {
    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode');

    // Save the user's preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        logo.src = "images/logo doiku white.png";
    } else {
        localStorage.setItem('theme', 'light');
        logo.src = "images/logo doiku 2.png";
    }
});

// Check for saved user preference, if any, on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    logo.src = "images/logo doiku white.png";
} else {
    document.body.classList.remove('dark-mode');
    logo.src = "images/logo doiku 2.png"; // Ensure logo is set for light mode

}
