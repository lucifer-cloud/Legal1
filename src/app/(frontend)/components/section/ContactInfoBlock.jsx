import React from 'react';

const ContactInfoBlock = ({ info }) => {
  return (
    <div className="contact_box" data-aos="fade-up">
      <div className="service_inner">
        <div className="image">
          <img src={info.icon} alt="service" />
        </div>
        <div className="content">
          <h4>{info.title}</h4>
          {info.lines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoBlock;