'use client'

import React, { useEffect, useState } from 'react'
import PageHeader from '../components/common/PageHeader'
import Newsletter from '../components/common/Newsletter'
import BlogChunk from '../components/section/BlogChunk'
import Link from 'next/link'

interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

// Pagination Component
const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  const pageNumbers = []

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === 2 ||
      i === totalPages ||
      i === totalPages - 1 ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pageNumbers.push(i)
    } else if (pageNumbers[pageNumbers.length - 1] !== '...') {
      pageNumbers.push('...')
    }
  }

  return (
    <div className="pagination-div">
      <ul className="pagination">
        {pageNumbers.map((page, index) =>
          page === '...' ? (
            <li key={index}>
              <span>.....</span>
            </li>
          ) : (
            <li key={page}>
              <Link
                href="#"
                className={`page-number ${currentPage === page ? 'current' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  onPageChange(page as number)
                }}
              >
                {page}
              </Link>
            </li>
          ),
        )}
        <li>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault()
              if (currentPage < totalPages) onPageChange(currentPage + 1)
            }}
          >
            <i className="ion-chevron-right"></i>
          </Link>
        </li>
      </ul>
    </div>
  )
}

// Sidebar Widgets
const SearchWidget = () => (
  <div id="search" className="widget widget_search">
    <div className="sidebar_search">
      <form className="search_form" action="#">
        <input type="text" name="search" className="keyword form-control" placeholder="Search" />
        <button type="submit" className="form-control-submit">
          <i className="ion-ios-search"></i>
        </button>
      </form>
    </div>
  </div>
)

const AuthorWidget = () => (
  <div id="custom_1" className="widget widget_custom">
    <h4 className="widget_title">
      About author
      <span className="title_line"></span>
    </h4>
    <div className="sidebar_author">
      <img src="/images/author.png" alt="Author" width={244} height={268} />
      <p className="intro">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt.
      </p>
      <div className="author_social">
        <ul>
          {['facebook', 'twitter', 'pinterest-outline', 'instagram-outline', 'linkedin'].map(
            (platform) => (
              <li key={platform}>
                <Link href="#">
                  <i className={`ion-social-${platform}`}></i>
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  </div>
)

const RecentPostsWidget = () => {
  const posts = [
    {
      image: '/images/thumbnail1.png',
      title: 'Contribution of Men as workers',
      date: 'OCTOBER 11, 2022',
      link: '/blog/contribution-men',
    },
    {
      image: '/images/thumbnail2.png',
      title: 'Lawreto’s help for the Victimes of Domestic Violence in USA',
      date: 'OCTOBER 11, 2022',
      link: '/blog/lawreto-help',
    },
  ]

  return (
    <div id="recent-posts-1" className="widget widget_recent_posts">
      <h4 className="widget_title">
        Recent Posts
        <span className="title_line"></span>
      </h4>
      <div className="sidebar_recent_posts">
        <ul className="recent_post_list">
          {posts.map((post, index) => (
            <li key={index} className="recent_post_item">
              <div className="recent_post_image">
                <img src={post.image} alt={post.title} width={125} height={82} />
              </div>
              <div className="recent_post_content">
                <h5>
                  <Link href={post.link}>{post.title}</Link>
                </h5>
                <h6>{post.date}</h6>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const CategoriesWidget = () => {
  const [categories, setCategories] = useState<any[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`/api/categories?limit=50`)
        const data = await res.json()
        setCategories(data.docs || [])
      } catch (error) {
        console.error('Failed to fetch categories:', error)
      }
    }
    fetchCategories()
  }, [])

  return (
    <div id="categories-1" className="widget widget_categories">
      <h4 className="widget_title">
        Categories
        <span className="title_line"></span>
      </h4>
      <div className="sidebar_categories">
        <ul className="category_list">
          {categories.map((category) => (
            <li key={category.id}>
              <Link href={`/category/${category.slug}`}>{category.name}</Link> (
              {category.blogsCount || 0})
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const TagsWidget = () => {
  const [tags, setTags] = useState<any[]>([])

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await fetch(`/api/tags?limit=50`)
        const data = await res.json()
        setTags(data.docs || [])
      } catch (error) {
        console.error('Failed to fetch tags:', error)
      }
    }
    fetchTags()
  }, [])

  return (
    <div id="tags-1" className="widget widget_tag_cloud">
      <h4 className="widget_title">
        Tag Cloud
        <span className="title_line"></span>
      </h4>
      <div className="sidebar_tags">
        <ul className="tag_list">
          {tags.map((tag) => (
            <li key={tag.id}>
              <Link href={`/tag/${tag.slug}`}>{tag.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const limit = 6

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `/api/blogs?limit=${limit}&page=${page}&depth=2`,
          { cache: 'no-store' },
        )
        const data = await res.json()
        setPosts(data.docs || [])
        setTotalPages(data.totalPages || 1)
      } catch (error) {
        console.error('Failed to fetch blogs:', error)
        setPosts([])
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [page])

  return (
    <>
      <PageHeader title="Blogs" currentPage="Blogs" />

      <section className="blog_inner practice_area_inner">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8 col-md-12">
              <div className="row">
                {loading ? (
                  <p>Loading posts...</p>
                ) : posts.length > 0 ? (
                  posts.map((post) => (
                    <div key={post.id} className="col-lg-6 col-md-6">
                      <BlogChunk
                        post={{
                          image: post.featuredMedia?.url,
                          date: post.date
                            ? new Date(post.date).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                              })
                            : 'No date',
                          title: post.title,
                          description: post.excerpt || post?.description,
                          authorImage: post.author?.authorImage?.url,
                          authorName: post.author?.name,
                          authorTitle: post.author?.title,
                          link: `/blog/${post.slug}`,
                        }}
                      />
                    </div>
                  ))
                ) : (
                  <p>No blog posts found.</p>
                )}
              </div>

              {totalPages > 1 && (
                <Pagination totalPages={totalPages} currentPage={page} onPageChange={setPage} />
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12">
              <div className="sidebar">
                <SearchWidget />
                <AuthorWidget />
                <RecentPostsWidget />
                <CategoriesWidget />
                <TagsWidget />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
