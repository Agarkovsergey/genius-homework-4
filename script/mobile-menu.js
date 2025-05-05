const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const toggleBtnOpen = () => menuBtnOpen.classList.toggle('is-open');
const toggleBtnClose = () => menuBtnClose.classList.toggle('is-open');
const handleMenuClick = () => {
  toggleMenu();
  toggleBtnOpen();
  toggleBtnClose();
};
const disableScroll = () => document.body.classList.toggle('is-scroll-disabled');

menuBtnOpen.addEventListener('click', handleMenuClick);
menuBtnClose.addEventListener('click', handleMenuClick);

menuBtnOpen.addEventListener('click', disableScroll);
menuBtnClose.addEventListener('click', disableScroll);
