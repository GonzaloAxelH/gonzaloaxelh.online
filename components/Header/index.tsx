
import Link from "next/link";
import React from "react";

const Header = ({ setIsOpenSidebar }: any) => {
  const isOpen = true
  return (
    <header
      style={{maxWidth:"100vw"}}
      id="masthead"
      className="header header-3 both-types -sticky showed "
      data-header-fixed="true"
      data-fixed-initial-offset={150}
    >
      <div className="header-wrap">
        <div className="header-wrap-inner">
          <div className="left-part">
            <div className="desktop-hamburger -left">
              <button
                onClick={()=> setIsOpenSidebar(true)}
                className="icon-button hamburger"
                aria-controls="site-navigation"
                aria-expanded="false"
              >
                <i className="icon" />
              </button>
            </div>
            <div className="mobile-hamburger -left">
              <button
                className="icon-button hamburger"
                aria-controls="site-navigation"
                aria-expanded="false"
              >
                <i className="icon" />
              </button>
            </div>
            <div className="branding">
              <Link 
                className="branding-title titles-typo -undash"
                href="/"
                rel="home"
              >
                <div className="logo" style={{ display: "none" }}>
                  <img
                    src="/small_logo.png"
                    className="main-logo light-scheme-logo svg-logo"
                    alt="Ohio Theme"
                  />
                  <img
                    src="/small_logo.png"
                    className="dark-scheme-logo svg-logo"
                    alt="Ohio Theme"
                  />
                </div>
                <div className="logo-sticky" style={{ display: "flex" }}>
                  <img
                    src="/small_logo.png"
                    className="main-logo light-scheme-logo svg-logo"
                    alt="Ohio Theme"
                  />
                  <img
                    src="/small_logo.png"
                    className="dark-scheme-logo svg-logo"
                    alt="Ohio Theme"
                  />
                </div>
                <div className="logo-dynamic" style={{ display: "none" }}>
                  <span className="dark hidden">
                    <img
                      src="./About_ Creative – Ohio Theme_files/LitFhpPB-OhioLogo.svg"
                      className="svg-logo"
                      alt="Ohio Theme"
                    />
                  </span>
                  <span className="light hidden">
                    <img
                      src="/small_logo.png"
                      className="svg-logo"
                      alt="Ohio Theme"
                    />
                  </span>
                </div>
              </Link> 
            </div>
          </div>
          <div className="right-part right">
            <nav
              id="site-navigation"
              className="nav -visible"
              data-mobile-menu-second-click-link
            >
              <div className={ `mobile-overlay menu-mobile-overlay ${isOpen ? "visible" :""}`}>
                <div className="overlay" />
                <div className="close-bar">
                  <button
                    className="icon-button -overlay-button"
                    aria-label="close"
                  >
                    <i className="icon">
                      <svg
                        className="default"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
                      </svg>
                      <svg
                        className="minimal"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.7552 0.244806C16.0816 0.571215 16.0816 1.10043 15.7552 1.42684L1.42684 15.7552C1.10043 16.0816 0.571215 16.0816 0.244806 15.7552C-0.0816021 15.4288 -0.0816021 14.8996 0.244806 14.5732L14.5732 0.244806C14.8996 -0.0816019 15.4288 -0.0816019 15.7552 0.244806Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.7552 15.7552C15.4288 16.0816 14.8996 16.0816 14.5732 15.7552L0.244807 1.42684C-0.0816013 1.10043 -0.0816013 0.571215 0.244807 0.244806C0.571215 -0.0816021 1.10043 -0.0816021 1.42684 0.244806L15.7552 14.5732C16.0816 14.8996 16.0816 15.4288 15.7552 15.7552Z"
                        />
                      </svg>
                    </i>
                  </button>
                  <button
                    className="icon-button -overlay-button search-global fixed dynamic-typo btn-round-light vc_hidden-sm vc_hidden-xs dark-typo"
                    data-nav-search="true"
                  >
                    <i className="icon">
                      <svg
                        className="default"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.0515 11.3208H12.8645L18 16.4666L16.4666 18L11.3208 12.8645V12.0515L11.0429 11.7633C9.86964 12.7719 8.34648 13.3791 6.68954 13.3791C2.99485 13.3791 0 10.3842 0 6.68954C0 2.99485 2.99485 0 6.68954 0C10.3842 0 13.3791 2.99485 13.3791 6.68954C13.3791 8.34648 12.7719 9.86964 11.7633 11.0429L12.0515 11.3208ZM2.05832 6.68954C2.05832 9.25214 4.12693 11.3208 6.68954 11.3208C9.25214 11.3208 11.3208 9.25214 11.3208 6.68954C11.3208 4.12693 9.25214 2.05832 6.68954 2.05832C4.12693 2.05832 2.05832 4.12693 2.05832 6.68954Z"
                        />
                      </svg>
                      <svg
                        className="minimal"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.875 1.75C4.93997 1.75 1.75 4.93997 1.75 8.875C1.75 12.81 4.93997 16 8.875 16C12.81 16 16 12.81 16 8.875C16 4.93997 12.81 1.75 8.875 1.75ZM0.25 8.875C0.25 4.11154 4.11154 0.25 8.875 0.25C13.6385 0.25 17.5 4.11154 17.5 8.875C17.5 13.6385 13.6385 17.5 8.875 17.5C4.11154 17.5 0.25 13.6385 0.25 8.875Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.9125 13.9133C14.2054 13.6204 14.6803 13.6204 14.9732 13.9133L19.5295 18.4696C19.8224 18.7625 19.8224 19.2373 19.5295 19.5302C19.2366 19.8231 18.7617 19.8231 18.4688 19.5302L13.9125 14.9739C13.6196 14.681 13.6196 14.2062 13.9125 13.9133Z"
                        />
                      </svg>
                    </i>
                  </button>
                </div>
                <div className="holder">
                  <div id="mega-menu-wrap" className="nav-container">
                    <ul id="menu-primary" className="menu">
                      <li
                        id="nav-menu-item-17446-63cc32b1c8706"
                        className="mega-menu-item nav-item menu-item-depth-0 has-submenu"
                      >
                        <Link 
                          href="/"
                          className="menu-link -undash main-menu-link item-title"
                        >
                          <span>Home</span>
                          <div className="has-submenu-icon">
                            <i className="icon menu-plus">
                              <svg
                                width={14}
                                height={14}
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                              </svg>{" "}
                            </i>
                            <i className="menu-chevron">
                              <svg
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 24 24"
                              >
                                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                              </svg>
                            </i>
                          </div>
                        </Link> 
                        <ul
                          className="menu-depth-1 sub-menu sub-menu-wide"
                          style={{ left: "-340.212px" }}
                        >
                          <li
                            id="nav-menu-item-17451-63cc32b1c87a5"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Widgets</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-17414-63cc32b1c880b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/accordion-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Accordion</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17415-63cc32b1c886a"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/banner-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Banner</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17416-63cc32b1c88c6"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog-posts-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Blog Posts</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17417-63cc32b1c891f"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/button-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Button</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17418-63cc32b1c8976"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/call-to-action-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Call to Action</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17419-63cc32b1c89ce"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/carousel-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Carousel</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17466-63cc32b1c8a23"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/circle-progress-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Circle Progress</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17420-63cc32b1c8a7a"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/clients-logo-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Clients Logo</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17467-63cc32b1c8ad0"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/compare-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Compare</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17452-63cc32b1c8b2b"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Widgets</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-17421-63cc32b1c8b83"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/contact-form-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Contact Form</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17422-63cc32b1c8bda"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/countdown-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Countdown</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17423-63cc32b1c8c30"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/counter-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Counter</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17444-63cc32b1c8c86"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/dynamic-text-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Dynamic Text</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17424-63cc32b1c8cdb"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/fullscreen-slider-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Fullscreen Slider</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17425-63cc32b1c8d30"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/gallery-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Gallery</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17426-63cc32b1c8d86"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/google-map-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Google Map</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17427-63cc32b1c8ddb"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/heading-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Heading</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-19102-63cc32b1c8e31"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/horizontal-accordion-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Horizontal Accordion</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17448-63cc32b1c8e8a"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Widgets</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-17428-63cc32b1c8ee1"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/icon-box-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Icon Box</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17429-63cc32b1c8f37"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/instagram-feed-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Instagram Feed</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17430-63cc32b1c8f8d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/message-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Message</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17431-63cc32b1c8fe2"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/parallax-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Parallax</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17432-63cc32b1c9036"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio-projects-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Portfolio Projects</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17433-63cc32b1c908c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/pricing-list-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Pricing List</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17434-63cc32b1c9105"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/pricing-table-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Pricing Table</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17435-63cc32b1c915b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/process-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Process</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17436-63cc32b1c91b1"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/progress-bar-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Progress Bar</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17450-63cc32b1c9215"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Widgets</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-19367-63cc32b1c9283"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/services-table-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Services Table</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-19580-63cc32b1c92dc"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/shop-category-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Shop Category</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17437-63cc32b1c9333"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/social-networks-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Social Networks</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17440-63cc32b1c9388"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/subscribe-form-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Subscribe Form</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17441-63cc32b1c93dd"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/tabs-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Tabs</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-216758-63cc32b1c9433"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/team-group-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Team Group</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17442-63cc32b1c9488"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/team-member-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Team Member</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17443-63cc32b1c94dd"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/testimonial-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Testimonial</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17445-63cc32b1c9532"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/video-shortcode/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Video</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-20844-63cc32b1c958c"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Menus</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-20843-63cc32b1c95e4"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/header-v1/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Standard</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-20842-63cc32b1c963c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/header-v2/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Centered</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-20841-63cc32b1c9692"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/header-v3/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>With Center Logo</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-20840-63cc32b1c96e7"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/header-v4/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>With Top Logo</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-20839-63cc32b1c973c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/header-v5/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Sidebar Wide</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-20838-63cc32b1c9791"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/header-v6/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Sidebar Top Hamburger</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-217554-63cc32b1c97e6"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/header-v7/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Sidebar Center Hamburger</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17447-63cc32b1c983e"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Hamburger Menus</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-49263-63cc32b1c9896"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/standard-hamburger/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Standard Hamburger</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-49262-63cc32b1c98eb"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/centered-hamburger/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Centered Hamburger</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-49261-63cc32b1c9940"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/creative-hamburger/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Creative Hamburger</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="nav-menu-item-17471-63cc32b1c99a4"
                        className="mega-menu-item nav-item menu-item-depth-0 has-submenu"
                      >
                        <Link 
                          href="/blog"
                          className="menu-link -undash main-menu-link item-title"
                        >
                          <span>Blog</span>
                          <div className="has-submenu-icon">
                            <i className="icon menu-plus">
                              <svg
                                width={14}
                                height={14}
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                              </svg>{" "}
                            </i>
                            <i className="menu-chevron">
                              <svg
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 24 24"
                              >
                                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                              </svg>
                            </i>
                          </div>
                        </Link> 
                        <ul
                          className="menu-depth-1 sub-menu sub-menu-wide"
                          style={{ left: "-438.649px" }}
                        >
                          <li
                            id="nav-menu-item-17472-63cc32b1c9a0e"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Archive</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-17537-63cc32b1c9a6f"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/classic/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17554-63cc32b1c9ac5"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/classic-contained/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic Contained</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17812-63cc32b1c9b1c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/classic-metro/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic Metro</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17553-63cc32b1c9b71"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/minimal/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Minimal</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17811-63cc32b1c9bc6"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/minimal-metro/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Minimal Metro</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-81838-63cc32b1c9c1c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/portfolio/caption-cursor/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Caption Cursor</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-81837-63cc32b1c9c71"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/portfolio/caption-cursor-metro/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Caption Cursor Metro</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-221781-63cc32b1c9cc7"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/portfolio/sticky-contained/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Sticky Contained</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-221788-63cc32b1c9d1d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/portfolio/sticky-metro/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Sticky Metro</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17474-63cc32b1c9d76"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Sliders</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-17594-63cc32b1c9dcd"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/horizontal-slider/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Horizontal Slider</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17801-63cc32b1c9e23"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/vertical-slider/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Vertical Slider</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17806-63cc32b1c9e78"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/smooth-scroll-split-screen/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Smooth Scroll Split Screen</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-222956-63cc32b1c9ed1"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/portfolio/interactive-links/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Interactive Links</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17890-63cc32b1c9f26"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/horizontal-carousel/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Horizontal Carousel</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-18192-63cc32b1c9f7b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/onepage-with-smooth-scroll/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Onepage with Smooth Scroll</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-18197-63cc32b1c9fd1"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/scattered-with-smooth-scroll/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Scattered with Smooth Scroll</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-18266-63cc32b1ca027"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/centered-with-smooth-scroll/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Centered with Smooth Scroll</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-217746-63cc32b1ca099"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/demo6/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Vertical Interactive Links</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17473-63cc32b1ca0f3"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Single Project</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-222634-63cc32b1ca14b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/project/worlds-relays/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Details with Left Gallery</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-19324-63cc32b1ca1af"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/project/unicolor-87/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Details with Right Gallery</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-222646-63cc32b1ca205"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/project/diseno-grafico/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Details with Bottom Gallery</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-19319-63cc32b1ca25b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/project/dinamica/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Split Screen Left Gallery</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-19321-63cc32b1ca2b0"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/project/stickers-pack/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Split Screen Right Gallery</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-18284-63cc32b1ca305"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/project/spacing-it-easier-to-get-things-done/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Slider with Details</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-20952-63cc32b1ca35b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/project/aws-non-profit-cloud-solutions/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Slider with Custom Details</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-20663-63cc32b1ca3b0"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/project/diseno-deporte/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Asymmetric with Custom Details</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-81840-63cc32b1ca407"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/project/salon-de-diseno-de-interiores/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Slider with Centered Details</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17477-63cc32b1ca45f"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Pagination Types</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-17700-63cc32b1ca4b7"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/standard-pagination/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Standard</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17701-63cc32b1ca50d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/portfolio/standard-pagination-outlined/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Standard: Outlined</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-222169-63cc32b1ca563"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/portfolio/standard-pagination-text/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Standard: Text</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17699-63cc32b1ca5cf"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/load-more-pagination/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Load More</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-222165-63cc32b1ca62e"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/portfolio/load-more-pagination-outlined/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Load More: Outlined</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-222168-63cc32b1ca684"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/portfolio/load-more-pagination-text/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Load More: Text</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17698-63cc32b1ca6da"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/lazy-load-pagination/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Lazy Load</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-222167-63cc32b1ca730"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/portfolio/lazy-load-pagination-outlined/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Lazy Load: Outlined</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-222166-63cc32b1ca786"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/portfolio/lazy-load-pagination-text/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Lazy Load: Text</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17475-63cc32b1ca7e0"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Hover Effects</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-17919-63cc32b1ca838"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/classic-image-scale/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic: Image Scale</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17918-63cc32b1ca890"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/classic-image-overlay/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic: Image Overlay</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17917-63cc32b1ca8e5"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/classic-image-greyscale/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic: Image Greyscale</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17916-63cc32b1ca93a"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/portfolio/classic-image-transition/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic: Image Transition</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17936-63cc32b1ca98f"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/minimal-image-scale/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Minimal: Image Scale</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17935-63cc32b1ca9e5"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/minimal-image-overlay/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Minimal: Image Overlay</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17934-63cc32b1caa3a"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/minimal-image-greyscale/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Minimal: Image Greyscale</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17933-63cc32b1caa8f"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/portfolio/minimal-image-transition/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Minimal: Image Transition</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17476-63cc32b1caae7"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Appear Effects</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-17712-63cc32b1cab3f"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/fade-up-effect/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Fade Up Effect</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17715-63cc32b1cab94"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/fade-down-effect/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Fade Down Effect</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17714-63cc32b1cabe9"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/fade-left-effect/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Fade Left Effect</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17713-63cc32b1cac3e"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/fade-right-effect/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Fade Right Effect</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17733-63cc32b1cac95"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/flip-up-effect/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Flip Up Effect</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17732-63cc32b1cacea"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/flip-down-effect/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Flip Down Effect</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17731-63cc32b1cad3f"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/zoom-in-effect/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Zoom In Effect</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17730-63cc32b1cad94"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/portfolio/zoom-out-effect/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Zoom Out Effect</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="nav-menu-item-27-63cc32b1cadf9"
                        className="mega-menu-item nav-item menu-item-depth-0 has-submenu"
                      >
                        <Link 
                          href="/proyects"
                          className="menu-link -undash main-menu-link item-title"
                        >
                          <span>Proyects</span>
                          <div className="has-submenu-icon">
                            <i className="icon menu-plus">
                              <svg
                                width={14}
                                height={14}
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                              </svg>{" "}
                            </i>
                            <i className="menu-chevron">
                              <svg
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 24 24"
                              >
                                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                              </svg>
                            </i>
                          </div>
                        </Link> 
                        <ul
                          className="menu-depth-1 sub-menu sub-menu-wide"
                          style={{ left: "-534.946px" }}
                        >
                          <li
                            id="nav-menu-item-17478-63cc32b1cae54"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Archive</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-17615-63cc32b1caead"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/classic/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17737-63cc32b1caf02"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/classic-contained/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic Contained</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17942-63cc32b1caf57"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/classic-metro/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic Metro</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17970-63cc32b1cafac"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/minimal/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Minimal</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17969-63cc32b1cb020"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/minimal-metro/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Minimal Metro</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-18098-63cc32b1cb077"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/split/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Split</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-18097-63cc32b1cb0cc"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/split-contained/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Split Contained</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-221016-63cc32b1cb12e"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/split-metro/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Split Metro</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-217606-63cc32b1cb189"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Archive</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-18117-63cc32b1cb1e3"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/inner/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Inner</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-18118-63cc32b1cb238"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/inner-metro/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Inner Metro</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-217608-63cc32b1cb28d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/compact/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Compact</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-217619-63cc32b1cb2e3"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/compact-contained/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Compact Contained</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-221322-63cc32b1cb338"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/compact-metro/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Compact Metro</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-217607-63cc32b1cb38d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/blog/simple/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Simple</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-217624-63cc32b1cb3e3"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/blog/simple-contained/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Simple Contained</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17479-63cc32b1cb43b"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Single Post</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-18307-63cc32b1cb493"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/standard/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Standard</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-20901-63cc32b1cb4e9"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/creativo-para-jovenes-a-designers-ui-ux-complete-checklist/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Standard: Featured Image</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-20902-63cc32b1cb559"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/fullscreen-post/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Standard: Fullscreen</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-221072-63cc32b1cb5b2"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/demo31/booktips-eight-tips-for-service-design-with-expert-users/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Split</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-221073-63cc32b1cb609"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/demo31/creativo-para-jovenes-the-designers-ui-ux-checklist/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Split: Featured Image</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17481-63cc32b1cb663"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Pagination Types</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-17689-63cc32b1cb6bc"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/standard-pagination/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Standard</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-221227-63cc32b1cb712"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/blog/standard-pagination-outlined/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Standard: Outlined</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-221232-63cc32b1cb769"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/blog/standard-pagination-text/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Standard: Text</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17648-63cc32b1cb7be"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/load-more-pagination/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Load More</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-221249-63cc32b1cb814"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/blog/load-more-pagination-outlined/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Load More: Outlined</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-221253-63cc32b1cb86a"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/blog/load-more-pagination-text/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Load More: Text</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17647-63cc32b1cb8c0"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/lazy-load-pagination/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Lazy Load</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-221266-63cc32b1cb915"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/blog/lazy-load-pagination-outlined/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Lazy Load: Outlined</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-221268-63cc32b1cb96a"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/blog/lazy-load-pagination-text/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Lazy Load: Text</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17483-63cc32b1cb9d9"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Hover Effects</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-17995-63cc32b1cba35"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/classic-none/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic: None</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17994-63cc32b1cba8c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/classic-image-scale/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic: Image Scale</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17997-63cc32b1cbae2"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/classic-image-overlay/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic: Image Overlay</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17996-63cc32b1cbb38"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/classic-image-greyscale/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic: Image Greyscale</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17991-63cc32b1cbb93"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/minimal-none/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Minimal: None</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17990-63cc32b1cbbe8"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/minimal-image-scale/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Minimal: Image Scale</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17993-63cc32b1cbc3e"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/minimal-image-overlay/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Minimal: Image Overlay</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17992-63cc32b1cbc93"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/minimal-image-greyscale/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Minimal: Image Greyscale</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17482-63cc32b1cbcec"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Appear Effects</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-17671-63cc32b1cbd43"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/fade-up-effect/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Fade Up Effect</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17668-63cc32b1cbd98"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/fade-down-effect/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Fade Down Effect</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17669-63cc32b1cbdee"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/fade-left-effect/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Fade Left Effect</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17670-63cc32b1cbe43"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/fade-right-effect/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Fade Right Effect</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17673-63cc32b1cbe99"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/flip-up-effect/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Flip Up Effect</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17672-63cc32b1cbeee"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/flip-down-effect/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Flip Down Effect</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17675-63cc32b1cbf43"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/zoom-in-effect/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Zoom In Effect</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17674-63cc32b1cbfb3"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/blog/zoom-out-effect/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Zoom Out Effect</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="nav-menu-item-31-63cc32b1cc019"
                        className="mega-menu-item nav-item menu-item-depth-0 has-submenu"
                      >
                        <Link 
                          href="/contact"
                          className="menu-link -undash main-menu-link item-title"
                        >
                          <span>Contact</span>
                          <div className="has-submenu-icon">
                            <i className="icon menu-plus">
                              <svg
                                width={14}
                                height={14}
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                              </svg>{" "}
                            </i>
                            <i className="menu-chevron">
                              <svg
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 24 24"
                              >
                                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                              </svg>
                            </i>
                          </div>
                        </Link> 
                        <ul
                          className="menu-depth-1 sub-menu sub-menu-wide"
                          style={{ left: "-600.774px" }}
                        >
                          <li
                            id="nav-menu-item-240994-63cc32b1cc075"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Archive</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-241000-63cc32b1cc0dc"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/shop/classic/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-240999-63cc32b1cc147"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/shop/classic-contained/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic Contained</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-240998-63cc32b1cc1a0"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/shop/classic-metro/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic Metro</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-241652-63cc32b1cc1f7"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/shop/minimal/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Minimal</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-241651-63cc32b1cc24d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/shop/minimal-contained/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Minimal Contained</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-241650-63cc32b1cc2a3"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/shop/minimal-metro/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Minimal Metro</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-240995-63cc32b1cc2fc"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Hover Effects</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-241003-63cc32b1cc355"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/shop/classic-image-scale/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic: Image Scale</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-241002-63cc32b1cc3ab"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/shop/classic-image-overlay/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic: Image Overlay</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-241001-63cc32b1cc401"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/shop/classic-image-greyscale/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic: Image Greyscale</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-241004-63cc32b1cc457"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/shop/classic-image-transition/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic: Image Transition</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-241733-63cc32b1cc4ae"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/shop/minimal-image-scale/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Minimal: Image Scale</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-241732-63cc32b1cc503"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/shop/minimal-image-overlay/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Minimal: Image Overlay</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-241731-63cc32b1cc559"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/shop/minimal-image-greyscale/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Minimal: Image Greyscale</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-241734-63cc32b1cc5af"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/shop/minimal-image-transition/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Minimal: Image Transition</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-240996-63cc32b1cc607"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Single Product</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-241005-63cc32b1cc65f"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/product/gosta-shape-armchair/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Sticky Gallery</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-241006-63cc32b1cc6b4"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/product/gosta-upholstery-chair/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Sticky Gallery Reflected</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-241007-63cc32b1cc70a"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/product/gosta-upholstery-stool/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Split Screen</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-241008-63cc32b1cc75f"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/product/johanna-shape-armchair/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Split Screen Reflected</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-241009-63cc32b1cc7b4"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/product/johanna-upholstery-chair/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic Gallery</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-241010-63cc32b1cc80a"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/product/johanna-upholstery-stool/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic Gallery Reflected</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-241011-63cc32b1cc860"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/product/modern-upholstery-stool/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Grid Gallery</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-241012-63cc32b1cc8b5"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/product/modern-shape-armchair/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Grid Gallery Reflected</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17556-63cc32b1cc90e"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Product Types</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-17558-63cc32b1cc965"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/product/modern-upholstery-stool/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Standard Product</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-43318-63cc32b1cc9bb"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/product/modern-upholstery-chair/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Grouped Product</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17560-63cc32b1cca10"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/product/gosta-shape-armchair/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Variable Product</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17561-63cc32b1cca66"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/product/modern-shape-armchair/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Virtual Product</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17562-63cc32b1ccabb"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/product/johanna-upholstery-stool/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>External/Affiliate Product</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-241016-63cc32b1ccb10"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/product/gosta-upholstery-stool/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Downloadable Product</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17563-63cc32b1ccb66"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/product/johanna-upholstery-chair/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>On Sale Product</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17564-63cc32b1ccbbb"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/product/johanna-shape-armchair/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Out of Stock Product</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-240997-63cc32b1ccc14"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Shop Pages</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-241041-63cc32b1ccc6b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/shop/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Shop Layout</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-28-63cc32b1cccc2"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/cart/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Cart</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-29-63cc32b1ccd17"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/checkout/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Checkout</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-30-63cc32b1ccd6d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/my-account/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>My Account</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-17557-63cc32b1ccdc2"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/my-account/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Sign In / Sign Up</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-18267-63cc32b1cce1b"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/shop/"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Category Layout</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-241039-63cc32b1cce72"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/shop/classic-category/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Classic Category</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-241038-63cc32b1ccec8"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/shop/offset-category/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Offset Category</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="nav-menu-item-18606-63cc32b1ccf40"
                        className="mega-menu-item nav-item menu-item-depth-0 current-menu-ancestor has-submenu"
                      >
                        <Link 
                          href="/tutorials"
                          className="menu-link -undash main-menu-link item-title"
                        >
                          <span>Tutorials</span>
                          <div className="has-submenu-icon">
                            <i className="icon menu-plus">
                              <svg
                                width={14}
                                height={14}
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                              </svg>{" "}
                            </i>
                            <i className="menu-chevron">
                              <svg
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 24 24"
                              >
                                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                              </svg>
                            </i>
                          </div>
                        </Link> 
                        <ul className="menu-depth-1 sub-menu">
                          <li
                            id="nav-menu-item-20920-63cc32b1ccf9e"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 current-menu-ancestor current-menu-parent has-submenu"
                          >
                            <Link 
                              href="/about/"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>About</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-19825-63cc32b1ccff6"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/about-ver4/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>About Us</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-19823-63cc32b1cd04d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/about-ver2/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>About Classic</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-19826-63cc32b1cd0af"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/about-ver5/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Hey, we’re Ohio</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-19822-63cc32b1cd105"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/about-ver1/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Our Bureau</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-19824-63cc32b1cd15d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/about-ver3/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Our Studio</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-81832-63cc32b1cd1b3"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 current-menu-item new"
                              >
                                <Link 
                                  href="/about-ver6/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>About Creative</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-20944-63cc32b1cd20c"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/contact/"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Contact</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-20803-63cc32b1cd263"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/contact-us-ver4/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Contact: Agency</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-20802-63cc32b1cd2b8"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/contact-us-ver5/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Contact: Blocks</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-20801-63cc32b1cd30d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/contact-us-ver2/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Contact: Classic</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-20800-63cc32b1cd363"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/contact-us-ver3/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Contact: Corporate</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-20799-63cc32b1cd3b8"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/contact-us-ver1/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Contact: Simple</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-81831-63cc32b1cd40d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <Link 
                                  href="/contact-us-ver6/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Contact: Creative</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-20731-63cc32b1cd466"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu"
                          >
                            <Link 
                              href="/about-ver6/#"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Special Pages</span>
                              <div className="has-submenu-icon">
                                <i className="icon menu-plus">
                                  <svg
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                                  </svg>{" "}
                                </i>
                                <i className="menu-chevron">
                                  <svg
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    height={10}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                                  </svg>
                                </i>
                              </div>
                            </Link> 
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-20733-63cc32b1cd4be"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/adadad/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>404 Page</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-20735-63cc32b1cd514"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/demo30/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Coming Soon</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-20734-63cc32b1cd569"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/?s=identity"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Search Results</span>
                                </Link> 
                              </li>
                              <li
                                id="nav-menu-item-20732-63cc32b1cd5bf"
                                className="mega-menu-item sub-nav-item menu-item-depth-2"
                              >
                                <Link 
                                  href="/my-account/"
                                  className="menu-link -undash sub-menu-link"
                                >
                                  <span>Sign In / Sign Up</span>
                                </Link> 
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="nav-menu-item-220972-63cc32b1cd622"
                        className="mega-menu-item nav-item menu-item-depth-0 has-submenu"
                      >
                        <Link 
                          href="/community"
                          className="menu-link -undash main-menu-link item-title"
                        >
                          <span>Community</span>
                          <div className="has-submenu-icon">
                            <i className="icon menu-plus">
                              <svg
                                width={14}
                                height={14}
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" />
                              </svg>{" "}
                            </i>
                            <i className="menu-chevron">
                              <svg
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 24 24"
                              >
                                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                              </svg>
                            </i>
                          </div>
                        </Link> 
                        <ul className="menu-depth-1 sub-menu">
                          <li
                            id="nav-menu-item-25539-63cc32b1cd679"
                            className="mega-menu-item sub-nav-item menu-item-depth-1"
                          >
                            <Link 
                              href="/ohio"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Documentation</span>
                            </Link> 
                          </li>
                          <li
                            id="nav-menu-item-220973-63cc32b1cd6cf"
                            className="mega-menu-item sub-nav-item menu-item-depth-1"
                          >
                            <Link 
                              href="/"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Help Center</span>
                            </Link> 
                          </li>
                          <li
                            id="nav-menu-item-220974-63cc32b1cd724"
                            className="mega-menu-item sub-nav-item menu-item-depth-1"
                          >
                            <Link 
                              href="/"
                              className="menu-link -undash sub-menu-link"
                            >
                              <span>Submit a Ticket</span>
                            </Link> 
                          </li>
                        </ul>
                      </li>
                     
                    </ul>
                  </div>
                  <div className="copyright">
                    <p>
                      © 2016-2023
                      <Link  href="#" target="_blank">
                        Gonzalo
                      </Link> 
                      . All rights reserved |
                      <Link  target="_blank" href="#">
                        <b>Purchase</b>
                      </Link> 
                    </p>
                    <p>
                      <Link  href="#" target="_blank">
                        Security
                      </Link> 
                      |
                      <Link  href="#" target="_blank">
                        Privacy &amp; Cookie Policy
                      </Link> 
                      |
                      <Link  href="#" target="_blank">
                        Terms of Service
                      </Link> 
                    </p>
                  </div>
                  <select className="lang-dropdown -small">
                    <option
                      className="active"
                      selected={true}
                      value="/about-ver6/"
                    >
                      Eng
                    </option>
                  </select>
                </div>
                <div className="social-bar dynamic-typo dark-typo">
                  <ul className="social-bar-holder titles-typo -small-t -unlist vc_hidden-md">
                    <li>Follow Us</li>
                    <li>—</li>
                    <li>
                      <Link 
                        href="/Gonzalo/"
                        target="_blank"
                        rel="nofollow"
                        className="-undash facebook"
                      >
                        Fb.
                      </Link> 
                    </li>
                    <li>
                      <Link 
                        href="/Gonzalo/"
                        target="_blank"
                        rel="nofollow"
                        className="-undash behance"
                      >
                        Be.
                      </Link> 
                    </li>
                    <li>
                      <Link 
                        href="/Gonzalo/"
                        target="_blank"
                        rel="nofollow"
                        className="-undash youtube"
                      >
                        Yt.
                      </Link> 
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <ul className="menu-optional -unlist">
              <li className="vc_hidden-xs vc_hidden-sm">
                <select className="lang-dropdown -small">
                  <option
                    className="active"
                    selected={true}
                    value="/about-ver6/"
                  >
                    Eng
                  </option>
                </select>
              </li>
              <li className="icon-button-holder">
                <Link 
                  className="icon-button favorites-global wishlist"
                  href="/wishlist/?wishlist-action=user"
                >
                  <i className="icon">
                    <svg
                      className="default"
                      width={20}
                      height={18}
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.5 0C12.76 0 11.09 0.794551 10 2.05014C8.91 0.794551 7.24 0 5.5 0C2.42 0 0 2.37384 0 5.3951C0 9.103 3.4 12.1243 8.55 16.715L10 18L11.45 16.7052C16.6 12.1243 20 9.103 20 5.3951C20 2.37384 17.58 0 14.5 0ZM10.1 15.2534L10 15.3515L9.9 15.2534C5.14 11.0256 2 8.22997 2 5.3951C2 3.43324 3.5 1.96185 5.5 1.96185C7.04 1.96185 8.54 2.93297 9.07 4.27684H10.94C11.46 2.93297 12.96 1.96185 14.5 1.96185C16.5 1.96185 18 3.43324 18 5.3951C18 8.22997 14.86 11.0256 10.1 15.2534Z" />
                    </svg>
                  </i>
                </Link> 
              </li>
              <li className="icon-button-holder">
                <div className="cart-button">
                  <span className="cart-button-total">
                    <Link 
                      className="cart-customlocation -unlink"
                      href="/cart/"
                    >
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                           
                          </span>
                         
                        </bdi>
                      </span>
                    </Link> 
                  </span>
                  <span className="holder">
                    <button className="icon-button cart" aria-label="cart">
                    
                    </button>
                    
                  </span>
                  <div className="cart-mini">
                    <div className="headline">
                      <h5 className="title">Cart review</h5>
                      <button
                        className="icon-button -small clb-close -reset"
                        aria-label="close"
                      >
                        <i className="icon">
                          <svg
                            className="default"
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
                          </svg>
                          <svg
                            className="minimal"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15.7552 0.244806C16.0816 0.571215 16.0816 1.10043 15.7552 1.42684L1.42684 15.7552C1.10043 16.0816 0.571215 16.0816 0.244806 15.7552C-0.0816021 15.4288 -0.0816021 14.8996 0.244806 14.5732L14.5732 0.244806C14.8996 -0.0816019 15.4288 -0.0816019 15.7552 0.244806Z"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15.7552 15.7552C15.4288 16.0816 14.8996 16.0816 14.5732 15.7552L0.244807 1.42684C-0.0816013 1.10043 -0.0816013 0.571215 0.244807 0.244806C0.571215 -0.0816021 1.10043 -0.0816021 1.42684 0.244806L15.7552 14.5732C16.0816 14.8996 16.0816 15.4288 15.7552 15.7552Z"
                            />
                          </svg>
                        </i>
                      </button>
                    </div>
                    <div className="widget_shopping_cart_content">
                      <p className="woocommerce-mini-cart__empty-message">
                        No products in the cart.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="close-menu" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
