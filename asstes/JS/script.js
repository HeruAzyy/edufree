// NAVBAR FIXED
window.onscroll = () => {
	const header = document.querySelector('header');
	const fixedNav = header.offsetTop;

	if (window.scrollY > fixedNav) {
		header.classList.add('nav-fixed');
	} else {
		header.classList.remove('nav-fixed');
	}
};

// NAV MENU
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
	navMenu.classList.toggle('hidden');
});
