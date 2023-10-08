import { allPosts, Post } from 'contentlayer/generated'
import Image from 'next/image'
import PostBody from '@/components/blog/postBody/index'
import PostTitle from '@/components/blog/PostTitle'
import CategoryList from '@/components/blog/CategoryList'
import { FC } from 'react'

type PostLayoutProps = { params: { slug: string } }

// static data
export const generateStaticParams = async () => {
  return allPosts.map((post: Post) => ({ slug: post._raw.flattenedPath }))
}

export const generateMetadata = ({ params }: PostLayoutProps) => {
  const post = allPosts.find((post: Post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

// generate static page from static data
export default async function PostLayout({ params }: PostLayoutProps) {
  const post = allPosts.find((post: Post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <div className='w-full py-10 grid grid-cols-[20%_auto_20%] '>
      <article className='col-start-2'>
        <div className='mb-8 px-10 py-3 w-full border-b-2 border-gray-200 '>
          <PostTitle post={post} />
        </div>
        <div className='px-10'>
          <div className=' bg-gray-300'>
            <Image
              src='/images/22.jpg'
              alt=''
              className='object-cover h-full w-full'
              priority
              width='0'
              height='0'
              sizes='100vw'
            />
          </div>
          <PostBody post={post} />
        </div>
      </article>
      <CategoryList />
    </div>
  )
}
