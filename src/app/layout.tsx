import SidebarMain from '@/components/SidebarMain'
import '@/styles/globals.scss'
import '@/styles/prism-dracula.css'
import '@/styles/prism-plus.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog',
  description: "Zeke's Blog",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='grid grid-cols-[auto_6rem]'>
          <div className='flex justify-center max-w-full'>{children}</div>
          <SidebarMain />
        </div>
      </body>
    </html>
  )
}
