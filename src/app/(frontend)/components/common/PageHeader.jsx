import React from 'react';
import Link from "next/link";

const PageHeader = ({ title, currentPage, homeLink = "/" }) => {
  return (
    <div className="page_header">
      <div className="page_header_content">
        <div className="container">
          <h2 className="heading">{title}</h2>
          <ul className="breadcrumb">
            <li><Link href={homeLink}>Home</Link></li>
            <li className="active">{currentPage}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
