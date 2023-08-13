'use client'

import clsx from 'clsx'
import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const HomeArticleBox = ({ post }: { post: Post }) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <Link
      href={post.url}
      className=' h-64 bg-gray-300 relative overflow-hidden'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className='
          absolute 
          w-full 
          h-full 
          bg-black 
          z-20 
          bg-opacity-50 
          text-white 
          flex 
          flex-col 
          justify-between 
          p-4 '
      >
        <div>{format(parseISO(post.date), 'yyyy/MM/dd')}</div>
        <div className='border-b-[1px] border-white w-full mb-5 text-lg font-semibold'>
          {post.title}
        </div>
      </div>
      <Image
        src='/images/22.jpg'
        fill
        alt=''
        className={clsx('object-cover transition', isHover && 'scale-110')}
      />
    </Link>
  )
}

export default HomeArticleBox
