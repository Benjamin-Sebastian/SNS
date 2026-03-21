document.addEventListener('shown.bs.dropdown', function (e) {
    const toggle = e.relatedTarget;
    const menu = toggle.closest('.dropdown').querySelector('.dropdown-menu');
    const header = document.getElementById('header');

    const headerRect = header.getBoundingClientRect();
    const toggleRect = toggle.getBoundingClientRect();
    const navItem = toggle.closest('.nav-item');
    const isLast = !navItem.nextElementSibling;

    // position: fixed escapes all CSS contexts; coordinates are viewport-relative
    menu.style.position = 'fixed';
    menu.style.top = headerRect.bottom + 'px';
    menu.style.transform = 'none';

    if (isLast) {
        menu.style.left = 'auto';
        menu.style.right = (window.innerWidth - toggleRect.right) + 'px';
    } else {
        menu.style.left = toggleRect.left + 'px';
        menu.style.right = 'auto';
    }
    var arrows = document.getElementsByClassName("arrow");
    for (var i = 0; i < arrows.length; i++) {
        arrows[i].innerText = "&uarr;";
    }
});

document.addEventListener('hidden.bs.dropdown', function (e) {
    const toggle = e.relatedTarget;
    if (!toggle) return;
    const menu = toggle.closest('.dropdown')?.querySelector('.dropdown-menu');
    if (!menu) return;

    // Reset so Popper starts clean on next open
    menu.style.position = '';
    menu.style.top = '';
    menu.style.left = '';
    menu.style.right = '';
    menu.style.transform = '';
    var arrows = document.getElementsByClassName("arrow");
    for (var i = 0; i < arrows.length; i++) {
        arrows[i].innerText = "&darr;";
    }
});