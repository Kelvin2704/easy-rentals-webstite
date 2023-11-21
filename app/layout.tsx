import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import getCurrentUser from './actions/getCurrentUser'

import Navbar from './components/navbar/Navbar'

import ClientOnly from './components/ClientOnly'
import ToasterProvider from './providers/ToasterProvider'

import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import RentModal from './components/modals/RentModal'
import SearchModal from './components/modals/SearchModal'


const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Easy Rentals',
  description: 'Rent Smart, Live Easy',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal/>
          <RegisterModal />
          <RentModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
          <div className='pb-20 pt-28'>
            {children}
          </div>
        </ClientOnly>
      </body>
    </html>
  )
}
