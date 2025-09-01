import React from "react";
import { useRef } from "react";
import PageHeader from "../common/PageHeader";
import Newsletter from "../common/Newsletter";

// Extracted components
const PracticeAreaItem = ({ area }) => (
  <li className={`menu-item ${area.active ? "active" : ""}`}>
    <a href="practice_area.html">
      <i className="ion-ios-arrow-right"></i>
      {area.name}
    </a>
  </li>
);

const NumberBoxItem = ({ item }) => (
  <div className="col-lg-6">
    <div className="flex_number">
      <div className="number">{item.number}</div>
      <div className="title_paragraph">
        <h4>{item.title}</h4>
        <p>{item.content}</p>
      </div>
    </div>
  </div>
);

const ContactInfoBox = () => (
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
);

// Data moved outside component
const PRACTICE_AREAS = [
  { name: "Suit Management", active: true },
  { name: "Counselling", active: false },
  { name: "Law Consultation", active: false },
  { name: "Claim Settlement", active: false },
  { name: "Legal Protection", active: false },
  { name: "Court Hearings", active: false },
];

const NUMBER_BOX_ITEMS = [
  {
    number: 1,
    title: "Defamation",
    content: "Lorem ipsum dolor sit amet consectet adipiscing elit...",
  },
  {
    number: 4,
    title: "Un lawfulness",
    content: "Lorem ipsum dolor sit amet consectet adipiscing elit...",
  },
  {
    number: 2,
    title: "Abuse",
    content: "Lorem ipsum dolor sit amet consectet adipiscing elit...",
  },
  {
    number: 5,
    title: "Behavioral Issues",
    content: "Lorem ipsum dolor sit amet consectet adipiscing elit...",
  },
  {
    number: 3,
    title: "Code of conduct",
    content: "Lorem ipsum dolor sit amet consectet adipiscing elit...",
  },
  {
    number: 6,
    title: "Case filing Discision",
    content: "Lorem ipsum dolor sit amet consectet adipiscing elit...",
  },
];

function PracticeAreaDetails() {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  const handlePlayClick = (evt) => {
    evt.preventDefault();
    videoContainerRef.current.classList.add("play");
    const iframe = videoRef.current;
    iframe.src = iframe.src + "?autoplay=1";
  };

  return (
    <>
      <PageHeader title="Practice Area" currentPage="Practice Area" />
      <section className="blog_inner practice_area_inner">
        <div className="container">
          <div className="blog_details">
            <div className="row">
              {/* Main Content */}
              <div className="col-lg-8 col-md-12">
                <div className="blog_details_inner">
                  <div className="post_content">
                    <div className="post_header">
                      <h3 className="post_title">Suit Management</h3>
                    </div>

                    <div className="fulltext">
                      <p>
                        We guide our clients through difficult issues, bringing
                        our insight and judgment to each situation. Our
                        innovative approaches create original solutions to our
                        clients' most complex domestic & multi jurisdictional
                        deals and disputes. By thinking on behalf of our clients
                        every day, we anticipate
                      </p>

                      <p className="highlight">
                        Over the last 35 Years we made an impact that is strong
                        and we have long way to go. Excepteur sint occaecat.
                      </p>

                      <p>
                        These are the concepts that shape our distinctive
                        culture & differentiate us from others. They capture the
                        unique spirit of our Firm guide the behaviors that
                        enable us to deliver on the promises we make to our
                        clients and our people.
                      </p>

                      <h4 className="widget_title">Lawreto Values</h4>
                      <p>
                        At Lawreto our culture comes to life through three core
                        values:
                      </p>
                      <ul className="point_order">
                        <li>We seize opportunities to innovate and grow</li>
                        <li>We are one firm with a shared sense of purpose</li>
                        <li>
                          We care about each other and the world around us
                        </li>
                      </ul>

                      <div className="post_gallery">
                        <div className="row">
                          <div className="col-lg-6 col-sm-6">
                            <div className="anim_box" data-aos="overlay-right">
                              <img
                                src="images/b2.png"
                                alt="Legal consultation"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-sm-6">
                            <div className="anim_box" data-aos="overlay-right">
                              <img
                                className="sm-margin-bottom"
                                src="images/b3.png"
                                alt="Legal team"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="number_box">
                        <div className="row">
                          <div className="col-12">
                            <div className="heading_title">
                              <h4 className="widget_title">
                                Case fact & evidence
                              </h4>
                              <p>
                                We guide our clients through difficult issues,
                                bringing our insight and judgment to each
                                situation. Our innovative approaches create
                                original solutions to our clients' most complex
                                domestic & multi jurisdictional deals and
                                disputes.
                              </p>
                            </div>
                          </div>
                          {NUMBER_BOX_ITEMS.map((item, index) => (
                            <NumberBoxItem key={index} item={item} />
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
                            <div
                              className="ytplay_btn"
                              onClick={handlePlayClick}
                            >
                              <i className="ion-play"></i>
                            </div>
                            <img src="images/bv.png" alt="Video thumbnail" />
                          </div>
                        </div>
                      </div>

                      <p>
                        By thinking on behalf of our clients every day, we
                        anticipate what they want, provide what they need &
                        build lasting relationships. These are the concepts that
                        shape our distinctive culture & differentiate us from
                        others.
                      </p>

                      <p>
                        Our clients every day wanticipate what they want,
                        provide what they need &
                      </p>
                    </div>

                    <div className="inner_posts"></div>
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
                            <PracticeAreaItem key={index} area={area} />
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="project_contact">
                      <div className="logo">
                        <img src="images/logo_inner.png" alt="Lawreto logo" />
                      </div>
                      <div className="project_contact_info">
                        <h4>Ensuring Justice Is our Motto</h4>
                        <img src="images/wmen.png" alt="Legal team" />
                      </div>
                      <div className="contact_inner">
                        <ContactInfoBox />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}

export default PracticeAreaDetails;
