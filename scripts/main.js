document.addEventListener('shown.bs.dropdown', function (e) {
    const toggle = e.relatedTarget;
    const menu = toggle.closest('.dropdown').querySelector('.dropdown-menu');
    const header = document.getElementById('header');

    const headerRect = header.getBoundingClientRect();
    const toggleRect = toggle.getBoundingClientRect();
    const navItem = toggle.closest('.nav-item');
    const isLast = !navItem.nextElementSibling;

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


    const arrow = toggle.querySelector('.arrow');
    if (arrow) arrow.innerText = "\u{2191}"; 
});

document.addEventListener('hidden.bs.dropdown', function (e) {
    const toggle = e.relatedTarget;
    if (!toggle) return;
    
    const menu = toggle.closest('.dropdown')?.querySelector('.dropdown-menu');
    if (menu) {
        menu.style.position = '';
        menu.style.top = '';
        menu.style.left = '';
        menu.style.right = '';
        menu.style.transform = '';
    }

    const arrow = toggle.querySelector('.arrow');
    if (arrow) arrow.innerText = "\u{2193}";
});