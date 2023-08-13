import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

const PostTitle = ({ post, className }: { post: Post; className?: string }) => {
  return (
    <div className={className}>
      <time dateTime={post.date} className='mb-1 text-xs text-gray-600'>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <h1 className='text-3xl font-bold'>{post.title}</h1>
      <div className='flex space-x-2'>
        {post.tags.map((tag) => (
          <div key={tag}>{tag}</div>
        ))}
      </div>
    </div>
  )
}

export default PostTitle
