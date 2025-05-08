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