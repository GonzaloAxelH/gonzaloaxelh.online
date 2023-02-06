import InitialAnimation from "@/components/InitialAnimation";
import Container from "@/components/hocs/Container";
import AboutSetcion from "@/components/homecomponents/AboutSetcion";
import ArticlesOfBlog from "@/components/homecomponents/ArticlesOfBlog";
import Banner from "@/components/homecomponents/Banner";
import { useGetArticles } from "@/hooks/useGetArticles";
import { useGetCurses } from "@/hooks/useGetCurses";
import { getTags } from "@/services/notion";
import Image from "next/image";
import React, { useEffect } from "react";
export default function Home({ articles, allTags, tutorials }: any) {
  

  return (
    <Container customAddClases="home page-template-default page page-id-152208 wp-embed-responsive ohio-theme-3-1-2 with-switcher with-header-3 with-fixed-search with-sticky-header with-mobile-switcher links-underline icon-buttons-animation wpb-js-composer js-comp-ver-6.10.0 vc_responsive elementor-default elementor-kit-6 page-is-loaded">
      <div
        id="content"
        className="site-content"
        data-mobile-menu-resolution={768}
      >
      
        <div className="page-container">
          <div id="primary" className="content-area">
            <div className="page-content">
              <main id="main" className="site-main">
                <article
                  id="post-152208"
                  className="post-152208 page type-page status-publish hentry"
                >
                  <div className="entry-content">
                    <section className="wpb-content-wrapper">
                      <Banner />
                      <div className="list-tecnologies">


                        <img
                          className="item-flotate-1"
                          src="/imagenjavascript.png"
                          width={80}
                          alt=""
                        />
                        <img
                          className="item-flotate-2"
                          src="/angularimage.png"
                          width={80}
                          alt=""
                        />
                        <img
                          className="item-flotate-3"
                          src="/tailwindcssimage.png"
                          width={80}
                          alt=""
                        />
                        <img
                          className="item-flotate-4"
                          src="/boostrapimage.png"
                          width={80}
                          alt=""
                        />
                        <img
                          className="item-flotate-5"
                          src="/nextjsimage.png"
                          width={80}
                          alt=""
                        />
                        <img
                          className="item-flotate-6"
                          src="/reactimage.png"
                          width={80}
                          alt=""
                        />
                        <img
                          className="item-flotate-7"
                          src="/pythonimage.webp"
                          width={80}
                          alt=""
                        />
                        <img
                          className="item-flotate-8"
                          src="/c.png"
                          width={80}
                          alt=""
                        />
                      </div>
                      <AboutSetcion />

                      <ArticlesOfBlog tags={allTags} articles={articles} />
                     

                      <div
                        data-vc-full-width="true"
                        data-vc-full-width-init="true"
                        className="vc_row wpb_row vc_row-fluid clb__dark_mode_light vc_custom_1632407975342 vc_row-has-fill"
                      >
                        <div
                          className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-4"
                          style={{
                            borderRadius: "10px",
                            padding: "1em",
                          }}
                        >
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="vc_row wpb_row vc_inner vc_row-fluid clb__dark_mode_light vc_custom_1592229236660">
                                <div className="clb__dark_mode_light wpb_column vc_column_container vc_col-sm-12 vc_col-has-fill">
                                  <div className="vc_column-inner vc_custom_1632407905960">
                                    <div className="wpb_wrapper">
                                      <div className="wpb_single_image wpb_content_element vc_align_center  vc_custom_1627645409386">
                                        <figure className="wpb_wrapper vc_figure">
                                          <div className="vc_single_image-wrapper   vc_box_border_grey">
                                            <Image
                                              width={400}
                                              height={400}
                                              src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-28/oh__img155.png"
                                              className="vc_single_image-img attachment-full"
                                              alt=""
                                              decoding="async"
                                              loading="lazy"
                                              title="oh__img155"
                                              sizes="(max-width: 400px) 100vw, 400px"
                                            />
                                          </div>
                                        </figure>
                                      </div>
                                      <div
                                        className="vc_empty_space"
                                        style={{ height: "2vh" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                      <div
                                        className="ohio-widget heading -center"
                                        id="ohio-custom-63d7a7d3c357a"
                                      >
                                        <h4 className="title">
                                          Desarrollo de Apps
                                        </h4>
                                      </div>
                                      <div
                                        className="ohio-text-sc"
                                        id="ohio-custom-63d7a7d3c35f7"
                                      >
                                        <p style={{ textAlign: "center" }}>
                                          Te ayudamos a crear tu app con las
                                          utlimas tecnologias del mercado.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="vc_empty_space  vc_hidden-md vc_hidden-lg"
                                style={{ height: "20px" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-4">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="vc_row wpb_row vc_inner vc_row-fluid clb__dark_mode_light vc_custom_1592229317930">
                                <div className="clb__dark_mode_light wpb_column vc_column_container vc_col-sm-12 vc_col-has-fill">
                                  <div className="vc_column-inner vc_custom_1627645651206">
                                    <div className="wpb_wrapper">
                                      <div className="wpb_single_image wpb_content_element vc_align_center  vc_custom_1627645440038">
                                        <figure className="wpb_wrapper vc_figure">
                                          <div className="vc_single_image-wrapper   vc_box_border_grey">
                                            <img
                                              width={400}
                                              height={400}
                                              src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-28/oh__img156.png"
                                              className="vc_single_image-img attachment-full"
                                              alt=""
                                              decoding="async"
                                              loading="lazy"
                                              title="oh__img156"
                                              srcSet="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-28/oh__img156-300x300.png 300w, https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-28/oh__img156-150x150.png 150w, https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-28/oh__img156-200x200.png 200w, https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-28/oh__img156.png 400w"
                                              sizes="(max-width: 400px) 100vw, 400px"
                                            />
                                          </div>
                                        </figure>
                                      </div>
                                      <div
                                        className="vc_empty_space"
                                        style={{ height: "2vh" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                      <div
                                        className="ohio-widget heading -center"
                                        id="ohio-custom-63d7a7d3c461f"
                                      >
                                        <h4 className="title">
                                          Conceptos avanzados
                                        </h4>
                                      </div>
                                      <div
                                        className="ohio-text-sc"
                                        id="ohio-custom-63d7a7d3c4675"
                                      >
                                        <p style={{ textAlign: "center" }}>
                                          Te ayudamos con explicaciones de
                                          conceptos basicos hasta los mas
                                          complicados de yu framework favorito.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="vc_empty_space  vc_hidden-md vc_hidden-lg"
                                style={{ height: "20px" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-4">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="vc_row wpb_row vc_inner vc_row-fluid clb__dark_mode_light vc_custom_1592229348056">
                                <div className="clb__dark_mode_light wpb_column vc_column_container vc_col-sm-12 vc_col-has-fill">
                                  <div className="vc_column-inner vc_custom_1627645668801">
                                    <div className="wpb_wrapper">
                                      <div className="wpb_single_image wpb_content_element vc_align_center  vc_custom_1627645445825">
                                        <figure className="wpb_wrapper vc_figure">
                                          <div className="vc_single_image-wrapper   vc_box_border_grey">
                                            <img
                                              width={400}
                                              height={400}
                                              src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-28/oh__img157.png"
                                              className="vc_single_image-img attachment-full"
                                              alt=""
                                              decoding="async"
                                              loading="lazy"
                                              title="oh__img157"
                                              srcSet="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-28/oh__img157-300x300.png 300w, https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-28/oh__img157-150x150.png 150w, https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-28/oh__img157-200x200.png 200w, https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-28/oh__img157.png 400w"
                                              sizes="(max-width: 400px) 100vw, 400px"
                                            />
                                          </div>
                                        </figure>
                                      </div>
                                      <div
                                        className="vc_empty_space"
                                        style={{ height: "2vh" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                      <div
                                        className="ohio-widget heading -center"
                                        id="ohio-custom-63d7a7d3c55fc"
                                      >
                                        <h4 className="title">
                                          Articulos interesantes
                                        </h4>
                                      </div>
                                      <div
                                        className="ohio-text-sc"
                                        id="ohio-custom-63d7a7d3c564f"
                                      >
                                        <p style={{ textAlign: "center" }}>
                                          Te ofresco una variedad de articulos
                                          que te llamaran la antencion.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="vc_empty_space  clb__section_spacer"
                                style={{ height: "10vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="vc_row wpb_row vc_inner vc_row-fluid clb__padding_reset clb__dark_mode_light vc_custom_1626956875967 vc_row-has-fill vc_row-o-equal-height vc_row-o-content-bottom vc_row-flex">
                                <div className="wpb_column vc_column_container vc_col-sm-5">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                      <div
                                        className="vc_empty_space  clb__section_spacer"
                                        style={{ height: "10vh" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                      <div
                                        className="ohio-widget heading -left"
                                        id="ohio-custom-63d74634d2729"
                                      >
                                        <div className="subtitle">
                                          Proyectos{" "}
                                        </div>
                                        <h2 className="title">
                                          Quieres ver en que estoy{" "}
                                          <br className="vc_hidden-sm vc_hidden-xs" />
                                          trabajando ahora.{" "}
                                        </h2>
                                      </div>
                                      <div
                                        className="ohio-text-sc"
                                        id="ohio-custom-63d74634d27bb"
                                      >
                                        <p>
                                          Echale un vistazo a mis proyectos y
                                          apps que estoy construyendo.
                                          <br />
                                          De libre acceso.
                                        </p>
                                      </div>
                                      <div
                                        className="vc_empty_space"
                                        style={{ height: "3vh" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                      <div className="ohio-widget-holder -left">
                                        <a
                                          href="#"
                                          target="_blank"
                                          className="ohio-widget button"
                                          id="ohio-custom-63d74634d296a"
                                        >
                                          Ver mis proyectos
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
                                        className="vc_empty_space  vc_hidden-xs vc_hidden-sm"
                                        style={{ height: "11vh" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="clb__padding_set wpb_column vc_column_container vc_col-sm-7">
                                  <div className="vc_column-inner vc_custom_1626880100048">
                                    <div className="wpb_wrapper">
                                      <div className="wpb_single_image wpb_content_element vc_align_center  vc_custom_1626956916148">
                                        <figure className="wpb_wrapper vc_figure">
                                          <div className="vc_single_image-wrapper   vc_box_border_grey">
                                            <img
                                              width={1000}
                                              height={740}
                                              src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-9/oh__img169.png"
                                              className="vc_single_image-img attachment-full"
                                              alt=""
                                              decoding="async"
                                              loading="lazy"
                                              title="oh__img169"
                                              srcSet="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-9/oh__img169-300x222.png 300w, https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-9/oh__img169-768x568.png 768w, https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-9/oh__img169.png 1000w"
                                              sizes="(max-width: 1000px) 100vw, 1000px"
                                            />
                                          </div>
                                        </figure>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="vc_row wpb_row vc_row-fluid clb__narrow">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner vc_custom_1494925290262">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget heading -center"
                                id="ohio-custom-63dd38b768157"
                              >
                                <div className="vc_row">
                                  <div
                                    className="vc_col-md-6 vc_col-md-push-3 -center"
                                    style={{ margin: "3em 0 3em 0" }}
                                  >
                                    <h2 className="title">
                                      <span>
                                        Mis Applicaciones que he construido
                                      </span>
                                      <br />
                                    </h2>
                                    <p className="details">
                                      Tienes acceso a todas las aplicaciones que
                                      hice.
                                      <br />
                                      <b>
                                        Cada apliacion tiene su demo y
                                        repositorio
                                      </b>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_custom_1641214461964 vc_custom_1641214461964">
                        <span className="vc_sep_holder vc_sep_holder_l">
                          <span
                            style={{
                              borderColor: "rgba(96, 96, 107, 0.65)",
                            }}
                            className="vc_sep_line"
                          />
                        </span>
                        <span className="vc_sep_holder vc_sep_holder_r">
                          <span
                            style={{
                              borderColor: "rgba(96, 96, 107, 0.65)",
                            }}
                            className="vc_sep_line"
                          />
                        </span>
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
                      <div className="vc_row wpb_row vc_inner vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-3">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget banner card -with-overlay -img-overlay"
                                id="ohio-custom-63d9616721da9"
                              >
                                <a
                                  data-cursor-class="cursor-link"
                                  href="#demo31/#"
                                  target="_blank"
                                >
                                  <div
                                    className="image-holder"
                                    data-tilt="true"
                                    data-tilt-perspective={6000}
                                    style={{
                                      height: "400px",
                                      position: "relative",
                                    }}
                                  >
                                    <Image
                                      src="/Google-Keep-Android.webp"
                                      fill
                                      objectFit="cover"
                                      sizes="(max-width: 1600px) 100vw, 1600px"
                                      alt=""
                                    />
                                    <div className="overlay-details">
                                      <div className="card-details">
                                        <div className="heading">
                                          <div className="subtitle"></div>
                                          <h3 className="title">
                                            Google Keep Clone
                                            <br />
                                          </h3>
                                        </div>
                                      </div>
                                      <p>
                                        Un clon de la app de google Keep con{" "}
                                        <b>React y Firebase.</b>
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "5vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-3">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget banner card -with-overlay -img-overlay"
                                id="ohio-custom-63d9616721da9"
                              >
                                <a
                                  data-cursor-class="cursor-link"
                                  href="#demo31/#"
                                  target="_blank"
                                >
                                  <div
                                    className="image-holder"
                                    data-tilt="true"
                                    data-tilt-perspective={6000}
                                    style={{
                                      height: "400px",
                                      position: "relative",
                                    }}
                                  >
                                    <Image
                                      src="/instagramclone.webp"
                                      fill
                                      objectFit="cover"
                                      sizes="(max-width: 1600px) 100vw, 1600px"
                                      alt=""
                                    />
                                    <div className="overlay-details">
                                      <div className="card-details">
                                        <div className="heading">
                                          <div className="subtitle"></div>
                                          <h3 className="title">
                                            Instagram Clone V2
                                            <br />
                                          </h3>
                                        </div>
                                      </div>
                                      <p>
                                        Un clon de la app de instagram{" "}
                                        <b>React y Firebase.</b>
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "5vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-3">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget banner card -with-overlay -img-overlay"
                                id="ohio-custom-63d9616721da9"
                              >
                                <a
                                  data-cursor-class="cursor-link"
                                  href="#demo31/#"
                                  target="_blank"
                                >
                                  <div
                                    className="image-holder"
                                    data-tilt="true"
                                    data-tilt-perspective={6000}
                                    style={{
                                      height: "400px",
                                      position: "relative",
                                    }}
                                  >
                                    <Image
                                      src="/googleclone.webp"
                                      fill
                                      objectFit="cover"
                                      sizes="(max-width: 1600px) 100vw, 1600px"
                                      alt=""
                                    />
                                    <div className="overlay-details">
                                      <div className="card-details">
                                        <div className="heading">
                                          <div className="subtitle"></div>
                                          <h3 className="title">
                                            Google Search Clone
                                            <br />
                                          </h3>
                                        </div>
                                      </div>
                                      <p>
                                        Un clon de la app de google Keep con{" "}
                                        <b>Nextjs y Firebase.</b>
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "5vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-3">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget banner card -with-overlay -img-overlay"
                                id="ohio-custom-63d9616721da9"
                              >
                                <a
                                  data-cursor-class="cursor-link"
                                  href="#demo31/#"
                                  target="_blank"
                                >
                                  <div
                                    className="image-holder"
                                    data-tilt="true"
                                    data-tilt-perspective={6000}
                                    style={{
                                      height: "400px",
                                      position: "relative",
                                    }}
                                  >
                                    <Image
                                      src="/portfolioclone.png"
                                      fill
                                      objectFit="cover"
                                      sizes="(max-width: 1600px) 100vw, 1600px"
                                      alt=""
                                    />
                                    <div className="overlay-details">
                                      <div className="card-details">
                                        <div className="heading">
                                          <div className="subtitle"></div>
                                          <h3 className="title">
                                            Portfolio Example
                                            <br />
                                          </h3>
                                        </div>
                                      </div>
                                      <p>
                                        Un pequeño portafolio hecho con{" "}
                                        <b>React Puro</b>
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "5vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="vc_row wpb_row vc_row-fluid clb__narrow">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner vc_custom_1494925290262">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget heading -center"
                                id="ohio-custom-63dd38b768157"
                              >
                                <div className="vc_row">
                                  <div
                                    className="vc_col-md-6 vc_col-md-push-3 -center"
                                    style={{ margin: "3em 0 3em 0" }}
                                  >
                                    <h2 className="title">
                                      <span>Tutoriales de programacion</span>
                                      <br />
                                    </h2>
                                    <p className="details">
                                      Tutoriales actualizables, sobre tu
                                      herramienta o tecnologia favorita
                                      <br />
                                      <b>Only real business demo websites.</b>
                                    </p>
                                  </div>
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
                                className="ohio-widget blog-posts vc_row"
                                id="ohio-custom-63dd38b76ed05"
                                data-lazy-container="posts"
                              >

                                {tutorials.slice(0, 3).map((tutorial: any) => {
                                  return (
                                    <div
                                      className=" vc_col-lg-4 vc_col-md-4 vc_col-xs-12 masonry-block grid-item"
                                      data-lazy-item
                                      data-lazy-scope="posts"
                                    >
                                      <div
                                        className="blog-item card -layout2 -img-scale"
                                        data-tilt="true"
                                        data-tilt-perspective={6000}
                                      >
                                        <figure className="image-holder">
                                          <a
                                            className="-unlink"
                                            data-cursor-class="cursor-link"
                                            href="https://ohio.clbthemes.com/creativo-para-jovenes-a-designers-ui-ux-complete-checklist/"
                                          >
                                            <img
                                              src={
                                                tutorial?.cover?.file?.url ||
                                                tutorial.cover?.external?.url
                                              }
                                              sizes="(max-width: 882px) 100vw, 882px"
                                              alt=""
                                            />
                                            <div className="overlay" />
                                          </a>
                                          <div className="overlay-details -top ">
                                            <ul className="meta-holder -unlist">
                                              <li className="meta-item">
                                                <div className="avatar -small">
                                                  <img
                                                    alt="Colabrio"
                                                    src="/react_logo_t.png"
                                                    className="avatar avatar-50 photo author-avatar"
                                                    height={50}
                                                    width={50}
                                                    loading="lazy"
                                                    decoding="async"
                                                  />
                                                </div>
                                              </li>
                                              <li className="meta-item">
                                                <span className="prefix"></span>
                                                <span className="author">
                                                  React
                                                </span>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="overlay-details card-details -left">
                                            <div className="heading title">
                                              <h4 className="title">
                                                <a
                                                  className="-unlink"
                                                  href="https://ohio.clbthemes.com/creativo-para-jovenes-a-designers-ui-ux-complete-checklist/"
                                                >
                                                  {
                                                    tutorial.properties.Name
                                                      .title[0]?.plain_text
                                                  }{" "}
                                                </a>
                                              </h4>
                                            </div>
                                          </div>
                                        </figure>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>

                              <div
                                className="vc_empty_space  clb__section_spacer"
                                style={{ height: "10vh" }}
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
    </Container>
  );
}

export async function getStaticProps(context: any) {
  const recentArticles = await useGetArticles();
  const tutorials = await useGetCurses();
  const { tagsKeys, tagsValues } = getTags(recentArticles);
  const tags = { tagsKeys, tagsValues };
  return {
    // Passed to the page component as props
    props: {
      articles: recentArticles,
      allTags: tags,
      tutorials,
    },
    revalidate: 20,
  };
}
