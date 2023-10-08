'use client'
import Link from 'next/link'

import useSidebarRoutes from '@/hooks/useSidebarRoutes'
import useSidebarOuterLinks from '@/hooks/useSidebarOuterLinks'
import ThemeSwitcher from './ThemeSwitcher'
import SidebarDropDown from './SidebarDropDown'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

import { useState } from 'react'

export default function SidebarMobile() {
  const [openBar, setOpenBar] = useState(false)
  const links = useSidebarOuterLinks()
  const routes = useSidebarRoutes()
  return (
    <div className='md:hidden'>
      <div
        className='
          flex justify-between
          h-full 
          border-b-[1px] 
          border-gray-200
          dark:border-gray-600
          mx-auto px-2'
      >
        <Link
          href='/'
          className=' w-14 h-14 bg-gray-500 rounded-full flex justify-center items-center'
        >
          LOGO
        </Link>
        <div className='flex items-center'>
          {openBar ? (
            <button onClick={() => setOpenBar(false)}>
              <AiOutlineClose size={20} />
            </button>
          ) : (
            <button onClick={() => setOpenBar(true)}>
              <FaBars size={20} />
            </button>
          )}
        </div>
      </div>
      <SidebarDropDown open={openBar} onClose={() => setOpenBar(false)} />
    </div>
  )
}
