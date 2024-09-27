const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav__links-mobile')
const navLinks = document.querySelectorAll('.nav__link-mobile')

const handleNav = () => {
	nav.classList.toggle('active')
}

const closeNav = () => {
	nav.classList.remove('active')
}

burgerBtn.addEventListener('click', handleNav)
navLinks.forEach(link => {
	link.addEventListener('click', handleNav)
})

