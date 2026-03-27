import { Poppins, Cinzel } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-poppins'
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel'
})

export const metadata = {
  title: 'New Brand Launch Countdown',
  description: 'Coming Soon - June 1, 2026',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${cinzel.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
