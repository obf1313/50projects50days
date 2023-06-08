// 所有 sticky 元素
const stickyList = document.querySelectorAll('.sticky')
const intersectionObserver = new IntersectionObserver(
  entries => {
    // 视野外
    if (entries[0].intersectionRatio <= 0) {
      return
    }
    const target = entries[0].target
    // 其余都不 sticky
    stickyList.forEach(item => {
      if (item.nextSibling !== target) {
        item.className = 'no-sticky'
      } else {
        item.className = 'no-sticky sticky'
      }
    })
  },
  // root 容器元素，默认 document
  { root: document }
)
stickyList.forEach(item => {
  const parent = item.parentNode
  // 给每个 item 都设置个底部元素
  const bottom = document.createElement('div')
  const height = item.getBoundingClientRect().height
  bottom.className = 'bottom'
  bottom.style.top = `calc(100vh - ${height}px)`
  parent.insertBefore(bottom, item.nextSibling)
  intersectionObserver.observe(bottom)
})
