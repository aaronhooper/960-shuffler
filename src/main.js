const preElement = document.getElementById('output')
const buttonElement = document.getElementById('button')
const getNewPositionWithEmoji = () => toEmoji(getPosition(getRandomId())).join('')

preElement.innerHTML = getNewPositionWithEmoji()

buttonElement.addEventListener('click', (e) => {
    preElement.innerHTML = getNewPositionWithEmoji()
})