import React from "react";

const Header = () => {
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
                href="https://ohio.clbthemes.com/"
                rel="home"
              >
                <div className="logo" style={{ display: "none" }}>
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/LitFhpPB-OhioLogo.svg"
                    className="main-logo light-scheme-logo svg-logo"
                    alt="Ohio Theme"
                  />
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/LitFhpPB-OhioLogo.svg"
                    className="dark-scheme-logo svg-logo"
                    alt="Ohio Theme"
                  />
                </div>
                <div className="logo-sticky" style={{ display: "flex" }}>
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/LitFhpPB-OhioLogo.svg"
                    className="main-logo light-scheme-logo svg-logo"
                    alt="Ohio Theme"
                  />
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/LitFhpPB-OhioLogo.svg"
                    className="dark-scheme-logo svg-logo"
                    alt="Ohio Theme"
                  />
                </div>
                <div className="logo-dynamic" style={{ display: "none" }}>
                  <span className="dark hidden">
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/LitFhpPB-OhioLogo.svg"
                      className="svg-logo"
                      alt="Ohio Theme"
                    />
                  </span>
                  <span className="light hidden">
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/LitFhpPB-OhioLogo.svg"
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
              className="nav"
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
                        id="nav-menu-item-220971-63c6af246c110"
                        className="mega-menu-item nav-item menu-item-depth-0 version"
                      >
                        <a
                          href="https://docs.clbthemes.com/ohio/release-notes/"
                          className="menu-link -undash main-menu-link item-title"
                        >
                          <p>Home</p>
                        </a>
                      </li>
                      <li
                        id="nav-menu-item-220971-63c6af246c110"
                        className="mega-menu-item nav-item menu-item-depth-0 version"
                      >
                        <a
                          href="https://docs.clbthemes.com/ohio/release-notes/"
                          className="menu-link -undash main-menu-link item-title"
                        >
                          <p>About</p>
                        </a>
                      </li>
                      <li
                        id="nav-menu-item-220971-63c6af246c110"
                        className="mega-menu-item nav-item menu-item-depth-0 version"
                      >
                        <a
                          href="https://docs.clbthemes.com/ohio/release-notes/"
                          className="menu-link -undash main-menu-link item-title"
                        >
                          <p>Blog</p>
                        </a>
                      </li>
                      <li
                        id="nav-menu-item-220971-63c6af246c110"
                        className="mega-menu-item nav-item menu-item-depth-0 version"
                      >
                        <a
                          href="https://docs.clbthemes.com/ohio/release-notes/"
                          className="menu-link -undash main-menu-link item-title"
                        >
                          <p>Tutorials</p>
                        </a>
                      </li>
                      <li
                        id="nav-menu-item-220971-63c6af246c110"
                        className="mega-menu-item nav-item menu-item-depth-0 version"
                      >
                        <a
                          href="https://docs.clbthemes.com/ohio/release-notes/"
                          className="menu-link -undash main-menu-link item-title"
                        >
                          <p>Community</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="copyright">
                    <p>
                      © 2016-2023
                      <a href="http://clbthemes.com/" target="_blank">
                        Colabrio
                      </a>
                      . All rights reserved |
                      <a target="_blank" href="https://1.envato.market/5Q25j">
                        <b>Purchase</b>
                      </a>
                    </p>
                    <p>
                      <a href="http://clbthemes.com/" target="_blank">
                        Security
                      </a>
                      |
                      <a href="http://clbthemes.com/" target="_blank">
                        Privacy &amp; Cookie Policy
                      </a>
                      |
                      <a href="http://clbthemes.com/" target="_blank">
                        Terms of Service
                      </a>
                    </p>
                  </div>
                  <select className="lang-dropdown -small">
                    <option
                      className="active"
                      selected={true}
                      value="https://ohio.clbthemes.com/standard/"
                    >
                      Eng
                    </option>
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
                        Fb.
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/colabrio/"
                        target="_blank"
                        rel="nofollow"
                        className="-undash behance"
                      >
                        Be.
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/colabrio/"
                        target="_blank"
                        rel="nofollow"
                        className="-undash youtube"
                      >
                        Yt.
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
                    value="https://ohio.clbthemes.com/standard/"
                  >
                    Eng
                  </option>
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
            </ul>
            <div className="close-menu" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
