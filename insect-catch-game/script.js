const screens = document.querySelectorAll('.screen')
const chooseInsectBtns = document.querySelectorAll('.choose-insect-btn')
const startBtn = document.getElementById('start-btn')
const gameContainer = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')

let seconds = 0
let score = 0
let selectedInsect = {}

startBtn.addEventListener('click', () => screens[0].classList.add('up'))
chooseInsectBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img')
    const src = img.getAttribute('src')
    const alt = img.getAttribute('alt')
    selectedInsect = {
      src,
      alt,
    }
    screens[1].classList.add('up')
    setTimeout(createInsect, 1000)
    console.log('startGame')
    startGame()
  })
})

// 开始游戏
function startGame() {
  setInterval(increaseTime, 1000)
}

// 时间计算
function increaseTime() {
  let m = Math.floor(seconds / 60)
  let s = seconds % 60
  m = Number(m.toString().padStart(2, '0'))
  s = Number(s.toString().padStart(2, '0'))
  seconds++
}

// 添加昆虫
function createInsect() {
  const insect = document.createElement('div')
  insect.classList.add('insect')
  const { x, y } = getRandomLocation()
  insect.style.top = `${y}px`
  insect.style.left = `${x}px`
  insect.innerHTML = `<img src="${selectedInsect.src}" alt="${selectedInsect.alt}" style="transform: rotate(${
    Math.random() * 360
  }deg)" />`
  insect.addEventListener('click', catchInsect)
  gameContainer.appendChild(insect)
}

// 获取随机位置
function getRandomLocation() {
  const width = window.innerWidth
  const height = window.innerHeight
  const x = Math.random() * (width - 200) + 100
  const y = Math.random() * (height - 200) + 100
  return { x, y }
}

// 选中昆虫
function catchInsect() {
  increaseScore()
  this.classList.add('caught')
  setTimeout(() => this.remove(), 2000)
  addInsects()
}

function addInsects() {
  setTimeout(createInsect, 1000)
  setTimeout(createInsect, 1500)
}

function increaseScore() {
  score++
  if (score > 19) {
    message.classList.add('visible')
  }
  scoreEl.innerHTML = `Score: ${score}`
}
