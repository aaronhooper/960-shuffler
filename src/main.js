const getNewPositionWithEmoji = () => toEmoji(new Position(getRandomId()).getPieceArray()).join('')

const preElement = document.getElementById('output')
const buttonElement = document.getElementById('button')
preElement.innerHTML = getNewPositionWithEmoji()

buttonElement.addEventListener('click', (e) => {
    preElement.innerHTML = getNewPositionWithEmoji()
})