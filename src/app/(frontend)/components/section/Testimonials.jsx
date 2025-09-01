"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      image: 'images/testi1.png',
      comma: 'images/comma.png',
      text: "I'm very satisfied with the team at Lawreto Attorneys. They are so much professional and outstanding. I'm especially grateful for my handling attorney. They take so much care of my cases that I am so grateful to them",
      name: 'MARY JANE ROSE'
    },
     {
      image: 'images/testi1.png',
      comma: 'images/comma.png',
      text: "I'm very satisfied with the team at Lawreto Attorneys. They are so much professional and outstanding. I'm especially grateful for my handling attorney. They take so much care of my cases that I am so grateful to them",
      name: 'MARY JANE ROSE'
    },{
      image: 'images/testi1.png',
      comma: 'images/comma.png',
      text: "I'm very satisfied with the team at Lawreto Attorneys. They are so much professional and outstanding. I'm especially grateful for my handling attorney. They take so much care of my cases that I am so grateful to them",
      name: 'MARY JANE ROSE'
    },
    // Add more testimonials if needed
  ];

  return (
    <section className="testimonial_padding">
      <div className="container">
        <div className="row">
          <div className="offset-lg-1 col-lg-10 col-md-12">
            <div className="swiper_testimonial">
              <Swiper
              modules={[Navigation, Pagination]}
              loop ={true}
              slidesPerView={1}
              spaceBetween={20}
               navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{
                  clickable: true,
                }}

              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="slider">
                      <div className="testimonial_inner">
                        <div className="tesmonial_inner_image">
                          <img src={testimonial.image} alt="testi" />
                          <img src={testimonial.comma} alt="comma" />
                        </div>
                        <h1>Testimonial</h1>
                        <p>{testimonial.text}</p>
                        <h6>{testimonial.name}</h6>
                      </div>
                    </div>
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
  );
};

export default Testimonials;