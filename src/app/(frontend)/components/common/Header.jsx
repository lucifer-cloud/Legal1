"use client"; // if inside app/ directory
import Link from "next/link";
import React from "react";

const Header = () => {
  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Practice", path: "/practice_area" },
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header className="header">
      <div className="header_inner">
        <div className="header_logo">
          <Link href="/" passHref>
            <img src="/images/logo.svg" alt="logo" width={150} height={50} />
          </Link>
        </div>

        <div className="header_right_content">
          {/* Top Bar */}
          <div className="header_top_content">
            <div className="header_top_left_info">
              <div className="header_top_info">
                <i className="fa fa-envelope-o"></i>
                <a href="mailto:lawretoattorney@email.com">
                  lawretoattorney@email.com
                </a>
              </div>
              <div className="header_top_info">
                <i className="fa fa-phone"></i>
                <a href="tel:+98765432122">+987 654 321 22</a>
              </div>
              <div className="header_top_info">
                <i className="fa fa-map-marker"></i>
                <span>28 Street, New York City, USA</span>
              </div>
            </div>

            <div className="header_top_info_right">
              <div className="social_icon">
                {["facebook", "twitter", "google-plus", "skype", "rss"].map(
                  (social) => (
                    <a key={social} href="#">
                      <i className={`fa fa-${social}`}></i>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="header_bottom_content">
            <nav className="mainnav">
              <ul className="main_menu">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className={`menu-item ${
                      item.submenu ? "menu-item-has-children" : ""
                    }`}
                  >
                    <Link href={item.path}>{item.title}</Link>

                    {item.submenu && (
                      <ul className="sub-menu">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex} className="menu-item">
                            <Link href={subItem.path}>{subItem.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="free_contact">
              <Link href="/contact" className="btn">
                <span>GET APPOINTMENT</span>
              </Link>
            </div>

            <button className="ma5menu__toggle" type="button">
              <i className="ion-android-menu"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
