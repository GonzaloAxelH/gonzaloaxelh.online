import Container from "@/components/hocs/Container";
import { useGetCurse, useGetCurses } from "@/hooks/useGetCurses";
import Link from "next/link";
import React from "react";
import slugify from "slugify";

const index = ({ recentCurses, test }: any) => {
  console.log(recentCurses);
  console.log(test);
  return (
    <Container customAddClases=" page-template-default page page-id-17344 wp-embed-responsive theme-ohio woocommerce-js ohio-theme-3-1-9 with-switcher with-header-3 with-fixed-search with-headline with-sticky-header with-mobile-switcher links-underline icon-buttons-animation custom-cursor with-ajax-button wpb-js-composer js-comp-ver-6.10.0 vc_responsive elementor-default elementor-kit-216976 page-is-loaded">
      <div
        id="content"
        className="site-content"
        data-mobile-menu-resolution={768}
      >
        <div className="page-headline without-cap -center subheader_excluded headline-with-parallax">
          <a
            href="#blog/simple/"
            className="back-link -unlink vc_hidden-md vc_hidden-sm vc_hidden-xs"
          >
            <button
              className="icon-button"
              aria-controls="site-navigation"
              aria-expanded="false"
            >
              <i className="icon">
                <svg
                  className="default"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                </svg>
                <svg
                  className="minimal"
                  width={18}
                  height={16}
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 8C0 7.58579 0.335786 7.25 0.75 7.25H17.25C17.6642 7.25 18 7.58579 18 8C18 8.41421 17.6642 8.75 17.25 8.75H0.75C0.335786 8.75 0 8.41421 0 8Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.96967 0.71967C10.2626 0.426777 10.7374 0.426777 11.0303 0.71967L17.7803 7.46967C18.0732 7.76256 18.0732 8.23744 17.7803 8.53033L11.0303 15.2803C10.7374 15.5732 10.2626 15.5732 9.96967 15.2803C9.67678 14.9874 9.67678 14.5126 9.96967 14.2197L16.1893 8L9.96967 1.78033C9.67678 1.48744 9.67678 1.01256 9.96967 0.71967Z"
                  />
                </svg>
              </i>
            </button>
            <span className="caption"> Back </span>
          </a>
          <div
            className="parallax"
            data-parallax-bg="vertical"
            data-parallax-speed=".5"
          >
            <div
              className="parallax-bg bg-image"
              style={{
                height: "398.5px",
                transform: "translate3d(0px, -89.5596px, 0px)",
                transition: "transform 0.1s linear 0s",
              }}
            />
            <div className="parallax-content" />
          </div>
          <div className="holder">
            <div className="page-container">
              <div className="animated-holder">
                <div className="headline-meta" />
                <h1 className="title">Simple Contained</h1>
                <div className="post-meta-holder">
                  <div
                    className="builder-switcher"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <a
                      style={{ marginBottom: "15px" }}
                      className="active"
                      href="#blog/simple-contained/"
                    >
                      WPBakery
                    </a>
                    <a
                      style={{ marginBottom: "15px" }}
                      href="#blog/simple-contained-elementor/"
                    >
                      Elementor
                    </a>
                    <a
                      style={{ marginBottom: "15px" }}
                      href="#blog/simple-contained-elementor/"
                    >
                      Elementor
                    </a>
                    <a
                      style={{ marginBottom: "15px" }}
                      href="#blog/simple-contained-elementor/"
                    >
                      Elementor
                    </a>
                    <a
                      style={{ marginBottom: "15px" }}
                      href="#blog/simple-contained-elementor/"
                    >
                      Elementor
                    </a>
                    <a
                      style={{ marginBottom: "15px" }}
                      href="#blog/simple-contained-elementor/"
                    >
                      Elementor
                    </a>
                    <a
                      style={{ marginBottom: "15px" }}
                      href="#blog/simple-contained-elementor/"
                    >
                      Elementor
                    </a>
                    <a
                      style={{ marginBottom: "15px" }}
                      href="#blog/simple-contained-elementor/"
                    >
                      Elementor
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-container">
          <div id="primary" className="content-area">
            <div className="page-content">
              <main id="main" className="site-main">
                <article
                  id="post-217621"
                  className="post-217621 page type-page status-publish hentry"
                >
                  <div className="entry-content">
                    <section className="wpb-content-wrapper">
                      <div className="vc_row wpb_row vc_row-fluid clb__narrow">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget blog-posts vc_row"
                                id="ohio-custom-63d3ea56a17ba"
                                data-lazy-container="posts"
                              >
                                {recentCurses.map((course: any) => {
                                  return (
                                    <div
                                      className="vc_col-lg-12 vc_col-md-12 vc_col-xs-12 masonry-block grid-item"
                                      data-lazy-item
                                      data-lazy-scope="posts"
                                    >
                                      <div
                                        className="blog-item card -layout6 -contained type-blockquote"
                                        data-tilt="true"
                                        data-tilt-perspective={6000}
                                      >
                                        <a
                                          href="#organic-food-isnt-much-better-for-your-future-health/"
                                          data-cursor-class="cursor-link"
                                        >
                                          <figure className="image-holder">
                                            <img
                                              src="./Simple Contained – Ohio Theme_files/clb_blog_5-872x1024.jpg"
                                              srcSet="
                                      https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/clb_blog_5-900x1057.jpg  900w,
                                      https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/clb_blog_5-255x300.jpg   255w,
                                      https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/clb_blog_5-768x902.jpg   768w,
                                      https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/clb_blog_5-872x1024.jpg  872w,
                                      https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/clb_blog_5.jpg          1362w
                                    "
                                              sizes="(max-width: 872px) 100vw, 872px"
                                              alt=""
                                            />
                                          </figure>
                                        </a>
                                        <div className="card-details">
                                          <div className="card-details-item">
                                            <div className="headline-meta -small-t">
                                              <div className="date">
                                                July 5, 2020
                                              </div>
                                              <span className="post-meta-estimate">
                                                9 min read
                                              </span>
                                            </div>
                                            <div className="overlay-details -top -fade-up">
                                              <ul className="meta-holder -unlist">
                                                <li className="meta-item">
                                                  <div className="avatar -small">
                                                    <img
                                                      alt="Colabrio"
                                                      src="./Simple Contained – Ohio Theme_files/4058fe7404c4f9d88d5d2d6db42320f8.png"
                                                      srcSet="
                                              https://secure.gravatar.com/avatar/4058fe7404c4f9d88d5d2d6db42320f8?s=100&d=mm&r=g 2x
                                            "
                                                      className="avatar avatar-50 photo author-avatar"
                                                      height={50}
                                                      width={50}
                                                      loading="lazy"
                                                      decoding="async"
                                                    />
                                                  </div>
                                                </li>
                                                <li className="meta-item">
                                                  <span className="prefix">
                                                    Posted by
                                                  </span>
                                                  <span className="author">
                                                    Colabrio
                                                  </span>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="card-details-item -left">
                                            <div className="heading title">
                                              <h4 className="title">
                                                <Link
                                                  className="-unlink"
                                                  href={`/tutorials/${slugify(
                                                    course.properties.Name
                                                      .title[0].plain_text
                                                  ).toLowerCase()}`}
                                                >
                                                  {
                                                    course.properties.Name
                                                      .title[0].plain_text
                                                  }
                                                </Link>
                                              </h4>
                                            </div>
                                            <p />
                                            <blockquote>
                                              Getting practice furnished the
                                              where pouring the of emphasis as
                                              return encourage a then that
                                              times, the doing would in object
                                              we young been in the in the to
                                              their line helplessly or name to
                                              in of, and all and to more my way
                                              and opinion.
                                            </blockquote>
                                            <p />
                                            <div className="category-holder -with-tag">
                                              <a
                                                className="tag -unlink"
                                                href="#category/personal/"
                                              >
                                                Personal
                                              </a>
                                              <a
                                                className="tag -unlink"
                                                href="#category/stories/"
                                              >
                                                Stories
                                              </a>
                                            </div>
                                          </div>
                                          <div className="card-details-item">
                                            <Link
                                              className="button -text"
                                              
                                                      href={`/tutorials/${slugify(
                                                    course.properties.Name
                                                      .title[0].plain_text
                                                  ).toLowerCase()}`}
                                            >
                                              View Course
                                              <i className="icon -right">
                                                <svg
                                                  className="default"
                                                  width={16}
                                                  height={16}
                                                  viewBox="0 0 16 16"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                                                </svg>
                                                <svg
                                                  className="minimal"
                                                  width={18}
                                                  height={16}
                                                  viewBox="0 0 18 16"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M0 8C0 7.58579 0.335786 7.25 0.75 7.25H17.25C17.6642 7.25 18 7.58579 18 8C18 8.41421 17.6642 8.75 17.25 8.75H0.75C0.335786 8.75 0 8.41421 0 8Z"
                                                  />
                                                  <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M9.96967 0.71967C10.2626 0.426777 10.7374 0.426777 11.0303 0.71967L17.7803 7.46967C18.0732 7.76256 18.0732 8.23744 17.7803 8.53033L11.0303 15.2803C10.7374 15.5732 10.2626 15.5732 9.96967 15.2803C9.67678 14.9874 9.67678 14.5126 9.96967 14.2197L16.1893 8L9.96967 1.78033C9.67678 1.48744 9.67678 1.01256 9.96967 0.71967Z"
                                                  />
                                                </svg>
                                              </i>
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                              <div
                                className="holder"
                                id="ohio-custom-63d3ea56a17ba"
                              >
                                <ul className="pagination -small -unlist">
                                  <li className="page-item">
                                    <a
                                      href="#blog/simple-contained/"
                                      className="page-link button -unlink -pagination"
                                    >
                                      1
                                    </a>
                                  </li>
                                  <li className="page-item">
                                    <a
                                      href="#blog/simple-contained/page/2/"
                                      className="page-link button -unlink -pagination -flat"
                                    >
                                      2
                                    </a>
                                  </li>
                                  <li className="page-item">
                                    <a
                                      href="#blog/simple-contained/page/2/"
                                      className="page-link button -unlink -pagination -flat"
                                    >
                                      <i className="icon">
                                        <svg
                                          className="default"
                                          width={16}
                                          height={16}
                                          viewBox="0 0 16 16"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                                        </svg>
                                        <svg
                                          className="minimal"
                                          width={18}
                                          height={16}
                                          viewBox="0 0 18 16"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0 8C0 7.58579 0.335786 7.25 0.75 7.25H17.25C17.6642 7.25 18 7.58579 18 8C18 8.41421 17.6642 8.75 17.25 8.75H0.75C0.335786 8.75 0 8.41421 0 8Z"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M9.96967 0.71967C10.2626 0.426777 10.7374 0.426777 11.0303 0.71967L17.7803 7.46967C18.0732 7.76256 18.0732 8.23744 17.7803 8.53033L11.0303 15.2803C10.7374 15.5732 10.2626 15.5732 9.96967 15.2803C9.67678 14.9874 9.67678 14.5126 9.96967 14.2197L16.1893 8L9.96967 1.78033C9.67678 1.48744 9.67678 1.01256 9.96967 0.71967Z"
                                          />
                                        </svg>{" "}
                                      </i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "8vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
      </div>

      <div className="page-headline without-cap -center subheader_excluded headline-with-parallax">
        <a
          href="#"
          className="back-link -unlink vc_hidden-md vc_hidden-sm vc_hidden-xs"
        >
          <button
            className="icon-button"
            aria-controls="site-navigation"
            aria-expanded="false"
          >
            <i className="icon">
              <svg
                className="default"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
              </svg>
              <svg
                className="minimal"
                width={18}
                height={16}
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 8C0 7.58579 0.335786 7.25 0.75 7.25H17.25C17.6642 7.25 18 7.58579 18 8C18 8.41421 17.6642 8.75 17.25 8.75H0.75C0.335786 8.75 0 8.41421 0 8Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.96967 0.71967C10.2626 0.426777 10.7374 0.426777 11.0303 0.71967L17.7803 7.46967C18.0732 7.76256 18.0732 8.23744 17.7803 8.53033L11.0303 15.2803C10.7374 15.5732 10.2626 15.5732 9.96967 15.2803C9.67678 14.9874 9.67678 14.5126 9.96967 14.2197L16.1893 8L9.96967 1.78033C9.67678 1.48744 9.67678 1.01256 9.96967 0.71967Z"
                />
              </svg>
            </i>
          </button>
          <span className="caption"> Back </span>
        </a>
        <div
          className="parallax"
          data-parallax-bg="vertical"
          data-parallax-speed=".5"
        >
          <div
            className="parallax-bg bg-image"
            style={{
              height: "398.891px",
              transform: "translate3d(0px, -66.5362px, 0px)",
              transition: "transform 0.1s linear 0s",
            }}
          />
          <div className="parallax-content" />
        </div>
        <div className="holder">
          <div className="page-container">
            <div className="animated-holder">
              <div className="headline-meta" />
              <h1 className="title">Episodios de cursos</h1>
              <div className="post-meta-holder">
                <div className="builder-switcher">
                  <a
                    className="active"
                    href="#portfolio-projects-shortcode/portfolio-projects-shortcode/"
                  >
                    WPBakery
                  </a>
                  <a href="#portfolio-projects-shortcode/portfolio-projects-widget/">
                    Elementor
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-container">
        <div id="primary" className="content-area">
          <div className="page-content">
            <main id="main" className="site-main">
              <article
                id="post-17344"
                className="post-17344 page type-page status-publish hentry"
              >
                <div className="entry-content">
                  <section className="wpb-content-wrapper">
                    <div className="vc_row wpb_row vc_row-fluid clb__narrow">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="ohio-widget heading ohio-heading-sc -center"
                              id="ohio-custom-63d3e6ba41d8f"
                            >
                              <h4 className="title">React</h4>
                            </div>
                            <div
                              className="vc_empty_space"
                              style={{ height: "4vh" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              className="ohio-widget portfolio-projects grid_1"
                              id="ohio-custom-63d3e6ba42075"
                              data-ohio-portfolio-grid="true"
                            >
                              <div
                                className="vc_row portfolio-grid"
                                data-isotope-grid="true"
                                data-lazy-container="projects"
                                data-projects-per-page={3}
                                style={{
                                  position: "relative",
                                  height: "502.406px",
                                }}
                              >
                                <div
                                  className="portfolio-item-wrap masonry-block grid-item vc_col-lg-4 vc_col-md-4 vc_col-xs-12 ohio-filter-project-2ec9e9be8bed1ffe0ed8144a3f59c246 ohio-filter-project-70012063bf1d91c6d3924d1475e0747a"
                                  data-lazy-item
                                  data-lazy-scope="projects"
                                >
                                  <div
                                    className="portfolio-item card -layout1"
                                    data-portfolio-popup="ohio-lightbox-63d3e6ba4d196"
                                  >
                                    <a
                                      className="-unlink"
                                      href="#project/stickers-pack/"
                                      data-cursor-class="cursor-link"
                                    >
                                      <div
                                        className="image-holder"
                                        data-tilt="true"
                                        data-tilt-perspective={6000}
                                        style={{
                                          willChange: "transform",
                                          transform:
                                            "perspective(6000px) rotateX(0deg) rotateY(0deg)",
                                        }}
                                      >
                                        <img
                                          src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ZRJlKIPg-project__01.jpeg"
                                          alt="Stickers Pack"
                                        />
                                        <div className="overlay-details -top -fade-down">
                                          <button className="icon-button -light btn-lightbox">
                                            <i className="icon">
                                              <svg
                                                className="default"
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path d="M0 2V6H2V2H6V0H2C0.9 0 0 0.9 0 2ZM2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0Z" />
                                              </svg>
                                              <svg
                                                className="minimal"
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M0.427734 1.20793C0.427734 0.77758 0.776603 0.428711 1.20696 0.428711H5.10306C5.53341 0.428711 5.88228 0.77758 5.88228 1.20793C5.88228 1.63828 5.53341 1.98715 5.10306 1.98715H1.98618V5.10404C1.98618 5.53439 1.63731 5.88326 1.20696 5.88326C0.776603 5.88326 0.427734 5.53439 0.427734 5.10404V1.20793ZM12.116 1.20793C12.116 0.77758 12.4649 0.428711 12.8953 0.428711H16.7914C17.2217 0.428711 17.5706 0.77758 17.5706 1.20793V5.10404C17.5706 5.53439 17.2217 5.88326 16.7914 5.88326C16.361 5.88326 16.0121 5.53439 16.0121 5.10404V1.98715H12.8953C12.4649 1.98715 12.116 1.63828 12.116 1.20793ZM1.20696 12.117C1.63731 12.117 1.98618 12.4659 1.98618 12.8962V16.0131H5.10306C5.53341 16.0131 5.88228 16.362 5.88228 16.7923C5.88228 17.2227 5.53341 17.5716 5.10306 17.5716H1.20696C0.776603 17.5716 0.427734 17.2227 0.427734 16.7923V12.8962C0.427734 12.4659 0.776603 12.117 1.20696 12.117ZM16.7914 12.117C17.2217 12.117 17.5706 12.4659 17.5706 12.8962V16.7923C17.5706 17.2227 17.2217 17.5716 16.7914 17.5716H12.8953C12.4649 17.5716 12.116 17.2227 12.116 16.7923C12.116 16.362 12.4649 16.0131 12.8953 16.0131H16.0121V12.8962C16.0121 12.4659 16.361 12.117 16.7914 12.117Z"
                                                />
                                              </svg>
                                            </i>
                                          </button>
                                        </div>
                                        <div
                                          className="video-button -animation open-popup"
                                          data-video="https://player.vimeo.com/video/356065748?&controls=1&muted=1&autoplay=1&title=1&byline=1&#t=31s"
                                        >
                                          <button className="icon-button">
                                            <i className="icon">
                                              <svg
                                                className="default"
                                                width={13}
                                                height={20}
                                                viewBox="0 0 13 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path d="M0 20L13 10L0 0V20Z" />
                                              </svg>
                                              <svg
                                                className="minimal"
                                                width={17}
                                                height={20}
                                                viewBox="0 0 17 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M0.766274 0.442678C0.998698 0.312329 1.26165 0.24625 1.52808 0.25124C1.79452 0.256229 2.05481 0.332105 2.28219 0.471065L15.78 8.72C15.9993 8.85399 16.1804 9.04206 16.3061 9.26618C16.4318 9.4903 16.4978 9.74295 16.4978 9.99991C16.4978 10.2569 16.4318 10.5095 16.3061 10.7336C16.1804 10.9578 15.9993 11.1458 15.78 11.2798L2.28219 19.5288C2.05481 19.6677 1.79451 19.7436 1.52808 19.7486C1.26165 19.7536 0.9987 19.6875 0.766274 19.5571C0.533848 19.4268 0.340346 19.2369 0.205669 19.0069C0.0709916 18.777 1.3411e-07 18.5153 0 18.2488V1.75098C1.3411e-07 1.48449 0.0709911 1.22282 0.205669 0.992883C0.340347 0.76294 0.533849 0.573027 0.766274 0.442678ZM14.9978 9.99991L1.5 1.75098L1.5 18.2488L14.9978 9.99991Z"
                                                />
                                              </svg>
                                            </i>
                                          </button>
                                        </div>
                                      </div>
                                    </a>
                                    <div className="card-details">
                                      <div className="heading">
                                        <h4 className="title">Stickers Pack</h4>
                                        <div className="show-project">
                                          <div className="category-holder">
                                            <span className="category">
                                              <a href="#portfolio-category/identity/">
                                                Identity
                                              </a>
                                            </span>
                                            <span className="category">
                                              <a href="#portfolio-category/mockup/">
                                                Mockup
                                              </a>
                                            </span>
                                          </div>
                                          <div className="show-project-link -full-w">
                                            <a href="#project/stickers-pack/">
                                              Show project
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="portfolio-item-wrap masonry-block grid-item vc_col-lg-4 vc_col-md-4 vc_col-xs-12 ohio-filter-project-2ec9e9be8bed1ffe0ed8144a3f59c246 ohio-filter-project-70012063bf1d91c6d3924d1475e0747a"
                                  data-lazy-item
                                  data-lazy-scope="projects"
                                >
                                  <div
                                    className="portfolio-item card -layout1"
                                    data-portfolio-popup="ohio-lightbox-63d3e6ba563d4"
                                  >
                                    <a
                                      className="-unlink"
                                      href="#project/grafico-scenic/"
                                      data-cursor-class="cursor-link"
                                    >
                                      <div
                                        className="image-holder"
                                        data-tilt="true"
                                        data-tilt-perspective={6000}
                                        style={{
                                          transform:
                                            "perspective(6000px) rotateX(0deg) rotateY(0deg)",
                                          willChange: "transform",
                                        }}
                                      >
                                        <img
                                          src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ZRJlKIPg-project__01.jpeg"
                                          alt="Gráfico Scenic"
                                        />
                                        <div className="overlay-details -top -fade-down">
                                          <button className="icon-button -light btn-lightbox">
                                            <i className="icon">
                                              <svg
                                                className="default"
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path d="M0 2V6H2V2H6V0H2C0.9 0 0 0.9 0 2ZM2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0Z" />
                                              </svg>
                                              <svg
                                                className="minimal"
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M0.427734 1.20793C0.427734 0.77758 0.776603 0.428711 1.20696 0.428711H5.10306C5.53341 0.428711 5.88228 0.77758 5.88228 1.20793C5.88228 1.63828 5.53341 1.98715 5.10306 1.98715H1.98618V5.10404C1.98618 5.53439 1.63731 5.88326 1.20696 5.88326C0.776603 5.88326 0.427734 5.53439 0.427734 5.10404V1.20793ZM12.116 1.20793C12.116 0.77758 12.4649 0.428711 12.8953 0.428711H16.7914C17.2217 0.428711 17.5706 0.77758 17.5706 1.20793V5.10404C17.5706 5.53439 17.2217 5.88326 16.7914 5.88326C16.361 5.88326 16.0121 5.53439 16.0121 5.10404V1.98715H12.8953C12.4649 1.98715 12.116 1.63828 12.116 1.20793ZM1.20696 12.117C1.63731 12.117 1.98618 12.4659 1.98618 12.8962V16.0131H5.10306C5.53341 16.0131 5.88228 16.362 5.88228 16.7923C5.88228 17.2227 5.53341 17.5716 5.10306 17.5716H1.20696C0.776603 17.5716 0.427734 17.2227 0.427734 16.7923V12.8962C0.427734 12.4659 0.776603 12.117 1.20696 12.117ZM16.7914 12.117C17.2217 12.117 17.5706 12.4659 17.5706 12.8962V16.7923C17.5706 17.2227 17.2217 17.5716 16.7914 17.5716H12.8953C12.4649 17.5716 12.116 17.2227 12.116 16.7923C12.116 16.362 12.4649 16.0131 12.8953 16.0131H16.0121V12.8962C16.0121 12.4659 16.361 12.117 16.7914 12.117Z"
                                                />
                                              </svg>
                                            </i>
                                          </button>
                                        </div>
                                        <div
                                          className="video-button -animation open-popup"
                                          data-video="https://player.vimeo.com/video/356065748?&controls=1&muted=1&autoplay=1&title=1&byline=1&#t=31s"
                                        >
                                          <button className="icon-button">
                                            <i className="icon">
                                              <svg
                                                className="default"
                                                width={13}
                                                height={20}
                                                viewBox="0 0 13 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path d="M0 20L13 10L0 0V20Z" />
                                              </svg>
                                              <svg
                                                className="minimal"
                                                width={17}
                                                height={20}
                                                viewBox="0 0 17 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M0.766274 0.442678C0.998698 0.312329 1.26165 0.24625 1.52808 0.25124C1.79452 0.256229 2.05481 0.332105 2.28219 0.471065L15.78 8.72C15.9993 8.85399 16.1804 9.04206 16.3061 9.26618C16.4318 9.4903 16.4978 9.74295 16.4978 9.99991C16.4978 10.2569 16.4318 10.5095 16.3061 10.7336C16.1804 10.9578 15.9993 11.1458 15.78 11.2798L2.28219 19.5288C2.05481 19.6677 1.79451 19.7436 1.52808 19.7486C1.26165 19.7536 0.9987 19.6875 0.766274 19.5571C0.533848 19.4268 0.340346 19.2369 0.205669 19.0069C0.0709916 18.777 1.3411e-07 18.5153 0 18.2488V1.75098C1.3411e-07 1.48449 0.0709911 1.22282 0.205669 0.992883C0.340347 0.76294 0.533849 0.573027 0.766274 0.442678ZM14.9978 9.99991L1.5 1.75098L1.5 18.2488L14.9978 9.99991Z"
                                                />
                                              </svg>
                                            </i>
                                          </button>
                                        </div>
                                      </div>
                                    </a>
                                    <div className="card-details">
                                      <div className="heading">
                                        <h4 className="title">
                                          Gráfico Scenic
                                        </h4>
                                        <div className="show-project">
                                          <div className="category-holder">
                                            <span className="category">
                                              <a href="#portfolio-category/identity/">
                                                Identity
                                              </a>
                                            </span>
                                            <span className="category">
                                              <a href="#portfolio-category/mockup/">
                                                Mockup
                                              </a>
                                            </span>
                                          </div>
                                          <div className="show-project-link -full-w">
                                            <a href="#project/grafico-scenic/">
                                              Show project
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="portfolio-item-wrap masonry-block grid-item vc_col-lg-4 vc_col-md-4 vc_col-xs-12 ohio-filter-project-2ec9e9be8bed1ffe0ed8144a3f59c246 ohio-filter-project-70012063bf1d91c6d3924d1475e0747a"
                                  data-lazy-item
                                  data-lazy-scope="projects"
                                >
                                  <div
                                    className="portfolio-item card -layout1"
                                    data-portfolio-popup="ohio-lightbox-63d3e6ba58b3d"
                                  >
                                    <a
                                      className="-unlink"
                                      href="#project/space-campaign/"
                                      data-cursor-class="cursor-link"
                                    >
                                      <div
                                        className="image-holder"
                                        data-tilt="true"
                                        data-tilt-perspective={6000}
                                        style={{
                                          willChange: "transform",
                                          transform:
                                            "perspective(6000px) rotateX(0deg) rotateY(0deg)",
                                        }}
                                      >
                                        <img
                                          src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ZRJlKIPg-project__01.jpeg"
                                          alt="Space Campaign"
                                        />
                                        <div className="overlay-details -top -fade-down">
                                          <button className="icon-button -light btn-lightbox">
                                            <i className="icon">
                                              <svg
                                                className="default"
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path d="M0 2V6H2V2H6V0H2C0.9 0 0 0.9 0 2ZM2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0Z" />
                                              </svg>
                                              <svg
                                                className="minimal"
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M0.427734 1.20793C0.427734 0.77758 0.776603 0.428711 1.20696 0.428711H5.10306C5.53341 0.428711 5.88228 0.77758 5.88228 1.20793C5.88228 1.63828 5.53341 1.98715 5.10306 1.98715H1.98618V5.10404C1.98618 5.53439 1.63731 5.88326 1.20696 5.88326C0.776603 5.88326 0.427734 5.53439 0.427734 5.10404V1.20793ZM12.116 1.20793C12.116 0.77758 12.4649 0.428711 12.8953 0.428711H16.7914C17.2217 0.428711 17.5706 0.77758 17.5706 1.20793V5.10404C17.5706 5.53439 17.2217 5.88326 16.7914 5.88326C16.361 5.88326 16.0121 5.53439 16.0121 5.10404V1.98715H12.8953C12.4649 1.98715 12.116 1.63828 12.116 1.20793ZM1.20696 12.117C1.63731 12.117 1.98618 12.4659 1.98618 12.8962V16.0131H5.10306C5.53341 16.0131 5.88228 16.362 5.88228 16.7923C5.88228 17.2227 5.53341 17.5716 5.10306 17.5716H1.20696C0.776603 17.5716 0.427734 17.2227 0.427734 16.7923V12.8962C0.427734 12.4659 0.776603 12.117 1.20696 12.117ZM16.7914 12.117C17.2217 12.117 17.5706 12.4659 17.5706 12.8962V16.7923C17.5706 17.2227 17.2217 17.5716 16.7914 17.5716H12.8953C12.4649 17.5716 12.116 17.2227 12.116 16.7923C12.116 16.362 12.4649 16.0131 12.8953 16.0131H16.0121V12.8962C16.0121 12.4659 16.361 12.117 16.7914 12.117Z"
                                                />
                                              </svg>
                                            </i>
                                          </button>
                                        </div>
                                        <div
                                          className="video-button -animation open-popup"
                                          data-video="https://player.vimeo.com/video/356065748?&controls=1&muted=1&autoplay=1&title=1&byline=1&#t=31s"
                                        >
                                          <button className="icon-button">
                                            <i className="icon">
                                              <svg
                                                className="default"
                                                width={13}
                                                height={20}
                                                viewBox="0 0 13 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path d="M0 20L13 10L0 0V20Z" />
                                              </svg>
                                              <svg
                                                className="minimal"
                                                width={17}
                                                height={20}
                                                viewBox="0 0 17 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M0.766274 0.442678C0.998698 0.312329 1.26165 0.24625 1.52808 0.25124C1.79452 0.256229 2.05481 0.332105 2.28219 0.471065L15.78 8.72C15.9993 8.85399 16.1804 9.04206 16.3061 9.26618C16.4318 9.4903 16.4978 9.74295 16.4978 9.99991C16.4978 10.2569 16.4318 10.5095 16.3061 10.7336C16.1804 10.9578 15.9993 11.1458 15.78 11.2798L2.28219 19.5288C2.05481 19.6677 1.79451 19.7436 1.52808 19.7486C1.26165 19.7536 0.9987 19.6875 0.766274 19.5571C0.533848 19.4268 0.340346 19.2369 0.205669 19.0069C0.0709916 18.777 1.3411e-07 18.5153 0 18.2488V1.75098C1.3411e-07 1.48449 0.0709911 1.22282 0.205669 0.992883C0.340347 0.76294 0.533849 0.573027 0.766274 0.442678ZM14.9978 9.99991L1.5 1.75098L1.5 18.2488L14.9978 9.99991Z"
                                                />
                                              </svg>
                                            </i>
                                          </button>
                                        </div>
                                      </div>
                                    </a>
                                    <div className="card-details">
                                      <div className="heading">
                                        <h4 className="title">
                                          Space Campaign
                                        </h4>
                                        <div className="show-project">
                                          <div className="category-holder">
                                            <span className="category">
                                              <a href="#portfolio-category/identity/">
                                                Identity
                                              </a>
                                            </span>
                                            <span className="category">
                                              <a href="#portfolio-category/mockup/">
                                                Mockup
                                              </a>
                                            </span>
                                          </div>
                                          <div className="show-project-link -full-w">
                                            <a href="#project/space-campaign/">
                                              Show project
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
 <div className="page-container">
        <div id="primary" className="content-area">
          <div className="page-content">
            <main id="main" className="site-main">
              <article
                id="post-17344"
                className="post-17344 page type-page status-publish hentry"
              >
                <div className="entry-content">
                  <section className="wpb-content-wrapper">
                    <div className="vc_row wpb_row vc_row-fluid clb__narrow">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="ohio-widget heading ohio-heading-sc -center"
                              id="ohio-custom-63d3e6ba41d8f"
                            >
                              <h4 className="title">Angular </h4>
                            </div>
                            <div
                              className="vc_empty_space"
                              style={{ height: "4vh" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div
                              className="ohio-widget portfolio-projects grid_1"
                              id="ohio-custom-63d3e6ba42075"
                              data-ohio-portfolio-grid="true"
                            >
                              <div
                                className="vc_row portfolio-grid"
                                data-isotope-grid="true"
                                data-lazy-container="projects"
                                data-projects-per-page={3}
                                style={{
                                  position: "relative",
                                  height: "502.406px",
                                }}
                              >
                                <div
                                  className="portfolio-item-wrap masonry-block grid-item vc_col-lg-4 vc_col-md-4 vc_col-xs-12 ohio-filter-project-2ec9e9be8bed1ffe0ed8144a3f59c246 ohio-filter-project-70012063bf1d91c6d3924d1475e0747a"
                                  data-lazy-item
                                  data-lazy-scope="projects"
                                >
                                  <div
                                    className="portfolio-item card -layout1"
                                    data-portfolio-popup="ohio-lightbox-63d3e6ba4d196"
                                  >
                                    <a
                                      className="-unlink"
                                      href="#project/stickers-pack/"
                                      data-cursor-class="cursor-link"
                                    >
                                      <div
                                        className="image-holder"
                                        data-tilt="true"
                                        data-tilt-perspective={6000}
                                        style={{
                                          willChange: "transform",
                                          transform:
                                            "perspective(6000px) rotateX(0deg) rotateY(0deg)",
                                        }}
                                      >
                                        <img
                                          src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ZRJlKIPg-project__01.jpeg"
                                          alt="Stickers Pack"
                                        />
                                        <div className="overlay-details -top -fade-down">
                                          <button className="icon-button -light btn-lightbox">
                                            <i className="icon">
                                              <svg
                                                className="default"
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path d="M0 2V6H2V2H6V0H2C0.9 0 0 0.9 0 2ZM2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0Z" />
                                              </svg>
                                              <svg
                                                className="minimal"
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M0.427734 1.20793C0.427734 0.77758 0.776603 0.428711 1.20696 0.428711H5.10306C5.53341 0.428711 5.88228 0.77758 5.88228 1.20793C5.88228 1.63828 5.53341 1.98715 5.10306 1.98715H1.98618V5.10404C1.98618 5.53439 1.63731 5.88326 1.20696 5.88326C0.776603 5.88326 0.427734 5.53439 0.427734 5.10404V1.20793ZM12.116 1.20793C12.116 0.77758 12.4649 0.428711 12.8953 0.428711H16.7914C17.2217 0.428711 17.5706 0.77758 17.5706 1.20793V5.10404C17.5706 5.53439 17.2217 5.88326 16.7914 5.88326C16.361 5.88326 16.0121 5.53439 16.0121 5.10404V1.98715H12.8953C12.4649 1.98715 12.116 1.63828 12.116 1.20793ZM1.20696 12.117C1.63731 12.117 1.98618 12.4659 1.98618 12.8962V16.0131H5.10306C5.53341 16.0131 5.88228 16.362 5.88228 16.7923C5.88228 17.2227 5.53341 17.5716 5.10306 17.5716H1.20696C0.776603 17.5716 0.427734 17.2227 0.427734 16.7923V12.8962C0.427734 12.4659 0.776603 12.117 1.20696 12.117ZM16.7914 12.117C17.2217 12.117 17.5706 12.4659 17.5706 12.8962V16.7923C17.5706 17.2227 17.2217 17.5716 16.7914 17.5716H12.8953C12.4649 17.5716 12.116 17.2227 12.116 16.7923C12.116 16.362 12.4649 16.0131 12.8953 16.0131H16.0121V12.8962C16.0121 12.4659 16.361 12.117 16.7914 12.117Z"
                                                />
                                              </svg>
                                            </i>
                                          </button>
                                        </div>
                                        <div
                                          className="video-button -animation open-popup"
                                          data-video="https://player.vimeo.com/video/356065748?&controls=1&muted=1&autoplay=1&title=1&byline=1&#t=31s"
                                        >
                                          <button className="icon-button">
                                            <i className="icon">
                                              <svg
                                                className="default"
                                                width={13}
                                                height={20}
                                                viewBox="0 0 13 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path d="M0 20L13 10L0 0V20Z" />
                                              </svg>
                                              <svg
                                                className="minimal"
                                                width={17}
                                                height={20}
                                                viewBox="0 0 17 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M0.766274 0.442678C0.998698 0.312329 1.26165 0.24625 1.52808 0.25124C1.79452 0.256229 2.05481 0.332105 2.28219 0.471065L15.78 8.72C15.9993 8.85399 16.1804 9.04206 16.3061 9.26618C16.4318 9.4903 16.4978 9.74295 16.4978 9.99991C16.4978 10.2569 16.4318 10.5095 16.3061 10.7336C16.1804 10.9578 15.9993 11.1458 15.78 11.2798L2.28219 19.5288C2.05481 19.6677 1.79451 19.7436 1.52808 19.7486C1.26165 19.7536 0.9987 19.6875 0.766274 19.5571C0.533848 19.4268 0.340346 19.2369 0.205669 19.0069C0.0709916 18.777 1.3411e-07 18.5153 0 18.2488V1.75098C1.3411e-07 1.48449 0.0709911 1.22282 0.205669 0.992883C0.340347 0.76294 0.533849 0.573027 0.766274 0.442678ZM14.9978 9.99991L1.5 1.75098L1.5 18.2488L14.9978 9.99991Z"
                                                />
                                              </svg>
                                            </i>
                                          </button>
                                        </div>
                                      </div>
                                    </a>
                                    <div className="card-details">
                                      <div className="heading">
                                        <h4 className="title">Stickers Pack</h4>
                                        <div className="show-project">
                                          <div className="category-holder">
                                            <span className="category">
                                              <a href="#portfolio-category/identity/">
                                                Identity
                                              </a>
                                            </span>
                                            <span className="category">
                                              <a href="#portfolio-category/mockup/">
                                                Mockup
                                              </a>
                                            </span>
                                          </div>
                                          <div className="show-project-link -full-w">
                                            <a href="#project/stickers-pack/">
                                              Show project
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="portfolio-item-wrap masonry-block grid-item vc_col-lg-4 vc_col-md-4 vc_col-xs-12 ohio-filter-project-2ec9e9be8bed1ffe0ed8144a3f59c246 ohio-filter-project-70012063bf1d91c6d3924d1475e0747a"
                                  data-lazy-item
                                  data-lazy-scope="projects"
                                >
                                  <div
                                    className="portfolio-item card -layout1"
                                    data-portfolio-popup="ohio-lightbox-63d3e6ba563d4"
                                  >
                                    <a
                                      className="-unlink"
                                      href="#project/grafico-scenic/"
                                      data-cursor-class="cursor-link"
                                    >
                                      <div
                                        className="image-holder"
                                        data-tilt="true"
                                        data-tilt-perspective={6000}
                                        style={{
                                          transform:
                                            "perspective(6000px) rotateX(0deg) rotateY(0deg)",
                                          willChange: "transform",
                                        }}
                                      >
                                        <img
                                          src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ZRJlKIPg-project__01.jpeg"
                                          alt="Gráfico Scenic"
                                        />
                                        <div className="overlay-details -top -fade-down">
                                          <button className="icon-button -light btn-lightbox">
                                            <i className="icon">
                                              <svg
                                                className="default"
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path d="M0 2V6H2V2H6V0H2C0.9 0 0 0.9 0 2ZM2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0Z" />
                                              </svg>
                                              <svg
                                                className="minimal"
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M0.427734 1.20793C0.427734 0.77758 0.776603 0.428711 1.20696 0.428711H5.10306C5.53341 0.428711 5.88228 0.77758 5.88228 1.20793C5.88228 1.63828 5.53341 1.98715 5.10306 1.98715H1.98618V5.10404C1.98618 5.53439 1.63731 5.88326 1.20696 5.88326C0.776603 5.88326 0.427734 5.53439 0.427734 5.10404V1.20793ZM12.116 1.20793C12.116 0.77758 12.4649 0.428711 12.8953 0.428711H16.7914C17.2217 0.428711 17.5706 0.77758 17.5706 1.20793V5.10404C17.5706 5.53439 17.2217 5.88326 16.7914 5.88326C16.361 5.88326 16.0121 5.53439 16.0121 5.10404V1.98715H12.8953C12.4649 1.98715 12.116 1.63828 12.116 1.20793ZM1.20696 12.117C1.63731 12.117 1.98618 12.4659 1.98618 12.8962V16.0131H5.10306C5.53341 16.0131 5.88228 16.362 5.88228 16.7923C5.88228 17.2227 5.53341 17.5716 5.10306 17.5716H1.20696C0.776603 17.5716 0.427734 17.2227 0.427734 16.7923V12.8962C0.427734 12.4659 0.776603 12.117 1.20696 12.117ZM16.7914 12.117C17.2217 12.117 17.5706 12.4659 17.5706 12.8962V16.7923C17.5706 17.2227 17.2217 17.5716 16.7914 17.5716H12.8953C12.4649 17.5716 12.116 17.2227 12.116 16.7923C12.116 16.362 12.4649 16.0131 12.8953 16.0131H16.0121V12.8962C16.0121 12.4659 16.361 12.117 16.7914 12.117Z"
                                                />
                                              </svg>
                                            </i>
                                          </button>
                                        </div>
                                        <div
                                          className="video-button -animation open-popup"
                                          data-video="https://player.vimeo.com/video/356065748?&controls=1&muted=1&autoplay=1&title=1&byline=1&#t=31s"
                                        >
                                          <button className="icon-button">
                                            <i className="icon">
                                              <svg
                                                className="default"
                                                width={13}
                                                height={20}
                                                viewBox="0 0 13 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path d="M0 20L13 10L0 0V20Z" />
                                              </svg>
                                              <svg
                                                className="minimal"
                                                width={17}
                                                height={20}
                                                viewBox="0 0 17 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M0.766274 0.442678C0.998698 0.312329 1.26165 0.24625 1.52808 0.25124C1.79452 0.256229 2.05481 0.332105 2.28219 0.471065L15.78 8.72C15.9993 8.85399 16.1804 9.04206 16.3061 9.26618C16.4318 9.4903 16.4978 9.74295 16.4978 9.99991C16.4978 10.2569 16.4318 10.5095 16.3061 10.7336C16.1804 10.9578 15.9993 11.1458 15.78 11.2798L2.28219 19.5288C2.05481 19.6677 1.79451 19.7436 1.52808 19.7486C1.26165 19.7536 0.9987 19.6875 0.766274 19.5571C0.533848 19.4268 0.340346 19.2369 0.205669 19.0069C0.0709916 18.777 1.3411e-07 18.5153 0 18.2488V1.75098C1.3411e-07 1.48449 0.0709911 1.22282 0.205669 0.992883C0.340347 0.76294 0.533849 0.573027 0.766274 0.442678ZM14.9978 9.99991L1.5 1.75098L1.5 18.2488L14.9978 9.99991Z"
                                                />
                                              </svg>
                                            </i>
                                          </button>
                                        </div>
                                      </div>
                                    </a>
                                    <div className="card-details">
                                      <div className="heading">
                                        <h4 className="title">
                                          Gráfico Scenic
                                        </h4>
                                        <div className="show-project">
                                          <div className="category-holder">
                                            <span className="category">
                                              <a href="#portfolio-category/identity/">
                                                Identity
                                              </a>
                                            </span>
                                            <span className="category">
                                              <a href="#portfolio-category/mockup/">
                                                Mockup
                                              </a>
                                            </span>
                                          </div>
                                          <div className="show-project-link -full-w">
                                            <a href="#project/grafico-scenic/">
                                              Show project
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="portfolio-item-wrap masonry-block grid-item vc_col-lg-4 vc_col-md-4 vc_col-xs-12 ohio-filter-project-2ec9e9be8bed1ffe0ed8144a3f59c246 ohio-filter-project-70012063bf1d91c6d3924d1475e0747a"
                                  data-lazy-item
                                  data-lazy-scope="projects"
                                >
                                  <div
                                    className="portfolio-item card -layout1"
                                    data-portfolio-popup="ohio-lightbox-63d3e6ba58b3d"
                                  >
                                    <a
                                      className="-unlink"
                                      href="#project/space-campaign/"
                                      data-cursor-class="cursor-link"
                                    >
                                      <div
                                        className="image-holder"
                                        data-tilt="true"
                                        data-tilt-perspective={6000}
                                        style={{
                                          willChange: "transform",
                                          transform:
                                            "perspective(6000px) rotateX(0deg) rotateY(0deg)",
                                        }}
                                      >
                                        <img
                                          src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ZRJlKIPg-project__01.jpeg"
                                          alt="Space Campaign"
                                        />
                                        <div className="overlay-details -top -fade-down">
                                          <button className="icon-button -light btn-lightbox">
                                            <i className="icon">
                                              <svg
                                                className="default"
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path d="M0 2V6H2V2H6V0H2C0.9 0 0 0.9 0 2ZM2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0Z" />
                                              </svg>
                                              <svg
                                                className="minimal"
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M0.427734 1.20793C0.427734 0.77758 0.776603 0.428711 1.20696 0.428711H5.10306C5.53341 0.428711 5.88228 0.77758 5.88228 1.20793C5.88228 1.63828 5.53341 1.98715 5.10306 1.98715H1.98618V5.10404C1.98618 5.53439 1.63731 5.88326 1.20696 5.88326C0.776603 5.88326 0.427734 5.53439 0.427734 5.10404V1.20793ZM12.116 1.20793C12.116 0.77758 12.4649 0.428711 12.8953 0.428711H16.7914C17.2217 0.428711 17.5706 0.77758 17.5706 1.20793V5.10404C17.5706 5.53439 17.2217 5.88326 16.7914 5.88326C16.361 5.88326 16.0121 5.53439 16.0121 5.10404V1.98715H12.8953C12.4649 1.98715 12.116 1.63828 12.116 1.20793ZM1.20696 12.117C1.63731 12.117 1.98618 12.4659 1.98618 12.8962V16.0131H5.10306C5.53341 16.0131 5.88228 16.362 5.88228 16.7923C5.88228 17.2227 5.53341 17.5716 5.10306 17.5716H1.20696C0.776603 17.5716 0.427734 17.2227 0.427734 16.7923V12.8962C0.427734 12.4659 0.776603 12.117 1.20696 12.117ZM16.7914 12.117C17.2217 12.117 17.5706 12.4659 17.5706 12.8962V16.7923C17.5706 17.2227 17.2217 17.5716 16.7914 17.5716H12.8953C12.4649 17.5716 12.116 17.2227 12.116 16.7923C12.116 16.362 12.4649 16.0131 12.8953 16.0131H16.0121V12.8962C16.0121 12.4659 16.361 12.117 16.7914 12.117Z"
                                                />
                                              </svg>
                                            </i>
                                          </button>
                                        </div>
                                        <div
                                          className="video-button -animation open-popup"
                                          data-video="https://player.vimeo.com/video/356065748?&controls=1&muted=1&autoplay=1&title=1&byline=1&#t=31s"
                                        >
                                          <button className="icon-button">
                                            <i className="icon">
                                              <svg
                                                className="default"
                                                width={13}
                                                height={20}
                                                viewBox="0 0 13 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path d="M0 20L13 10L0 0V20Z" />
                                              </svg>
                                              <svg
                                                className="minimal"
                                                width={17}
                                                height={20}
                                                viewBox="0 0 17 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M0.766274 0.442678C0.998698 0.312329 1.26165 0.24625 1.52808 0.25124C1.79452 0.256229 2.05481 0.332105 2.28219 0.471065L15.78 8.72C15.9993 8.85399 16.1804 9.04206 16.3061 9.26618C16.4318 9.4903 16.4978 9.74295 16.4978 9.99991C16.4978 10.2569 16.4318 10.5095 16.3061 10.7336C16.1804 10.9578 15.9993 11.1458 15.78 11.2798L2.28219 19.5288C2.05481 19.6677 1.79451 19.7436 1.52808 19.7486C1.26165 19.7536 0.9987 19.6875 0.766274 19.5571C0.533848 19.4268 0.340346 19.2369 0.205669 19.0069C0.0709916 18.777 1.3411e-07 18.5153 0 18.2488V1.75098C1.3411e-07 1.48449 0.0709911 1.22282 0.205669 0.992883C0.340347 0.76294 0.533849 0.573027 0.766274 0.442678ZM14.9978 9.99991L1.5 1.75098L1.5 18.2488L14.9978 9.99991Z"
                                                />
                                              </svg>
                                            </i>
                                          </button>
                                        </div>
                                      </div>
                                    </a>
                                    <div className="card-details">
                                      <div className="heading">
                                        <h4 className="title">
                                          Space Campaign
                                        </h4>
                                        <div className="show-project">
                                          <div className="category-holder">
                                            <span className="category">
                                              <a href="#portfolio-category/identity/">
                                                Identity
                                              </a>
                                            </span>
                                            <span className="category">
                                              <a href="#portfolio-category/mockup/">
                                                Mockup
                                              </a>
                                            </span>
                                          </div>
                                          <div className="show-project-link -full-w">
                                            <a href="#project/space-campaign/">
                                              Show project
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </Container>
  );
};

export async function getStaticProps(context: any) {
  
  const recentCurses = await useGetCurses();
  const test = await useGetCurse(
    slugify(recentCurses[1].properties.Name?.title[0]?.plain_text).toLowerCase()
  );
  return {
    // Passed to the page component as props
    props: {
      test,
      recentCurses,
    },
    revalidate: 20,
  };
}

export default index;
