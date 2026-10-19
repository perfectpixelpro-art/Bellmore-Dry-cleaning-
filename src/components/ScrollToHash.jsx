import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Sticky header height (h-24) plus a little breathing room.
const HEADER_OFFSET = 112
const CORRECT_FOR_MS = 2000
const STEP_MS = 100

// Routing does not move the viewport, so handle it here: scroll to the hash
// target, or back to the top when there isn't one.
//
// Scrolling once is not enough. Images further down the page have no height
// until they load, so the target keeps moving for a moment afterwards and a
// single scroll lands short. Re-align on a short timer until the layout
// settles, and stop early if the reader starts scrolling themselves.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return
    }

    let timer
    let stopped = false
    const deadline = Date.now() + CORRECT_FOR_MS

    const stop = () => {
      stopped = true
      clearTimeout(timer)
    }

    function align(smooth) {
      if (stopped) return

      const target = document.querySelector(hash)
      if (target) {
        const wanted = Math.max(
          0,
          Math.round(target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET),
        )
        if (Math.abs(window.scrollY - wanted) > 2) {
          window.scrollTo({ top: wanted, behavior: smooth ? 'smooth' : 'auto' })
        }
      }

      if (Date.now() < deadline) timer = setTimeout(() => align(false), STEP_MS)
    }

    align(true)
    window.addEventListener('wheel', stop, { passive: true, once: true })
    window.addEventListener('touchstart', stop, { passive: true, once: true })

    return () => {
      stop()
      window.removeEventListener('wheel', stop)
      window.removeEventListener('touchstart', stop)
    }
  }, [pathname, hash])

  return null
}
