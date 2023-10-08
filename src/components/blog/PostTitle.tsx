import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

const PostTitle = ({ post }: { post: Post }) => {
  return (
    <div>
      <div className='mb-3'>
        <h1 className='text-3xl font-bold'>{post.title}</h1>
        <time
          dateTime={post.date}
          className='mb-1 text-xs text-gray-600 dark:text-gray-400'
        >
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
      {/* <div className='flex space-x-3'>
        {post.tags.map((tag) => (
          <div key={tag} className='font-sm'>
            {tag}
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default PostTitle
