const header = document.querySelector('#header');

function setHeaderHeight() {
  document.documentElement.style.setProperty(
    '--header-height',
    `${header.offsetHeight}px`
  );
}

setHeaderHeight();
window.addEventListener('resize', setHeaderHeight);