// 为 Nuxt 3 创建自定义快捷键指令

/**
 * 简单的键盘快捷键
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('shortkey', {
    mounted(el, binding, vnode) {
      const keyHandler = (e) => {
        // 如果是输入框或文本区域，不触发快捷键
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
          return
        }
        
        const keys = binding.value
        const pressedKeys = []
        
        if (e.ctrlKey) pressedKeys.push('ctrl')
        if (e.altKey) pressedKeys.push('alt')
        if (e.shiftKey) pressedKeys.push('shift')
        if (e.metaKey) pressedKeys.push('meta') // Command 键
        
        // 添加实际按下的键
        if (e.key && !['Control', 'Alt', 'Shift', 'Meta'].includes(e.key)) {
          pressedKeys.push(e.key.toLowerCase())
        }
        
        // 检查是否所有键都匹配
        const allKeysMatch = keys.length === pressedKeys.length && 
          keys.every(k => pressedKeys.includes(k.toLowerCase()))
        
        if (allKeysMatch) {
          // 触发绑定的事件处理函数
          const eventName = 'shortkey'
          const event = new Event(eventName)
          el.dispatchEvent(event)
          
          // 阻止默认行为
          e.preventDefault()
        }
      }
      
      // 添加事件监听
      document.addEventListener('keydown', keyHandler)
      
      // 存储处理函数以便在 unmounted 中移除
      el._keyHandler = keyHandler
    },
    unmounted(el) {
      // 移除事件监听
      document.removeEventListener('keydown', el._keyHandler)
      delete el._keyHandler
    }
  })
})
