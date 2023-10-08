'use client'

import useSidebarRoutes from '@/hooks/useSidebarRoutes'
import { Menu, Transition } from '@headlessui/react'
import clsx from 'clsx'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export default function SidebarDropDown({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const routes = useSidebarRoutes()

  return (
    <Transition as={Fragment} show={open}>
      <div className='fixed z-20  w-full h-full'>
        {/* <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='absolute inset-0 bg-black bg-opacity-10' />
        </Transition.Child> */}
        <Transition.Child
          as={Fragment}
          enter='transition ease-out duration-200 '
          enterFrom='transform translate-x-full  '
          enterTo='transform translate-x-0'
          leave='transition ease-in duration-75'
          leaveFrom='transform translate-x-0'
          leaveTo='transform translate-x-full'
        >
          <div
            className='
              w-full
              h-full
              bg-white
              focus:outline-none'
          >
            <div className='flex flex-col border-b-[1px] border-gray-100'>
              {routes.map((route) => (
                <Link
                  key={route.url}
                  href={route.url}
                  className={clsx(
                    `hover:bg-gray-100 py-2`,
                    route.active && 'text-red-800 font-bold',
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </div>
            <div className='space-y-2 border-b-[1px] border-gray-100 py-2'>
              <div>BTN1</div>
              <div>BTN2</div>
              <div>BTN3</div>
            </div>
          </div>
        </Transition.Child>
      </div>
    </Transition>
  )
}
