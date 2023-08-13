import _ from 'lodash'
import PostBox from '@/components/blog/PostBox'
import { allPostsDesc } from '@/libs/contentLayerAdapter'

export default async function BlogPostTagPage({
  params: { tagName },
}: {
  params: { tagName: string }
}) {
  const posts = _.filter(allPostsDesc, (item) => _.includes(item.tags, tagName))

  return posts.map((post) => <PostBox key={post._id} data={post} />)
}
