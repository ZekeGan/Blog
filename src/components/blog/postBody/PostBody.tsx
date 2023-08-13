'use client'

import { Post } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import style from './postBody.module.scss'
import mdxComponents from '@/libs/mdxComponent'
import clsx from 'clsx'

const PostBody = ({ post, className }: { post: Post; className?: string }) => {
  const MDXContent = useMDXComponent(post.body.code)
  return (
    <div className={clsx('prose', className, style.postBody)}>
      <MDXContent components={mdxComponents} />
    </div>
  )
}

export default PostBody
