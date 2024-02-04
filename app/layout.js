import localFont from 'next/font/local'
import './globals.css'
import Navbar from './components/Navbar/Navbar.jsx'

const Telegraf = localFont({
  src: [
    {
      path: '../fonts/Telegraf/PPTelegraf-UltraLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Telegraf/PPTelegraf-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Telegraf/PPTelegraf-UltraBold.otf',
      weight: '600',
      style: 'normal',
    }
  ],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={Telegraf.className}>
      <body className={Telegraf.className}>
        <nav className="mainNavbar">
          <div className='navbarWrapper'>
            <Navbar />
          </div>
        </nav>
        <div className='mainContent'>
          <div className='mainContWrapper'>{children}</div>
        </div>
      </body>
    </html>
  )
}
