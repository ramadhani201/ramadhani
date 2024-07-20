// Toggle class active untuk daftar menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika daftar menu di klik
document.querySelector('#daftar-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik di luar elemen
const daftar = document.querySelector('#daftar-menu');


document.addEventListener('click', function (e) {
  if (!daftar.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};
