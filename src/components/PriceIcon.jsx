import Img from './Img'

// Thin line icons for the price rows. Replace with the supplied PNGs by
// swapping the <svg> for an <Img> once the artwork lands in /assets/icons.
const PATHS = {
  shirt: 'M8 3 5 5 3 9l2.5 1.5M16 3l3 2 2 4-2.5 1.5M8 3h8M8 3c0 2 1.8 3 4 3s4-1 4-3M5.5 10.5V21h13V10.5',
  pants: 'M7 3h10v4l-1 14h-3l-1-9-1 9H8L7 7V3Zm0 4h10',
  skirt: 'M8.5 3h7l.5 4 3 10H5l3-10 .5-4Zm-.5 4h8',
  suit: 'M7 3 4 5l-1 16h18L20 5l-3-2m-10 0 5 5 5-5M7 3h10M12 8v13',
  dress: 'M9 3h6l-.8 4L19 21H5l4.8-14L9 3Zm0 0c0 1.5 1.3 2.5 3 2.5S15 4.5 15 3M8.2 10h7.6',
  coat: 'M8 3 4 5.5 2.5 12l2.5.8M16 3l4 2.5 1.5 6.5-2.5.8M8 3h8M8 3l4 4 4-4M5.5 11.5V21h13v-9.5M12 7v14',
  hemPants: 'M7 3h10v3l-1 11h-3l-1-7-1 7H8L7 6V3Zm-2 18h14M7 6h10',
  comforter: 'M3 8.5c0-1.4 1.1-2.5 2.5-2.5h13A2.5 2.5 0 0 1 21 8.5V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5Zm0 3h18M6 6V4m4 2V4m4 2V4m4 2V4',
  gown: 'M11 2h2v4m-1 0c-2 0-3.2 1.5-3.6 3.5L5 21h14l-3.4-11.5C15.2 7.5 14 6 12 6Zm-3 8h8',
  hemDress: 'M9 3h6l-.8 4L19 19H5l4.8-12L9 3Zm0 0c0 1.5 1.3 2.5 3 2.5S15 4.5 15 3M4 22h16',
  sleeve: 'M9 3 5 5.5 3 11l3 1.5M15 3l4 2.5 2 5.5-3 1.5M9 3h6M9 3v18h6V3M6 12.5V21m12-8.5V21',
  jacket: 'M8 3 4 5.5 3 12l2.5 1M16 3l4 2.5 1 6.5-2.5 1M8 3h8M8 3l4 4 4-4M5.5 13V21h13v-8M12 7v14',
}

export default function PriceIcon({ name, className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  )
}
