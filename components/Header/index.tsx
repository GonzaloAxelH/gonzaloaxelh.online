import Link from "next/link";
import React from "react";

const Header = ({ setIsOpenSidebar }: any) => {
  const isOpen = true;
  return (
    <header
      id="masthead"
      className="header header-3 both-types -sticky showed " style={{maxWidth:"100vw"}}
      data-header-fixed="true"
      data-fixed-initial-offset={150}
    >
      <div className="header-wrap">
        <div className="header-wrap-inner">
          <div className="left-part">
            <div className="desktop-hamburger -left">
              <button
                onClick={() => setIsOpenSidebar(true)}
                className="icon-button hamburger"
                aria-controls="site-navigation"
                aria-expanded="false"
              >
                <i className="icon" />
              </button>
              <button
                style={{ marginLeft: "1em" }}
                className="icon-button "
                aria-controls="site-navigation"
                aria-expanded="false"
              >
                <img
                  alt="Colabrio"
                  src="/small_logo.png"
                  className=" "
                  height={50}
                  width={50}
                  loading="lazy"
                  decoding="async"
                  style={{ transform: "scale(0.8)" }}
                ></img>
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
                <div className="logo"></div>
              </Link>
            </div>
          </div>

          <div className="right-part right">
            <nav
              id="site-navigation"
              className="nav -visible"
              data-mobile-menu-second-click-link
            >
              <div
                className={`mobile-overlay menu-mobile-overlay ${
                  isOpen ? "visible" : ""
                }`}
              >
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
                            <i
                              className="menu-chevron"
                              style={{ display: "none" }}
                            >
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
                          </div>
                        </Link>
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
                          <div className="has-submenu-icon"></div>
                        </Link>
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
                          <div className="has-submenu-icon"></div>
                        </Link>
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
                          <div className="has-submenu-icon"></div>
                        </Link>
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
                          <div className="has-submenu-icon"></div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="copyright">
                    <p>
                      © 2016-2023 {" - "}
                      <Link href="#d" target="_blank">
                        Gonzalo
                      </Link>
                      . All rights reserved |
                      <Link target="_blank" href="#d">
                        <b>Purchase</b>
                      </Link>
                    </p>
                    <p>
                      <Link href="#d" target="_blank">
                        Security
                      </Link>
                      |
                      <Link href="#sd" target="_blank">
                        Privacy &amp; Cookie Policy
                      </Link>
                      |
                      <Link href="#d" target="_blank">
                        Terms of Service
                      </Link>
                    </p>
                  </div>
                  <select className="lang-dropdown -small">
                    <option className="active" value="/about-ver6/">
                      Español (PE)
                    </option>
                  </select>
                </div>
                <div className="social-bar dynamic-typo dark-typo">
                  <ul className="social-bar-holder titles-typo -small-t -unlist vc_hidden-md">
                    <li>Follow Us</li>
                    <li>—</li>
                    <li>
                      <Link
                        href="#d"
                        target="_blank"
                        rel="nofollow"
                        className="-undash facebook"
                      >
                        Fb.
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#gh"
                        target="_blank"
                        rel="nofollow"
                        className="-undash behance"
                      >
                        Be.
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#sf"
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
                  <option className="active" value="/about-ver6/">
                    Eng
                  </option>
                </select>
              </li>
              <li className="icon-button-holder">
                <Link
                  className="icon-button favorites-global wishlist"
                  href="#ddd"
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
                  <span className="cart-button-total"></span>
                  <span className="holder">
                    <button className="icon-button " aria-label="cart">
                      <img
                        alt="Colabrio"
                        src="/small_logo.png"
                        className=" "
                        height="50"
                        width="50"
                        loading="lazy"
                        decoding="async"
                        style={{ transform: "scale(0.8)" }}
                      />
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
