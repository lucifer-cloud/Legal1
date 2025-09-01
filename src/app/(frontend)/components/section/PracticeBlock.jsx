import React from "react";
const PracticeBlock = ({service,size='col-lg-6'}) => {
  return (
    <div  className={size}>
      <div className="service_box" data-aos="fade-up">
        <div className="hover_image">
          <img src={service?.hoverImage} alt="service" />
        </div>
        <div className="service_inner">
          <div className="image">
            <img src={service?.image} alt="service" />
          </div>
          <div className="content">
            <h4>{service?.title}</h4>
            <p>{service?.description}</p>
            <a href={service?.link} className="btn_service">
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PracticeBlock