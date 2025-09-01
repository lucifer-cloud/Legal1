import React from 'react'
import PageHeader from '../components/common/PageHeader'
import Testimonials from '../components/section/Testimonials'
import Newsletter from '../components/common/Newsletter'

function About() {
  return (
    <>
      <PageHeader title={'About Us'} currentPage={'About Us'} />
      <section className="about_inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about_inner_heading">
                <h3>
                  “Lawreto is the most <span>impactful lawyers & legal firm</span> between 200
                  lawfirms in all over USA”
                </h3>
                <h6>THE NEW YORK TIMES</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="about_inner_content">
                <div className="about_image">
                  <img src="images/about_1.png" alt="about" />
                  <div className="about_content">
                    <h4>Lawreto Mission</h4>
                    <i className="ion-ios-book-outline"></i>
                  </div>
                  <div className="hover_about_content">
                    <div className="about_content_info">
                      <h4>Lawreto Mission</h4>
                      <p>
                        Lawreto is the best in class editorial and research teams of over 200
                        exceptional individuals assess lawyers & law firms across the USA
                      </p>
                      <div className="about_list">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_inner_content">
                <div className="about_image">
                  <img src="images/lawreto-mission-image.jpg" alt="about" />
                  <div className="about_content">
                    <h4>Lawreto Objective</h4>
                    <i className="ion-ios-book-outline"></i>
                  </div>
                  <div className="hover_about_content">
                    <div className="about_content_info">
                      <h4>Lawreto Objective</h4>
                      <p>
                        Lawreto is the best in class editorial and research teams of over 200
                        exceptional individuals assess lawyers & law firms across the USA
                      </p>
                      <div className="about_list">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="faq_bg">
          <div className="container">
            <div className="row">
              <div className="offset-lg-6 col-lg-5 col-md-12">
                <div className="section_header" data-aos="fade-up">
                  <h4 className="section_title">Welcome to The Lawreto Lawyer & Attorney</h4>
                </div>
                <div className="accordion" data-aos="fade-up">
                  <div className="item active">
                    <div className="accordion_tab">
                      <h4 className="accordion_title">Our Motto</h4>
                      <span className="accordion_tab_icon">
                        <i className="open_icon ion-ios-plus-empty"></i>
                        <i className="close_icon ion-ios-minus-empty"></i>
                      </span>
                    </div>
                    <div className="accordion_info">
                      Lawreto is the best in class editorial and research teams of over 200
                      exceptional individuals assess lawyers & law firms across the USA
                    </div>
                  </div>

                  <div className="item">
                    <div className="accordion_tab">
                      <h4 className="accordion_title">Our Achievement</h4>
                      <span className="accordion_tab_icon">
                        <i className="open_icon ion-ios-plus-empty"></i>
                        <i className="close_icon ion-ios-minus-empty"></i>
                      </span>
                    </div>
                    <div className="accordion_info">
                      Aenean massa cum sociis natoque penatibus et magnis dis parturient montes
                      nascetur ridiculus mus. Donec quam felis ultricies pellentesque eu, pretium
                      quis sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel
                      aliquet nec vulputate eget. In enim justo rhoncus ut imperdiet venenatis vitae
                      justo.
                    </div>
                  </div>

                  <div className="item">
                    <div className="accordion_tab">
                      <h4 className="accordion_title">Our Work Process</h4>
                      <span className="accordion_tab_icon">
                        <i className="open_icon ion-ios-plus-empty"></i>
                        <i className="close_icon ion-ios-minus-empty"></i>
                      </span>
                    </div>
                    <div className="accordion_info">
                      Aenean massa cum sociis natoque penatibus et magnis dis parturient montes
                      nascetur ridiculus mus. Donec quam felis ultricies pellentesque eu, pretium
                      quis sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel
                      aliquet nec vulputate eget. In enim justo rhoncus ut imperdiet venenatis vitae
                      justo.
                    </div>
                  </div>

                  <div className="item">
                    <div className="accordion_tab">
                      <h4 className="accordion_title">Our Experience</h4>
                      <span className="accordion_tab_icon">
                        <i className="open_icon ion-ios-plus-empty"></i>
                        <i className="close_icon ion-ios-minus-empty"></i>
                      </span>
                    </div>
                    <div className="accordion_info">
                      Aenean massa cum sociis natoque penatibus et magnis dis parturient montes
                      nascetur ridiculus mus. Donec quam felis ultricies pellentesque eu, pretium
                      quis sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel
                      aliquet nec vulputate eget. In enim justo rhoncus ut imperdiet venenatis vitae
                      justo.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team team_inner about_team">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="heading_common heading_primary_color" data-aos="fade-up">
                <h5>LAWRETO SERVICES</h5>
                <h3>Our Practice Area</h3>
                <p>Our firm has handled significant personal injury claims since its inception. </p>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-7 pe-5">
              <div className="team_heading_paragraph">
                <p>
                  We are a firm of lawyers and economists specialises. in comprehensive real estate
                  consultancy, for both individuals and companies. The most all-inclusive &
                  specialised service possible for buying and selling
                </p>
                <p>
                  We are a team with over 20 years’ experience on the Costa del Sol , among other
                  matters, we specialise in comprehensive advice for the property sector, providing
                  all the necessary information about costs and taxes related with the investment
                  you are going to make.
                </p>
                <p>
                  We are a firm of lawyers and economists specialises. in comprehensive real estate
                  consultancy, for both individuals and companies. The most all-inclusive &
                  specialised service possible for buying and selling
                </p>
                <p>
                  We are a team with over 20 years’ experience on the Costa del Sol , among other
                  matters, we specialise in comprehensive advice for the property sector, providing
                  all the necessary information about costs and taxes related with the investment
                  you are going to make.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <img src="images/about_2.png" alt="about" />
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <Newsletter />
    </>
  )
}

export default About
