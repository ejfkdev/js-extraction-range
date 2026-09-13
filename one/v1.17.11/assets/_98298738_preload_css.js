
const CSS_TIMEOUT = 1000
const cssUrls = []

// Global cache for loaded CSS - avoids DOM queries and tracks across navigations
const loaded = (window.__oneLoadedCSS ||= new Set())

// Prefetch CSS without applying - called on link hover
export function prefetchCSS() {
  cssUrls.forEach(href => {
    if (loaded.has(href)) return
    if (document.querySelector(`link[href="${href}"]`)) return
    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.as = 'style'
    link.href = href
    document.head.appendChild(link)
  })
}

// Inject CSS to apply styles - called on actual navigation
export function injectCSS() {
  return Promise.all(cssUrls.map(href => {
    // Skip if already loaded
    if (loaded.has(href)) return Promise.resolve()
    // Remove any prefetch link for this href
    const prefetchLink = document.querySelector(`link[rel="prefetch"][href="${href}"]`)
    if (prefetchLink) prefetchLink.remove()
    // Skip if stylesheet already exists in DOM
    if (document.querySelector(`link[rel="stylesheet"][href="${href}"]`)) {
      loaded.add(href)
      return Promise.resolve()
    }
    return new Promise(resolve => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      const timeoutId = setTimeout(() => {
        console.warn('[one] CSS load timeout:', href)
        loaded.add(href)
        resolve()
      }, CSS_TIMEOUT)
      link.onload = link.onerror = () => {
        clearTimeout(timeoutId)
        loaded.add(href)
        resolve()
      }
      document.head.appendChild(link)
    })
  }))
}

// For backwards compatibility, also prefetch on import
prefetchCSS()
