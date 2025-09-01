'use client'

import PageHeader from '../components/common/PageHeader'
import PracticeBlock from '../components/section/PracticeBlock'
import Newsletter from '../components/common/Newsletter'

export default function PracticeAreaPage() {
  const services = [
    {
      hoverImage: '/images/h_s_1.png',
      image: '/images/s1.png',
      title: 'Law Consultation',
      description: "We are passionate advocates for our clients' rights...",
      slug: 'counselling', // ✅ slug
    },
    {
      hoverImage: '/images/h_s_1.png',
      image: '/images/s2.png',
      title: 'Suit Management',
      description: "We are passionate advocates for our clients' rights...",
      slug: 'suit-management',
    },
    {
      hoverImage: '/images/h_s_1.png',
      image: '/images/s3.png',
      title: 'Legal Protection',
      description: "We are passionate advocates for our clients' rights...",
      slug: 'legal-protection',
    },
  ]

  return (
    <>
      <PageHeader title="Practice Area" currentPage="Practice Area" />
      <section className="service service_bg service_home_padding">
        <div className="service_another_bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  {services.map((item, index) => (
                    <PracticeBlock
                      service={{
                        ...item,
                        link: `/practice_area/${item.slug}`, // ✅ dynamic link
                      }}
                      key={index}
                      size="col-lg-4"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  )
}
