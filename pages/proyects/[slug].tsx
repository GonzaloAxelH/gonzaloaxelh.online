import Slider from "react-slick";
import { ComparisonSlider } from "react-comparison-slider";
import Container from "@/components/hocs/Container";
import { useGetProyect, useGetProyects } from "@/hooks/useGetProyects";
import React, { useContext } from "react";
import slugify from "slugify";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
import Image from "next/image";
import { UIContext } from "@/context/UIContext";
const Proyect = ({ proyects, proyect, content }: any) => {
  let title = proyect.properties.Name.title[0].plain_text;
  let cover = proyect?.cover?.file?.url || proyect.cover.external.url;
  let description = proyect.properties.Description.rich_text[0].plain_text;

  const { themeGlobal } = useContext(UIContext);
  return (
    <Container customAddClases="ohio_portfolio-template-default single single-ohio_portfolio postid-19300 wp-embed-responsive theme-ohio woocommerce-js ohio-theme-3-1-9 with-switcher with-header-3 with-fixed-search with-sticky-header with-mobile-switcher links-underline icon-buttons-animation custom-cursor with-ajax-button wpb-js-composer js-comp-ver-6.10.0 vc_responsive elementor-default elementor-kit-216976 page-is-loaded dark-scheme">
      <div
        id="content"
        className="site-content"
        data-mobile-menu-resolution={768}
      >
        <div className="project-page project -layout7">
          <div className="page-container">
            <div className="project-content">
              <div className="holder">
                <div className="vc_row">
                  <div className="vc_col-md-5">
                    <div className="headline-meta">
                      <span className="category-holder">
                        <span className="category">
                          <a href="#portfolio-category/branding/">Branding</a>
                        </span>
                        <span className="category">
                          <a href="#portfolio-category/identity/">Identity</a>
                        </span>
                      </span>
                      <span className="date">June 3, 2019</span>
                    </div>
                    <div className="project-title">
                      <h1 className="headline">{title}</h1>
                    </div>
                    <div className="project-details">
                      <p>{description}</p>
                    </div>
                  </div>
                  <div className="vc_col-md-push-1 vc_col-md-6">
                    <div className="project-task">
                      <h6 className="title">Task</h6>
                      <p className="-unspace">
                        Rebuild a unified visual system for the advertising
                        agency, made of steel which can change the world in a
                        while.
                      </p>
                    </div>
                    <ul className="options-group -unlist">
                      <li>
                        <h6 className="title">Strategy</h6>
                        <p>Brand Strategy, UX Strategy</p>
                      </li>
                      <li>
                        <h6 className="title">Design</h6>
                        <p>UI/UX Design, Art Direction</p>
                      </li>
                      <li>
                        <h6 className="title">Client</h6>
                        <p>Envato</p>
                      </li>
                    </ul>
                    <a
                      className="button -text -unlink"
                      target="_blank"
                      href="#5Q25j"
                    >
                      Open Project
                      <i aria-hidden className="icon -right">
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
                </div>
              </div>
            </div>

            <section className="wpb-content-wrapper">
              <div className="vc_row wpb_row vc_row-fluid clb__narrow">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="vc_empty_space" style={{ height: "4vh" }}>
                        <span className="vc_empty_space_inner" />
                      </div>
                      <div className="vc_row wpb_row vc_inner vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-3 vc_col-xs-6">
                          <div className="vc_column-inner vc_custom_1620981555253">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget logo -left"
                                id="ohio-custom-63d3efd48a645"
                              >
                                <img
                                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/4nyY9y6X-LogoSC-min.png"
                                  sizes="(max-width: 268px) 100vw, 268px"
                                  alt=""
                                />
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "3vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-3 vc_col-xs-6">
                          <div className="vc_column-inner vc_custom_1620981562035">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget logo -left"
                                id="ohio-custom-63d3efd48b011"
                              >
                                <img
                                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/uOUzEYjO-LogoSC-2-min.png"
                                  sizes="(max-width: 268px) 100vw, 268px"
                                  alt=""
                                />
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "3vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-3 vc_col-xs-6">
                          <div className="vc_column-inner vc_custom_1620981586976">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget logo -left"
                                id="ohio-custom-63d3efd48b949"
                              >
                                <img
                                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/Atru47Oe-LogoSC-6-min.png"
                                  sizes="(max-width: 268px) 100vw, 268px"
                                  alt=""
                                />
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "3vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-3 vc_col-xs-6">
                          <div className="vc_column-inner vc_custom_1620981593580">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget logo -left"
                                id="ohio-custom-63d3efd48c169"
                              >
                                <img
                                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/VpmdAZwB-LogoSC-8-min.png"
                                  sizes="(max-width: 268px) 100vw, 268px"
                                  alt=""
                                />
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "3vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vc_row wpb_row vc_inner vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-3 vc_col-xs-6">
                          <div className="vc_column-inner vc_custom_1620981555253">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget logo -left"
                                id="ohio-custom-63d3efd48cb3b"
                              >
                                <img
                                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/sSg7Wq4e-LogoSC-1-min.png"
                                  sizes="(max-width: 268px) 100vw, 268px"
                                  alt=""
                                />
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "3vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-3 vc_col-xs-6">
                          <div className="vc_column-inner vc_custom_1620981562035">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget logo -left"
                                id="ohio-custom-63d3efd48d3b5"
                              >
                                <img
                                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/WX6iST7Q-LogoSC-3-min.png"
                                  sizes="(max-width: 268px) 100vw, 268px"
                                  alt=""
                                />
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "3vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-3 vc_col-xs-6">
                          <div className="vc_column-inner vc_custom_1620981586976">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget logo -left"
                                id="ohio-custom-63d3efd48dc22"
                              >
                                <img
                                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/u8m8OmB2-LogoSC-7-min.png"
                                  sizes="(max-width: 268px) 100vw, 268px"
                                  alt=""
                                />
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "3vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-3 vc_col-xs-6">
                          <div className="vc_column-inner vc_custom_1620981593580">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget logo -left"
                                id="ohio-custom-63d3efd48e456"
                              >
                                <img
                                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/TRVurYif-LogoSC-9-min.png"
                                  sizes="(max-width: 268px) 100vw, 268px"
                                  alt=""
                                />
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
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="project-gallery">
              <div className="first-image">
                <div className="" data-tilt="true" data-tilt-perspective={6000}>
                  <Image
                    style={{
                      borderRadius: "12px",
                      border: `1px solid ${
                        !themeGlobal ? "#DADADA" : "#6E6E6E"
                      }`,
                    }}
                    src={proyect.cover?.file?.url || proyect.cover.external.url}
                    blurDataURL={
                      proyect?.cover?.file?.url || proyect.cover.external.url
                    }
                    width={1200}
                    height={684}
                    objectFit="fill"
                    alt="Stickers Pack"
                  />
                  <div className="overlay-details -top -fade-down"></div>
                </div>
              </div>
              <Image
                style={{
                  borderRadius: "12px",
                  border: `1px solid ${!themeGlobal ? "#DADADA" : "#6E6E6E"}`,
                }}
                src={proyect.cover?.file?.url || proyect.cover.external.url}
                blurDataURL={
                  proyect?.cover?.file?.url || proyect.cover.external.url
                }
                width={1200}
                height={684}
                objectFit="fill"
                alt="Stickers Pack"
              />
              <div className="share-bar -vertical">
                <div className="social-networks -small">
                  <a
                    className="-unlink"
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fohio.clbthemes.com%2Fproject%2Fdiseno-grafico%2F"
                    target="_blank"
                  >
                    <i aria-hidden className="network fab fa-facebook-f" />
                    <span className="social-text">Facebook</span>
                  </a>
                  <a
                    className="-unlink"
                    href="https://twitter.com/intent/tweet?text=Dise%C3%B1o+Gr%C3%A1fico,+https%3A%2F%2Fohio.clbthemes.com%2Fproject%2Fdiseno-grafico%2F"
                    target="_blank"
                  >
                    <i aria-hidden className="network fab fa-twitter" />
                    <span className="social-text">Twitter</span>
                  </a>
                  <a
                    className="-unlink"
                    href="http://pinterest.com/pin/create/button/?url=https%3A%2F%2Fohio.clbthemes.com%2Fproject%2Fdiseno-grafico%2F&description=Dise%C3%B1o+Gr%C3%A1fico"
                    target="_blank"
                  >
                    <i aria-hidden className="network fab fa-pinterest" />
                    <span className="social-text">Pinterest</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-container">
          <div className="project-custom">
            <section className="wpb-content-wrapper">
              <div
                data-vc-full-width="true"
                data-vc-full-width-init="true"
                className="vc_row wpb_row vc_row-fluid vc_custom_1627567340472 vc_row-has-fill clb__dark_section"
                style={{
                  position: "relative",

                  paddingLeft: "10.5px",
                  paddingRight: "10.5px",
                }}
              >
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div
                        className="vc_empty_space clb__section_spacer"
                        style={{ height: "10vh" }}
                      >
                        <span className="vc_empty_space_inner" />
                      </div>
                      <div className="vc_row wpb_row vc_inner vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget heading -left"
                                id="ohio-custom-63d30e84eb5ab"
                              >
                                <div className="subtitle">
                                  Let's Collaborate
                                </div>
                                <h2 className="title">Got a project?</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space"
                                style={{ height: "3vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div className="ohio-widget-holder -right">
                                <a
                                  href="#contact-us-ver4/"
                                  target="_blank"
                                  className="ohio-widget button clb__alignment_reset"
                                  id="ohio-custom-63d30e84eb85a"
                                >
                                  Contact Us
                                  <i aria-hidden className="icon -right">
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
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text">
                        <span className="vc_sep_holder vc_sep_holder_l">
                          <span
                            style={{ borderColor: "rgba(99, 93, 111, 0.65)" }}
                            className="vc_sep_line"
                          />
                        </span>
                        <span className="vc_sep_holder vc_sep_holder_r">
                          <span
                            style={{ borderColor: "rgba(99, 93, 111, 0.65)" }}
                            className="vc_sep_line"
                          />
                        </span>
                      </div>
                      <div className="vc_row wpb_row vc_inner vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d30e84ec103"
                              >
                                <p>
                                  We’re a team of creatives who are excited
                                  about unique ideas and help fin-tech companies
                                  to create amazing identity by crafting
                                  top-notch UI/UX.
                                </p>
                              </div>
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "10vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vc_row-full-width vc_clearfix" />
            </section>
          </div>
        </div>
        <a
          href="#project/diseno-grafico/"
          className="back-link -unlink vc_hidden-md vc_hidden-sm vc_hidden-xs"
        >
          <button
            className="icon-button"
            aria-controls="site-navigation"
            aria-expanded="false"
          >
            <i aria-hidden className="icon">
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
        <div className="sticky-nav">
          <div
            className="sticky-nav-thumbnail -fade-up"
            style={{
              backgroundImage:
                'url("https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/7evLAXa6-oh__img30-1.jpeg")',
            }}
          />
        </div>

        <div className="page-container">
          <div className="project-custom">
            <section className="wpb-content-wrapper">
              <div
                data-vc-full-width="true"
                data-vc-full-width-init="true"
                className="vc_row wpb_row vc_row-fluid vc_custom_1627565097900 vc_row-has-fill clb__dark_section"
                style={{
                  position: "relative",

                  paddingLeft: "10.5px",
                  paddingRight: "10.5px",
                }}
              >
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="vc_row wpb_row vc_inner vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "10vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-widget heading -left"
                                id="ohio-custom-63d342aedcf39"
                              >
                                <div className="subtitle">Challenge</div>
                                <h3 className="title">
                                  Make a web presence for the leader fin-tech
                                  company.
                                </h3>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "3vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="vc_empty_space vc_hidden-xs vc_hidden-sm"
                                style={{ height: "5vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-2">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper" />
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-5 vc_col-xs-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space vc_hidden-xs vc_hidden-sm"
                                style={{ height: "10vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d342aedd2dd"
                              >
                                <p>
                                  <strong>Colabrio believes</strong> a team of
                                  creatives who are excited about unique ideas
                                  and help digital and fin-tech companies.
                                  <strong>But structure were from</strong> the
                                  funny the century rather, initial all the
                                  made, have spare to negatives, and at
                                  <strong>applications</strong> it want and
                                  evils was about, by helping progressive
                                  companies advance by setting.
                                </p>
                              </div>
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "10vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="ohio-gallery-opened-sc clb-popup clb-gallery-lightbox -with-overlay -img-scale"
                        id="ohio-custom-63d342aedd423"
                        data-options="{}"
                      >
                        <div className="close-bar">
                          <button
                            className="icon-button -light"
                            aria-label="close"
                          >
                            <i aria-hidden className="icon">
                              <svg
                                className="default"
                                width={14}
                                height={14}
                                viewBox="0 0 14 14"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
                              </svg>
                              <svg
                                className="minimal"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
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
                        <div className="clb-popup-holder" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="vc_row-full-width vc_clearfix" />

              <div
                data-vc-full-width="true"
                data-vc-full-width-init="true"
                className="vc_row wpb_row vc_row-fluid vc_custom_1627565106697 vc_row-has-fill clb__dark_section"
                style={{
                  position: "relative",

                  paddingLeft: "10.5px",
                  paddingRight: "10.5px",
                }}
              >
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="vc_row wpb_row vc_inner vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "10vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>

                              <div
                                className="ohio-widget compare-wrapper"
                                id="ohio-custom-63d342aee3824"
                              >
                                <div className="compare-wrapper compare-horizontal">
                                  <div
                                    className="compare "
                                    data-compare="true"
                                    data-compare-without-overlay="true"
                                    data-compare-before-label="Before"
                                    data-compare-after-label="After"
                                    data-compare-position="0.5"
                                    data-compare-orientation="horizontal"
                                  >
                                    <ComparisonSlider
                                      defaultValue={50}
                                      itemOne={
                                        <div className="bg-red-200">
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
                                              proyect.cover?.file?.url ||
                                              proyect.cover.external.url
                                            }
                                            blurDataURL={
                                              proyect?.cover?.file?.url ||
                                              proyect.cover.external.url
                                            }
                                            width={1200}
                                            height={684}
                                            objectFit="fill"
                                            sizes="(max-width: 2400px) 100vw, 2400px"
                                            alt="Before"
                                            className="compare-before"
                                          />
                                        </div>
                                      }
                                      itemTwo={
                                        <div className="bg-blue-200">
                                          <Image
                                            width={1200}
                                            height={684}
                                            style={{
                                              borderRadius: "12px",
                                              border: `1px solid ${
                                                !themeGlobal
                                                  ? "#DADADA"
                                                  : "#6E6E6E"
                                              }`,
                                            }}
                                            src={
                                              proyect.cover?.file?.url ||
                                              proyect.cover.external.url
                                            }
                                            blurDataURL={
                                              proyect?.cover?.file?.url ||
                                              proyect.cover.external.url
                                            }
                                            objectFit="fill"
                                            alt="After"
                                            className="compare-after"
                                            sizes="(max-width: 2000px) 100vw, 2000px"
                                          />
                                        </div>
                                      }
                                      aspectRatio={16 / 9}
                                      orientation="horizontal"
                                      handle={({ isFocused }) => {
                                        return (
                                          <div className="compare-handle">
                                            <button className="icon-button">
                                              <i aria-hidden className="icon" />
                                            </button>
                                          </div>
                                        );
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="vc_empty_space clb__section_spacer"
                        style={{ height: "10vh" }}
                      >
                        <span className="vc_empty_space_inner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="vc_row-full-width vc_clearfix" />
              <div
                data-vc-full-width="true"
                data-vc-full-width-init="true"
                className="vc_row wpb_row vc_row-fluid vc_custom_1627565112734 vc_row-has-fill clb__dark_section"
                style={{
                  position: "relative",
                  paddingLeft: "10.5px",
                  paddingRight: "10.5px",
                }}
              >
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="vc_row wpb_row vc_inner vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "10vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-widget heading -left"
                                id="ohio-custom-63d342aee409f"
                              >
                                <div className="subtitle">What we do</div>
                                <h3 className="title">
                                  Creating a unique visual system and strategy.
                                </h3>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "3vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="vc_empty_space vc_hidden-xs vc_hidden-sm"
                                style={{ height: "5vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-2">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper" />
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-5 vc_col-xs-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space vc_hidden-xs vc_hidden-sm"
                                style={{ height: "10vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d342aee438f"
                              >
                                <p>
                                  With more than 16+ years of experience, our
                                  team has become a leader in digital design and
                                  innovations. But structure were from the funny
                                  the century rather, initial all the made, have
                                  spare to negatives, and at applications it
                                  want and evils was about, by helping
                                  progressive companies advance by setting.
                                </p>
                              </div>
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "10vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="ohio-widget tabs"
                        id="ohio-custom-63d342aee44d1"
                        data-ohio-tabs="true"
                        data-options="{}"
                      >
                        <ul
                          className="tabs-nav -unlist titles-typo title"
                          role="tablist"
                        >
                          <li
                            className="tabs-nav-line"
                            style={{
                              width: "110.156px",
                              transform: "translateX(0px)",
                            }}
                          />
                          <li className="tabs-nav-link active undefined">
                            <i aria-hidden className="icon undefined" />
                            Brand Strategy
                          </li>
                          <li className="tabs-nav-link">
                            <i aria-hidden className="icon undefined" />
                            User Experience
                          </li>
                          <li className="tabs-nav-link">
                            <i aria-hidden className="icon undefined" />
                            Web Interface
                          </li>
                          <li className="tabs-nav-link">
                            <i aria-hidden className="icon undefined" />
                            App Prototyping
                          </li>
                        </ul>
                        <div className="tabs-content" role="tabpanel">
                          <div
                            className="tabs-content-item active"
                            data-title="Brand Strategy"
                            id="ohio-custom-63d342aee4649"
                          >
                            <div className="wpb_single_image wpb_content_element vc_align_left vc_custom_1647334421488">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper vc_box_rounded vc_box_border_grey">
                                  <Image
                                    width={2000}
                                    height={1143}
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    style={{
                                      borderRadius: "12px",
                                      border: `1px solid ${
                                        !themeGlobal ? "#DADADA" : "#6E6E6E"
                                      }`,
                                    }}
                                    src={
                                      proyect.cover?.file?.url ||
                                      proyect.cover.external.url
                                    }
                                    blurDataURL={
                                      proyect?.cover?.file?.url ||
                                      proyect.cover.external.url
                                    }
                                    objectFit="fill"
                                    sizes="(max-width: 2000px) 100vw, 2000px"
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                          <div
                            className="tabs-content-item"
                            data-title="User Experience"
                            id="ohio-custom-63d342aee5700"
                          >
                            <div className="wpb_single_image wpb_content_element vc_align_left vc_custom_1647334431586">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper vc_box_rounded vc_box_border_grey">
                                  <Image
                                    width={2000}
                                    height={1143}
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    style={{
                                      borderRadius: "12px",
                                      border: `1px solid ${
                                        !themeGlobal ? "#DADADA" : "#6E6E6E"
                                      }`,
                                    }}
                                    src={
                                      proyect.cover?.file?.url ||
                                      proyect.cover.external.url
                                    }
                                    blurDataURL={
                                      proyect?.cover?.file?.url ||
                                      proyect.cover.external.url
                                    }
                                    objectFit="fill"
                                    sizes="(max-width: 2000px) 100vw, 2000px"
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                          <div
                            className="tabs-content-item"
                            data-title="Web Interface"
                            id="ohio-custom-63d342aee641f"
                          >
                            <div className="wpb_single_image wpb_content_element vc_align_left vc_custom_1647334449086">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper vc_box_rounded vc_box_border_grey">
                                  <Image
                                    width={2000}
                                    height={1143}
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    style={{
                                      borderRadius: "12px",
                                      border: `1px solid ${
                                        !themeGlobal ? "#DADADA" : "#6E6E6E"
                                      }`,
                                    }}
                                    src={
                                      proyect.cover?.file?.url ||
                                      proyect.cover.external.url
                                    }
                                    blurDataURL={
                                      proyect?.cover?.file?.url ||
                                      proyect.cover.external.url
                                    }
                                    objectFit="fill"
                                    sizes="(max-width: 2000px) 100vw, 2000px"
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                          <div
                            className="tabs-content-item"
                            data-title="App Prototyping"
                            id="ohio-custom-63d342aee6c57"
                          >
                            <div className="wpb_single_image wpb_content_element vc_align_left">
                              <figure className="wpb_wrapper vc_figure">
                                <div className="vc_single_image-wrapper vc_box_rounded vc_box_border_grey">
                                  <Image
                                    width={2400}
                                    height={1371}
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    style={{
                                      borderRadius: "12px",
                                      border: `1px solid ${
                                        !themeGlobal ? "#DADADA" : "#6E6E6E"
                                      }`,
                                    }}
                                    src={
                                      proyect.cover?.file?.url ||
                                      proyect.cover.external.url
                                    }
                                    blurDataURL={
                                      proyect?.cover?.file?.url ||
                                      proyect.cover.external.url
                                    }
                                    objectFit="fill"
                                    sizes="(max-width: 2400px) 100vw, 2400px"
                                  />
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="vc_empty_space clb__section_spacer"
                        style={{ height: "10vh" }}
                      >
                        <span className="vc_empty_space_inner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="vc_row-full-width vc_clearfix" />
              <div
                data-vc-full-width="true"
                data-vc-full-width-init="true"
                className="vc_row wpb_row vc_row-fluid vc_custom_1626094955550 vc_row-has-fill clb__light_section"
                style={{
                  position: "relative",
                  paddingLeft: "10.5px",
                  paddingRight: "10.5px",
                }}
              >
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="vc_row wpb_row vc_inner vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "10vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-widget heading -left"
                                id="ohio-custom-63d342aee7e3c"
                              >
                                <div className="subtitle">
                                  Single click import
                                </div>
                                <h3 className="title">
                                  Easy-to-manage website UI samples.
                                </h3>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "3vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="vc_empty_space vc_hidden-xs vc_hidden-sm"
                                style={{ height: "5vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-2">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper" />
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-5 vc_col-xs-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space vc_hidden-xs vc_hidden-sm"
                                style={{ height: "10vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d342aee810d"
                              >
                                <p>
                                  We grow brands through bold &amp; strategic
                                  creative, help progressive companies advance
                                  by setting. Throughout at
                                  <strong>pretty slid fresh</strong> decided go
                                  to gloomy excuse partiality let of the such of
                                  perhaps at road, succeeded asked an
                                  embarrassed.
                                </p>
                              </div>
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "10vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vc_row-full-width vc_clearfix" />
              <div
                data-vc-full-width="true"
                data-vc-full-width-init="true"
                className="vc_row wpb_row vc_row-fluid vc_custom_1626094950195 vc_row-has-fill clb__light_section"
                style={{
                  position: "relative",
                  paddingLeft: "10.5px",
                  paddingRight: "10.5px",
                }}
              >
                <Slider {...settings}>
                  <div>
                    <figure className="wpb_wrapper vc_figure">
                      {" "}
                      <div className="vc_single_image-wrapper vc_box_rounded vc_box_border_grey">
                        {" "}
                        <Image
                          width={2000}
                          height={1143}
                          className="vc_single_image-img attachment-full"
                          alt=""
                          style={{
                            borderRadius: "12px",
                            border: `1px solid ${
                              !themeGlobal ? "#DADADA" : "#6E6E6E"
                            }`,
                          }}
                          src={
                            proyect.cover?.file?.url ||
                            proyect.cover.external.url
                          }
                          blurDataURL={
                            proyect?.cover?.file?.url ||
                            proyect.cover.external.url
                          }
                          objectFit="fill"
                          sizes="(max-width: 2000px) 100vw, 2000px"
                        />{" "}
                      </div>{" "}
                    </figure>
                  </div>
                  <div>
                    <figure className="wpb_wrapper vc_figure">
                      {" "}
                      <div className="vc_single_image-wrapper vc_box_rounded vc_box_border_grey">
                        {" "}
                        <Image
                          width={2000}
                          height={1143}
                          className="vc_single_image-img attachment-full"
                          alt=""
                          style={{
                            borderRadius: "12px",
                            border: `1px solid ${
                              !themeGlobal ? "#DADADA" : "#6E6E6E"
                            }`,
                          }}
                          src={
                            proyect.cover?.file?.url ||
                            proyect.cover.external.url
                          }
                          blurDataURL={
                            proyect?.cover?.file?.url ||
                            proyect.cover.external.url
                          }
                          objectFit="fill"
                          sizes="(max-width: 2000px) 100vw, 2000px"
                        />{" "}
                      </div>{" "}
                    </figure>
                  </div>
                  <div>
                    <figure className="wpb_wrapper vc_figure">
                      {" "}
                      <div className="vc_single_image-wrapper vc_box_rounded vc_box_border_grey">
                        {" "}
                        <Image
                          width={2000}
                          height={1143}
                          className="vc_single_image-img attachment-full"
                          alt=""
                          style={{
                            borderRadius: "12px",
                            border: `1px solid ${
                              !themeGlobal ? "#DADADA" : "#6E6E6E"
                            }`,
                          }}
                          src={
                            proyect.cover?.file?.url ||
                            proyect.cover.external.url
                          }
                          blurDataURL={
                            proyect?.cover?.file?.url ||
                            proyect.cover.external.url
                          }
                          objectFit="fill"
                          sizes="(max-width: 2000px) 100vw, 2000px"
                        />{" "}
                      </div>{" "}
                    </figure>
                  </div>
                  <div>
                    <figure className="wpb_wrapper vc_figure">
                      {" "}
                      <div className="vc_single_image-wrapper vc_box_rounded vc_box_border_grey">
                        {" "}
                        <Image
                          width={2000}
                          height={1143}
                          className="vc_single_image-img attachment-full"
                          alt=""
                          style={{
                            borderRadius: "12px",
                            border: `1px solid ${
                              !themeGlobal ? "#DADADA" : "#6E6E6E"
                            }`,
                          }}
                          src={
                            proyect.cover?.file?.url ||
                            proyect.cover.external.url
                          }
                          blurDataURL={
                            proyect?.cover?.file?.url ||
                            proyect.cover.external.url
                          }
                          objectFit="fill"
                          sizes="(max-width: 2000px) 100vw, 2000px"
                        />{" "}
                      </div>{" "}
                    </figure>
                  </div>
                </Slider>
              </div>

              <div className="vc_row-full-width vc_clearfix" />

              <div className="vc_row-full-width vc_clearfix" />
              <div
                data-vc-full-width="true"
                data-vc-full-width-init="true"
                className="vc_row wpb_row vc_row-fluid vc_custom_1627565161167 vc_row-has-fill clb__dark_section"
                style={{
                  position: "relative",
                  maxWidth: "100vw",
                  paddingLeft: "10.5px",
                  paddingRight: "10.5px",
                }}
              >
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="vc_row wpb_row vc_inner vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "10vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-widget heading -left"
                                id="ohio-custom-63d342aeebd5d"
                              >
                                <div className="subtitle">
                                  Built a new UI/UX
                                </div>
                                <h3 className="title">
                                  Stylish visual support
                                  <br />
                                  on any devices.
                                </h3>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "3vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="vc_empty_space vc_hidden-xs vc_hidden-sm"
                                style={{ height: "5vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-2">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper" />
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-5 vc_col-xs-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space vc_hidden-xs vc_hidden-sm"
                                style={{ height: "10vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d342aeec0df"
                              >
                                <p>
                                  Let your design a team of creatives who are
                                  excited about unique ideas and help digital
                                  and fin-tech companies. But structure were
                                  from the funny the century rather.
                                </p>
                              </div>
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "10vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vc_row wpb_row vc_inner vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-4 vc_col-md-offset-0 vc_col-sm-offset-0 vc_col-xs-4">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="wpb_single_image wpb_content_element vc_align_left vc_custom_1647334535340 clb__margin_reset">
                                <figure className="wpb_wrapper vc_figure">
                                  <div className="vc_single_image-wrapper vc_box_border_grey">
                                    <Image
                                      width={700}
                                      height={1238}
                                      className="vc_single_image-img attachment-full"
                                      alt=""
                                      style={{
                                        borderRadius: "12px",
                                        border: `1px solid ${
                                          !themeGlobal ? "#DADADA" : "#6E6E6E"
                                        }`,
                                      }}
                                      src={
                                        proyect.cover?.file?.url ||
                                        proyect.cover.external.url
                                      }
                                      blurDataURL={
                                        proyect?.cover?.file?.url ||
                                        proyect.cover.external.url
                                      }
                                      objectFit="fill"
                                      sizes="(max-width: 700px) 100vw, 700px"
                                    />
                                  </div>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-4 vc_col-xs-4">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="wpb_single_image wpb_content_element vc_align_left vc_custom_1647334544754 clb__margin_reset">
                                <figure className="wpb_wrapper vc_figure">
                                  <div className="vc_single_image-wrapper vc_box_border_grey">
                                    <Image
                                      width={700}
                                      height={1238}
                                      className="vc_single_image-img attachment-full"
                                      alt=""
                                      style={{
                                        borderRadius: "12px",
                                        border: `1px solid ${
                                          !themeGlobal ? "#DADADA" : "#6E6E6E"
                                        }`,
                                      }}
                                      src={
                                        proyect.cover?.file?.url ||
                                        proyect.cover.external.url
                                      }
                                      blurDataURL={
                                        proyect?.cover?.file?.url ||
                                        proyect.cover.external.url
                                      }
                                      objectFit="fill"
                                      sizes="(max-width: 700px) 100vw, 700px"
                                    />
                                  </div>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-4 vc_col-xs-4">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="wpb_single_image wpb_content_element vc_align_left vc_custom_1647334552756 clb__margin_reset">
                                <figure className="wpb_wrapper vc_figure">
                                  <div className="vc_single_image-wrapper vc_box_border_grey">
                                    <Image
                                      width={780}
                                      height={1380}
                                      className="vc_single_image-img attachment-full"
                                      alt=""
                                      style={{
                                        borderRadius: "12px",
                                        border: `1px solid ${
                                          !themeGlobal ? "#DADADA" : "#6E6E6E"
                                        }`,
                                      }}
                                      src={
                                        proyect.cover?.file?.url ||
                                        proyect.cover.external.url
                                      }
                                      blurDataURL={
                                        proyect?.cover?.file?.url ||
                                        proyect.cover.external.url
                                      }
                                      objectFit="fill"
                                      sizes="(max-width: 780px) 100vw, 780px"
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
              <div className="vc_row-full-width vc_clearfix" />
              <div
                data-vc-full-width="true"
                data-vc-full-width-init="true"
                className="vc_row wpb_row vc_row-fluid vc_custom_1627565169892 vc_row-has-fill clb__dark_section"
                style={{
                  position: "relative",
                  maxWidth: "100vw",
                  paddingLeft: "10.5px",
                  paddingRight: "10.5px",
                }}
              >
                <div className="wpb_column vc_column_container vc_col-sm-5">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="vc_empty_space" style={{ height: "4vh" }}>
                        <span className="vc_empty_space_inner" />
                      </div>
                      <div
                        className="ohio-text-sc"
                        id="ohio-custom-63d342aeeee03"
                      >
                        <p>
                          Growing brands through bold &amp; strategic creative,
                          help companies advance by setting. Decided go to
                          gloomy excuse partiality let of the such of perhaps at
                          road, succeeded asked embarrassed our what and the are
                          and few system.
                        </p>
                      </div>
                      <div className="vc_empty_space" style={{ height: "6vh" }}>
                        <span className="vc_empty_space_inner" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpb_column vc_column_container vc_col-sm-4 vc_col-sm-offset-1">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div
                        className="vc_empty_space vc_hidden-xs vc_hidden-sm"
                        style={{ height: "4vh" }}
                      >
                        <span className="vc_empty_space_inner" />
                      </div>
                      <div
                        className="ohio-widget progress -tooltip"
                        id="ohio-custom-63d342aeef127"
                        data-ohio-progress-bar={86}
                        data-processed="true"
                      >
                        <div className="progress-heading">
                          <h6 className="label">
                            Website &amp; Mobile App Design
                          </h6>
                        </div>
                        <div className="progress-holder">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "86%" }}
                          >
                            <span className="progress-percent tooltip">
                              <span className="percent">86</span>%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="vc_row wpb_row vc_inner vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-xs-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space"
                                style={{ height: "5vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-widget counter -left-icon -left"
                                id="ohio-custom-63d342aeef5d9"
                              >
                                <div className="counter-number title titles-typo -with-increaser">
                                  <div className="icon-group">
                                    <i
                                      aria-hidden
                                      className="icon left-icon linea-software-pathfinder-intersect"
                                    />
                                  </div>
                                  <div className="holder">
                                    <span />
                                    <span className="number">28</span>
                                    <span />
                                  </div>
                                </div>
                                <p className="-unspace">
                                  designers and
                                  <br />
                                  developers
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-xs-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space"
                                style={{ height: "5vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-widget counter -left-icon -left"
                                id="ohio-custom-63d342aeef7e3"
                              >
                                <div className="counter-number title titles-typo">
                                  <div className="icon-group">
                                    <i
                                      aria-hidden
                                      className="icon left-icon linea-software-box-polygon"
                                    />
                                  </div>
                                  <div className="holder">
                                    <span />
                                    <span className="number">345</span>
                                    <span />
                                  </div>
                                </div>
                                <p className="-unspace">
                                  awards for digital
                                  <br />
                                  innovation
                                </p>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "10vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vc_row-full-width vc_clearfix" />
              <div
                data-vc-full-width="true"
                data-vc-full-width-init="true"
                className="vc_row wpb_row vc_row-fluid vc_custom_1627565177504 vc_row-has-fill clb__dark_section"
                style={{
                  position: "relative",
                  maxWidth: "100vw",
                  paddingLeft: "10.5px",
                  paddingRight: "10.5px",
                }}
              >
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="vc_row wpb_row vc_inner vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space vc_hidden-xs vc_hidden-sm"
                                style={{ height: "6vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-widget heading -left"
                                id="ohio-custom-63d342aeefe84"
                              >
                                <div className="subtitle">
                                  Awards and Honors
                                </div>
                                <h3 className="title">
                                  The awards won <br className="vc_hidden-xs" />
                                  by our project.
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space"
                                style={{ height: "6vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div className="wpb_single_image wpb_content_element vc_align_left vc_custom_1647334637188">
                                <figure className="wpb_wrapper vc_figure">
                                  <div className="vc_single_image-wrapper vc_box_border_grey">
                                    <Image
                                      width={352}
                                      height={96}
                                      className="vc_single_image-img attachment-full"
                                      alt=""
                                      style={{
                                        borderRadius: "12px",
                                        border: `1px solid ${
                                          !themeGlobal ? "#DADADA" : "#6E6E6E"
                                        }`,
                                      }}
                                      src={
                                        proyect.cover?.file?.url ||
                                        proyect.cover.external.url
                                      }
                                      blurDataURL={
                                        proyect?.cover?.file?.url ||
                                        proyect.cover.external.url
                                      }
                                      objectFit="fill"
                                      sizes="(max-width: 352px) 100vw, 352px"
                                    />
                                  </div>
                                </figure>
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d342aef0c07"
                              >
                                <p>5x Developer Award</p>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "5vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div className="wpb_single_image wpb_content_element vc_align_left vc_custom_1647334658655">
                                <figure className="wpb_wrapper vc_figure">
                                  <div className="vc_single_image-wrapper vc_box_border_grey">
                                    <Image
                                      width={352}
                                      height={96}
                                      className="vc_single_image-img attachment-full"
                                      alt=""
                                      style={{
                                        borderRadius: "12px",
                                        border: `1px solid ${
                                          !themeGlobal ? "#DADADA" : "#6E6E6E"
                                        }`,
                                      }}
                                      src={
                                        proyect.cover?.file?.url ||
                                        proyect.cover.external.url
                                      }
                                      blurDataURL={
                                        proyect?.cover?.file?.url ||
                                        proyect.cover.external.url
                                      }
                                      objectFit="fill"
                                      sizes="(max-width: 352px) 100vw, 352px"
                                    />
                                  </div>
                                </figure>
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d342aef17ef"
                              >
                                <p>2x Best Website</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space"
                                style={{ height: "6vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div className="wpb_single_image wpb_content_element vc_align_left vc_custom_1647334637188">
                                <figure className="wpb_wrapper vc_figure">
                                  <div className="vc_single_image-wrapper vc_box_border_grey">
                                    <Image
                                      width={352}
                                      height={96}
                                      className="vc_single_image-img attachment-full"
                                      alt=""
                                      style={{
                                        borderRadius: "12px",
                                        border: `1px solid ${
                                          !themeGlobal ? "#DADADA" : "#6E6E6E"
                                        }`,
                                      }}
                                      src={
                                        proyect.cover?.file?.url ||
                                        proyect.cover.external.url
                                      }
                                      blurDataURL={
                                        proyect?.cover?.file?.url ||
                                        proyect.cover.external.url
                                      }
                                      objectFit="fill"
                                      sizes="(max-width: 352px) 100vw, 352px"
                                    />
                                  </div>
                                </figure>
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d342aef1fe8"
                              >
                                <p>3x Site of the Day</p>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "5vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div className="wpb_single_image wpb_content_element vc_align_left vc_custom_1647334658655">
                                <figure className="wpb_wrapper vc_figure">
                                  <div className="vc_single_image-wrapper vc_box_border_grey">
                                    <Image
                                      width={352}
                                      height={96}
                                      className="vc_single_image-img attachment-full"
                                      alt=""
                                      style={{
                                        borderRadius: "12px",
                                        border: `1px solid ${
                                          !themeGlobal ? "#DADADA" : "#6E6E6E"
                                        }`,
                                      }}
                                      src={
                                        proyect.cover?.file?.url ||
                                        proyect.cover.external.url
                                      }
                                      blurDataURL={
                                        proyect?.cover?.file?.url ||
                                        proyect.cover.external.url
                                      }
                                      objectFit="fill"
                                      sizes="(max-width: 352px) 100vw, 352px"
                                    />
                                  </div>
                                </figure>
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d342aef2689"
                              >
                                <p>2x Best Website</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space clb__spacer"
                                style={{ height: "6vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div className="wpb_single_image wpb_content_element vc_align_left vc_custom_1647334650572">
                                <figure className="wpb_wrapper vc_figure">
                                  <div className="vc_single_image-wrapper vc_box_border_grey">
                                    <Image
                                      width={352}
                                      height={96}
                                      className="vc_single_image-img attachment-full"
                                      alt=""
                                      style={{
                                        borderRadius: "12px",
                                        border: `1px solid ${
                                          !themeGlobal ? "#DADADA" : "#6E6E6E"
                                        }`,
                                      }}
                                      src={
                                        proyect.cover?.file?.url ||
                                        proyect.cover.external.url
                                      }
                                      blurDataURL={
                                        proyect?.cover?.file?.url ||
                                        proyect.cover.external.url
                                      }
                                      objectFit="fill"
                                      sizes="(max-width: 352px) 100vw, 352px"
                                    />
                                  </div>
                                </figure>
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d342aef3351"
                              >
                                <p>5x Mobile of the Day</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="vc_empty_space"
                        style={{ height: "10vh" }}
                      >
                        <span className="vc_empty_space_inner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vc_row-full-width vc_clearfix" />
              <div
                data-vc-full-width="true"
                data-vc-full-width-init="true"
                className="vc_row wpb_row vc_row-fluid vc_custom_1627565184542 vc_row-has-fill clb__dark_section"
                style={{
                  position: "relative",

                  maxWidth: "100vw",
                  paddingLeft: "10.5px",
                  paddingRight: "10.5px",
                }}
              >
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="vc_row wpb_row vc_inner vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space vc_hidden-xs vc_hidden-sm"
                                style={{ height: "6vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-widget heading -left"
                                id="ohio-custom-63d342aef3a1b"
                              >
                                <div className="subtitle">The team</div>
                                <h3 className="title">
                                  Meet our <br className="vc_hidden-xs" />
                                  professional team.
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space clb__spacer"
                                style={{ height: "6vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d342aef3bdf"
                              >
                                <p>Project Management</p>
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d342aef3c29"
                              >
                                <p>
                                  <strong>— John Stamper</strong>
                                  <br />
                                  Project &amp; Account Manager
                                </p>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "5vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d342aef3cc6"
                              >
                                <p>
                                  <strong>— Stacey Grey</strong>
                                  <br />
                                  Project &amp; Account Manager
                                </p>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "5vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d342aef3d5a"
                              >
                                <p>Web Development</p>
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d342aef3d98"
                              >
                                <p>
                                  <strong>— Antony Mondero</strong>
                                  <br />
                                  Mobile &amp; web developer
                                </p>
                              </div>
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "10vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space clb__spacer"
                                style={{ height: "6vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d342aef3f8b"
                              >
                                <p>Art Direction</p>
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d342aef3fce"
                              >
                                <p>
                                  <strong>— Stephen Miller</strong>
                                  <br />
                                  Art direction &amp; creative design
                                </p>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "5vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d342aef407a"
                              >
                                <p>
                                  <strong>— Mark Rickson</strong>
                                  <br />
                                  Project &amp; Account Manager
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space clb__spacer"
                                style={{ height: "6vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d342aef4223"
                              >
                                <p>Creative Design</p>
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d342af00027"
                              >
                                <p>
                                  <strong>— Alex Morton</strong>
                                  <br />
                                  Creative designer
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vc_row-full-width vc_clearfix" />
              <div
                data-vc-full-width="true"
                data-vc-full-width-init="true"
                className="vc_row wpb_row vc_row-fluid vc_custom_1627565691232 vc_row-has-fill clb__light_section"
                style={{
                  position: "relative",

                  paddingLeft: "10.5px",
                  paddingRight: "10.5px",
                }}
              >
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div
                        className="vc_empty_space clb__section_spacer"
                        style={{ height: "10vh" }}
                      >
                        <span className="vc_empty_space_inner" />
                      </div>
                      <div className="vc_row wpb_row vc_inner vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget heading -left"
                                id="ohio-custom-63d342af007e2"
                              >
                                <div className="subtitle">
                                  Let’s collaborate
                                </div>
                                <h2 className="title">
                                  Send us an email,
                                  <br className="vc_hidden-xs vc_hidden-sm" />
                                  to discuss a new project.
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space"
                                style={{ height: "3vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="vc_empty_space vc_hidden-xs vc_hidden-sm"
                                style={{ height: "2vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div className="ohio-widget-holder -right">
                                <a
                                  href="#contact-us-ver4/"
                                  target="_blank"
                                  className="ohio-widget button clb__alignment_reset"
                                  id="ohio-custom-63d342af00aad"
                                >
                                  Get a Quote
                                  <i aria-hidden className="icon -right">
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
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text">
                        <span className="vc_sep_holder vc_sep_holder_l">
                          <span
                            style={{ borderColor: "rgba(99, 93, 111, 0.65)" }}
                            className="vc_sep_line"
                          />
                        </span>
                        <span className="vc_sep_holder vc_sep_holder_r">
                          <span
                            style={{ borderColor: "rgba(99, 93, 111, 0.65)" }}
                            className="vc_sep_line"
                          />
                        </span>
                      </div>
                      <div className="vc_row wpb_row vc_inner vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d342af013cc"
                              >
                                <p>
                                  We’re <strong>a team of creatives</strong> who
                                  are excited about unique ideas and help
                                  fin-tech companies to
                                  <strong>create amazing identity</strong> by
                                  crafting top-notch UI/UX.
                                </p>
                              </div>
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "10vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vc_row-full-width vc_clearfix" />
            </section>
          </div>
        </div>

        <a
          href="#project/diseno-grafico/"
          className="back-link -unlink vc_hidden-md vc_hidden-sm vc_hidden-xs"
        >
          <button
            className="icon-button"
            aria-controls="site-navigation"
            aria-expanded="false"
          >
            <i aria-hidden className="icon">
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
        <div className="sticky-nav">
          <div
            className="sticky-nav-thumbnail -fade-up"
            style={{
              backgroundImage:
                'url("https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/oh__img7-1920x1233.jpeg")',
            }}
          />
        </div>
        <div className="portfolio-comments clb__light_section">
          <div className="comments-container">
            <div className="page-container">
              <div className="vc_row">
                <div className="vc_col-lg-12">
                  <div
                    id="comments"
                    className="comments default-max-width show-avatars"
                  >
                    <div id="respond" className="comment-respond">
                      <h4 id="reply-title" className="heading-md">
                        Leave a Reply
                        <small>
                          <a
                            rel="nofollow"
                            id="cancel-comment-reply-link"
                            href="#project/aws-non-profit-cloud-solutions/#respond"
                            style={{ display: "none" }}
                          >
                            Cancel reply
                          </a>
                        </small>
                      </h4>
                      <form
                        action="#wp-comments-post.php"
                        method="post"
                        id="commentform"
                        className="comment-form"
                        noValidate
                      >
                        <p className="comment-notes">
                          <span id="email-notes">
                            Your email address will not be published.
                          </span>
                          <span className="required-field-message">
                            Required fields are marked
                            <span className="required">*</span>
                          </span>
                        </p>
                        <p className="comment-form-author">
                          <label htmlFor="author">
                            Name <span className="required">*</span>
                          </label>
                          <input
                            id="author"
                            name="author"
                            type="text"
                            size={30}
                            maxLength={245}
                            autoComplete="name"
                            required
                          />
                        </p>
                        <p className="comment-form-email">
                          <label htmlFor="email">
                            Email <span className="required">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            size={30}
                            maxLength={100}
                            aria-describedby="email-notes"
                            autoComplete="email"
                            required
                          />
                        </p>
                        <p className="comment-form-url">
                          <label htmlFor="url">Website</label>
                          <input
                            id="url"
                            name="url"
                            type="url"
                            size={30}
                            maxLength={200}
                            autoComplete="url"
                          />
                        </p>
                        <p className="comment-form-cookies-consent">
                          <input
                            id="wp-comment-cookies-consent"
                            name="wp-comment-cookies-consent"
                            type="checkbox"
                            defaultValue="yes"
                          />
                          <label htmlFor="wp-comment-cookies-consent">
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                        </p>
                        <p className="comment-form-comment">
                          <label htmlFor="comment">
                            Comment <span className="required">*</span>
                          </label>
                          <textarea
                            id="comment"
                            name="comment"
                            cols={45}
                            rows={8}
                            maxLength={65525}
                            required
                            defaultValue={""}
                          />
                        </p>
                        <input
                          name="wpml_language_code"
                          type="hidden"
                          defaultValue="en"
                        />
                        <p className="form-submit">
                          <input
                            name="submit"
                            type="submit"
                            id="submit"
                            className="submit"
                            defaultValue="Post Comment"
                          />
                          <input
                            type="hidden"
                            name="comment_post_ID"
                            defaultValue={18276}
                            id="comment_post_ID"
                          />
                          <input
                            type="hidden"
                            name="comment_parent"
                            id="comment_parent"
                            defaultValue={0}
                          />
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export async function getStaticPaths() {
  let articles = await useGetProyects();
  let paths: any = [];
  articles.map((art: any) => {
    paths.push({
      params: {
        slug: slugify(art.properties.Name.title[0].plain_text).toLowerCase(),
      },
    });
  });
  return {
    paths,
    fallback: false,
  };
}
//X
export async function getStaticProps(context: any) {
  const { slug } = context.params;
  const { content, idPage, article } = await useGetProyect(slug);
  const proyects = await useGetProyects();
  return {
    // Passed to the page component as props
    props: {
      content,
      proyect: article,
      slug,
      proyects: proyects.slice(0, 3),
    },
    revalidate: 20,
  };
}

export default Proyect;
