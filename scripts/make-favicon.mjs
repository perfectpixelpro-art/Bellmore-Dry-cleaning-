// Crops the hanger mark out of the wordmark logo and writes the favicons.
// Run with: npm run favicon
import path from 'node:path'
import sharp from 'sharp'

const ROOT = path.resolve(import.meta.dirname, '..')
const SOURCE = path.join(ROOT, 'assets-source/images/logo.png')

const logo = sharp(SOURCE)
const { width, height } = await logo.metadata()

// The mark sits in the left quarter of the wordmark.
const markWidth = Math.round(width * 0.26)

for (const size of [32, 180, 512]) {
  await sharp(SOURCE)
    .extract({ left: 0, top: 0, width: markWidth, height })
    .resize({
      width: size,
      height: size,
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png()
    .toFile(path.join(ROOT, 'public', size === 180 ? 'apple-touch-icon.png' : `favicon-${size}.png`))
  console.log(`${size}px written`)
}
