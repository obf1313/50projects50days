const body = document.body
const sildes = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++
  if (activeSlide > sildes.length - 1) {
    activeSlide = 0
  }
  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--
  if (activeSlide < 0) {
    activeSlide = sildes.length - 1
  }
  setBgToBody()
  setActiveSlide()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = sildes[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  sildes.forEach((slide) => slide.classList.remove('active'))
  sildes[activeSlide].classList.add('active')
}