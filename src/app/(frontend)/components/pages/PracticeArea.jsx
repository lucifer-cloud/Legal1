import React from "react";
import PageHeader from "../common/PageHeader";
import  PracticeBlock  from "../section/PracticeBlock";
import Newsletter from "../common/Newsletter";
export default function PracticeArea() {
      const services = [
    {
      hoverImage: 'images/h_s_1.png',
      image: 'images/s1.png',
      title: 'Law Consultation',
      description: "We are passionate advocates for our clients' rights...",
      link: '/practice_area_details'
    },
    {
      hoverImage: 'images/h_s_1.png',
      image: 'images/s2.png',
      title: 'Suit Management',
      description: "We are passionate advocates for our clients' rights...",
      link: '/practice_area_details'
    },
    {
      hoverImage: 'images/h_s_1.png',
      image: 'images/s3.png',
      title: 'Legal Protection',
      description: "We are passionate advocates for our clients' rights...",
      link: '/practice_area_details'
    },
    {
      hoverImage: 'images/h_s_1.png',
      image: 'images/s4.png',
      title: 'Claim Settlement',
      description: "We are passionate advocates for our clients' rights...",
      link: '/practice_area_details'
    },{
      hoverImage: 'images/h_s_1.png',
      image: 'images/s3.png',
      title: 'Legal Protection',
      description: "We are passionate advocates for our clients' rights...",
      link: '/practice_area_details'
    },
    {
      hoverImage: 'images/h_s_1.png',
      image: 'images/s4.png',
      title: 'Claim Settlement',
      description: "We are passionate advocates for our clients' rights...",
      link: '/practice_area_details'
    }
  ];
  return (
    <>
      <PageHeader title={"Practice Area"} currentPage={"Practice Area"} />
      <section className="service service_bg service_home_padding">
            <div className="service_another_bg">
              <div className="container">
                <div className="row">
                 <div className="col-lg-12">
                    <div className="row">
                      {services.map((item, index) => (
                       <PracticeBlock service={item} key={index} size={"col-lg-4"}/>
                      ))}
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
