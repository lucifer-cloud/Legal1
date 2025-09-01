import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';

const Portfolio = () => {
  const gridRef = useRef(null);
  const iso = useRef(null);
  const [filterKey, setFilterKey] = useState('*');

  const portfolioItems = [
    {
      image: '../assets/images/1_2.png',
      category: 'criminal',
      title: 'Defamation Case Between Mr. John & Mrs Mellisa',
      link: 'case_details.html',
    },
    {
      image: 'images/2_2.png',
      category: 'violence',
      title: 'Domestic Violence Case Between Mr. Adam & Mrs Sara',
      link: 'case_details.html',
    },
    // Add more items with different categories if needed
  ];

  useEffect(() => {
    iso.current = new Isotope(gridRef.current, {
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer',
      },
    });

    return () => iso.current.destroy();
  }, []);

  useEffect(() => {
    if (iso.current) {
      iso.current.arrange({ filter: filterKey === '*' ? '*' : `.${filterKey}` });
    }
  }, [filterKey]);

  const filterButtons = [
    { label: 'All', filter: '*' },
    { label: 'Criminal Case', filter: 'criminal' },
    { label: 'Civil Suit', filter: 'civil' },
    { label: 'Domestic Violence', filter: 'violence' },
    { label: 'Murder', filter: 'murder' },
  ];

  return (
    <>
      <section className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading_common text-center">
                <h5>OUR PORTFOLIO</h5>
                <h3>How We Solved Case</h3>
                <h1>Case Study</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="effect-classic">
        <div className="container-fluid">
          <div className="portfolio-filters-content">
            <div className="filters-button-group">
              {filterButtons.map((btn, index) => (
                <button
                  key={index}
                  className={`button ${filterKey === btn.filter ? 'is-checked' : ''}`}
                  onClick={() => setFilterKey(btn.filter)}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-4 gutter-20 clearfix" ref={gridRef}>
            <div className="grid-sizer"></div>
            {portfolioItems.map((item, index) => (
              <div key={index} className={`grid-item ${item.category}`}>
                <div className="thumb">
                  <img className="item_image" src={item.image} alt="case" />
                  <div className="works-info works_info_bg">
                    <div className="label-text">
                      <h4>{item.title}</h4>
                      <h6><a href={item.link}>{item.category}</a></h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
