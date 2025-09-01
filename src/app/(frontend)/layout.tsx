import React from 'react'
import Navbar from './navigation'

export const metadata = {
  description: 'Skin Era',
  title: 'Skin Era',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body>
        <Navbar />
        {children}</body>
    </html>
  )
}