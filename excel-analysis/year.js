const XLSX = require('xlsx')

const workBook = XLSX.readFile('./excel/year.xlsx')
const sheetNames = workBook.SheetNames

const sheet1 = workBook.Sheets[sheetNames[0]]
const map = new Map()

for (const key in sheet1) {
  if (Object.hasOwnProperty.call(sheet1, key)) {
    const item = sheet1[key]
    const index = Number(key.substring(1))
    if (index > 1) {
      if (key.startsWith('A')) {
        const name = item.v.substring(1, item.v.length - 1)
        if (map.get(index)) {
          map.set(index, {
            ...map.get(index),
            name,
          })
        } else {
          map.set(index, {
            name,
          })
        }
      } else if (key.startsWith('B')) {
        if (map.get(index)) {
          map.set(index, {
            ...map.get(index),
            author: item.v,
          })
        } else {
          map.set(index, {
            author: item.v,
          })
        }
      } else if (key.startsWith('C')) {
        if (map.get(index)) {
          map.set(index, {
            ...map.get(index),
            publishName: item.v,
          })
        } else {
          map.set(index, {
            publishName: item.v,
          })
        }
      } else if (key.startsWith('D')) {
        if (map.get(index)) {
          map.set(index, {
            ...map.get(index),
            introduce: item.v,
          })
        } else {
          map.set(index, {
            introduce: item.v,
          })
        }
      } else if (key.startsWith('E')) {
        if (map.get(index)) {
          map.set(index, {
            ...map.get(index),
            spuCode: item.v,
          })
        } else {
          map.set(index, {
            spuCode: item.v,
          })
        }
      }
    }
  }
}

const returnList = []
map.forEach(value => {
  returnList.push({
    ...value,
    coverUrl: `require("./images/books/years/${value.name}.png")`,
  })
})

console.log('returnList', returnList)
