'use client'

import React from 'react'
import PageHeader from '../components/common/PageHeader'
import ContactInfoBlock from '../components/section/ContactInfoBlock'
import Newsletter from '../components/common/Newsletter'

export default function Contact() {
  const contactInfo = [
    {
      icon: '/images/icon-2.png', // ✅ use /public/images
      title: 'Office Address',
      lines: ['28 Street, New York City United States of America'],
    },
    {
      icon: '/images/icon.png',
      title: 'Phone No',
      lines: ['+987 654 321 22', '+987 654 321 23'],
    },
    {
      icon: '/images/icon-1.png',
      title: 'Email Address',
      lines: ['lawretoattorney@gmail.com', 'lawretocare@mail.com'],
    },
  ]

  return (
    <>
      <PageHeader title="Contact Us" currentPage="Contact Us" />
      <section className="contact_inner service_bg" style={{ background: '#FAF7F6' }}>
        <div className="service_another_bg">
          <div className="container">
            <div className="row">
              {contactInfo.map((info, index) => (
                <div className="col-lg-4" key={index}>
                  {/* Contact Info Block */}
                  <ContactInfoBlock info={info} />
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="form contact_form_page">
              <form className="contact_form" data-aos="fade-up">
                <div className="form-container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="heading_common text-center" data-aos="fade-up">
                        <h5>CONTACT US</h5>
                        <h3>Drop Us a Line</h3>
                        <p>
                          Lawreto Attorneys will arrange your first legal consultation totally free
                          of cost
                        </p>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-8 offset-lg-2">
                      <div className="row">
                        <div className="col-md-12 col-lg-6">
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
                        <div className="col-md-12 col-lg-12">
                          <div className="form-group" data-aos="fade-up">
                            <textarea
                              name="message"
                              className="form-control"
                              placeholder="Message*"
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-12 mt-4">
                          <div className="form-group text-center" data-aos="fade-up">
                            {/* ✅ Changed from <a> to <button> */}
                            <button type="submit" className="btn_one btn">
                              SEND MAIL
                            </button>
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
      <Newsletter />
    </>
  )
}
