import Link from "next/link";
import React from "react";
import Image from "next/image";
import slugify from "slugify";
const ArticlesOfBlog = ({ articles, tags }: any) => {
  let fullTags: any = [];
  for (let i = 0; i < tags.tagsKeys.length; i++) {
    let obj = {
      name: tags.tagsKeys[i],
      count: tags.tagsValues[i],
    };
    fullTags.push(obj);
  }

  return (
    <div className="vc_row wpb_row vc_row-fluid">
      <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div
              className="ohio-widget portfolio-projects -with-sorting -with-pagination grid_1 "
              id="ohio-custom-63dbf46d72daa"
              data-ohio-portfolio-grid="true"
            >
              <div className="vc_row">
                <div
                  className="vc_col-md-6 vc_col-md-push-3 -center"
                  style={{ margin: "3em 0 3em 0" }}
                >
                  <h2 className="title">
                    <span>Blog de articulos</span>
                    <br />
                    por tecnologia.
                  </h2>
                  <p className="details">
                    Articulos actualizables, sobre tu herramienta o tecnologia
                    favorita
                    <br />
                    <b>Only real business demo websites.</b>
                  </p>
                </div>
              </div>
             <div
                        id="schedule"
                        className="vc_row wpb_row vc_row-fluid"
                      >
                        <div className="wpb_column vc_column_container vc_col-sm-6">
                          <div className="vc_column-inner">
                            
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                             
                              <div className="ohio-widget-holder -right">
                                <a
                                  href="#"
                                  target="_blank"
                                  className="ohio-widget button clb__alignment_reset -outlined -small"
                                  id="ohio-custom-63d7a7d3c5fb3"
                                >
                                  Ver mas secciones
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
                                </a>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "4vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
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
                {articles.slice(0, 3).map((article: any) => {
                  return (
                    <div
                      className="portfolio-item-wrap masonry-block grid-item  vc_col-lg-4 vc_col-md-4 vc_col-xs-12 ohio-filter-project-2ec9e9be8bed1ffe0ed8144a3f59c246 ohio-filter-project-70012063bf1d91c6d3924d1475e0747a"
                      data-lazy-item
                      data-lazy-scope="projects"
                    >
                      <div
                        className="portfolio-item card -layout1"
                        data-portfolio-popup="ohio-lightbox-63dbf46d83e83"
                      >
                        <Link
                          href={`/blog/${slugify(
                            article?.properties?.Name?.title[0]?.plain_text
                          ).toLowerCase()}`}
                        >
                          <figure
                            className="image-holder"
                            style={{ height: "410px", position: "relative" }}
                          >
                            <Image
                              src={article?.cover?.external?.url}
                              sizes="(max-width: 882px) 100vw, 882px"
                              fill
                              style={{ objectFit: "cover" }}
                              alt=""
                            />
                            <div className="overlay-details -fade-up">
                              <ul className="meta-holder -unlist">
                                <li className="meta-item">
                                  <div className="avatar -small">
                                    <Image
                                      alt="Gonzalo"
                                      src={
                                        "https://lh3.googleusercontent.com/ogw/AAEL6sjZywJSQ0Me8PR1WWUqFVhrUdXQtT1jFD6GOB73=s32-c-mo"
                                      }
                                      className="avatar avatar-50 photo author-avatar"
                                      height={50}
                                      width={50}
                                      loading="lazy"
                                      decoding="async"
                                    />
                                  </div>
                                </li>
                                <li className="meta-item">
                                  <span className="prefix">Posted by</span>
                                  <span className="author">Gonzalo Axel</span>
                                </li>
                              </ul>
                            </div>
                          </figure>
                        </Link>
                        <div className="card-details">
                          <div className="heading">
                            <h4 className="title ">
                              {article.properties.Name?.title[0]?.plain_text}
                            </h4>
                            <div className="show-project">
                              <div className="category-holder">
                                <span className="category ">
                                  <a href="#portfolio-category/identity/">
                                    {new Date(
                                      article.created_time
                                    ).toLocaleDateString("es-PE", {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    })}
                                  </a>
                                </span>
                              </div>
                              <div className="show-project-link -full-w">
                                <Link
                                  href={`/blog/${slugify(
                                    article?.properties?.Name?.title[0]
                                      ?.plain_text
                                  ).toLowerCase()}`}
                                >
                                  Mostrar articulo
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesOfBlog;

/*

<div
                  className="portfolio-item-wrap masonry-block grid-item  vc_col-lg-8 vc_col-md-8 vc_col-xs-12 double-width ohio-filter-project-5d845f00a32d05fb32beff8daf817d62 ohio-filter-project-2ec9e9be8bed1ffe0ed8144a3f59c246"
                  data-lazy-item
                  data-lazy-scope="projects"
                >
                  <div
                    className="portfolio-item card -layout1"
                    data-portfolio-popup="ohio-lightbox-63dbf46d8e65f"
                  >
                    <a
                      className="-unlink"
                      href="#project/diseno-grafico/"
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
                          src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/oh__img25-1920x1076.jpeg"
                          alt="Diseño Gráfico"
                        />
                      </div>
                    </a>
                    <div className="card-details">
                      <div className="heading">
                        <h4 className="title ">Diseño Gráfico</h4>
                        <div className="show-project">
                          <div className="category-holder">
                            <span className="category ">
                              <a href="#portfolio-category/branding/">
                                Branding
                              </a>
                            </span>
                            <span className="category ">
                              <a href="#portfolio-category/identity/">
                                Identity
                              </a>
                            </span>
                          </div>
                          <div className="show-project-link -full-w">
                            <a href="#project/diseno-grafico/">
                              Show project{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="portfolio-item-wrap masonry-block grid-item  vc_col-lg-4 vc_col-md-4 vc_col-xs-12 ohio-filter-project-5d845f00a32d05fb32beff8daf817d62 ohio-filter-project-2ec9e9be8bed1ffe0ed8144a3f59c246"
                  data-lazy-item
                  data-lazy-scope="projects"
                >
                  <div
                    className="portfolio-item card -layout1"
                    data-portfolio-popup="ohio-lightbox-63dbf46d93901"
                  >
                    <a
                      className="-unlink"
                      href="#project/bright-captive/"
                      data-cursor-class="cursor-link"
                    >
                      <div
                        className="image-holder"
                        data-tilt="true"
                        data-tilt-perspective={6000}
                      >
                        <img
                          src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/7evLAXa6-oh__img30-1.jpeg"
                          alt="Bright Captive"
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
                      </div>
                    </a>
                    <div className="card-details">
                      <div className="heading">
                        <h4 className="title ">Bright Captive</h4>
                        <div className="show-project">
                          <div className="category-holder">
                            <span className="category ">
                              <a href="#portfolio-category/branding/">
                                Branding
                              </a>
                            </span>
                            <span className="category ">
                              <a href="#portfolio-category/identity/">
                                Identity
                              </a>
                            </span>
                          </div>
                          <div className="show-project-link -full-w">
                            <a href="#project/bright-captive/">
                              Show project{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="portfolio-item-wrap masonry-block grid-item  vc_col-lg-4 vc_col-md-4 vc_col-xs-12 ohio-filter-project-123ae12c4c011e4cddeae3371b08bac6 ohio-filter-project-f5a27e0cf01635b6d1350ab621aabe25"
                  data-lazy-item
                  data-lazy-scope="projects"
                >
                  <div
                    className="portfolio-item card -layout1"
                    data-portfolio-popup="ohio-lightbox-63dbf46d99425"
                  >
                    <a
                      className="-unlink"
                      href="#project/worlds-relays/"
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
                          src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/JwFczCN8-oh__img35.jpeg"
                          alt="World’s Relays"
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
                        <h4 className="title ">World’s Relays</h4>
                        <div className="show-project">
                          <div className="category-holder">
                            <span className="category ">
                              <a href="#portfolio-category/apps/">
                                Apps
                              </a>
                            </span>
                            <span className="category ">
                              <a href="#portfolio-category/campaign/">
                                Campaign
                              </a>
                            </span>
                          </div>
                          <div className="show-project-link -full-w">
                            <a href="#project/worlds-relays/">
                              Show project{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="portfolio-item-wrap masonry-block grid-item  vc_col-lg-4 vc_col-md-4 vc_col-xs-12 ohio-filter-project-6a81d94fbf5dcff590506b4b42e693bd ohio-filter-project-2ec9e9be8bed1ffe0ed8144a3f59c246"
                  data-lazy-item
                  data-lazy-scope="projects"
                >
                  <div
                    className="portfolio-item card -layout1"
                    data-portfolio-popup="ohio-lightbox-63dbf46d9efae"
                  >
                    <a
                      className="-unlink"
                      href="#project/dinamica/"
                      data-cursor-class="cursor-link"
                    >
                      <div
                        className="image-holder"
                        data-tilt="true"
                        data-tilt-perspective={6000}
                      >
                        <img
                          src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/guQWgJXg-oh__img26.jpeg"
                          alt="Dinámica"
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
                        <h4 className="title ">Dinámica</h4>
                        <div className="show-project">
                          <div className="category-holder">
                            <span className="category ">
                              <a href="#portfolio-category/creative/">
                                Creative
                              </a>
                            </span>
                            <span className="category ">
                              <a href="#portfolio-category/identity/">
                                Identity
                              </a>
                            </span>
                          </div>
                          <div className="show-project-link -full-w">
                            <a href="#project/dinamica/">
                              Show project{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="portfolio-item-wrap masonry-block grid-item  vc_col-lg-8 vc_col-md-8 vc_col-xs-12 double-width ohio-filter-project-123ae12c4c011e4cddeae3371b08bac6 ohio-filter-project-f5a27e0cf01635b6d1350ab621aabe25"
                  data-lazy-item
                  data-lazy-scope="projects"
                >
                  <div
                    className="portfolio-item card -layout1"
                    data-portfolio-popup="ohio-lightbox-63dbf46da316f"
                  >
                    <a
                      className="-unlink"
                      href="#project/lifestyle-app/"
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
                          src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/oh__img95-1920x1076.jpeg"
                          alt="Lifestyle App"
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
                        <h4 className="title ">Lifestyle App</h4>
                        <div className="show-project">
                          <div className="category-holder">
                            <span className="category ">
                              <a href="#portfolio-category/apps/">
                                Apps
                              </a>
                            </span>
                            <span className="category ">
                              <a href="#portfolio-category/campaign/">
                                Campaign
                              </a>
                            </span>
                          </div>
                          <div className="show-project-link -full-w">
                            <a href="#project/lifestyle-app/">
                              Show project{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="portfolio-item-wrap masonry-block grid-item  vc_col-lg-4 vc_col-md-4 vc_col-xs-12 ohio-filter-project-2ec9e9be8bed1ffe0ed8144a3f59c246 ohio-filter-project-70012063bf1d91c6d3924d1475e0747a"
                  data-lazy-item
                  data-lazy-scope="projects"
                >
                  <div
                    className="portfolio-item card -layout1"
                    data-portfolio-popup="ohio-lightbox-63dbf46da4e13"
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
                      >
                        <img
                          src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/MeKCvxP5-oh__img34.1.jpeg"
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
                        <h4 className="title ">Gráfico Scenic</h4>
                        <div className="show-project">
                          <div className="category-holder">
                            <span className="category ">
                              <a href="#portfolio-category/identity/">
                                Identity
                              </a>
                            </span>
                            <span className="category ">
                              <a href="#portfolio-category/mockup/">
                                Mockup
                              </a>
                            </span>
                          </div>
                          <div className="show-project-link -full-w">
                            <a href="#project/grafico-scenic/">
                              Show project{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
*/
