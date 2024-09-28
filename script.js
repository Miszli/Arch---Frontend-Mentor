const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav__links-mobile')
const navLinks = document.querySelectorAll('.nav__link-mobile')

const nameInput = document.querySelector('.form__form--name')
const emailInput = document.querySelector('.form__form--email')
const messageInput = document.querySelector('.form__form--message')

const errorName = document.querySelector('.error-name')
const errorEmail = document.querySelector('.error-email')
const errorMessage = document.querySelector('.error-message')

const sentEmail = document.querySelector('.form__sent')
const sendBtn = document.querySelector('.form__form--send')

const handleNav = () => {
	nav.classList.toggle('active')
}

const closeNav = () => {
	nav.classList.remove('active')
}

const checkName = () => {
	if (nameInput.value === '') {
		errorName.style.visibility = 'visible'
	} else {
		errorName.style.visibility = 'hidden'
		return true
	}
}

const checkEmail = () => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
	if (emailInput.value !== '' && re.test(emailInput.value)) {
		errorEmail.style.visibility = 'hidden'
		return true
	} else {
		errorEmail.style.visibility = 'visible'
	}
}

const checkMessage = () => {
	if (messageInput.value === '') {
		errorMessage.style.visibility = 'visible'
	} else {
		errorMessage.style.visibility = 'hidden'
		return true
	}
}

const sendMail = () => {
	checkName()
	checkEmail()
	checkMessage()
	if (errorMessage.style.visibility === 'hidden' && errorName.style.visibility === 'hidden' && errorEmail.style.visibility === 'hidden') {
		sentEmail.style.visibility = 'visible'
		nameInput.value = ''
		emailInput.value = ''
		messageInput.value = ''
	}
}

burgerBtn.addEventListener('click', handleNav)
navLinks.forEach(link => {
	link.addEventListener('click', handleNav)
})

sendBtn.addEventListener('click', sendMail)
