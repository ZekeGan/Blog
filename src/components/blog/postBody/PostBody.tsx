'use client'
import { FC } from 'react'
import { Post } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import style from './postBody.module.scss'
import mdxComponents from '@/libs/mdxComponent'
import clsx from 'clsx'

type PostBodyProps = { post: Post }

const PostBody: FC<PostBodyProps> = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code)
  return (
    <div className={clsx('row-start-3 col-start-2 py-5', style.postBody, style.post)}>
      <MDXContent components={mdxComponents} />
    </div>
  )
}

export default PostBody
