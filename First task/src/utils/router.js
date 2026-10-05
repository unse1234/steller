import { useEffect, useSyncExternalStore } from 'react'

/*
 * A minimal client-side router for the site's two pages. Clicks on links to a
 * known route update the URL with the History API instead of reloading the
 * document; every other link (external, unknown paths, new-tab clicks) keeps
 * the browser's default behaviour.
 */

const ROUTES = new Set(['/', '/about'])
const NAVIGATE_EVENT = 'app:navigate'

export const normalizePath = (path) => path.replace(/\/$/, '') || '/'

const getPathname = () => normalizePath(window.location.pathname)

const subscribe = (onChange) => {
  window.addEventListener('popstate', onChange)
  window.addEventListener(NAVIGATE_EVENT, onChange)
  return () => {
    window.removeEventListener('popstate', onChange)
    window.removeEventListener(NAVIGATE_EVENT, onChange)
  }
}

/** The current pathname, normalised without a trailing slash. */
export const usePathname = () => useSyncExternalStore(subscribe, getPathname)

/** Scrolls to the URL's hash target, or to the top when there is none. */
const scrollToHash = (hash) => {
  const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)))
  if (target) target.scrollIntoView()
  else window.scrollTo(0, 0)
}

export const navigate = (url) => {
  window.history.pushState(null, '', url.pathname + url.search + url.hash)
  window.dispatchEvent(new Event(NAVIGATE_EVENT))
  // Wait for the new page to render before looking up the hash target.
  requestAnimationFrame(() => scrollToHash(url.hash))
}

const handleClick = (event) => {
  if (event.defaultPrevented || event.button !== 0) return
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

  const link = event.target.closest?.('a[href]')
  if (!link || (link.target && link.target !== '_self') || link.hasAttribute('download')) return

  const url = new URL(link.href, window.location.href)
  if (url.origin !== window.location.origin) return

  const path = normalizePath(url.pathname)
  if (!ROUTES.has(path)) return
  // Same page with a hash: the browser already scrolls without reloading.
  if (path === getPathname() && url.hash) return

  event.preventDefault()
  navigate(url)
}

/** Intercepts in-app link clicks for the lifetime of the calling component. */
export const useLinkInterception = () => {
  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
}
