var counter = 0
var gameTime = document.querySelector('#game-time')
var timeValue = gameTime.value
var time = 0
var timer = 100
const gamePlace = document.querySelector('#game')
var button = document.querySelector('#start')

button.addEventListener('click', () => {
    document.querySelector('#time-header').classList.remove('hide')
    document.querySelector('#result-header').classList.add('hide')
    button.classList.add('hide')
    startGame()
})

gameTime.addEventListener('change', () => {
    timeValue = gameTime.value
    if (timeValue < 10) {
        timeValue += '.0'
    }
    document.querySelector('#time-header').classList.remove('hide')
    document.querySelector('#result-header').classList.add('hide')
    document.querySelector('#time').textContent = timeValue
})

function startGame() {
    counter = 0
    gamePlace.style.background = '#fff'
    var time = parseInt(timeValue)
    showSquares()
    game(time)
}

function game(time) {
    var timeout = setTimeout(() => {
        if (time > 0.1) {
            time -= 0.1
            time = time.toFixed(1)
            document.querySelector('#time').textContent = time

            game(time)
        } else {
            time = 0
            document.querySelector('#time-header').classList.add('hide')
            document.querySelector('#result-header').classList.remove('hide')
            document.querySelector('#result').textContent = counter
            gamePlace.innerHTML = ''
            gamePlace.style.background = '#ccc'
            button.classList.remove('hide')
            clearTimeout(timeout)
            return false
        }
    }, timer)

}

gamePlace.addEventListener('click', handleBoxClick)

function handleBoxClick(event) {
    if (event.target.dataset.box) {
        counter++
        showSquares()
    }
}

function showSquares() {
    gamePlace.innerHTML = ''
    var colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    var color = '#'
    for (let q = 0; q < 6; q++) {
        var randColor = getRandom(0,15)
        color += colors[randColor]
    }
    var boxSize = getRandom(30, 100)
    var gameSize = gamePlace.getBoundingClientRect()
    var maxTop = gameSize.height - boxSize
    var maxLeft = gameSize.width - boxSize
    var box = document.createElement('div')

    box.style.width = box.style.height = `${boxSize}px`
    box.style.background = color
    box.style.position = 'absolute'
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')

    gamePlace.insertAdjacentElement('afterbegin', box)
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}