// components/Footer.tsx (or .js)
import Link from "next/link";

const Footer = () => {
  const practiceAreas = [
    { title: 'Legal Consultation', path: '/practice_area' },
    { title: 'Suit Management', path: '/practice_area_details' },
  ];

  const usefulLinks = [
    { title: 'About Us', path: '/about' },
    { title: 'Services', path: '/practice_area' },
  ];

  return (
    <footer className="footer">
      <div className="footer_above">
        <div className="container">
          <div className="row">
            
            {/* Logo */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="footer_widget footer_widget_padding">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo_foot.svg" alt="Logo" />
                  </Link>
                </div>
                <p>Lawreto is the most prominent Law Firm in USA...</p>
              </div>
            </div>

            {/* Practice Areas */}
            <div className="col-lg-2 col-md-6 col-sm-12">
              <h4 className="widget_title">Practice Area</h4>
              <ul className="footer_menu">
                {practiceAreas.map((item, index) => (
                  <li key={index}>
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div className="col-lg-2 col-md-6 col-sm-12">
              <h4 className="widget_title">Useful Links</h4>
              <ul className="footer_menu">
                {usefulLinks.map((item, index) => (
                  <li key={index}>
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <h4 className="widget_title">Keep In Touch</h4>
              <ul>
                <li><i className="fa fa-map-marker"></i> 28 Street, New York City, USA</li>
                <li><i className="fa fa-envelope"></i> lawretoattorney@email.com</li>
                <li><i className="fa fa-phone"></i> +987 654 321 22</li>
                <li><i className="fa fa-clock-o"></i> Monday - Friday (9.00am - 9.00pm)</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="container">
          <div className="footer_bottom_inner">
            <div className="copyright">
              <p>©2022 <a href="https://themeforest.net/user/wpthemebooster">wpthemebooster</a> All rights reserved</p>
            </div>
            <div className="footer_nav_bottom">
              <ul>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="totop">
              <a href="#"><i className="ion-ios-arrow-up"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
