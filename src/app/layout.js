import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Service Provider',
  description: 'Professional service provider website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-100">
      <body className={`${inter.className} d-flex flex-column h-100`}>
        <div className="flex-shrink-0">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
