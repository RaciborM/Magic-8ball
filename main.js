const input = document.querySelector('input')
const ball = document.querySelector('img')
const errorText = document.querySelector('.error')
const answearMsg = document.querySelector('.answear')

const respones = [
	'Tak',
	'Nie',
	'Nie chcesz znać odpowiedzi na to pytanie',
	'może',
	'nie jestem pewien',
	'oczywiście',
	'w żadnym wypadku',
]

const check = () => {
	ball.classList.remove('shake-anim')
	if (input.value === '') {
		errorText.textContent = 'Zadaj pytanie!'
		answearMsg.textContent = ''
	} else if (input.value.includes('?') === false) {
		errorText.textContent = 'Pytanie musi mieć pytajnik!'
		answearMsg.textContent = ''
	} else {
		errorText.textContent = ''
		answear()
	}
}

const answear = () => {
	const item = Math.floor(Math.random() * respones.length)
	answearMsg.innerHTML = `<span>Odpowiedź: </span> ${respones[item]}`
}

ball.addEventListener('click', e => {
	ball.classList.add('shake-anim')
	setTimeout(check, 1000)
})
