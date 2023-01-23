import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Header = ({setIsOpenSidebar}:any) => {

  return (
    <header
      id="masthead"
      className="header header-3 both-types -sticky showed"
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
              <a
                className="branding-title titles-typo -undash"
                href="/"
                rel="home"
              >
                <div
                  className="logo"
                  style={{
                    fontSize: "25px",
                    fontFamily: " 'Righteous', cursive",
                  }}
                >
                  Gonzalo's
                </div>
              </a>
            </div>
          </div>
          <div className="right-part right">
            <nav
              id="site-navigation"
              className="nav unhidden visible"
              data-mobile-menu-second-click-link
            >
              <div className="mobile-overlay menu-mobile-overlay">
                <div className="overlay" />
                <div className="close-bar">
                  <button className="icon-button" aria-label="close">
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
                    className="icon-button search-global fixed dynamic-typo btn-round-light vc_hidden-sm vc_hidden-xs light-typo"
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
                        id="nav-menu-item-17446-618102e0a7915"
                        className="mega-menu-item nav-item menu-item-depth-0 current-menu-ancestor has-submenu"
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
                          style={{
                            backgroundPosition: "center center",
                            backgroundRepeat: "no-repeat",
                            left: "-344.656px",
                          }}
                        >
                          <li
                            id="nav-menu-item-17451-618102e0a79cf"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 current-menu-ancestor current-menu-parent has-submenu "
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
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-17414-618102e0a7a47"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../accordion-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Accordion</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17415-618102e0a7aa3"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 current-menu-item "
                              >
                                <a
                                  href="../banner-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Banner</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17416-618102e0a7b01"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../blog-posts-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Blog Posts</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17417-618102e0a7b59"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../button-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Button</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17418-618102e0a7bce"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../call-to-action-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Call to Action</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17419-618102e0a7c21"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../carousel-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Carousel</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17466-618102e0a7c72"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../circle-progress-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Circle Progress</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17420-618102e0a7cc4"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../clients-logo-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Clients Logo</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17467-618102e0a7d18"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../compare-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Compare</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17452-618102e0a7d70"
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
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-17421-618102e0a7dc6"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../contact-form-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Contact Form</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17422-618102e0a7e30"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../countdown-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Countdown</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17423-618102e0a7e84"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../counter-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Counter</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17444-618102e0a7ed8"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../dynamic-text-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Dynamic Text</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17424-618102e0a7f2a"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../fullscreen-slider-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Fullscreen Slider</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17425-618102e0a7f7a"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../gallery-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Gallery</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17426-618102e0a7fca"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../google-map-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Google Map</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17427-618102e0a801c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../heading-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Heading</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-19102-618102e0a806b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../horizontal-accordion-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Horizontal Accordion</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17448-618102e0a80c1"
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
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-17428-618102e0a8116"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../icon-box-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Icon Box</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17429-618102e0a8177"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../instagram-feed-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Instagram Feed</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17430-618102e0a81d8"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../message-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Message</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17431-618102e0a8227"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../parallax-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Parallax</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17432-618102e0a8276"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../portfolio-projects-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Portfolio Projects</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17433-618102e0a82ca"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../pricing-list-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Pricing List</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17434-618102e0a8319"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../pricing-table-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Pricing Table</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17435-618102e0a836b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../process-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Process</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17436-618102e0a83ba"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../progress-bar-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Progress Bar</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17450-618102e0a840e"
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
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-19367-618102e0a846d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../services-table-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Services Table</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-19580-618102e0a84bf"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../shop-category-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Shop Category</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17437-618102e0a850e"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../social-networks-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Social Networks</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17440-618102e0a855f"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../subscribe-form-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Subscribe Form</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17441-618102e0a85af"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../tabs-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Tabs</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-216758-618102e0a85fd"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../team-group-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Team Group</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17442-618102e0a864c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../team-member-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Team Member</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17443-618102e0a869e"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../testimonial-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Testimonial</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17445-618102e0a86ed"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../video-shortcode/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Video</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-20844-618102e0a874e"
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
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-20843-618102e0a87a5"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../header-v1/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Menu: Standard</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20842-618102e0a87fa"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../header-v2/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Menu: Center</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20841-618102e0a8848"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../header-v3/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Menu: Center Logo</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20840-618102e0a8899"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../header-v4/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Menu: Top Logo</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20839-618102e0a88ea"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../header-v5/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Sidebar Menu: Wide</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20838-618102e0a8939"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../header-v6/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Sidebar Menu: Narrow</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-217554-618102e0a8998"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="../header-v7/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Sidebar Menu: Center</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17447-618102e0a89ff"
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
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-49263-618102e0a8a53"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../hamburger-menu-standard/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Hamburger Menu: Standard</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-49262-618102e0a8aa6"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="../hamburger-menu-centered/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Hamburger Menu: Centered</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-49261-618102e0a8af5"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="../hamburger-menu-creative/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Hamburger Menu: Creative</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="nav-menu-item-17471-61a4e6002d8b1"
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
                          style={{
                            backgroundPosition: "center center",
                            backgroundRepeat: "no-repeat",
                            left: "-443.093px",
                          }}
                          data-sub-menu-height="2194.609"
                        >
                          <li
                            id="nav-menu-item-17472-61a4e6002d8ec"
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
                              data-sub-menu-height="328.906"
                            >
                              <li
                                id="nav-menu-item-17537-61a4e6002d925"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/classic/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17554-61a4e6002d958"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/classic-contained/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic Contained</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17812-61a4e6002d98a"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/classic-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic Metro</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17553-61a4e6002d9bd"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/minimal/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17811-61a4e6002d9ee"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/minimal-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal Metro</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-81838-61a4e6002da1f"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/portfolio/caption-cursor/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Caption Cursor</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-81837-61a4e6002da51"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/portfolio/caption-cursor-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Caption Cursor Metro</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221781-61a4e6002da83"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/portfolio/sticky-contained/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Sticky Contained</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221788-61a4e6002dab5"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/portfolio/sticky-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Sticky Metro</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17474-61a4e6002daeb"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 current-menu-ancestor current-menu-parent has-submenu "
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
                              data-sub-menu-height="408.71840000000003"
                            >
                              <li
                                id="nav-menu-item-17594-61a4e6002db34"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/horizontal-slider/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Horizontal Slider</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17801-61a4e6002db69"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/vertical-slider/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Vertical Slider</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17806-61a4e6002db9d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/smooth-scroll-split-screen/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Smooth Scroll Split Screen</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-222956-61a4e6002dbdf"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 current-menu-item new"
                              >
                                <a
                                  href="/portfolio/interactive-links/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Interactive Links</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17890-61a4e6002dc12"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/horizontal-carousel/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Horizontal Carousel</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-18192-61a4e6002dc51"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/onepage-with-smooth-scroll/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Onepage with Smooth Scroll</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-18197-61a4e6002dce8"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/scattered-with-smooth-scroll/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Scattered with Smooth Scroll</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-18266-61a4e6002dd2c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/centered-with-smooth-scroll/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Centered with Smooth Scroll</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-217746-61a4e6002ddd7"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/demo6/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Vertical Interactive Links</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17473-61a4e6002de1b"
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
                              data-sub-menu-height="368.8122"
                            >
                              <li
                                id="nav-menu-item-222634-61a4e6002e194"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/project/worlds-relays/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Details with Left Gallery</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-19324-61a4e6002e1de"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/project/unicolor-77/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Details with Right Gallery</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-222646-61a4e6002e219"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/project/diseno-grafico/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Details with Bottom Gallery</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-19319-61a4e6002e615"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/project/dinamica/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Split Screen Left Gallery</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-19321-61a4e6002e684"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/project/stickers-pack/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Split Screen Right Gallery</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-18284-61a4e6002e6e8"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/project/spacing-it-easier-to-get-things-done/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Slider with Details</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20952-61a4e6002e74b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/project/aws-non-profit-cloud-solutions/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Slider with Custom Details</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20663-61a4e6002e7aa"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/project/diseno-deporte/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Asymmetric with Custom Details</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-81840-61a4e6002e802"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/project/salon-de-diseno-de-interiores/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Slider with Centered Details</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17477-61a4e6002e85f"
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
                              data-sub-menu-height="308.9529"
                            >
                              <li
                                id="nav-menu-item-17700-61a4e6002e8ba"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/standard-pagination/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17701-61a4e6002e914"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/portfolio/standard-pagination-outlined/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard: Outlined</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-222169-61a4e6002e978"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/portfolio/standard-pagination-text/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard: Text</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17699-61a4e6002e9cd"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/load-more-pagination/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Load More</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-222165-61a4e6002ea08"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/portfolio/load-more-pagination-outlined/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Load More: Outlined</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-222168-61a4e6002ea3d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/portfolio/load-more-pagination-text/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Load More: Text</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17698-61a4e6002ea71"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/lazy-load-pagination/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Lazy Load</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-222167-61a4e6002eaa4"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/portfolio/lazy-load-pagination-outlined/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Lazy Load: Outlined</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-222166-61a4e6002ead7"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/portfolio/lazy-load-pagination-text/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Lazy Load: Text</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17475-63511aea100e3"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 current-menu-ancestor current-menu-parent has-submenu "
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
                              data-sub-menu-height="328.6248"
                            >
                              <li
                                id="nav-menu-item-17919-63511aea1013f"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/classic-image-scale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Scale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17918-63511aea10198"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/classic-image-overlay/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Overlay</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17917-63511aea101ef"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/classic-image-greyscale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Greyscale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17916-63511aea10246"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 current-menu-item new"
                              >
                                <a
                                  href="/portfolio/classic-image-transition/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Transition</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17936-63511aea1029c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/minimal-image-scale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Scale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17935-63511aea102f3"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/minimal-image-overlay/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Overlay</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17934-63511aea1034a"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/minimal-image-greyscale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Greyscale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17933-63511aea103a1"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/portfolio/minimal-image-transition/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Transition</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17476-61a4e6002ed29"
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
                              data-sub-menu-height="274.6248"
                            >
                              <li
                                id="nav-menu-item-17712-61a4e6002ed6c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/fade-up-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Fade Up Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17715-61a4e6002ee1f"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/fade-down-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Fade Down Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17714-61a4e6002ee69"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/fade-left-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Fade Left Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17713-61a4e6002eea7"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/fade-right-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Fade Right Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17733-61a4e6002eee6"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/flip-up-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Flip Up Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17732-61a4e6002ef22"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/flip-down-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Flip Down Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17731-61a4e6002ef5d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/zoom-in-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Zoom In Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17730-61a4e6002ef98"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/portfolio/zoom-out-effect/"
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
                        id="nav-menu-item-27-6331a9e093df2"
                        className="mega-menu-item nav-item menu-item-depth-0 has-submenu"
                      >
                        <a
                          href="/blog/"
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
                          style={{ left: "-539.39px" }}
                        >
                          <li
                            id="nav-menu-item-17478-6331a9e093e4f"
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
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-17615-6331a9e093ea8"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/classic/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17737-6331a9e093eff"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/classic-contained/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic Contained</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17942-6331a9e093f56"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/classic-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic Metro</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17970-6331a9e093fae"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/minimal/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17969-6331a9e094004"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/minimal-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal Metro</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-18098-6331a9e09405a"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/split/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Split</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-18097-6331a9e0940b0"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/split-contained/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Split Contained</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221016-6331a9e09410b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/split-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Split Metro</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-217606-6331a9e094167"
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
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-18117-6331a9e0941c9"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/inner/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Inner</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-18118-6331a9e094220"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/inner-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Inner Metro</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-217608-6331a9e094277"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/compact/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Compact</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-217619-6331a9e0942cd"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/compact-contained/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Compact Contained</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221322-6331a9e094324"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/compact-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Compact Metro</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-217607-6331a9e09437b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/blog/simple/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Simple</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-217624-6331a9e0943d2"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/blog/simple-contained/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Simple Contained</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17479-6331a9e09442d"
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
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-18307-6331a9e094486"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/standard/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20901-6331a9e0944dd"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/creativo-para-jovenes-a-designers-ui-ux-complete-checklist/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard: Featured Image</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20902-6331a9e09454a"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/fullscreen-post/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard: Fullscreen</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221072-6331a9e0945a0"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/demo31/booktips-eight-tips-for-service-design-with-expert-users/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Split</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221073-6331a9e09460c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/demo31/creativo-para-jovenes-the-designers-ui-ux-checklist/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Split: Featured Image</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17481-6331a9e094693"
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
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-17689-6331a9e0946f7"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/standard-pagination/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221227-6331a9e094751"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/blog/standard-pagination-outlined/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard: Outlined</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221232-6331a9e0947aa"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/blog/standard-pagination-text/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard: Text</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17648-6331a9e094806"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/load-more-pagination/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Load More</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221249-6331a9e09485c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/blog/load-more-pagination-outlined/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Load More: Outlined</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221253-6331a9e0948bf"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/blog/load-more-pagination-text/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Load More: Text</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17647-6331a9e09491d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/lazy-load-pagination/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Lazy Load</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221266-6331a9e094974"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/blog/lazy-load-pagination-outlined/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Lazy Load: Outlined</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-221268-6331a9e0949ca"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/blog/lazy-load-pagination-text/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Lazy Load: Text</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17483-6331a9e094a24"
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
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-17995-6331a9e094a7f"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/classic-none/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: None</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17994-6331a9e094ad6"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/classic-image-scale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Scale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17997-6331a9e094b34"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/classic-image-overlay/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Overlay</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17996-6331a9e094b89"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/classic-image-greyscale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Greyscale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17991-6331a9e094be0"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/minimal-none/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: None</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17990-6331a9e094c36"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/minimal-image-scale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Scale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17993-6331a9e094c8c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/minimal-image-overlay/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Overlay</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17992-6331a9e094ce2"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/minimal-image-greyscale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Greyscale</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17482-6331a9e094d3b"
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
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-17671-6331a9e094d92"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/fade-up-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Fade Up Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17668-6331a9e094de8"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/fade-down-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Fade Down Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17669-6331a9e094e3e"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/fade-left-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Fade Left Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17670-6331a9e094e95"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/fade-right-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Fade Right Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17673-6331a9e094eee"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/flip-up-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Flip Up Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17672-6331a9e094f45"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/flip-down-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Flip Down Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17675-6331a9e094f9b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/zoom-in-effect/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Zoom In Effect</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17674-6331a9e094ffc"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/blog/zoom-out-effect/"
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
                        id="nav-menu-item-31-6331a9e09506a"
                        className="mega-menu-item nav-item menu-item-depth-0 current-menu-item has-submenu"
                      >
                        <a
                          href="/shop/"
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
                          style={{ left: "-605.218px" }}
                        >
                          <li
                            id="nav-menu-item-240994-6331a9e0950c7"
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
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-241000-6331a9e09511e"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/shop/classic/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-240999-6331a9e095175"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/shop/classic-contained/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic Contained</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-240998-6331a9e0951cb"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/shop/classic-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic Metro</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241652-6331a9e095222"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/shop/minimal/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241651-6331a9e095278"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/shop/minimal-contained/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal Contained</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241650-6331a9e0952ce"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/shop/minimal-metro/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal Metro</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-240995-6331a9e095325"
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
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-241003-6331a9e09537c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/shop/classic-image-scale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Scale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241002-6331a9e0953d1"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/shop/classic-image-overlay/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Overlay</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241001-6331a9e09542a"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/shop/classic-image-greyscale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Greyscale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241004-6331a9e095481"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/shop/classic-image-transition/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic: Image Transition</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241733-6331a9e0954f3"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/shop/minimal-image-scale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Scale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241732-6331a9e095548"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/shop/minimal-image-overlay/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Overlay</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241731-6331a9e0955ae"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/shop/minimal-image-greyscale/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Greyscale</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241734-6331a9e095602"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/shop/minimal-image-transition/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Minimal: Image Transition</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-240996-6331a9e09565b"
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
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-241005-6331a9e0956b3"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/product/gosta-shape-armchair/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Sticky Gallery</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241006-6331a9e095707"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/product/gosta-upholstery-chair/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Sticky Gallery Reflected</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241007-6331a9e09575d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/product/gosta-upholstery-stool/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Split Screen</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241008-6331a9e0957b2"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/product/johanna-shape-armchair/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Split Screen Reflected</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241009-6331a9e095806"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/product/johanna-upholstery-chair/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic Gallery</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241010-6331a9e09585b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/product/johanna-upholstery-stool/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic Gallery Reflected</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241011-6331a9e0958b3"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/product/modern-upholstery-stool/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Grid Gallery</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241012-6331a9e09590e"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 new"
                              >
                                <a
                                  href="/product/modern-shape-armchair/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Grid Gallery Reflected</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-17556-6331a9e095967"
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
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-17558-6331a9e0959d3"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/product/modern-upholstery-stool/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Standard Product</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-43318-6331a9e095a2c"
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
                                id="nav-menu-item-17560-6331a9e095a83"
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
                                id="nav-menu-item-17561-6331a9e095ae7"
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
                                id="nav-menu-item-17562-6331a9e095b3d"
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
                                id="nav-menu-item-241016-6331a9e095b93"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/product/gosta-upholstery-stool/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Downloadable Product</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17563-6331a9e095bea"
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
                                id="nav-menu-item-17564-6331a9e095c40"
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
                            id="nav-menu-item-240997-6331a9e095c99"
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
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-241041-6331a9e095cf2"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 current-menu-item "
                              >
                                <a
                                  href="/shop/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Shop Layout</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-28-6331a9e095d49"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/cart/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Cart</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-29-6331a9e095da6"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/checkout/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Checkout</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-30-6331a9e095dfc"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/my-account/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>My Account</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-17557-6331a9e095e52"
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
                            id="nav-menu-item-18267-6331a9e095eac"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 current-menu-item has-submenu "
                          >
                            <a
                              href="/shop/"
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
                            <ul className="menu-depth-2 sub-sub-menu">
                              <li
                                id="nav-menu-item-241039-6331a9e095f10"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/shop/classic-category/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Classic Category</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-241038-6331a9e095f67"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/shop/offset-category/"
                                  className="menu-link -undash sub-menu-link "
                                >
                                  <span>Offset Category</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="mega-menu-item nav-item menu-item-depth-0 has-submenu ">
                        <a
                          href="#"
                          className="menu-link main-menu-link -undash item-title"
                        >
                          <span>Pages</span>
                          <div className="has-submenu-icon">
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
                          data-sub-menu-height="129.65640000000002"
                        >
                          <li
                            id="nav-menu-item-20920-6059ae52e905c"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="../about/"
                              className="menu-link sub-menu-link -undash"
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
                              </div>
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height={240}
                            >
                              <li
                                id="nav-menu-item-19825-6059ae52e9096"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../about-ver4/"
                                  className="menu-link sub-menu-link -undash"
                                >
                                  <span>About Us</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-19823-6059ae52e90c9"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../about-ver2/"
                                  className="menu-link sub-menu-link -undash"
                                >
                                  <span>About Classic</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-19826-6059ae52e90fb"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../about-ver5/"
                                  className="menu-link sub-menu-link -undash"
                                >
                                  <span>Hey, we’re Ohio</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-19822-6059ae52e912c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../about-ver1/"
                                  className="menu-link sub-menu-link -undash"
                                >
                                  <span>Our Bureau</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-19824-6059ae52e915d"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../about-ver3/"
                                  className="menu-link sub-menu-link -undash"
                                >
                                  <span>Our Studio</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-81832-6059ae52e918e"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../about-ver6/"
                                  className="menu-link sub-menu-link -undash"
                                >
                                  <span className="new">About Creative</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-20944-6059ae52e91c2"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="../contact/"
                              className="menu-link sub-menu-link -undash"
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
                              </div>
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height={240}
                            >
                              <li
                                id="nav-menu-item-20803-6059ae52e91f6"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../contact-us-ver4/"
                                  className="menu-link sub-menu-link -undash"
                                >
                                  <span>Contact: Agency</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20802-6059ae52e9228"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../contact-us-ver5/"
                                  className="menu-link sub-menu-link -undash"
                                >
                                  <span>Contact: Blocks</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20801-6059ae52e925a"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../contact-us-ver2/"
                                  className="menu-link sub-menu-link -undash"
                                >
                                  <span>Contact: Classic</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20800-6059ae52e9294"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../contact-us-ver3/"
                                  className="menu-link sub-menu-link -undash"
                                >
                                  <span>Contact: Corporate</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20799-6059ae52e92d8"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../contact-us-ver1/"
                                  className="menu-link sub-menu-link -undash"
                                >
                                  <span>Contact: Simple</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-81831-6059ae52e930c"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="../contact-us-ver6/"
                                  className="menu-link sub-menu-link -undash"
                                >
                                  <span className="new">Contact: Creative</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-menu-item-20731-6059ae52e9342"
                            className="mega-menu-item sub-nav-item menu-item-depth-1 has-submenu "
                          >
                            <a
                              href="#"
                              className="menu-link sub-menu-link -undash"
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
                              </div>
                            </a>
                            <ul
                              className="menu-depth-2 sub-sub-menu"
                              data-sub-menu-height={160}
                            >
                              <li
                                id="nav-menu-item-20733-6059ae52e937b"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/adadad/"
                                  className="menu-link sub-menu-link -undash"
                                >
                                  <span>404 Page</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20735-6059ae52e93ac"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/demo30/"
                                  className="menu-link sub-menu-link -undash"
                                >
                                  <span>Coming Soon</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20734-6059ae52e93dd"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/?s=identity"
                                  className="menu-link sub-menu-link -undash"
                                >
                                  <span>Search Results</span>
                                </a>
                              </li>
                              <li
                                id="nav-menu-item-20732-6059ae52e940f"
                                className="mega-menu-item sub-nav-item menu-item-depth-2 "
                              >
                                <a
                                  href="/my-account/"
                                  className="menu-link sub-menu-link -undash"
                                >
                                  <span>Sign In / Sign Up</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="mega-menu-item nav-item menu-item-depth-0 current-menu-item has-submenu ">
                        <a
                          href="#"
                          className="menu-link -undash main-menu-link item-title"
                        >
                          <span>Help</span>
                          <div className="has-submenu-icon">
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
                        <ul className="menu-depth-1 sub-menu">
                          <li className="mega-menu-item sub-nav-item menu-item-depth-1 ">
                            <a
                              href="/ohio/"
                              target="_blank"
                              className="menu-link -undash sub-menu-link "
                            >
                              <span>Documentation</span>
                            </a>
                          </li>
                          <li className="mega-menu-item sub-nav-item menu-item-depth-1 ">
                            <a
                              href="https://colabrio.ticksy.com/"
                              target="_blank"
                              className="menu-link -undash sub-menu-link "
                            >
                              <span>Help Center</span>
                            </a>
                          </li>
                          <li className="mega-menu-item sub-nav-item menu-item-depth-1 ">
                            <a
                              href="https://colabrio.ticksy.com/"
                              target="_blank"
                              className="menu-link -undash sub-menu-link "
                            >
                              <span>Submit a Ticket</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="mega-menu-item nav-item menu-item-depth-0 version">
                        <a
                          target="_blank"
                          href="/ohio/release-notes/"
                          className="menu-link -undash main-menu-link item-title"
                        >
                          <span>Changelog</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="copyright">
                    © 2022, Ohio Theme. Made with passion by{" "}
                    <a href="http://clbthemes.com" target="_blank">
                      Colabrio
                    </a>
                    .<br />
                    All right reserved.
                  </div>
                </div>
                <div className="social-bar dynamic-typo light-typo">
                  <ul className="social-bar-holder titles-typo -unlist">
                    <li>Follow Us</li>
                    <li>—</li>
                    <li>
                      <a
                        target="_blank"
                        href=" https://www.facebook.com/colabrio/"
                        className="-undash youtube"
                      >
                        Yt.
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/colabrio/"
                        className="-undash behance"
                      >
                        Be.
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href=" https://www.facebook.com/colabrio/"
                        className="-undash tiktok"
                      >
                        Tk.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <ul className="menu-optional -unlist">
              <li>
                <a
                  
                  href="#"
                  onClick={() => signIn()}
                  className="button -small btn-optional"
                  target="_blank"
                >
                  Subscribirse al blog
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                    alt=""
                    style={{ marginLeft: "8px" }}
                    width={20}
                    height={20}
                  />
                </a>
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
const ButtonSigOut = () => {
  const { data: session } = useSession();
  if (!session) {
    return null;
  }
  return (
    <button
      name="submit"
      style={{
        borderRadius: "8px",
        marginLeft: "8px",
        cursor: "pointer",
      }}
      id="submit"
      type="submit"
      className="submit"
      onClick={() => signOut()}
    >
      <span style={{ marginRight: "10px" }}>Sign Out </span>
    </button>
  );
};

const ButtonGoogleSignIn = () => {
  const { data: session } = useSession();

  if (session) {
    return null;
  }
  return (
    <button
      name="submit"
      style={{
        borderRadius: "8px",
        marginLeft: "8px",
        cursor: "pointer",
      }}
      id="submit"
      type="submit"
      className="submit"
      onClick={() => signIn()}
    >
      <span style={{ marginRight: "10px" }}>Sign In for Post Comment </span>

      <img
        src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
        alt=""
        width={30}
        height={30}
      />
    </button>
  );
};

