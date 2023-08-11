import { format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import Image from 'next/image'

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
    <article className='w-[60%]'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold'>{post.title}</h1>
        <time dateTime={post.date} className='mb-1 text-xs text-gray-600'>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <Image
        src='/images/22.jpg'
        alt=''
        className='object-cover w-full h-auto mb-8'
        priority
        width='0'
        height='0'
        sizes='100vw'
      />
      <div
        className='[&>*]:mb-3 [&>*:last-child]:mb-0 blog'
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  )
}
