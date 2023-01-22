import React from "react";

const Header = ({setIsOpenSidebar}:any) => {

  return (
    <header
      id="masthead"
      className="header header-3 both-types"
      data-header-fixed="true"
      data-fixed-initial-offset={150}
    >
      <div className="header-wrap">
        <div className="header-wrap-inner">
          <div className="left-part">
            <div className="desktop-hamburger -left">
              <button
                className="icon-button hamburger"
                aria-controls="site-navigation"
                aria-expanded="false"
              >
                <i className="icon" />
              </button>
            </div>
            <div onClick={()=> setIsOpenSidebar(true)} className="mobile-hamburger -left">
              <button
                className="icon-button hamburger"
                aria-controls="site-navigation"
                aria-expanded="false"
              >
                <i className="icon" />
              </button>
            </div>
            <div className="branding">
              <a
                className="branding-title titles-typo -undash"
                href="https://ohio.clbthemes.com/"
                rel="home"
              >
                <div className="logo">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/LitFhpPB-OhioLogo.svg"
                    className="main-logo light-scheme-logo svg-logo"
                    alt="Ohio Theme"
                  />
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/Lb11lpeY-OhioLogoInverse.svg"
                    className="dark-scheme-logo svg-logo"
                    alt="Ohio Theme"
                  />
                </div>
                <div className="logo-sticky">
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/LitFhpPB-OhioLogo.svg"
                    className="main-logo light-scheme-logo svg-logo"
                    alt="Ohio Theme"
                  />
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/Lb11lpeY-OhioLogoInverse.svg"
                    className="dark-scheme-logo svg-logo"
                    alt="Ohio Theme"
                  />
                </div>
                <div className="logo-dynamic">
                  <span className="dark hidden">
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/LitFhpPB-OhioLogo.svg"
                      className="svg-logo"
                      alt="Ohio Theme"
                    />
                  </span>
                  <span className="light hidden">
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/Lb11lpeY-OhioLogoInverse.svg"
                      className="svg-logo"
                      alt="Ohio Theme"
                    />
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="right-part right">
            <nav
              id="site-navigation"
              className="nav -visible"
              data-mobile-menu-second-click-link
            >
              <div className="mobile-overlay menu-mobile-overlay">
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
                    className="icon-button -overlay-button search-global fixed dynamic-typo btn-round-light vc_hidden-sm vc_hidden-xs"
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
                        id="nav-menu-item-17446-63cc2efd9fb68"
                        className="mega-menu-item nav-item menu-item-depth-0 has-submenu"
                      >
                        <a
                          href="#"
                          className="menu-link -undash main-menu-link item-title"
                        >
                          <span>Elements</span>
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
                              </svg>
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
                        </a>
                        <ul
                          className="menu-depth-1 sub-menu sub-menu-wide"
                          style={{ left: "75.432px" }}
                          data-sub-menu-height="251.5314"
                        >
                          <li
                            id="nav-menu-item-17451-63cc2efd9fc0d"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="362.9529"
                            >
                              <li
                                id="nav-menu-item-17414-63cc2efd9fc71"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/accordion-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Accordion</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17415-63cc2efd9fcce"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/banner-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Banner</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17416-63cc2efd9fd3c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog-posts-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Blog Posts</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17417-63cc2efd9fd95"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/button-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Button</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17418-63cc2efd9fded"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/call-to-action-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Call to Action</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17419-63cc2efd9fe45"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/carousel-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Carousel</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17466-63cc2efd9fe9b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/circle-progress-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Circle Progress</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17420-63cc2efd9fef2"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/clients-logo-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Clients Logo</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17467-63cc2efd9ff4a"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/compare-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Compare</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17452-63cc2efd9ffa5"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="362.9529"
                            >
                              <li
                                id="nav-menu-item-17421-63cc2efd9fffe"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/contact-form-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Contact Form</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17422-63cc2efda0056"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/countdown-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Countdown</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17423-63cc2efda00c9"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/counter-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Counter</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17444-63cc2efda0120"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/dynamic-text-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Dynamic Text</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17424-63cc2efda017f"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/fullscreen-slider-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Fullscreen Slider</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17425-63cc2efda01d5"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/gallery-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Gallery</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17426-63cc2efda022b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/google-map-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Google Map</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17427-63cc2efda0280"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/heading-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Heading</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-19102-63cc2efda02d6"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/horizontal-accordion-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Horizontal Accordion</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17448-63cc2efda032f"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="362.9529"
                            >
                              <li
                                id="nav-menu-item-17428-63cc2efda0389"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/icon-box-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Icon Box</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17429-63cc2efda03e0"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/instagram-feed-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Instagram Feed</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17430-63cc2efda0436"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/message-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Message</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17431-63cc2efda048d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/parallax-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Parallax</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17432-63cc2efda04e2"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio-projects-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Portfolio Projects</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17433-63cc2efda0539"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/pricing-list-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Pricing List</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17434-63cc2efda0590"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/pricing-table-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Pricing Table</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17435-63cc2efda05e6"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/process-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Process</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17436-63cc2efda063b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/progress-bar-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Progress Bar</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17450-63cc2efda0694"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="362.9529"
                            >
                              <li
                                id="nav-menu-item-19367-63cc2efda06ed"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/services-table-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Services Table</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-19580-63cc2efda0743"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/shop-category-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Shop Category</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17437-63cc2efda07a4"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/social-networks-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Social Networks</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17440-63cc2efda07f6"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/subscribe-form-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Subscribe Form</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17441-63cc2efda0848"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/tabs-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Tabs</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-216758-63cc2efda089c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/team-group-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Team Group</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17442-63cc2efda08ef"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/team-member-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Team Member</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17443-63cc2efda0942"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/testimonial-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Testimonial</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17445-63cc2efda0996"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/video-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Video</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-20844-63cc2efda09ed"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="282.2967"
                            >
                              <li
                                id="nav-menu-item-20843-63cc2efda0a53"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/header-v1/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20842-63cc2efda0aa8"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/header-v2/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Centered</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20841-63cc2efda0afb"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/header-v3/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>With Center Logo</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20840-63cc2efda0b4e"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/header-v4/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>With Top Logo</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20839-63cc2efda0ba1"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/header-v5/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Sidebar Wide</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20838-63cc2efda0bf4"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/header-v6/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Sidebar Top Hamburger</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-217554-63cc2efda0c48"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/header-v7/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Sidebar Center Hamburger</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17447-63cc2efda0c9e"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="120.98429999999999"
                            >
                              <li
                                id="nav-menu-item-49263-63cc2efda0cf3"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/standard-hamburger/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard Hamburger</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-49262-63cc2efda0d59"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/centered-hamburger/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Centered Hamburger</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-49261-63cc2efda0dba"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/creative-hamburger/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Creative Hamburger</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="nav-menu-item-17471-63cc2efda0e1c"
                        className="mega-menu-item nav-item menu-item-depth-0 current-menu-ancestor has-submenu"
                      >
                        <a
                          href="#"
                          className="menu-link -undash main-menu-link item-title"
                        >
                          <span>Portfolio</span>
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
                              </svg>
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
                        </a>
                        <ul
                          className="menu-depth-1 sub-menu sub-menu-wide"
                          style={{ left: "75.432px" }}
                          data-sub-menu-height="251.5314"
                        >
                          <li
                            id="nav-menu-item-17472-63cc2efda0e7a"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 current-menu-ancestor current-menu-parent has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="362.9529"
                            >
                              <li
                                id="nav-menu-item-17537-63cc2efda0ed3"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 current-menu-item "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/classic/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17554-63cc2efda0f26"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/classic-contained/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic Contained</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17812-63cc2efda0f7a"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/classic-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic Metro</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17553-63cc2efda0fcd"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/minimal/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17811-63cc2efda1033"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/minimal-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal Metro</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-81838-63cc2efda1097"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/caption-cursor/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Caption Cursor</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-81837-63cc2efda10fa"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/caption-cursor-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Caption Cursor Metro</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221781-63cc2efda116e"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/sticky-contained/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Sticky Contained</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221788-63cc2efda11cc"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/sticky-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Sticky Metro</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17474-63cc2efda1227"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="362.9529"
                            >
                              <li
                                id="nav-menu-item-17594-63cc2efda1280"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/horizontal-slider/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Horizontal Slider</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17801-63cc2efda12d6"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/vertical-slider/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Vertical Slider</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17806-63cc2efda132d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/smooth-scroll-split-screen/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Smooth Scroll Split Screen</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-222956-63cc2efda1387"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/interactive-links/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Interactive Links</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17890-63cc2efda13dd"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/horizontal-carousel/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Horizontal Carousel</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-18192-63cc2efda1434"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/onepage-with-smooth-scroll/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Onepage with Smooth Scroll</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-18197-63cc2efda1489"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/scattered-with-smooth-scroll/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Scattered with Smooth Scroll</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-18266-63cc2efda14df"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/centered-with-smooth-scroll/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Centered with Smooth Scroll</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-217746-63cc2efda1536"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/demo6/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Vertical Interactive Links</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17473-63cc2efda158f"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="362.9529"
                            >
                              <li
                                id="nav-menu-item-222634-63cc2efda15e7"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/project/worlds-relays/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Details with Left Gallery</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-19324-63cc2efda163d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/project/unicolor-87/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Details with Right Gallery</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-222646-63cc2efda1693"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/project/diseno-grafico/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Details with Bottom Gallery</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-19319-63cc2efda16ea"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/project/dinamica/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Split Screen Left Gallery</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-19321-63cc2efda1741"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/project/stickers-pack/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Split Screen Right Gallery</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-18284-63cc2efda17b4"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/project/spacing-it-easier-to-get-things-done/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Slider with Details</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20952-63cc2efda1815"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/project/aws-non-profit-cloud-solutions/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Slider with Custom Details</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20663-63cc2efda186a"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/project/diseno-deporte/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Asymmetric with Custom Details</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-81840-63cc2efda18bf"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/project/salon-de-diseno-de-interiores/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Slider with Centered Details</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17477-63cc2efda1915"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="362.9529"
                            >
                              <li
                                id="nav-menu-item-17700-63cc2efda196a"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/standard-pagination/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17701-63cc2efda19bd"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/standard-pagination-outlined/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard: Outlined</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-222169-63cc2efda1a11"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/standard-pagination-text/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard: Text</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17699-63cc2efda1a63"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/load-more-pagination/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Load More</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-222165-63cc2efda1ac9"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/load-more-pagination-outlined/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Load More: Outlined</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-222168-63cc2efda1b1e"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/load-more-pagination-text/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Load More: Text</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17698-63cc2efda1b74"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/lazy-load-pagination/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Lazy Load</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-222167-63cc2efda1bca"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/lazy-load-pagination-outlined/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Lazy Load: Outlined</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-222166-63cc2efda1c20"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/lazy-load-pagination-text/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Lazy Load: Text</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17475-63cc2efda1c79"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="322.6248"
                            >
                              <li
                                id="nav-menu-item-17919-63cc2efda1cd1"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/classic-image-scale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Scale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17918-63cc2efda1d29"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/classic-image-overlay/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Overlay</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17917-63cc2efda1d80"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/classic-image-greyscale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Greyscale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17916-63cc2efda1dd7"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/classic-image-transition/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Transition</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17936-63cc2efda1e2d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/minimal-image-scale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Scale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17935-63cc2efda1e85"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/minimal-image-overlay/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Overlay</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17934-63cc2efda1edb"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/minimal-image-greyscale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Greyscale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17933-63cc2efda1f32"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/minimal-image-transition/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Transition</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17476-63cc2efda1f8c"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="322.6248"
                            >
                              <li
                                id="nav-menu-item-17712-63cc2efda1ff9"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/fade-up-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Fade Up Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17715-63cc2efda2051"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/fade-down-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Fade Down Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17714-63cc2efda20c6"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/fade-left-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Fade Left Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17713-63cc2efda2137"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/fade-right-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Fade Right Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17733-63cc2efda2191"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/flip-up-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Flip Up Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17732-63cc2efda21ea"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/flip-down-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Flip Down Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17731-63cc2efda2240"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/zoom-in-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Zoom In Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17730-63cc2efda2297"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/portfolio/zoom-out-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Zoom Out Effect</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="nav-menu-item-27-63cc2efda22ff"
                        className="mega-menu-item nav-item menu-item-depth-0 has-submenu"
                      >
                        <a
                          href="https://ohio.clbthemes.com/blog/"
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
                              </svg>
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
                        </a>
                        <ul
                          className="menu-depth-1 sub-menu sub-menu-wide"
                          style={{ left: "75.432px" }}
                          data-sub-menu-height="251.5314"
                        >
                          <li
                            id="nav-menu-item-17478-63cc2efda235c"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="322.6248"
                            >
                              <li
                                id="nav-menu-item-17615-63cc2efda23b5"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/classic/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17737-63cc2efda240c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/classic-contained/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic Contained</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17942-63cc2efda2463"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/classic-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic Metro</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17970-63cc2efda24ba"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/minimal/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17969-63cc2efda2510"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/minimal-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal Metro</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-18098-63cc2efda2567"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/split/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Split</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-18097-63cc2efda25bd"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/split-contained/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Split Contained</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221016-63cc2efda2613"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/split-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Split Metro</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-217606-63cc2efda266f"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="282.2967"
                            >
                              <li
                                id="nav-menu-item-18117-63cc2efda26c9"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/inner/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Inner</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-18118-63cc2efda271f"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/inner-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Inner Metro</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-217608-63cc2efda2775"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/compact/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Compact</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-217619-63cc2efda27ca"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/compact-contained/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Compact Contained</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221322-63cc2efda2822"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/compact-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Compact Metro</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-217607-63cc2efda2879"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/simple/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Simple</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-217624-63cc2efda28cf"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/simple-contained/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Simple Contained</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17479-63cc2efda2929"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="201.6405"
                            >
                              <li
                                id="nav-menu-item-18307-63cc2efda2981"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/standard/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20901-63cc2efda29d7"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/creativo-para-jovenes-a-designers-ui-ux-complete-checklist/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard: Featured Image</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20902-63cc2efda2a2e"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/fullscreen-post/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard: Fullscreen</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221072-63cc2efda2a91"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/demo31/booktips-eight-tips-for-service-design-with-expert-users/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Split</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221073-63cc2efda2ae8"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/demo31/creativo-para-jovenes-the-designers-ui-ux-checklist/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Split: Featured Image</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17481-63cc2efda2b42"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="362.9529"
                            >
                              <li
                                id="nav-menu-item-17689-63cc2efda2b97"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/standard-pagination/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221227-63cc2efda2bea"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/standard-pagination-outlined/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard: Outlined</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221232-63cc2efda2c3d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/standard-pagination-text/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard: Text</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17648-63cc2efda2c91"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/load-more-pagination/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Load More</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221249-63cc2efda2ce5"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/load-more-pagination-outlined/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Load More: Outlined</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221253-63cc2efda2d3b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/load-more-pagination-text/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Load More: Text</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17647-63cc2efda2da2"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/lazy-load-pagination/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Lazy Load</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221266-63cc2efda2df9"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/lazy-load-pagination-outlined/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Lazy Load: Outlined</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221268-63cc2efda2e4f"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/lazy-load-pagination-text/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Lazy Load: Text</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17483-63cc2efda2ea7"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="322.6248"
                            >
                              <li
                                id="nav-menu-item-17995-63cc2efda2eff"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/classic-none/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: None</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17994-63cc2efda2f55"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/classic-image-scale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Scale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17997-63cc2efda2fbc"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/classic-image-overlay/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Overlay</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17996-63cc2efda3012"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/classic-image-greyscale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Greyscale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17991-63cc2efda307d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/minimal-none/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: None</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17990-63cc2efda30e7"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/minimal-image-scale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Scale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17993-63cc2efda3144"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/minimal-image-overlay/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Overlay</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17992-63cc2efda3199"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/minimal-image-greyscale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Greyscale</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17482-63cc2efda31f3"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="322.6248"
                            >
                              <li
                                id="nav-menu-item-17671-63cc2efda324b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/fade-up-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Fade Up Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17668-63cc2efda32a0"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/fade-down-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Fade Down Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17669-63cc2efda32f7"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/fade-left-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Fade Left Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17670-63cc2efda334c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/fade-right-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Fade Right Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17673-63cc2efda33a1"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/flip-up-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Flip Up Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17672-63cc2efda33f7"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/flip-down-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Flip Down Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17675-63cc2efda345b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/zoom-in-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Zoom In Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17674-63cc2efda34b1"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/blog/zoom-out-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Zoom Out Effect</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="nav-menu-item-31-63cc2efda3513"
                        className="mega-menu-item nav-item menu-item-depth-0 has-submenu"
                      >
                        <a
                          href="https://ohio.clbthemes.com/shop/"
                          className="menu-link -undash main-menu-link item-title"
                        >
                          <span>Shop</span>
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
                              </svg>
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
                        </a>
                        <ul
                          className="menu-depth-1 sub-menu sub-menu-wide"
                          style={{ left: "75.432px" }}
                          data-sub-menu-height="251.5314"
                        >
                          <li
                            id="nav-menu-item-240994-63cc2efda356b"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="241.9686"
                            >
                              <li
                                id="nav-menu-item-241000-63cc2efda35c1"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/shop/classic/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-240999-63cc2efda3615"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/shop/classic-contained/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic Contained</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-240998-63cc2efda3669"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/shop/classic-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic Metro</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241652-63cc2efda36bc"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/shop/minimal/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241651-63cc2efda3710"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/shop/minimal-contained/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal Contained</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241650-63cc2efda3776"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/shop/minimal-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal Metro</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-240995-63cc2efda37cf"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="322.6248"
                            >
                              <li
                                id="nav-menu-item-241003-63cc2efda3828"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/shop/classic-image-scale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Scale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241002-63cc2efda3880"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/shop/classic-image-overlay/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Overlay</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241001-63cc2efda38df"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/shop/classic-image-greyscale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Greyscale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241004-63cc2efda3933"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/shop/classic-image-transition/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Transition</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241733-63cc2efda3987"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/shop/minimal-image-scale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Scale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241732-63cc2efda39da"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/shop/minimal-image-overlay/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Overlay</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241731-63cc2efda3a2e"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/shop/minimal-image-greyscale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Greyscale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241734-63cc2efda3a82"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/shop/minimal-image-transition/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Transition</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-240996-63cc2efda3ad8"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="322.6248"
                            >
                              <li
                                id="nav-menu-item-241005-63cc2efda3b2f"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/product/gosta-shape-armchair/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Sticky Gallery</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241006-63cc2efda3b95"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/product/gosta-upholstery-chair/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Sticky Gallery Reflected</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241007-63cc2efda3bec"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/product/gosta-upholstery-stool/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Split Screen</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241008-63cc2efda3d1b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/product/johanna-shape-armchair/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Split Screen Reflected</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241009-63cc2efda3d75"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/product/johanna-upholstery-chair/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic Gallery</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241010-63cc2efda3dcc"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/product/johanna-upholstery-stool/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic Gallery Reflected</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241011-63cc2efda3e24"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/product/modern-upholstery-stool/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Grid Gallery</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241012-63cc2efda3e7c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/product/modern-shape-armchair/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Grid Gallery Reflected</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17556-63cc2efda3ed9"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="322.6248"
                            >
                              <li
                                id="nav-menu-item-17558-63cc2efda3f41"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/product/modern-upholstery-stool/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard Product</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-43318-63cc2efda3f99"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/product/modern-upholstery-chair/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Grouped Product</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17560-63cc2efda400b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/product/gosta-shape-armchair/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Variable Product</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17561-63cc2efda4073"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/product/modern-shape-armchair/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Virtual Product</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17562-63cc2efda40cc"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/product/johanna-upholstery-stool/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>External/Affiliate Product</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241016-63cc2efda4123"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/product/gosta-upholstery-stool/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Downloadable Product</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17563-63cc2efda4179"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/product/johanna-upholstery-chair/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>On Sale Product</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17564-63cc2efda41cf"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/product/johanna-shape-armchair/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Out of Stock Product</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-240997-63cc2efda422a"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="201.6405"
                            >
                              <li
                                id="nav-menu-item-241041-63cc2efda4282"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/shop/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Shop Layout</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-28-63cc2efda42d8"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/cart/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Cart</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-29-63cc2efda4330"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/checkout/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Checkout</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-30-63cc2efda4387"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/my-account/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>My Account</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17557-63cc2efda43dd"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/my-account/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Sign In / Sign Up</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-18267-63cc2efda4438"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="https://ohio.clbthemes.com/shop/"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="80.6562"
                            >
                              <li
                                id="nav-menu-item-241039-63cc2efda4490"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/shop/classic-category/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic Category</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241038-63cc2efda44e8"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/shop/offset-category/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Offset Category</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="nav-menu-item-18606-63cc2efda454c"
                        className="mega-menu-item nav-item menu-item-depth-0 has-submenu "
                      >
                        <a
                          href="#"
                          className="menu-link -undash main-menu-link item-title"
                        >
                          <span>Pages</span>
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
                              </svg>
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
                        </a>
                        <ul
                          className="menu-depth-1 sub-menu"
                          data-sub-menu-height="125.76570000000001"
                        >
                          <li
                            id="nav-menu-item-20920-63cc2efda45a9"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="https://ohio.clbthemes.com/about/"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="241.9686"
                            >
                              <li
                                id="nav-menu-item-19825-63cc2efda4602"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/about-ver4/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>About Us</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-19823-63cc2efda4659"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/about-ver2/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>About Classic</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-19826-63cc2efda46af"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/about-ver5/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Hey, we’re Ohio</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-19822-63cc2efda4706"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/about-ver1/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Our Bureau</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-19824-63cc2efda475e"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/about-ver3/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Our Studio</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-81832-63cc2efda47b6"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/about-ver6/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>About Creative</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-20944-63cc2efda480f"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="https://ohio.clbthemes.com/contact/"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="241.9686"
                            >
                              <li
                                id="nav-menu-item-20803-63cc2efda4869"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/contact-us-ver4/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Contact: Agency</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20802-63cc2efda48c0"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/contact-us-ver5/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Contact: Blocks</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20801-63cc2efda4916"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/contact-us-ver2/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Contact: Classic</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20800-63cc2efda496c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/contact-us-ver3/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Contact: Corporate</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20799-63cc2efda49c2"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="https://ohio.clbthemes.com/contact-us-ver1/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Contact: Simple</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-81831-63cc2efda4a18"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="https://ohio.clbthemes.com/contact-us-ver6/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Contact: Creative</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-20731-63cc2efda4a72"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link -undash sub-menu-link "
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
                                  </svg>
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
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height="161.3124"
                            >
                              <li
                                id="nav-menu-item-20733-63cc2efda4aca"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/adadad/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>404 Page</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20735-63cc2efda4b20"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/demo30/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Coming Soon</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20734-63cc2efda4b76"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/?s=identity"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Search Results</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20732-63cc2efda4bcc"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/my-account/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Sign In / Sign Up</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="nav-menu-item-220972-63cc2efda4c2f"
                        className="mega-menu-item nav-item menu-item-depth-0 has-submenu "
                      >
                        <a
                          href="https://colabrio.ticksy.com/"
                          className="menu-link -undash main-menu-link item-title"
                        >
                          <span>Help</span>
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
                              </svg>
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
                        </a>
                        <ul
                          className="menu-depth-1 sub-menu"
                          data-sub-menu-height="125.76570000000001"
                        >
                          <li
                            id="nav-menu-item-25539-63cc2efda4c88"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 "
                          >
                            <a
                              href="https://docs.clbthemes.com/ohio"
                              className="menu-link -undash sub-menu-link "
                            >
                              <span>Documentation</span>
                            </a>
                          </li>
                          <li
                            id="nav-menu-item-220973-63cc2efda4cde"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 "
                          >
                            <a
                              href="https://colabrio.ticksy.com/"
                              className="menu-link -undash sub-menu-link "
                            >
                              <span>Help Center</span>
                            </a>
                          </li>
                          <li
                            id="nav-menu-item-220974-63cc2efda4d33"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 "
                          >
                            <a
                              href="https://colabrio.ticksy.com/"
                              className="menu-link -undash sub-menu-link "
                            >
                              <span>Submit a Ticket</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="nav-menu-item-220971-63cc2efda4d93"
                        className="mega-menu-item nav-item menu-item-depth-0 version"
                      >
                        <a
                          href="https://docs.clbthemes.com/ohio/release-notes/"
                          className="menu-link -undash main-menu-link item-title"
                        >
                          <span>Changelog</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="copyright">
                    <p>
                      © 2016-2023{" "}
                      <a href="http://clbthemes.com" target="_blank">
                        Colabrio
                      </a>
                      . All rights reserved |{" "}
                      <a target="_blank" href="https://1.envato.market/5Q25j">
                        <b>Purchase</b>
                      </a>
                    </p>
                    <p>
                      <a href="http://clbthemes.com" target="_blank">
                        Security
                      </a>{" "}
                      |{" "}
                      <a href="http://clbthemes.com" target="_blank">
                        Privacy &amp; Cookie Policy
                      </a>{" "}
                      |{" "}
                      <a href="http://clbthemes.com" target="_blank">
                        Terms of Service
                      </a>
                    </p>
                  </div>
                  <select className="lang-dropdown -small">
                    <option
                      className="active"
                      selected={true}
                      value="https://ohio.clbthemes.com/portfolio/classic/"
                    >
                      Eng
                    </option>{" "}
                  </select>
                </div>
                <div className="social-bar dynamic-typo">
                  <ul className="social-bar-holder titles-typo -small-t -unlist vc_hidden-md">
                    <li>Follow Us</li>
                    <li>—</li>
                    <li>
                      <a
                        href="https://www.facebook.com/colabrio/"
                        target="_blank"
                        rel="nofollow"
                        className="-undash facebook"
                      >
                        Fb.{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/colabrio/"
                        target="_blank"
                        rel="nofollow"
                        className="-undash behance"
                      >
                        Be.{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/colabrio/"
                        target="_blank"
                        rel="nofollow"
                        className="-undash youtube"
                      >
                        Yt.{" "}
                      </a>
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
                    value="https://ohio.clbthemes.com/portfolio/classic/"
                  >
                    Eng
                  </option>{" "}
                </select>
              </li>
              <li className="icon-button-holder">
                <a
                  className="icon-button favorites-global wishlist"
                  href="#"
                >
                <span style={{padding:"0.4em"}}>1</span>
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
                </a>
              </li>
              <li className="icon-button-holder">
                <div className="cart-button ">
                  
                  <span className="holder">
                    <button className="icon-button cart" aria-label="cart">
                      <i className="icon">
                        <svg
                          className="default"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 12 16"
                          xmlSpace="preserve"
                        >
                          <path
                            className="st0"
                            d="M9,4V3c0-1.7-1.3-3-3-3S3,1.3,3,3v1H0v10c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V4H9z M4,3c0-1.1,0.9-2,2-2s2,0.9,2,2v1H4V3z"
                          />
                        </svg>
                      </i>
                    </button>
                    <span className="badge">0</span>
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
                </div>{" "}
              </li>
            </ul>
            <div className="close-menu" style={{ right: "-100%" }} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
