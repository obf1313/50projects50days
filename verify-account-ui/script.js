const codes = document.querySelectorAll('.code')
codes[0].focus()
codes.forEach((code, index) => {
  code.addEventListener('keydown', e => {
    if (e.key >= 0 && e.key <= 9) {
      // 好神奇，这句代码加了就不会一个 input 出现多个了，没理解
      codes[index].value = ''
      setTimeout(() => codes[index + 1].focus(), 10)
    } else if (e.key === 'Backspace') {
      if (index > 0) {
        setTimeout(() => codes[index - 1].focus(), 10)
      }
    }
  })
})
