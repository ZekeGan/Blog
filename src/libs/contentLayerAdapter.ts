import { Post, allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

export const allPostsDesc = allPosts.sort((a: Post, b: Post) =>
  compareDesc(new Date(a.date), new Date(b.date)),
)
