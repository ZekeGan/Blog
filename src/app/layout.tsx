import SidebarScreen from '@/components/SidebarScreen'
import SidebarMobile from '@/components/SidebarMobile'
import '@/styles/globals.scss'
import '@/styles/prism-dracula.css'
import '@/styles/prism-plus.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/NextThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog',
  description: "Zeke's Blog",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider attribute='class'>
          <div className='md:grid md:grid-cols-[auto_6rem]'>
            <SidebarMobile />
            <div className='flex justify-center max-w-full'>{children}</div>
            <SidebarScreen />
          </div>
          <div id='portal' />
        </ThemeProvider>
      </body>
    </html>
  )
}
