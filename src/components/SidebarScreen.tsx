'use client'
import Link from 'next/link'
import clsx from 'clsx'

import useSidebarRoutes from '@/hooks/useSidebarRoutes'
import useSidebarOuterLinks from '@/hooks/useSidebarOuterLinks'
import ThemeSwitcher from './ThemeSwitcher'

export default function SidebarMain() {
  const links = useSidebarOuterLinks()
  const routes = useSidebarRoutes()
  return (
    <div>
      <div
        className='
          hidden
          md:flex 
          md:items-center 
          md:justify-between 
          w-[6rem] 
          fixed 
          h-full 
          flex-col 
          py-4 
          border-l-[1px] 
          border-gray-200
          dark:border-gray-600
          mx-auto'
      >
        <div className='space-y-7'>
          <Link
            href='/'
            className=' w-14 h-14 bg-gray-500 rounded-full flex justify-center items-center'
          >
            LOGO
          </Link>
          <div className='flex flex-col space-y-4'>
            {routes.map((route) => (
              <Link
                href={route.url}
                key={route.url}
                className={clsx(``, route.active && 'text-red-800 font-bold')}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
        <div className=' flex flex-col space-y-5'>
          <ThemeSwitcher />
          {/* {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className=' p-2 border-[1px] border-gray-200 rounded-full hover:bg-gray-100'
            >
              <link.logo size={20} />
            </a>
          ))} */}
        </div>
      </div>
    </div>
  )
}
