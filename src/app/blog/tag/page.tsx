import { allPostsDesc } from '@/libs/contentLayerAdapter'
import PostBox from '@/components/blog/PostBox'

export default async function Home() {
  return allPostsDesc.map((post) => <PostBox key={post._id} data={post} />)
}
