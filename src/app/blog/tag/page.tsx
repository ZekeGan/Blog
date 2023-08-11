import { allPosts, Post } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import PostBox from '@/components/blog/PostBox'

export default async function Home() {
  const posts: Post[] = allPosts.sort((a: Post, b: Post) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return posts.map((post) => <PostBox key={post._id} data={post} />)
}
