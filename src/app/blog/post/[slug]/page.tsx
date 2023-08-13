import { allPosts, Post } from 'contentlayer/generated'
import Image from 'next/image'
import PostBody from '@/components/blog/postBody/index'
import PostTitle from '@/components/blog/PostTitle'

// static data
export const generateStaticParams = async () => {
  return allPosts.map((post: Post) => ({ slug: post._raw.flattenedPath }))
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post: Post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

// generate static page from static data
export default async function PostLayout({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post: Post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <article className='w-full py-10 grid grid-cols-[20%_auto_20%] grid-rows-[8rem_25rem_auto]'>
      <PostTitle post={post} className='mb-8 w-[60%] col-start-2 row-start-1' />
      <div className='col-start-1 col-end-3 row-start-2 row-end-3 bg-gray-300'>
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
      <div className=' row-start-3 col-start-3'>目錄</div>
      <PostBody post={post} className='row-start-3 col-start-2 py-5' />
    </article>
  )
}
