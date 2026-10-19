import { useEffect } from 'react'

const SUFFIX = 'Bellmore Dry Cleaner'

// Sets the document title and meta description per route. A plain effect is
// enough here - there is no server render to coordinate with.
export default function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title.includes(SUFFIX) ? title : `${title} | ${SUFFIX}`

    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', description)
  }, [title, description])

  return null
}
