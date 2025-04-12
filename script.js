  function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('menu-open-icon');
    const closeIcon = document.getElementById('menu-close-icon');

    const isOpen = !menu.classList.contains('-translate-x-full');

    if (isOpen) {
      menu.classList.add('-translate-x-full');
      openIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    } else {
      menu.classList.remove('-translate-x-full');
      openIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }
  }

