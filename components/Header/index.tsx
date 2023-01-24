import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Header = ({ setIsOpenSidebar }: any) => {
  return (
    <header
      id="masthead"
      className="header header-2 both-types"
      data-header-fixed="true"
      data-fixed-initial-offset={150}
    >
      <div className="header-wrap">
        <div className="top-part">
          <div className="left-part">
            <div className="desktop-hamburger">
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
          </div>
          <div className="branding">
            <a
              className="branding-title titles-typo -undash"
              href="https://ohio.clbthemes.com/"
              rel="home"
            >
              <div className="logo" style={{ display: "flex" }}>
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
              <div className="logo-sticky" style={{}}>
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
              <div className="logo-dynamic" style={{}}>
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
          <div className="right-part">
            <ul className="menu-optional -unlist">
              <li className="vc_hidden-xs vc_hidden-sm">
                <select className="lang-dropdown -small">
                  <option
                    className="active"
                    selected={true}
                    value="https://ohio.clbthemes.com/header-v4/"
                  >
                    Eng
                  </option>{" "}
                </select>
              </li>
              <li className="icon-button-holder">
                <a
                  className="icon-button favorites-global wishlist"
                  href="https://ohio.clbthemes.com/wishlist/?wishlist-action=user"
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
                </a>
              </li>
              <li className="icon-button-holder">
                <div className="cart-button ">
                  <span className="cart-button-total">
                    <a
                      className="cart-customlocation -unlink"
                      href="https://ohio.clbthemes.com/cart/"
                    >
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          0.00
                        </bdi>
                      </span>
                    </a>
                  </span>
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
          </div>
        </div>
        <div className="middle-part" />
        <div className="bottom-part">
          <nav
            id="site-navigation"
            className="nav"
            data-mobile-menu-second-click-link=""
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
                      id="nav-menu-item-17446-63cf22b67673c"
                      className="mega-menu-item nav-item menu-item-depth-0 current-menu-ancestor has-submenu "
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
                        style={{ left: "-345.536px" }}
                      >
                        <li
                          id="nav-menu-item-17451-63cf22b6767f2"
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
                              id="nav-menu-item-17414-63cf22b676876"
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
                              id="nav-menu-item-17415-63cf22b6768ec"
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
                              id="nav-menu-item-17416-63cf22b67694b"
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
                              id="nav-menu-item-17417-63cf22b6769bd"
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
                              id="nav-menu-item-17418-63cf22b676a21"
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
                              id="nav-menu-item-17419-63cf22b676a7c"
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
                              id="nav-menu-item-17466-63cf22b676ad5"
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
                              id="nav-menu-item-17420-63cf22b676b2d"
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
                              id="nav-menu-item-17467-63cf22b676b85"
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
                          id="nav-menu-item-17452-63cf22b676be4"
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
                              id="nav-menu-item-17421-63cf22b676c3f"
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
                              id="nav-menu-item-17422-63cf22b676ca2"
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
                              id="nav-menu-item-17423-63cf22b676cf9"
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
                              id="nav-menu-item-17444-63cf22b676d50"
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
                              id="nav-menu-item-17424-63cf22b676da7"
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
                              id="nav-menu-item-17425-63cf22b676dfe"
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
                              id="nav-menu-item-17426-63cf22b676e55"
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
                              id="nav-menu-item-17427-63cf22b676eab"
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
                              id="nav-menu-item-19102-63cf22b676f02"
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
                          id="nav-menu-item-17448-63cf22b676f5d"
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
                              id="nav-menu-item-17428-63cf22b676fb6"
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
                              id="nav-menu-item-17429-63cf22b67700d"
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
                              id="nav-menu-item-17430-63cf22b677079"
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
                              id="nav-menu-item-17431-63cf22b6770cf"
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
                              id="nav-menu-item-17432-63cf22b677125"
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
                              id="nav-menu-item-17433-63cf22b67718a"
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
                              id="nav-menu-item-17434-63cf22b6771e0"
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
                              id="nav-menu-item-17435-63cf22b677237"
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
                              id="nav-menu-item-17436-63cf22b67728d"
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
                          id="nav-menu-item-17450-63cf22b6772e6"
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
                              id="nav-menu-item-19367-63cf22b67733f"
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
                              id="nav-menu-item-19580-63cf22b677396"
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
                              id="nav-menu-item-17437-63cf22b6773eb"
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
                              id="nav-menu-item-17440-63cf22b677442"
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
                              id="nav-menu-item-17441-63cf22b677497"
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
                              id="nav-menu-item-216758-63cf22b6774ed"
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
                              id="nav-menu-item-17442-63cf22b677543"
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
                              id="nav-menu-item-17443-63cf22b677599"
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
                              id="nav-menu-item-17445-63cf22b6775ee"
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
                          id="nav-menu-item-20844-63cf22b677649"
                          className="mega-menu-item sub-nav-item menu-item-depth-1 current-menu-ancestor current-menu-parent has-submenu "
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
                              id="nav-menu-item-20843-63cf22b6776a3"
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
                              id="nav-menu-item-20842-63cf22b6776fd"
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
                              id="nav-menu-item-20841-63cf22b677752"
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
                              id="nav-menu-item-20840-63cf22b6777a9"
                              className="mega-menu-item sub-nav-item menu-item-depth-2 current-menu-item "
                            >
                              <a
                                href="https://ohio.clbthemes.com/header-v4/"
                                className="menu-link -undash sub-menu-link "
                              >
                                <span>With Top Logo</span>
                              </a>
                            </li>
                            <li
                              id="nav-menu-item-20839-63cf22b6777ff"
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
                              id="nav-menu-item-20838-63cf22b677855"
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
                              id="nav-menu-item-217554-63cf22b6778ac"
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
                          id="nav-menu-item-17447-63cf22b677906"
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
                              id="nav-menu-item-49263-63cf22b67795f"
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
                              id="nav-menu-item-49262-63cf22b6779b5"
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
                              id="nav-menu-item-49261-63cf22b677a17"
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
                      id="nav-menu-item-17471-63cf22b677a7a"
                      className="mega-menu-item nav-item menu-item-depth-0 has-submenu "
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
                        style={{ left: "-443.973px" }}
                      >
                        <li
                          id="nav-menu-item-17472-63cf22b677ad4"
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
                              id="nav-menu-item-17537-63cf22b677b2d"
                              className="mega-menu-item sub-nav-item menu-item-depth-2 "
                            >
                              <a
                                href="https://ohio.clbthemes.com/portfolio/classic/"
                                className="menu-link -undash sub-menu-link "
                              >
                                <span>Classic</span>
                              </a>
                            </li>
                            <li
                              id="nav-menu-item-17554-63cf22b677b81"
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
                              id="nav-menu-item-17812-63cf22b677bd5"
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
                              id="nav-menu-item-17553-63cf22b677c28"
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
                              id="nav-menu-item-17811-63cf22b677c7c"
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
                              id="nav-menu-item-81838-63cf22b677cd0"
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
                              id="nav-menu-item-81837-63cf22b677d23"
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
                              id="nav-menu-item-221781-63cf22b677d77"
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
                              id="nav-menu-item-221788-63cf22b677dca"
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
                          id="nav-menu-item-17474-63cf22b677e22"
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
                          <ul className="menu-depth-2 sub-sub-menu">
                            <li
                              id="nav-menu-item-17594-63cf22b677e77"
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
                              id="nav-menu-item-17801-63cf22b677ecb"
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
                              id="nav-menu-item-17806-63cf22b677f1e"
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
                              id="nav-menu-item-222956-63cf22b677f78"
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
                              id="nav-menu-item-17890-63cf22b677fcb"
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
                              id="nav-menu-item-18192-63cf22b67802f"
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
                              id="nav-menu-item-18197-63cf22b678083"
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
                              id="nav-menu-item-18266-63cf22b6780d7"
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
                              id="nav-menu-item-217746-63cf22b678145"
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
                          id="nav-menu-item-17473-63cf22b67819f"
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
                          <ul className="menu-depth-2 sub-sub-menu">
                            <li
                              id="nav-menu-item-222634-63cf22b6781f8"
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
                              id="nav-menu-item-19324-63cf22b67824e"
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
                              id="nav-menu-item-222646-63cf22b6782a5"
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
                              id="nav-menu-item-19319-63cf22b6782fb"
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
                              id="nav-menu-item-19321-63cf22b678351"
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
                              id="nav-menu-item-18284-63cf22b6783a6"
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
                              id="nav-menu-item-20952-63cf22b6783fd"
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
                              id="nav-menu-item-20663-63cf22b678456"
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
                              id="nav-menu-item-81840-63cf22b6784ad"
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
                          id="nav-menu-item-17477-63cf22b678506"
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
                              id="nav-menu-item-17700-63cf22b67855f"
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
                              id="nav-menu-item-17701-63cf22b6785b5"
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
                              id="nav-menu-item-222169-63cf22b67860b"
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
                              id="nav-menu-item-17699-63cf22b678662"
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
                              id="nav-menu-item-222165-63cf22b6786b8"
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
                              id="nav-menu-item-222168-63cf22b67870e"
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
                              id="nav-menu-item-17698-63cf22b678763"
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
                              id="nav-menu-item-222167-63cf22b6787b9"
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
                              id="nav-menu-item-222166-63cf22b67880f"
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
                          id="nav-menu-item-17475-63cf22b678868"
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
                              id="nav-menu-item-17919-63cf22b6788c1"
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
                              id="nav-menu-item-17918-63cf22b67891b"
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
                              id="nav-menu-item-17917-63cf22b678971"
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
                              id="nav-menu-item-17916-63cf22b6789d5"
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
                              id="nav-menu-item-17936-63cf22b678a1d"
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
                              id="nav-menu-item-17935-63cf22b678a76"
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
                              id="nav-menu-item-17934-63cf22b678acc"
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
                              id="nav-menu-item-17933-63cf22b678b23"
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
                          id="nav-menu-item-17476-63cf22b678b7f"
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
                              id="nav-menu-item-17712-63cf22b678bd8"
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
                              id="nav-menu-item-17715-63cf22b678c2f"
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
                              id="nav-menu-item-17714-63cf22b678c85"
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
                              id="nav-menu-item-17713-63cf22b678cdb"
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
                              id="nav-menu-item-17733-63cf22b678d32"
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
                              id="nav-menu-item-17732-63cf22b678d8d"
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
                              id="nav-menu-item-17731-63cf22b678de3"
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
                              id="nav-menu-item-17730-63cf22b678e3a"
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
                      id="nav-menu-item-27-63cf22b678ea1"
                      className="mega-menu-item nav-item menu-item-depth-0 has-submenu "
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
                        style={{ left: "-540.27px" }}
                      >
                        <li
                          id="nav-menu-item-17478-63cf22b678efe"
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
                              id="nav-menu-item-17615-63cf22b678f56"
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
                              id="nav-menu-item-17737-63cf22b678fc0"
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
                              id="nav-menu-item-17942-63cf22b679017"
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
                              id="nav-menu-item-17970-63cf22b67906d"
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
                              id="nav-menu-item-17969-63cf22b6790cd"
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
                              id="nav-menu-item-18098-63cf22b679123"
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
                              id="nav-menu-item-18097-63cf22b67917a"
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
                              id="nav-menu-item-221016-63cf22b6791d1"
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
                          id="nav-menu-item-217606-63cf22b67922f"
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
                              id="nav-menu-item-18117-63cf22b679288"
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
                              id="nav-menu-item-18118-63cf22b6792df"
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
                              id="nav-menu-item-217608-63cf22b679335"
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
                              id="nav-menu-item-217619-63cf22b67938c"
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
                              id="nav-menu-item-221322-63cf22b6793e2"
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
                              id="nav-menu-item-217607-63cf22b67943a"
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
                              id="nav-menu-item-217624-63cf22b679490"
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
                          id="nav-menu-item-17479-63cf22b6794ef"
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
                              id="nav-menu-item-18307-63cf22b679571"
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
                              id="nav-menu-item-20901-63cf22b6795e8"
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
                              id="nav-menu-item-20902-63cf22b67965b"
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
                              id="nav-menu-item-221072-63cf22b6796c0"
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
                              id="nav-menu-item-221073-63cf22b679719"
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
                          id="nav-menu-item-17481-63cf22b67978a"
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
                              id="nav-menu-item-17689-63cf22b6797e9"
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
                              id="nav-menu-item-221227-63cf22b679847"
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
                              id="nav-menu-item-221232-63cf22b6798c8"
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
                              id="nav-menu-item-17648-63cf22b679938"
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
                              id="nav-menu-item-221249-63cf22b679990"
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
                              id="nav-menu-item-221253-63cf22b6799e7"
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
                              id="nav-menu-item-17647-63cf22b679a3d"
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
                              id="nav-menu-item-221266-63cf22b679a9b"
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
                              id="nav-menu-item-221268-63cf22b679af2"
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
                          id="nav-menu-item-17483-63cf22b679b50"
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
                              id="nav-menu-item-17995-63cf22b679bb5"
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
                              id="nav-menu-item-17994-63cf22b679c0e"
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
                              id="nav-menu-item-17997-63cf22b679c65"
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
                              id="nav-menu-item-17996-63cf22b679cf0"
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
                              id="nav-menu-item-17991-63cf22b679d56"
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
                              id="nav-menu-item-17990-63cf22b679dab"
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
                              id="nav-menu-item-17993-63cf22b679dfe"
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
                              id="nav-menu-item-17992-63cf22b679e63"
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
                          id="nav-menu-item-17482-63cf22b679ebe"
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
                              id="nav-menu-item-17671-63cf22b679f18"
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
                              id="nav-menu-item-17668-63cf22b679f95"
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
                              id="nav-menu-item-17669-63cf22b679fec"
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
                              id="nav-menu-item-17670-63cf22b67a04e"
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
                              id="nav-menu-item-17673-63cf22b67a0d0"
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
                              id="nav-menu-item-17672-63cf22b67a149"
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
                              id="nav-menu-item-17675-63cf22b67a1be"
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
                              id="nav-menu-item-17674-63cf22b67a224"
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
                      id="nav-menu-item-31-63cf22b67a292"
                      className="mega-menu-item nav-item menu-item-depth-0 has-submenu "
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
                        style={{ left: "-606.098px" }}
                      >
                        <li
                          id="nav-menu-item-240994-63cf22b67a2f4"
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
                              id="nav-menu-item-241000-63cf22b67a353"
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
                              id="nav-menu-item-240999-63cf22b67a400"
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
                              id="nav-menu-item-240998-63cf22b67a45c"
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
                              id="nav-menu-item-241652-63cf22b67a4c1"
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
                              id="nav-menu-item-241651-63cf22b67a531"
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
                              id="nav-menu-item-241650-63cf22b67a5a3"
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
                          id="nav-menu-item-240995-63cf22b67a60f"
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
                              id="nav-menu-item-241003-63cf22b67a66b"
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
                              id="nav-menu-item-241002-63cf22b67a6e6"
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
                              id="nav-menu-item-241001-63cf22b67a76c"
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
                              id="nav-menu-item-241004-63cf22b67a7f3"
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
                              id="nav-menu-item-241733-63cf22b67a87a"
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
                              id="nav-menu-item-241732-63cf22b67a8f4"
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
                              id="nav-menu-item-241731-63cf22b67a974"
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
                              id="nav-menu-item-241734-63cf22b67a9ef"
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
                          id="nav-menu-item-240996-63cf22b67aa64"
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
                              id="nav-menu-item-241005-63cf22b67aac5"
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
                              id="nav-menu-item-241006-63cf22b67ab21"
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
                              id="nav-menu-item-241007-63cf22b67ab7a"
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
                              id="nav-menu-item-241008-63cf22b67abd8"
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
                              id="nav-menu-item-241009-63cf22b67ac35"
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
                              id="nav-menu-item-241010-63cf22b67ac8d"
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
                              id="nav-menu-item-241011-63cf22b67ace4"
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
                              id="nav-menu-item-241012-63cf22b67ad41"
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
                          id="nav-menu-item-17556-63cf22b67ad9d"
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
                              id="nav-menu-item-17558-63cf22b67adf8"
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
                              id="nav-menu-item-43318-63cf22b67ae4f"
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
                              id="nav-menu-item-17560-63cf22b67aec3"
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
                              id="nav-menu-item-17561-63cf22b67af1e"
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
                              id="nav-menu-item-17562-63cf22b67af75"
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
                              id="nav-menu-item-241016-63cf22b67afcc"
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
                              id="nav-menu-item-17563-63cf22b67b02f"
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
                              id="nav-menu-item-17564-63cf22b67b085"
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
                          id="nav-menu-item-240997-63cf22b67b0e0"
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
                              id="nav-menu-item-241041-63cf22b67b13a"
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
                              id="nav-menu-item-28-63cf22b67b192"
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
                              id="nav-menu-item-29-63cf22b67b1ee"
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
                              id="nav-menu-item-30-63cf22b67b244"
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
                              id="nav-menu-item-17557-63cf22b67b29a"
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
                          id="nav-menu-item-18267-63cf22b67b2f5"
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
                          <ul className="menu-depth-2 sub-sub-menu">
                            <li
                              id="nav-menu-item-241039-63cf22b67b34e"
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
                              id="nav-menu-item-241038-63cf22b67b3a5"
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
                      id="nav-menu-item-18606-63cf22b67b40c"
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
                      <ul className="menu-depth-1 sub-menu">
                        <li
                          id="nav-menu-item-20920-63cf22b67b468"
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
                          <ul className="menu-depth-2 sub-sub-menu">
                            <li
                              id="nav-menu-item-19825-63cf22b67b4c1"
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
                              id="nav-menu-item-19823-63cf22b67b518"
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
                              id="nav-menu-item-19826-63cf22b67b56e"
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
                              id="nav-menu-item-19822-63cf22b67b5c4"
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
                              id="nav-menu-item-19824-63cf22b67b629"
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
                              id="nav-menu-item-81832-63cf22b67b685"
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
                          id="nav-menu-item-20944-63cf22b67b6e0"
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
                          <ul className="menu-depth-2 sub-sub-menu">
                            <li
                              id="nav-menu-item-20803-63cf22b67b738"
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
                              id="nav-menu-item-20802-63cf22b67b78f"
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
                              id="nav-menu-item-20801-63cf22b67b7f8"
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
                              id="nav-menu-item-20800-63cf22b67b85a"
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
                              id="nav-menu-item-20799-63cf22b67b8d6"
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
                              id="nav-menu-item-81831-63cf22b67b950"
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
                          id="nav-menu-item-20731-63cf22b67b9b6"
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
                          <ul className="menu-depth-2 sub-sub-menu">
                            <li
                              id="nav-menu-item-20733-63cf22b67ba1a"
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
                              id="nav-menu-item-20735-63cf22b67ba7b"
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
                              id="nav-menu-item-20734-63cf22b67bad0"
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
                              id="nav-menu-item-20732-63cf22b67bb3b"
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
                      id="nav-menu-item-220972-63cf22b67bbaa"
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
                      <ul className="menu-depth-1 sub-menu">
                        <li
                          id="nav-menu-item-25539-63cf22b67bc06"
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
                          id="nav-menu-item-220973-63cf22b67bc5d"
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
                          id="nav-menu-item-220974-63cf22b67bcb3"
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
                      id="nav-menu-item-220971-63cf22b67bd15"
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
                    value="https://ohio.clbthemes.com/header-v4/"
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
        </div>
      </div>
    </header>
  );
};

export default Header;
