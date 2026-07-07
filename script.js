const navItems = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');

navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Remove active class from all nav items
        navItems.forEach(nav => nav.classList.remove('active'));
        // Add active class to the clicked nav item
        item.classList.add('active');
        // Hide all pages
        pages.forEach(page => page.classList.remove('active'));
        // Show the corresponding page
        pages[index].classList.add('active');
    });
});