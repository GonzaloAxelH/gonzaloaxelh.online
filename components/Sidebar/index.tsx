import React from 'react'

const Sidebar = ({ visible, setCloseSidebar }: any) => {
  return (
    <div className={`clb-popup hamburger-nav ${visible}`}>
      <div className="close-bar -right-flex">
        <button
          onClick={() => setCloseSidebar(false)}
          className="icon-button -light"
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
      <div className="hamburger-nav-holder">
        <ul id="secondary-menu" className="menu">
          <li
            id="nav-menu-item-223703-63cc42ab233d5"
            className="mega-menu-item nav-item menu-item-depth-0 has-submenu showed"
          >
            <a href="#" className="menu-link -undash main-menu-link item-title">
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
              </div>
            </a>
            <ul className="menu-depth-1 sub-menu">
              <li
                id="nav-menu-item-223708-63cc42ab2344c"
                className="mega-menu-item sub-nav-item menu-item-depth-1 "
              >
                <a
                  href="https://ohio.clbthemes.com/about/"
                  className="menu-link -undash sub-menu-link "
                >
                  <span>About</span>
                </a>
              </li>
              <li
                id="nav-menu-item-223709-63cc42ab234b2"
                className="mega-menu-item sub-nav-item menu-item-depth-1 "
              >
                <a
                  href="https://ohio.clbthemes.com/contact/"
                  className="menu-link -undash sub-menu-link "
                >
                  <span>Contact</span>
                </a>
              </li>
              <li
                id="nav-menu-item-223710-63cc42ab23502"
                className="mega-menu-item sub-nav-item menu-item-depth-1 "
              >
                <a
                  href="https://ohio.clbthemes.com/adadad/"
                  className="menu-link -undash sub-menu-link "
                >
                  <span>404 Page</span>
                </a>
              </li>
              <li
                id="nav-menu-item-223711-63cc42ab23558"
                className="mega-menu-item sub-nav-item menu-item-depth-1 "
              >
                <a
                  href="https://ohio.clbthemes.com/demo30/"
                  className="menu-link -undash sub-menu-link "
                >
                  <span>Coming Soon</span>
                </a>
              </li>
              <li
                id="nav-menu-item-223712-63cc42ab235a1"
                className="mega-menu-item sub-nav-item menu-item-depth-1 "
              >
                <a
                  href="https://ohio.clbthemes.com/my-account/"
                  className="menu-link -undash sub-menu-link "
                >
                  <span>Sing In / Sign Up</span>
                </a>
              </li>
            </ul>
          </li>
          <li
            id="nav-menu-item-223704-63cc42ab2360d"
            className="mega-menu-item nav-item menu-item-depth-0 has-submenu showed"
          >
            <a href="#" className="menu-link -undash main-menu-link item-title">
              <span>Projects</span>
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
            <ul className="menu-depth-1 sub-menu">
              <li
                id="nav-menu-item-223713-63cc42ab23666"
                className="mega-menu-item sub-nav-item menu-item-depth-1 "
              >
                <a
                  href="https://ohio.clbthemes.com/portfolio/minimal-metro/"
                  className="menu-link -undash sub-menu-link "
                >
                  <span>Grid View</span>
                </a>
              </li>
              <li
                id="nav-menu-item-223714-63cc42ab236ae"
                className="mega-menu-item sub-nav-item menu-item-depth-1 "
              >
                <a
                  href="https://ohio.clbthemes.com/portfolio/onepage-with-smooth-scroll/"
                  className="menu-link -undash sub-menu-link "
                >
                  <span>Slider</span>
                </a>
              </li>
              <li
                id="nav-menu-item-223715-63cc42ab236f6"
                className="mega-menu-item sub-nav-item menu-item-depth-1 "
              >
                <a
                  href="https://ohio.clbthemes.com/project/diseno-grafico-para-tu-hermosa-casa/"
                  className="menu-link -undash sub-menu-link "
                >
                  <span>Single Project</span>
                </a>
              </li>
            </ul>
          </li>
          <li
            id="nav-menu-item-223705-63cc42ab2374a"
            className="mega-menu-item nav-item menu-item-depth-0 has-submenu showed"
          >
            <a
              href="https://ohio.clbthemes.com/blog/blog-minimal-metro/"
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
              </div>
            </a>
            <ul className="menu-depth-1 sub-menu">
              <li
                id="nav-menu-item-223716-63cc42ab237a7"
                className="mega-menu-item sub-nav-item menu-item-depth-1 "
              >
                <a
                  href="https://ohio.clbthemes.com/blog/minimal-metro/"
                  className="menu-link -undash sub-menu-link "
                >
                  <span>Grid View</span>
                </a>
              </li>
              <li
                id="nav-menu-item-223717-63cc42ab237f1"
                className="mega-menu-item sub-nav-item menu-item-depth-1 "
              >
                <a
                  href="https://ohio.clbthemes.com/standard/"
                  className="menu-link -undash sub-menu-link "
                >
                  <span>Single Post</span>
                </a>
              </li>
            </ul>
          </li>
          <li
            id="nav-menu-item-223706-63cc42ab2385e"
            className="mega-menu-item nav-item menu-item-depth-0 has-submenu showed"
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
              </div>
            </a>
            <ul className="menu-depth-1 sub-menu">
              <li
                id="nav-menu-item-223718-63cc42ab238ba"
                className="mega-menu-item sub-nav-item menu-item-depth-1 "
              >
                <a
                  href="https://ohio.clbthemes.com/shop/"
                  className="menu-link -undash sub-menu-link "
                >
                  <span>Grid View</span>
                </a>
              </li>
              <li
                id="nav-menu-item-223719-63cc42ab23906"
                className="mega-menu-item sub-nav-item menu-item-depth-1 "
              >
                <a
                  href="https://ohio.clbthemes.com/product/gosta-shape-armchair/"
                  className="menu-link -undash sub-menu-link "
                >
                  <span>Single Product</span>
                </a>
              </li>
            </ul>
          </li>
          <li
            id="nav-menu-item-223707-63cc42ab2395c"
            className="mega-menu-item nav-item menu-item-depth-0 showed"
          >
            <a
              href="https://themeforest.net/user/colabrio/portfolio"
              className="menu-link -undash main-menu-link item-title"
            >
              <span>Purchase</span>
            </a>
          </li>
        </ul>{" "}
      </div>
      <div className="hamburger-nav-details">
        <div className="details-column">
          <b>Get In Touch</b>
          <br /> 541 Melville Ave, Palo Alto, CA 94301,
          <br /> ask@ohio.clbthemes.com
          <br /> Ph: +1.831.705.5448{" "}
        </div>
        <div className="details-column">
          <b>Work Inquiries</b>
          <br /> work@ohio.clbthemes.com
          <br /> Ph: +1.831.306.6725{" "}
        </div>
        <div className="details-column social-networks ">
          <a
            href="https://www.facebook.com/colabrio/"
            target="_blank"
            rel="nofollow"
            className="network -unlink facebook"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="https://www.facebook.com/colabrio/"
            target="_blank"
            rel="nofollow"
            className="network -unlink behance"
          >
            <i className="fab fa-behance" />
          </a>
          <a
            href="https://www.facebook.com/colabrio/"
            target="_blank"
            rel="nofollow"
            className="network -unlink youtube"
          >
            <i className="fab fa-youtube" />
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Sidebar