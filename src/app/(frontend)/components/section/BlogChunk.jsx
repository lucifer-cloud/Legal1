import React from 'react'
import { RichText } from '../RichText'
import Image from 'next/image'
import Link from 'next/link'

// Helper to convert Payload Lexical rich text to plain text
const getPlainText = (richText) => {
  if (!richText?.root?.children) return ''
  return richText.root.children
    .map((block) =>
      block.children?.map((child) => child.text).join('')
    )
    .join('\n')
}

function BlogChunk({ post }) {
  console.log(post)
  return (
    <article className="blog_post">
      <div className="post_img">
        <Link href={post?.link}>
          <img src={post?.image} alt="img" />
        </Link>
      </div>
      <div className="post_content_part">
        <div className="post_content">
          <div className="post_header">
            <h6>{post?.date}</h6>
            <h3 className="post_title">
              <Link href={post?.link}>{post?.title}</Link>
            </h3>
            <RichText data={post?.description} />
          </div>
        </div>
        <div className="post_footer_flex">
          <div className="author_flex">
           { post?.authorImage && <Image src={post?.authorImage} width={42} height={42} alt="author" style={{"borderRadius":"50%"}}/>}
            <div className="author_details">
              <h6><a href="#">{post?.authorName}</a></h6>
              <p>{post?.authorTitle}</p>
            </div>
          </div>
          <div className="share_icon">
            <a href="#"><i className="ion-android-share-alt"></i></a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogChunk
