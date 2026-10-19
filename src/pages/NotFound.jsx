import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'

export default function NotFound() {
  return (
    <>
      <PageMeta
        title="Page not found"
        description="The page you were looking for could not be found."
      />
      <main className="mx-auto flex max-w-[1920px] flex-col items-start px-5 py-20 sm:px-8 lg:px-[60px] lg:py-28 xl:px-[120px] 2xl:px-[250px]">
      <p className="text-[14px] font-semibold uppercase tracking-wide text-brand">404</p>
      <h1 className="mt-3 text-[28px] font-extrabold tracking-[-0.02em] text-ink sm:text-[34px]">
        We couldn't find that page
      </h1>
      <p className="mt-4 max-w-lg text-[15px] leading-7 text-muted">
        The link may be out of date. Head back to the homepage, or call us on{' '}
        <a href="tel:+15166561221" className="font-semibold text-brand hover:underline">
          (516) 656-1221
        </a>{' '}
        and we'll help.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        Back to homepage
      </Link>
      </main>
    </>
  )
}
