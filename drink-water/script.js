const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
  // 点击最后一个，且已选择
  if (idx === 7 && smallCups[idx].classList.contains('full')) {
    idx--
  }
  // 当前已选择且下一个兄弟节点未选择
  else if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    idx--
  }
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })
  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length
  // 没有装水
  if (fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  }
  // 装水了
  else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${fullCups / totalCups * 330}px`
    percentage.innerText = `${fullCups / totalCups * 100}%`
  }
  // 装满了
  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  }
  // 未装满
  else {
    remained.style.visibility = 'visible'
    liters.innerText = `${2 - (250 * fullCups / 1000)}L`
  }
}