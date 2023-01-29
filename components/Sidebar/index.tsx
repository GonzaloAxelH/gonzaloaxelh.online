import Link from 'next/link';
import React from 'react'

const Sidebar = ({ visible, setCloseSidebar }: any) => {
  return (
    <div
      className={`clb-popup hamburger-nav ${visible}`}
      style={{ transition: "all 0.4s" }}
    >
      <div className="close-bar -right-flex">
        <button
          onClick={() => setCloseSidebar(false)}
          className="icon-button -light"
          aria-label="close"
        >
          <i className="icon" aria-hidden>
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
            <Link
              href="/"
              className="menu-link -undash main-menu-link item-title"
            >
              <span>Home</span>
            </Link>
          </li>
          <li
            id="nav-menu-item-223704-63cc42ab2360d"
            className="mega-menu-item nav-item menu-item-depth-0 has-submenu showed"
          >
            <Link
              href="/proyects"
              className="menu-link -undash main-menu-link item-title"
            >
              <span>Projects</span>
            </Link>
          </li>
          <li
            id="nav-menu-item-223705-63cc42ab2374a"
            className="mega-menu-item nav-item menu-item-depth-0 has-submenu showed"
          >
            <Link
              href="/blog"
              className="menu-link -undash main-menu-link item-title"
            >
              <span>Blog</span>
            </Link>
          </li>
          <li
            id="nav-menu-item-223706-63cc42ab2385e"
            className="mega-menu-item nav-item menu-item-depth-0 has-submenu showed"
          >
            <Link
              href="/contact"
              className="menu-link -undash main-menu-link item-title"
            >
              <span>Contact</span>
            </Link>
          </li>
          <li
            id="nav-menu-item-223707-63cc42ab2395c"
            className="mega-menu-item nav-item menu-item-depth-0 showed"
          >
            <Link
              href="/tutorials"
              className="menu-link -undash main-menu-link item-title"
            >
              <span>Tutorials</span>
            </Link>
          </li>
          <li
            id="nav-menu-item-223707-63cc42ab2395c"
            className="mega-menu-item nav-item menu-item-depth-0 showed"
          >
            <Link
              href="/community"
              className="menu-link -undash main-menu-link item-title"
            >
              <span>Community</span>
            </Link>
          </li>
        </ul>{" "}
      </div>
      <div className="hamburger-nav-details">
        <div className="details-column">
          <b>Get In Touch</b>
          <br /> 541 Melville Ave, Palo Alto, CA 94301,
          <br /> ask@
          <br /> Ph: +1.831.705.5448{" "}
        </div>
        <div className="details-column">
          <b>Work Inquiries</b>
          <br /> work@
          <br /> Ph: +1.831.306.6725{" "}
        </div>
        <div className="details-column social-networks ">
          <Link
            href="/Gonzalo/"
            target="_blank"
            rel="nofollow"
            className="network -unlink facebook"
          >
            <i className="fab fa-facebook-f" aria-hidden />
          </Link>
          <Link
            href="/Gonzalo/"
            target="_blank"
            rel="nofollow"
            className="network -unlink behance"
          >
            <i className="fab fa-behance" aria-hidden />
          </Link>
          <Link
            href="/Gonzalo/"
            target="_blank"
            rel="nofollow"
            className="network -unlink youtube"
          >
            <i className="fab fa-youtube" aria-hidden />
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Sidebar