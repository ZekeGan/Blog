'use client'
import Image from 'next/image'
import Link from 'next/link'
import _ from 'lodash'
import { Post } from 'contentlayer/generated'

export default function PostBox({ data }: { data: Post }) {
  return (
    <div
      className='
        md:grid 
        md:grid-cols-[auto_20rem] 
        md:h-52 
        w-full
        px-5 
        py-3  
        border-b-[1px] 
      border-gray-200'
    >
      <div className='md:grid md:grid-rows-[9rem_auto]'>
        <Link href={data.url}>
          <h1 className='text-lg font-semibold'>{data.title}</h1>
          <p>{data.description.slice(0, 100) + '...'}</p>
        </Link>
        <div className='flex items-center space-x-3 mt-2'>
          {data.tags.map((tag: string) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className='bg-gray-100 text-sm rounded-full py-1 px-2 hover:bg-gray-200 cursor-pointer'
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      <Link
        href={data.url}
        className='hidden md:block h-[rem] w-[15rem] relative overflow-hidden ml-auto'
      >
        <Image
          src='/images/22.jpg'
          alt=''
          className='object-cover w-full h-auto'
          priority
          width='0'
          height='0'
          sizes='100vw'
        />
      </Link>
    </div>
  )
}
