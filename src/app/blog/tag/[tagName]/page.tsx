import { allPosts, Post } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import _ from 'lodash'
import PostBox from '@/components/blog/PostBox'

export default async function BlogPostTagPage({
  params: { tagName },
}: {
  params: { tagName: string }
}) {
  const posts: Post[] = _.filter(allPosts, (item) => _.includes(item.tags, tagName)).sort(
    (a, b) => compareDesc(new Date(a.date), new Date(b.date)),
  )

  return posts.map((post) => <PostBox key={post._id} data={post} />)
}
