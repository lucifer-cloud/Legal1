'use client'

import { useParams } from 'next/navigation'
import PageHeader from '../../components/common/PageHeader'
import Newsletter from '../../components/common/Newsletter'
import Link from 'next/link'
import { useRef } from 'react'

// Sidebar practice areas
const PRACTICE_AREAS = [
  { name: 'Suit Management', slug: 'suit-management' },
  { name: 'Counselling', slug: 'counselling' },
  { name: 'Law Consultation', slug: 'law-consultation' },
  { name: 'Claim Settlement', slug: 'claim-settlement' },
  { name: 'Legal Protection', slug: 'legal-protection' },
  { name: 'Court Hearings', slug: 'court-hearings' },
]

// Numbered items
const NUMBER_BOX_ITEMS = [
  { number: 1, title: 'Defamation', content: 'Lorem ipsum dolor sit amet...' },
  { number: 2, title: 'Abuse', content: 'Lorem ipsum dolor sit amet...' },
  { number: 3, title: 'Code of conduct', content: 'Lorem ipsum dolor sit amet...' },
  { number: 4, title: 'Un lawfulness', content: 'Lorem ipsum dolor sit amet...' },
  { number: 5, title: 'Behavioral Issues', content: 'Lorem ipsum dolor sit amet...' },
  { number: 6, title: 'Case filing Decision', content: 'Lorem ipsum dolor sit amet...' },
]

export default function PracticeAreaDetails() {
  const { slug } = useParams() // Get slug from URL
  const videoRef = useRef<HTMLIFrameElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)

  const handlePlayClick = (evt: React.MouseEvent) => {
    evt.preventDefault()
    if (videoContainerRef.current) {
      videoContainerRef.current.classList.add('play')
    }
    if (videoRef.current) {
      videoRef.current.src = videoRef.current.src + '?autoplay=1'
    }
  }

  // Get current area
  const currentArea = PRACTICE_AREAS.find((a) => a.slug === slug)

  return (
    <>
      <PageHeader title="Practice Area" currentPage={currentArea?.name || 'Details'} />

      <section className="blog_inner practice_area_inner">
        <div className="container">
          <div className="blog_details">
            <div className="row">
              {/* Main Content */}
              <div className="col-lg-8 col-md-12">
                <div className="blog_details_inner">
                  <div className="post_content">
                    <div className="post_header">
                      <h3 className="post_title">{currentArea?.name}</h3>
                    </div>

                    <div className="fulltext">
                      <p>
                        This is the detail page for <b>{currentArea?.name}</b>. You can replace this
                        with real content fetched from Payload CMS or a database.
                      </p>

                      <h4 className="widget_title">Case fact & evidence</h4>
                      <div className="number_box">
                        <div className="row">
                          {NUMBER_BOX_ITEMS.map((item, index) => (
                            <div className="col-lg-6" key={index}>
                              <div className="flex_number">
                                <div className="number">{item.number}</div>
                                <div className="title_paragraph">
                                  <h4>{item.title}</h4>
                                  <p>{item.content}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="video_post">
                        <div className="ytube_video" ref={videoContainerRef}>
                          <iframe
                            ref={videoRef}
                            title="Lawreto Attorney Video"
                            src="https://www.youtube.com/embed/fEErySYqItI"
                            allow="autoplay;"
                            allowFullScreen
                          />
                          <div className="post_content">
                            <div className="ytplay_btn" onClick={handlePlayClick}>
                              <i className="ion-play"></i>
                            </div>
                            <img
                              src="/images/bv.png"
                              width={600}
                              height={400}
                              alt="Video thumbnail"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4 col-md-12">
                <div className="sidebar">
                  <div className="project_info">
                    <div className="project_info_bg">
                      <div className="project_info_header">
                        <h4 className="widget_title">Practice Areas</h4>
                      </div>
                      <div className="sidenav">
                        <ul className="side_menu">
                          {PRACTICE_AREAS.map((area, index) => (
                            <li key={index} className={area.slug === slug ? 'active' : ''}>
                              <Link href={`/practice_area/${area.slug}`}>
                                <i className="ion-ios-arrow-right"></i> {area.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="project_contact">
                      <div className="logo">
                        <img
                          src="/images/logo_inner.png"
                          width={200}
                          height={60}
                          alt="Lawreto logo"
                        />
                      </div>
                      <div className="project_contact_info">
                        <h4>Ensuring Justice Is our Motto</h4>
                        <img src="/images/wmen.png" width={250} height={250} alt="Legal team" />
                      </div>
                      <div className="contact_inner">
                        <div className="contact_box">
                          <div className="service_inner">
                            <div className="image">
                              <i className="ion-ios-telephone"></i>
                            </div>
                            <div className="content">
                              <h6>CALL FOR CONSULTATION</h6>
                              <h5>0888 . 1234 . 5699</h5>
                            </div>
                          </div>
                        </div>
                      </div>
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
