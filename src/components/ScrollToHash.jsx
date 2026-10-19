import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Routing swaps the page without moving the viewport, so handle both cases
// ourselves: jump to the hash target, or back to the top when there isn't one.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}
