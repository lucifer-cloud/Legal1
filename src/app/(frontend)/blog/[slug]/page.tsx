'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import PageHeader from '../../components/common/PageHeader'
import Newsletter from '../../components/common/Newsletter'
import Link from 'next/link'
import { RichText } from '../../components/RichText'

// TypeScript type for blog (optional, if using TS)
type Blog = {
  id: string
  slug: string
  date: string
  title: string
  description: any // richText
  authorName: string
  authorTitle?: string
  authorImage?: { url: string }
  featuredMedia?: { url: string }
}

export default function BlogDetails() {
  const { slug } = useParams()
  const [blog, setBlog] = useState<Blog | null>(null)
  const [recentPosts, setRecentPosts] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBlog() {
      try {
        // Fetch single blog by slug
        const res = await fetch(
          `/api/blogs?where[slug][equals]=${slug}`,
          { cache: 'no-store' }, // disable caching in dev
        )
        const data = await res.json()
        setBlog(data.docs[0] || null)

        // Fetch recent posts
        const resRecent = await fetch(
          `/api/blogs?limit=5&sort=-date`,
        )
        const recentData = await resRecent.json()
        setRecentPosts(recentData.docs)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchBlog()
  }, [slug])

  if (loading) {
    return (
      <div className="container py-10 text-center">
        <h4>Loading blog...</h4>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="container py-10 text-center">
        <h2>Blog not found</h2>
      </div>
    )
  }

  return (
    <>
      <PageHeader title="Blog Details" currentPage={blog.title} />

      <section className="blog_inner blog_inner_padding">
        <div className="container">
          <div className="blog_details">
            <div className="post_img">
              {blog.featuredMedia?.url && (
                <img
                  src={blog.featuredMedia.url}
                  width={1170}
                  height={617}
                  alt={blog.title}
                  className="object-cover rounded-lg"
                />
              )}
            </div>
            <div className="row">
              {/* Main Blog Content */}
              <div className="col-lg-8 col-md-12">
                <div className="blog_details_inner">
                  <div className="post_content">
                    <div className="post_header">
                      <h6>{new Date(blog.date).toDateString()}</h6>
                      <h3 className="post_title">{blog.title}</h3>
                    </div>

                    <div className="fulltext prose max-w-none">
                      <RichText data={blog?.description} />
                    </div>
                  </div>

                  {/* Author */}
                  <div className="author_div">
                    {blog.authorImage?.url && (
                      <div className="author">
                        <img
                          alt={blog.authorName}
                          src={blog.authorImage.url}
                          width={80}
                          height={80}
                          className="avatar rounded-full object-cover"
                        />
                      </div>
                    )}
                    <div className="author-block">
                      <h5 className="author_name">{blog.authorName}</h5>
                      <p className="author_intro">{blog.authorTitle}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4 col-md-12">
                <div className="sidebar">
                  {/* Recent Posts */}
                  <div className="widget widget_recent_posts">
                    <h4 className="widget_title">Recent Posts</h4>
                    <div className="sidebar_recent_posts">
                      <ul className="recent_post_list">
                        {recentPosts.map((b) => (
                          <li className="recent_post_item" key={b.id}>
                            <div className="recent_post_image">
                              {b?.featuredMedia?.url && (
                                <img
                                  className="primary_img"
                                  src={b?.featuredMedia?.url}
                                  width={125}
                                  height={66}
                                  alt={b.title}
                                />
                              )}
                            </div>
                            <div className="recent_post_content">
                              <h5>
                                <Link href={`/blog/${b.slug}`}>{b.title}</Link>
                              </h5>
                              <h6>{new Date(b.date).toDateString()}</h6>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Sidebar */}
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
