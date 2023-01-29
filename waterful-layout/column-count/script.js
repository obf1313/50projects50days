const initGoods = num => {
  const heightRange = {
    min: 150,
    max: 300,
  }
  const shapeList = []
  for (let i = 0; i < num; i++) {
    const height = Math.random() * heightRange.min + (heightRange.max - heightRange.min)
    shapeList.push(height)
  }
  return shapeList
}

const renderGoods = () => {
  const shapeList = initGoods(20)
  const container = document.querySelector('.container')
  console.log('container', container)
  shapeList.forEach((item, index) => {
    const ele = document.createElement('div')
    ele.className = 'box'
    ele.style.width = '100%'
    ele.style.height = `${item}px`
    ele.innerText = index
    container.appendChild(ele)
  })
}

renderGoods()
