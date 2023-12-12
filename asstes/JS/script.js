// NAV MENU
const btnMenu = document.getElementById('btn-menu');
const navMenu = document.getElementById('nav-menu');

btnMenu.addEventListener('click', () => {
	navMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
	if (!btnMenu.contains(e.target) && !navMenu.contains(e.target)) {
		navMenu.classList.remove('active');
	}
});

// HEADER SHADOW IN SCROLL
window.onscroll = function () {
	const header = document.querySelector('header');
	const fixedNav = header.offsetTop;

	if (window.scrollY > fixedNav) {
		header.classList.add('nav-fixed');
	} else {
		header.classList.remove('nav-fixed');
	}
};
