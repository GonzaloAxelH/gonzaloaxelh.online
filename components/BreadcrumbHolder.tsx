import React from "react";

const BreadcrumbHolder = ({ category, title }: any) => {
  return (
    <div className="page-container" style={{ paddingLeft: "0" }}>
      <div className="breadcrumb-holder">
        <nav aria-label="breadcrumb">
          <ol
            style={{padding:"0"}}
            className="breadcrumb -unlist"
            itemScope
            itemType="http://schema.org/BreadcrumbList"
          >
            <li
              className="breadcrumb-item"
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
            >
              <a itemProp="item" href="https://ohio.clbthemes.com/">
                <span itemProp="name">Blog</span>
              </a>
              <svg
                className="default"
                width={5}
                height={9}
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 14.5697L1.36504 16L9 8L1.36504 0L0 1.4303L6.26992 8L0 14.5697V14.5697Z" />
              </svg>
              <meta itemProp="position" content="1" />
            </li>
            <li
              className="breadcrumb-item"
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
            >
              <a
                itemProp="item"
                href="https://ohio.clbthemes.com/category/digital/"
              >
                <span itemProp="name">{category}</span>
              </a>
              <svg
                className="default"
                width={5}
                height={9}
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 14.5697L1.36504 16L9 8L1.36504 0L0 1.4303L6.26992 8L0 14.5697V14.5697Z" />
              </svg>
              <meta itemProp="position" content="2" />
            </li>
            <li
              className="breadcrumb-item"
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
            >
              <span itemProp="name" className="active">
                {title}
              </span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default BreadcrumbHolder;
