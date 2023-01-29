const initGoods = num => {
  const heightRange = {
    min: 150,
    max: 300,
  }
  const shapeList = []
  for (let i = 0; i < num; i++) {
    const height = Math.random() * heightRange.min + (heightRange.max - heightRange.min)
    shapeList.push([i, height])
  }
  return shapeList
}

const renderGoods = () => {
  const shapeList = initGoods(20)
  const columnList1 = []
  const columnList2 = []
  const column1 = document.querySelector('.column1')
  const column2 = document.querySelector('.column2')
  shapeList.forEach((item, index) => {
    if (index % 2 === 0) {
      columnList1.push(item)
    } else {
      columnList2.push(item)
    }
  })
  columnList1.forEach(item => {
    const ele = document.createElement('div')
    ele.className = 'box'
    ele.style.width = '100%'
    ele.style.height = `${item[1]}px`
    ele.innerText = item[0]
    column1.appendChild(ele)
  })
  columnList2.forEach(item => {
    const ele = document.createElement('div')
    ele.className = 'box'
    ele.style.width = '100%'
    ele.style.height = `${item[1]}px`
    ele.innerText = item[0]
    column2.appendChild(ele)
  })
}

renderGoods()
