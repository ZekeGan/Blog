import { allPosts, Post } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import HomeArticleBox from './_component/HomeArticleBox'

export default function Home() {
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 5)

  return (
    <div className='w-[50rem] mt-20 space-y-10'>
      <div className='space-y-4'>
        <div className=' text-5xl space-y-2'>
          <div>你好</div>
          <div>
            我是﹐<span className='text-red-800'>ZEKE</span>
          </div>
        </div>
        <p>
          On the other hand, we denounce with righteous indignation and dislike men who
          are so beguiled and demoralized by the charms of pleasure of the moment, so
          blinded by desire, that they cannot foresee the pain and trouble that are bound
          to ensue; and equal blame belongs to those who fail in their duty through
          weakness of will, which is the same as saying through shrinking from toil and
          pain. These cases are perfectly simple and easy to distinguish.
        </p>
        <div>
          <h2>聯絡我</h2>
        </div>
      </div>
      <div className='space-y-2'>
        <h1 className='text-3xl font-bold'>最新文章</h1>
        <div className='grid grid-cols-3 gap-4'>
          {posts.map((post) => (
            <HomeArticleBox key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
