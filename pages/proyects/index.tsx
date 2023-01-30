import Container from "@/components/hocs/Container";
import { UIContext } from "@/context/UIContext";
import { useGetArticles } from "@/hooks/useGetArticles";
import { useGetProyects } from "@/hooks/useGetProyects";
import Image from "next/image"
import Link from "next/link";
import React, { useContext } from "react";
import slugify from "slugify";

const Proyects = ({ allProyects }: any) => {
  const { themeGlobal }  = useContext(UIContext)
  
  return (
    <Container customAddClases="page-template-default page page-id-221785 page-child parent-pageid-17702 wp-embed-responsive theme-ohio woocommerce-js ohio-theme-3-1-9 with-switcher with-header-3 with-fixed-search with-headline with-sticky-header with-mobile-switcher links-underline icon-buttons-animation  with-ajax-button wpb-js-composer js-comp-ver-6.10.0 vc_responsive elementor-default elementor-kit-216976 page-is-loaded"
      customMeta={{title:"Proyects - Gonzalo Axel"}}
    >
      <div
        id="content"
        className="site-content"
        data-mobile-menu-resolution={768}
      >
        <div className="page-headline without-cap -center subheader_excluded headline-with-parallax" >
          <a
            href="##"
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
                height: "445.953px",
                transform: "translate3d(0px, -63.1224px, 0px)",
                transition: "transform 0.1s linear 0s",
              }}
            />
            <div className="parallax-content" />
          </div>
          <div className="holder">
            <div className="page-container">
              <div className="animated-holder">
                <div className="headline-meta" />
                <h1 className="title">My Proyects</h1>
                <div className="post-meta-holder">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-container top-offset bottom-offset" >
          <div id="primary" className="content-area" >
            <div className="page-content">
              <main id="main" className="site-main">
                <article
                  id="post-221785"
                  className="post-221785 page type-page status-publish hentry"
                >
                  <div className="entry-content">
                    <section className="wpb-content-wrapper">
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget portfolio-projects -reversed -with-sorting -with-pagination grid_13"
                                id="ohio-custom-63d2c8b532a86"
                                data-ohio-portfolio-grid="true"
                              >
                                <div
                                  className="portfolio-filter -center"
                                  data-filter="portfolio"
                                  data-filter-paged="true"
                                >
                                  <ul className="-unlist">
                                    <li>Filter by</li>
                                    <li>
                                      <a
                                        className="active"
                                        href="##portfolio/sticky-metro/#all"
                                        data-isotope-filter="*"
                                        data-category-count={10}
                                      >
                                        <span className="name">All</span>
                                        <span className="num">05</span>
                                      </a>
                                    </li>
                                    <li>
                                      /
                                      <a
                                        href="##portfolio/sticky-metro/#apps"
                                        data-isotope-filter=".ohio-filter-project-123ae12c4c011e4cddeae3371b08bac6"
                                        data-category-count={3}
                                      >
                                        <span className="name">Apps</span>
                                        <span className="num">01</span>
                                      </a>
                                    </li>
                                    <li>
                                      /
                                      <a
                                        href="##portfolio/sticky-metro/#branding"
                                        data-isotope-filter=".ohio-filter-project-5d845f00a32d05fb32beff8daf817d62"
                                        data-category-count={2}
                                      >
                                        <span className="name">Branding</span>
                                        <span className="num">02</span>
                                      </a>
                                    </li>
                                    <li>
                                      /
                                      <a
                                        href="##portfolio/sticky-metro/#creative"
                                        data-isotope-filter=".ohio-filter-project-6a81d94fbf5dcff590506b4b42e693bd"
                                        data-category-count={2}
                                      >
                                        <span className="name">Creative</span>
                                        <span className="num">01</span>
                                      </a>
                                    </li>
                                    <li>
                                      /
                                      <a
                                        href="##portfolio/sticky-metro/#identity"
                                        data-isotope-filter=".ohio-filter-project-2ec9e9be8bed1ffe0ed8144a3f59c246"
                                        data-category-count={7}
                                      >
                                        <span className="name">Identity</span>
                                        <span className="num">04</span>
                                      </a>
                                    </li>
                                    <li>
                                      /
                                      <a
                                        href="##portfolio/sticky-metro/#mockup"
                                        data-isotope-filter=".ohio-filter-project-70012063bf1d91c6d3924d1475e0747a"
                                        data-category-count={3}
                                      >
                                        <span className="name">Mockup</span>
                                        <span className="num">01</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="vc_row portfolio-grid"
                                  data-isotope-grid="true"
                                  data-lazy-container="projects"
                                  data-projects-per-page={12}
                                  style={{
                                    position: "relative",
                                    
                                  }}
                                >
                                  {allProyects.map((pro:any,index:any) => {
                                    return (
                                      <div
                                        key={index}
                                        className="portfolio-item-wrap masonry-block grid-item vc_col-lg-12 vc_col-md-12 vc_col-xs-12 ohio-filter-project-2ec9e9be8bed1ffe0ed8144a3f59c246 ohio-filter-project-70012063bf1d91c6d3924d1475e0747a"
                                        data-lazy-item
                                        data-lazy-scope="projects"
                                      >
                                        <div
                                          className="portfolio-item card -layout13 -metro -contained"
                                          data-portfolio-popup="ohio-lightbox-63d2c8b53b2e1"
                                        >
                                          <Link
                                            className="-unlink card-image"
                                            href={`/proyects/${slugify(
                                              pro?.properties?.Name?.title[0]
                                                ?.plain_text
                                            ).toLowerCase()}`}
                                            data-cursor-class="cursor-link"
                                          >
                                            <div
                                              className=""
                                              data-tilt="true"
                                              data-tilt-perspective={6000}
                                            >
                                              <Image
                                                style={{
                                                  borderRadius: "12px",
                                                  border: `1px solid ${
                                                    !themeGlobal
                                                      ? "#DADADA"
                                                      : "#6E6E6E"
                                                  }`,
                                                }}
                                                src={
                                                  pro?.cover?.file?.url ||
                                                  pro.cover.external.url
                                                }
                                                blurDataURL={
                                                  pro?.cover?.file?.url ||
                                                  pro.cover.external.url
                                                }
                                                width={1200}
                                                height={684}
                                                objectFit="fill"
                                                alt="Stickers Pack"
                                              />
                                              <div className="overlay-details -top -fade-down"></div>
                                            </div>
                                          </Link>
                                          <div className="card-details">
                                            <div className="holder -sticky-block">
                                              <div className="heading">
                                                <h4 className="title">
                                                  {
                                                    pro.properties.Name
                                                      ?.title[0]?.plain_text
                                                  }
                                                </h4>
                                              </div>
                                              <div className="show-project">
                                                <div className="category-holder">
                                                  <span className="category">
                                                    <a href="##portfolio-category/identity/">
                                                      Identity
                                                    </a>
                                                  </span>
                                                  <span className="category">
                                                    <a href="##portfolio-category/mockup/">
                                                      Mockup
                                                    </a>
                                                  </span>
                                                </div>
                                                <div className="show-project-link -full-w">
                                                  <Link
                                                    href={`/proyects/${slugify(
                                                      pro?.properties?.Name
                                                        ?.title[0]?.plain_text
                                                    ).toLowerCase()}`}
                                                  >
                                                    Show project
                                                  </Link>
                                                </div>
                                              </div>
                                              <div className="project-details">
                                                <p className="">
                                                  {
                                                    pro.properties.Description
                                                      ?.rich_text[0]?.plain_text
                                                  }
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                 
                                 


                                </div>
                                <div
                                  className="holder"
                                  id="ohio-custom-63d2c8b532a86"
                                >
                                  <ul className="pagination -small -unlist">
                                    <li className="page-item">
                                      <a
                                        href="##portfolio/sticky-metro/"
                                        className="page-link button -unlink -pagination"
                                      >
                                        1
                                      </a>
                                    </li>
                                    <li className="page-item">
                                      <a
                                        href="##portfolio/sticky-metro/page/2/"
                                        className="page-link button -unlink -pagination -flat"
                                      >
                                        2
                                      </a>
                                    </li>
                                    <li className="page-item">
                                      <a
                                        href="##portfolio/sticky-metro/page/2/"
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
    </Container>
  );
};

export async function getStaticProps(context: any) {
  const allProyects = await useGetProyects();
  return {
    // Passed to the page component as props
    props: {
      allProyects
    },
    revalidate: 20,
  };
}

export default Proyects;
