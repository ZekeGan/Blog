'use client'
import { useMemo } from 'react'
import Link from 'next/link'
import _ from 'lodash'

import { allPosts } from 'contentlayer/generated'

const Sidebar = () => {
  const allTags = useMemo(() => {
    return _.sortBy(_.uniq(_.flatMap(allPosts, 'tags')))
  }, [])

  return (
    <aside className=' col-start-1 row-start-2 w-full flex justify-center'>
      <div className='flex flex-col items-center w-32 space-y-2'>
        <h1 className='border-b-[1px] border-gray-200 text-xl font-bold w-full text-center'>
          Tags
        </h1>
        <div className='flex space-x-2 flex-wrap'>
          {allTags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className='underline underline-offset-1 hover:text-gray-700 py-1'
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
