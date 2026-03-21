document.addEventListener('shown.bs.dropdown', function (e) {
    const toggle = e.relatedTarget;
    const menu   = toggle.closest('.dropdown').querySelector('.dropdown-menu');
    const header = document.getElementById('header');

    const toggleLeft = toggle.getBoundingClientRect().left;
    const headerLeft = header.getBoundingClientRect().left;

    // last-child uses right-alignment — skip it
    const navItem = toggle.closest('.nav-item');
    const isLast  = !navItem.nextElementSibling;
    if (!isLast) {
        menu.style.left = (toggleLeft - headerLeft) + 'px';
    }
});

// Clean up inline style when closed so re-opens recalculate cleanly
document.addEventListener('hidden.bs.dropdown', function (e) {
    const menu = e.relatedTarget?.closest('.dropdown')?.querySelector('.dropdown-menu');
    if (menu) menu.style.left = '';
});