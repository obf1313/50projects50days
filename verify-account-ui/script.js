const codes = document.querySelectorAll('.code')
codes[0].focus()
codes.forEach((code, index) => {
  code.addEventListener('keydown', e => {
    if (e.key >= 0 && e.key <= 9) {
      // 下一次点击现将上一次的置为空（我猜我懂了），应该就是 keydown 事件会在 value 发生改变之前调用
      codes[index].value = ''
      if (index < codes.length - 1) {
        setTimeout(() => codes[index + 1].focus(), 10)
      }
    } else if (e.key === 'Backspace') {
      if (index > 0) {
        setTimeout(() => codes[index - 1].focus(), 10)
      }
    }
  })
})
