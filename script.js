function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('nav');
    const closeIcon = document.querySelector('.menu-toggle .close-icon');

    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    closeIcon.classList.toggle('active'); // Toggle the "X" icon
}
