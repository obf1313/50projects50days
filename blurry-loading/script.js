const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
let int = setInterval(blurring, 30)

function blurring() {
  load++
  if (load > 99) {
    clearInterval(int)
  }
  loadText.innerText = `${load}%`
  // loading 变透明逐渐
  // 1 -> 0
  loadText.style.opacity = scale(load, 0, 100, 1, 0)

  // 背景逐渐变清晰
  // 30 -> 0
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, inMin, inMax, outMin, outMax) => {
  // (1 - 0) * (0 - 1) / (100 - 0) + 1
  // (1 - 0) * (0 - 30) / (100 - 0) + 30
  return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}