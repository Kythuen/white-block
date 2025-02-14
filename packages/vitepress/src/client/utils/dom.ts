import { ref } from 'vue'

export async function copyToClipboard(text: string) {
  try {
    return navigator.clipboard.writeText(text)
  } catch {
    const element = document.createElement('textarea')
    const previouslyFocusedElement = document.activeElement

    element.value = text

    // Prevent keyboard from showing on mobile
    element.setAttribute('readonly', '')

    element.style.contain = 'strict'
    element.style.position = 'absolute'
    element.style.left = '-9999px'
    element.style.fontSize = '12pt' // Prevent zooming on iOS

    const selection = document.getSelection()
    const originalRange = selection
      ? selection.rangeCount > 0 && selection.getRangeAt(0)
      : null

    document.body.appendChild(element)
    element.select()

    // Explicit selection workaround for iOS
    element.selectionStart = 0
    element.selectionEnd = text.length

    document.execCommand('copy')
    document.body.removeChild(element)

    if (originalRange) {
      selection!.removeAllRanges() // originalRange can't be truthy when selection is falsy
      selection!.addRange(originalRange)
    }

    // Get the focus back on the previously focused element, if any
    if (previouslyFocusedElement) {
      ;(previouslyFocusedElement as HTMLElement).focus()
    }
  }
}

export function getElementBySelector(selector: string | HTMLElement) {
  if (typeof selector === 'string') {
    return document.querySelector(selector)
  }
  return selector instanceof HTMLElement ? selector : null
}

export function clickDelegate(
  e: MouseEvent | any,
  className: string,
  handler: (dataset: any, event?: MouseEvent) => void,
  fallback?: () => void
) {
  const domList = e.path ?? (e.composedPath && e.composedPath())
  const target = domList.find(
    (dom: HTMLElement) => dom.className && dom.className.includes(className)
  )
  if (target) {
    handler(target.dataset, e)
    return
  }
  fallback?.()
}

function serializeHeader(h: Element) {
  let ret = ''
  for (const node of Array.from(h.childNodes)) {
    ret += node.textContent
  }
  return ret.trim()
}
export function getHeaders(type = 'content', aside: any = true) {
  if (!aside) return []
  let min = 1
  let max = 6
  if (Object.prototype.toString.call(aside)) {
    min = aside[0] || 1
    max = aside[1] || 6
  }
  const queryString = `.vp-doc-${type} :where(h1,h2,h3,h4,h5,h6)`
  const headers = Array.from(document.querySelectorAll(queryString))
    .filter(el => {
      const level = Number(el.tagName[1])
      return el.id && el.hasChildNodes() && level >= min && level <= max
    })
    .map(el => {
      const level = Number(el.tagName[1])
      return {
        title: serializeHeader(el),
        link: `#${el.id}`,
        level
      }
    })
  return headers
}

export function useSpecialHeight() {
  const SPECIAL_HEIGHT = ref(window.innerWidth > 1024 ? 128 : 108)
  window.addEventListener('resize', () => {
    SPECIAL_HEIGHT.value = window.innerWidth > 1024 ? 128 : 108
  })
  return SPECIAL_HEIGHT
}
