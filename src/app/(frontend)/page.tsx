'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Testimonials from './components/section/Testimonials'
import Newsletter from './components/common/Newsletter'
import PracticeBlock from './components/section/PracticeBlock'
import BlogChunk from './components/section/BlogChunk'

const HomeAppointmentForm = () => {
  return (
    <section className="about">
      <div className="about_two_bg about_one_padding">
        <div className="container">
          <div className="form">
            <form className="contact_form">
              <div className="form-container">
                <div className="row g-md-3 g-sm-5 g-xs-5">
                  <div className="col-lg-12">
                    <div className="heading_common text-center" data-aos="fade-up">
                      <h3>Get Free Consultation</h3>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row g-sm-3 px-sm-3 g-xs-3 px-xs-3">
                      <div className=" col-md-12 col-lg-6">
                        <div className="form-group" data-aos="fade-up">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Your Name*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-6">
                        <div className="form-group" data-aos="fade-up">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email Address*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-6">
                        <div className="form-group" data-aos="fade-up">
                          <input
                            type="phone"
                            name="phone"
                            className="form-control"
                            placeholder="Phone Number"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-6">
                        <div className="form-group" data-aos="fade-up">
                          <select name="legal_issue" className="form-control" required>
                            <option value="">Select an issue</option>{' '}
                            <option value="corporate">Corporate Law</option>{' '}
                            <option value="civil">Civil Litigation</option>{' '}
                            <option value="criminal">Criminal Defense</option>{' '}
                            <option value="family">Family Law</option>{' '}
                            <option value="property">Property Law</option>{' '}
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12 mt-4">
                        <div className="form-group text-center" data-aos="fade-up">
                          <a href="#" className="btn_one btn">
                            BOOK NOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const Hero = () => {
  return (
    <section>
      <div className="swiper swiper_one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="man_image about_two_bg about_one_padding">
                <div className="slider_content heading heading_primary_color">
                  <h6>WELCOME TO LAWRETO ATTORNEYS</h6>
                  <h2>Ensuring Justice Is our Motto</h2>
                  <p>
                    Our firm has handled significant personal injury claims since its inception. Our
                    civil attorneys currently represent numerous negligent conduct.
                  </p>
                  <img src="/images/signature.png" alt="signature" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <HomeAppointmentForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const Partners = () => {
  const partners = [
    'images/1_1.png',
    'images/2_1.png',
    'images/3_1.png',
    'images/4_1.png',
    'images/5.png',
  ]

  return (
    <section className="patner_two_section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="patner_flex">
              {partners.map((partner, index) => (
                <div key={index} className="patner_2">
                  <img src={partner} alt="partner" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const Services = () => {
  const services = [
    {
      hoverImage: 'images/h_s_1.png',
      image: 'images/s1.png',
      title: 'Law Consultation',
      description: "We are passionate advocates for our clients' rights...",
      link: '/practice_area_details',
    },
    {
      hoverImage: 'images/h_s_1.png',
      image: 'images/s2.png',
      title: 'Suit Management',
      description: "We are passionate advocates for our clients' rights...",
      link: '/practice_area_details',
    },
    {
      hoverImage: 'images/h_s_1.png',
      image: 'images/s3.png',
      title: 'Legal Protection',
      description: "We are passionate advocates for our clients' rights...",
      link: '/practice_area_details',
    },
    {
      hoverImage: 'images/h_s_1.png',
      image: 'images/s4.png',
      title: 'Claim Settlement',
      description: "We are passionate advocates for our clients' rights...",
      link: '/practice_area_details',
    },
  ]

  return (
    <section className="service service_bg service_home_padding">
      <div className="service_another_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="heading_common heading_primary_color" data-aos="fade-up">
                <h5>LAWRETO SERVICES</h5>
                <h3>
                  <span>O</span>ur <span>P</span>ractice <span>A</span>rea
                </h3>
                <p>Our firm has handled significant personal injury claims since its inception.</p>
                <a href="practice_area.html" className="btn_one btn">
                  SEE ALL SERVICES
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                {services.map((item, index) => (
                  <PracticeBlock service={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const About = () => {
  return (
    <section className="about">
      <div className="about_two_bg ">
        <div className="container">
          {' '}
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about_man_image">
                <img src="images/about.jpg" alt="about" />
                <div className="about_logo_image">
                  <img src="images/about_middle.png" alt="image" />
                  <img src="images/about_outside.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5">
              <div className="heading_common heading_primary_color" data-aos="fade-up">
                <h5>ABOUT US</h5>
                <h4>Welcome to The Lawreto Lawyer & Attorney</h4>
                <p>
                  Lawreto is the best in class editorial and research teams of over 200 exceptional
                  individuals assess lawyers & law firms across the USA
                </p>
              </div>
              <div className="about_list" data-aos="fade-up">
                <ul>
                  <li>
                    <i className="ion-android-done" aria-hidden="true"></i>
                    <p>We Provide our clients experienced Legal Insight</p>
                  </li>
                  <li>
                    <i className="ion-android-done" aria-hidden="true"></i>
                    <p>Lawreto routinely works with insurance claim</p>
                  </li>
                  <li>
                    <i className="ion-android-done" aria-hidden="true"></i>
                    <p>Obtain the legal care and attention nedded</p>
                  </li>
                </ul>
                <a href="about.html" className="btn_one btn">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const Blogs = () => {
  const blogPosts = [
    {
      image: '/api/media/file/b1-2.jpg',
      date: '2025-08-17T05:57:09.879Z',
      title: 'Lawreto’s help for the Victimes of Domestic Violence in USA',
      description: '',
      authorImage: '/api/media/file/selfie-1.jpg',
      authorName: 'Govind Singh',
      authorTitle: 'Govind',
      link: '/blog/Lawreto’s_help',
    },
  ]

  return (
    <section className="blog blog_home_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading_common heading_primary_color text-center">
              <h5>LATEST NEWS</h5>
              <h3>Read our Insightful Articles</h3>
              <h1>Latest News</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="swiper_post">
              <Swiper
                modules={[Navigation, Pagination]}
                loop={true}
                slidesPerView={1}
                spaceBetween={0}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  600: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  991: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                }}
              >
                {blogPosts.map((post, index) => (
                  <SwiperSlide key={index}>
                    <BlogChunk post={post} />
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Navigation Arrows */}
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>

              {/* Pagination Dots */}
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const WorkProcess = () => {
  const processes = [
    {
      title: 'First appointment',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      title: 'Case Fact Finding & Evaluation',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      title: 'Case Fact Finding & Evaluation',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
  ]

  return (
    <section className="video">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="work_process">
              <div className="heading_common heading_primary_color">
                <h5>WORK PROCESS</h5>
                <h4>We follow the best work flow to solve a case</h4>
              </div>
              <ol className="list-group list-group-numbered">
                {processes.map((process, index) => (
                  <li key={index} className="list-group-item">
                    <div className="work_process_flex">
                      <span>{process.title}</span>
                      <p>{process.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="offset-lg-1 col-lg-6">
            <div className="video_post">
              <div className="ytube_video">
                <iframe
                  id="ytvideo"
                  src="https://www.youtube.com/embed/fEErySYqItI"
                  allow="autoplay;"
                  allowFullScreen
                ></iframe>
                <div className="post_content">
                  <div className="ytplay_btn">
                    <i className="ion-play"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default function Home() {
  return (
    <div className="App">
      <Hero />
      <Partners />
      <Services />
      <About />
      <Testimonials />
      <WorkProcess />
      <Blogs />
      <Newsletter />
    </div>
  )
}
