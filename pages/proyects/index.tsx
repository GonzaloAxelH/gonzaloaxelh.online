import Container from "@/components/hocs/Container";
import { UIContext } from "@/context/UIContext";
import { useGetArticles } from "@/hooks/useGetArticles";
import { useGetProyects } from "@/hooks/useGetProyects";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import slugify from "slugify";

const Proyects = ({ allProyects }: any) => {
  const { themeGlobal } = useContext(UIContext);
  const proyectFeature = allProyects[3];

  const coverImageFeature =
    proyectFeature?.cover?.file?.url || proyectFeature?.cover?.external?.url;
  const dateFeature = proyectFeature.created_time;
  const title = proyectFeature.properties.Name?.title[0]?.plain_text;
  const titleLink = slugify(title).toLowerCase();

  return (
    <Container customMeta={{ title: "Proyects - Gonzalo Axel" }}>
      <div
        id="content"
        className="site-content"
        data-mobile-menu-resolution={768}
      >
        <div className="header-cap header-2" />
        <div className="page-container">
          <div id="primary" className="content-area">
            <div className="page-content">
              <main id="main" className="site-main">
                <article
                  id="post-152197"
                  className="post-152197 page type-page status-publish hentry"
                >
                  <div className="entry-content">
                    <section className="wpb-content-wrapper">
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-2">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper" />
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-8">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "12vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-widget heading clb__heading -center"
                                id="ohio-custom-63d77104d966a"
                              >
                                <h1 className="title">
                                  Echale un vistazo
                                  <br className="vc_hidden-xs" />
                                  a mis proyectos mas recientes.
                                </h1>
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d77104d9a96"
                              >
                                <p style={{ textAlign: "center" }}>
                                  Give customers a structutal experience they’ll
                                  and come back.
                                  <br />
                                  <b>Join #1 app</b> to track your data.
                                </p>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "3vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div className="ohio-widget-holder -center">
                                <a
                                  href="#demo26/#"
                                  target="_blank"
                                  className="ohio-widget button"
                                  id="ohio-custom-63d77104da25e"
                                >
                                  Sign Up for Free
                                </a>
                              </div>
                              <div
                                className="vc_empty_space vc_hidden-lg vc_hidden-md vc_hidden-sm"
                                style={{ height: "5vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-widget content-box aos-init aos-animate"
                                id="ohio-custom-63d77104da80f"
                                data-aos="fade-up"
                              >
                                <div className="wpb_single_image wpb_content_element vc_align_left vc_custom_1628166013825">
                                  <figure className="wpb_wrapper vc_figure">
                                    <div className="vc_single_image-wrapper vc_box_border_grey">
                                      <img
                                        width={1649}
                                        height={1491}
                                        src="./Ohio Stage Demo 26 – Just another WordPress site_files/oh__demo26__1a-min.png"
                                        className="vc_single_image-img attachment-full"
                                        alt=""
                                        decoding="async"
                                        loading="lazy"
                                        title="oh__demo26__1a-min"
                                        srcSet="
                                      https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__1a-min-300x271.png    300w,
                                      https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__1a-min-1024x926.png  1024w,
                                      https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__1a-min-768x694.png    768w,
                                      https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__1a-min-1536x1389.png 1536w,
                                      https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__1a-min.png           1649w
                                    "
                                        sizes="(max-width: 1649px) 100vw, 1649px"
                                      />
                                    </div>
                                  </figure>
                                </div>
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d77104dc2dd"
                              >
                                <p style={{ textAlign: "center" }}>
                                  Join <strong>2,5K+</strong> software
                                  businesses growing with Colabrio Group.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-2">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper" />
                          </div>
                        </div>
                      </div>
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space clb__spacer"
                                style={{ height: "4vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                <div className="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6">
                                  <div className="vc_column-inner vc_custom_1640256908186">
                                    <div className="wpb_wrapper">
                                      <div
                                        className="ohio-widget logo -left"
                                        id="ohio-custom-63d77104ddf61"
                                      >
                                        <a
                                          className="-unlink"
                                          href="#demo26/#"
                                          target="_blank"
                                        >
                                          <img
                                            src="./Ohio Stage Demo 26 – Just another WordPress site_files/LogoSC-min.png"
                                            srcSet
                                            sizes="(max-width: 268px) 100vw, 268px"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6">
                                  <div className="vc_column-inner vc_custom_1640256914182">
                                    <div className="wpb_wrapper">
                                      <div
                                        className="ohio-widget logo -left"
                                        id="ohio-custom-63d77104de959"
                                      >
                                        <a
                                          className="-unlink"
                                          href="#demo26/#"
                                          target="_blank"
                                        >
                                          <img
                                            src="./Ohio Stage Demo 26 – Just another WordPress site_files/LogoSC-5-min.png"
                                            srcSet
                                            sizes="(max-width: 268px) 100vw, 268px"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6">
                                  <div className="vc_column-inner vc_custom_1640256965606">
                                    <div className="wpb_wrapper">
                                      <div
                                        className="ohio-widget logo -left"
                                        id="ohio-custom-63d77104df143"
                                      >
                                        <a
                                          className="-unlink"
                                          href="#demo26/#"
                                          target="_blank"
                                        >
                                          <img
                                            src="./Ohio Stage Demo 26 – Just another WordPress site_files/LogoSC-6-min.png"
                                            srcSet
                                            sizes="(max-width: 268px) 100vw, 268px"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6">
                                  <div className="vc_column-inner vc_custom_1640257004317">
                                    <div className="wpb_wrapper">
                                      <div
                                        className="ohio-widget logo -left"
                                        id="ohio-custom-63d77104df909"
                                      >
                                        <a
                                          className="-unlink"
                                          href="#demo26/#"
                                          target="_blank"
                                        >
                                          <img
                                            src="./Ohio Stage Demo 26 – Just another WordPress site_files/LogoSC-9-min.png"
                                            srcSet
                                            sizes="(max-width: 268px) 100vw, 268px"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6">
                                  <div className="vc_column-inner vc_custom_1640256957922">
                                    <div className="wpb_wrapper">
                                      <div
                                        className="ohio-widget logo -left"
                                        id="ohio-custom-63d77104e0044"
                                      >
                                        <a
                                          className="-unlink"
                                          href="#demo26/#"
                                          target="_blank"
                                        >
                                          <img
                                            src="./Ohio Stage Demo 26 – Just another WordPress site_files/LogoSC-10-min.png"
                                            srcSet
                                            sizes="(max-width: 268px) 100vw, 268px"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6">
                                  <div className="vc_column-inner vc_custom_1640256954412">
                                    <div className="wpb_wrapper">
                                      <div
                                        className="ohio-widget logo -left"
                                        id="ohio-custom-63d77104e07e1"
                                      >
                                        <a
                                          className="-unlink"
                                          href="#demo26/#"
                                          target="_blank"
                                        >
                                          <img
                                            src="./Ohio Stage Demo 26 – Just another WordPress site_files/LogoSC-7-min.png"
                                            srcSet
                                            sizes="(max-width: 268px) 100vw, 268px"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="vc_empty_space clb__spacer"
                                style={{ height: "4vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-vc-full-width="true"
                        data-vc-full-width-init="true"
                        className="vc_row wpb_row vc_row-fluid clb__dark_mode_light vc_custom_1608806116530 vc_row-has-fill"
                        style={{
                          position: "relative",
                          left: "0px",
                          boxSizing: "border-box",
                          width: "1157.78px",
                          maxWidth: "1349px",
                          paddingLeft: "95.6094px",
                          paddingRight: "95.6106px",
                        }}
                      >
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "12vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div className="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-content-middle vc_row-flex">
                                <div className="wpb_column vc_column_container vc_col-sm-5">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                      <div
                                        className="video-button open-popup -left-flex -animation"
                                        id="ohio-custom-63d77104e133a"
                                        data-video="https://www.youtube.com/embed/t67_zAg5vvI?controls=1&start=0&mute=0"
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
                                      <div
                                        className="vc_empty_space"
                                        style={{ height: "3vh" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                      <div
                                        className="ohio-widget heading -left"
                                        id="ohio-custom-63d77104e1702"
                                      >
                                        <div className="subtitle">
                                          #datatracking app
                                        </div>
                                        <h2 className="title">
                                          The app is great for basic setup and
                                          adjusts.
                                        </h2>
                                      </div>
                                      <div
                                        className="ohio-text-sc"
                                        id="ohio-custom-63d77104e17ac"
                                      >
                                        <p>
                                          So how does it work? Let’s check our
                                          <strong>Getting Started</strong>
                                          tutorial or choose from pre-made
                                          templates.
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
                                          href="#demo26/#"
                                          target="_blank"
                                          className="ohio-widget button -outlined -small"
                                          id="ohio-custom-63d77104e18fe"
                                        >
                                          Explore Features
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
                                <div className="wpb_column vc_column_container vc_col-sm-7">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                      <div className="wpb_single_image wpb_content_element vc_align_left vc_custom_1628165984912">
                                        <figure className="wpb_wrapper vc_figure">
                                          <div className="vc_single_image-wrapper vc_box_border_grey">
                                            <img
                                              width={1433}
                                              height={812}
                                              src="./Ohio Stage Demo 26 – Just another WordPress site_files/oh__demo26__2-min.png"
                                              className="vc_single_image-img attachment-full"
                                              alt=""
                                              decoding="async"
                                              loading="lazy"
                                              title="oh__demo26__2-min"
                                              srcSet="
                                            https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__2-min-300x170.png   300w,
                                            https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__2-min-1024x580.png 1024w,
                                            https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__2-min-768x435.png   768w,
                                            https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__2-min.png          1433w
                                          "
                                              sizes="(max-width: 1433px) 100vw, 1433px"
                                            />
                                          </div>
                                        </figure>
                                      </div>
                                      <div
                                        className="vc_empty_space vc_hidden-lg vc_hidden-md vc_hidden-sm"
                                        style={{ height: "30px" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                <div className="wpb_column vc_column_container vc_col-sm-4">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                      <div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_custom_1628157254855 vc_custom_1628157254855">
                                        <span className="vc_sep_holder vc_sep_holder_l">
                                          <span
                                            style={{
                                              borderColor:
                                                "rgba(99,93, 111,0.65)",
                                            }}
                                            className="vc_sep_line"
                                          />
                                        </span>
                                        <span className="vc_sep_holder vc_sep_holder_r">
                                          <span
                                            style={{
                                              borderColor:
                                                "rgba(99,93,111,0.65)",
                                            }}
                                            className="vc_sep_line"
                                          />
                                        </span>
                                      </div>
                                      <div
                                        className="vc_empty_space"
                                        style={{ height: "4vh" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                      <div
                                        className="ohio-widget icon-box -left -left-flex"
                                        id="ohio-custom-63d77104e3c33"
                                      >
                                        <span className="icon-group -contained">
                                          <i className="icon ion ion-ios-star-outline" />
                                        </span>
                                        <div className="icon-box-content">
                                          <h5 className="icon-box-heading">
                                            Expenses
                                          </h5>
                                          <p>
                                            Packed with API features you will
                                            love to collaborate with issues and
                                            change business.
                                          </p>
                                          <a
                                            className="button -small"
                                            href="#demo26/#"
                                            target="_blank"
                                          >
                                            Read More
                                          </a>
                                        </div>
                                      </div>
                                      <div
                                        className="vc_empty_space vc_hidden-lg vc_hidden-md"
                                        style={{ height: "2vh" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-4">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                      <div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_custom_1628157254855 vc_custom_1628157254855">
                                        <span className="vc_sep_holder vc_sep_holder_l">
                                          <span
                                            style={{
                                              borderColor:
                                                "rgba(99,93,111,0.65)",
                                            }}
                                            className="vc_sep_line"
                                          />
                                        </span>
                                        <span className="vc_sep_holder vc_sep_holder_r">
                                          <span
                                            style={{
                                              borderColor:
                                                "rgba(99,93,111,0.65)",
                                            }}
                                            className="vc_sep_line"
                                          />
                                        </span>
                                      </div>
                                      <div
                                        className="vc_empty_space"
                                        style={{ height: "4vh" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                      <div
                                        className="ohio-widget icon-box -left -left-flex"
                                        id="ohio-custom-63d77104e446b"
                                      >
                                        <span className="icon-group -contained">
                                          <i className="icon ion ion-ios-git-compare" />
                                        </span>
                                        <div className="icon-box-content">
                                          <h5 className="icon-box-heading">
                                            Tracking API
                                          </h5>
                                          <p>
                                            Get insights from your customers
                                            directly using the app API and test
                                            funnels earlier.
                                          </p>
                                          <a
                                            className="button -small"
                                            href="#demo26/#"
                                            target="_blank"
                                          >
                                            Read More
                                          </a>
                                        </div>
                                      </div>
                                      <div
                                        className="vc_empty_space vc_hidden-lg vc_hidden-md"
                                        style={{ height: "2vh" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-4">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                      <div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_custom_1628157269605 vc_custom_1628157269605">
                                        <span className="vc_sep_holder vc_sep_holder_l">
                                          <span
                                            style={{
                                              borderColor:
                                                "rgba(99,93,111,0.65)",
                                            }}
                                            className="vc_sep_line"
                                          />
                                        </span>
                                        <span className="vc_sep_holder vc_sep_holder_r">
                                          <span
                                            style={{
                                              borderColor:
                                                "rgba(99,93,111,0.65)",
                                            }}
                                            className="vc_sep_line"
                                          />
                                        </span>
                                      </div>
                                      <div
                                        className="vc_empty_space"
                                        style={{ height: "4vh" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                      <div
                                        className="ohio-widget icon-box -left -left-flex"
                                        id="ohio-custom-63d77104e4a6a"
                                      >
                                        <span className="icon-group -contained">
                                          <i className="icon ion ion-ios-pulse" />
                                        </span>
                                        <div className="icon-box-content">
                                          <h5 className="icon-box-heading">
                                            Statistics
                                          </h5>
                                          <p>
                                            Create a scalable statistics system
                                            that’s accessible for your company.
                                          </p>
                                          <a
                                            className="button -small"
                                            href="#demo26/#"
                                            target="_blank"
                                          >
                                            Read More
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "12vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vc_row-full-width vc_clearfix" />
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-3">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper" />
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "12vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-widget heading -center"
                                id="ohio-custom-63d77104e54e6"
                              >
                                <h2 className="title">
                                  Save your data,
                                  <br className="vc_hidden-sm vc_hidden-xs" />
                                  wherever you are.
                                </h2>
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d77104e556a"
                              >
                                <p style={{ textAlign: "center" }}>
                                  Helping SaaS teams to increase e-commerce and
                                  ROI conversions,
                                  <br className="vc_hidden-sm vc_hidden-xs" />
                                  reduce bounce rate, and
                                  <strong>scale up faster</strong>.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-3">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper" />
                          </div>
                        </div>
                      </div>
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper" />
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space"
                                style={{ height: "4vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-widget contact-form -left"
                                id="ohio-custom-63d77104e5ee4"
                              >
                                <div
                                  className="wpcf7 js"
                                  id="wpcf7-f224297-p152197-o1"
                                  lang="en-US"
                                  dir="ltr"
                                >
                                  <div className="screen-reader-response">
                                    <p
                                      role="status"
                                      aria-live="polite"
                                      aria-atomic="true"
                                    />
                                    <ul />
                                  </div>
                                  <form
                                    action="#demo26/#wpcf7-f224297-p152197-o1"
                                    method="post"
                                    className="wpcf7-form init"
                                    aria-label="Contact form"
                                    noValidate="novalidate"
                                    data-status="init"
                                  >
                                    <div style={{ display: "none" }}>
                                      <input
                                        type="hidden"
                                        name="_wpcf7"
                                        defaultValue={224297}
                                      />
                                      <input
                                        type="hidden"
                                        name="_wpcf7_version"
                                        defaultValue="5.7.2"
                                      />
                                      <input
                                        type="hidden"
                                        name="_wpcf7_locale"
                                        defaultValue="en_US"
                                      />
                                      <input
                                        type="hidden"
                                        name="_wpcf7_unit_tag"
                                        defaultValue="wpcf7-f224297-p152197-o1"
                                      />
                                      <input
                                        type="hidden"
                                        name="_wpcf7_container_post"
                                        defaultValue={152197}
                                      />
                                      <input
                                        type="hidden"
                                        name="_wpcf7_posted_data_hash"
                                        defaultValue
                                      />
                                    </div>
                                    <div className="subscribe-form">
                                      <p>
                                        <span
                                          className="wpcf7-form-control-wrap"
                                          data-name="your-email"
                                        >
                                          <input
                                            size={40}
                                            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                            aria-required="true"
                                            aria-invalid="false"
                                            placeholder="name@email.com"
                                            defaultValue
                                            type="email"
                                            name="your-email"
                                          />
                                        </span>
                                        <br />
                                        <button
                                          className="button"
                                          data-button-loading="true"
                                        >
                                          Get a Demo
                                        </button>
                                        <span className="wpcf7-spinner" />
                                      </p>
                                    </div>
                                    <div
                                      className="wpcf7-response-output"
                                      aria-hidden="true"
                                    />
                                  </form>
                                </div>
                                <div
                                  className="hidden"
                                  data-button-contact="true"
                                />
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d77104e6b39"
                              >
                                <p style={{ textAlign: "center" }}>
                                  Already using our service?
                                  <a href="#demo26/#">
                                    <strong>Sign In</strong>
                                  </a>
                                </p>
                              </div>
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "12vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper" />
                          </div>
                        </div>
                      </div>
                      <div
                        data-vc-full-width="true"
                        data-vc-full-width-init="true"
                        className="vc_row wpb_row vc_row-fluid clb__dark_mode_light vc_custom_1608806125006 vc_row-has-fill"
                        style={{
                          position: "relative",
                          left: "0px",
                          boxSizing: "border-box",
                          width: "1157.78px",
                          maxWidth: "1349px",
                          paddingLeft: "95.6094px",
                          paddingRight: "95.6106px",
                        }}
                      >
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "12vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div className="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-content-middle vc_row-flex">
                                <div className="wpb_column vc_column_container vc_col-sm-5">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                      <div className="wpb_single_image wpb_content_element vc_align_left vc_custom_1628165996400">
                                        <figure className="wpb_wrapper vc_figure">
                                          <div className="vc_single_image-wrapper vc_box_border_grey">
                                            <img
                                              width={1000}
                                              height={828}
                                              src="./Ohio Stage Demo 26 – Just another WordPress site_files/oh__demo26__3-min.png"
                                              className="vc_single_image-img attachment-full"
                                              alt=""
                                              decoding="async"
                                              loading="lazy"
                                              title="oh__demo26__3-min"
                                              srcSet="
                                            https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__3-min-300x248.png  300w,
                                            https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__3-min-768x636.png  768w,
                                            https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__3-min.png         1000w
                                          "
                                              sizes="(max-width: 1000px) 100vw, 1000px"
                                            />
                                          </div>
                                        </figure>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-1">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper" />
                                  </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-5">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                      <div
                                        className="vc_empty_space vc_hidden-lg vc_hidden-md vc_hidden-sm"
                                        style={{ height: "5vh" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                      <div
                                        className="ohio-widget heading -left"
                                        id="ohio-custom-63d77104e87ad"
                                      >
                                        <div className="subtitle">
                                          The number one #datatracking app
                                        </div>
                                        <h2 className="title">
                                          Keep pushing forward. We've got your
                                          back.
                                        </h2>
                                      </div>
                                      <div
                                        className="ohio-text-sc"
                                        id="ohio-custom-63d77104e8857"
                                      >
                                        <p>
                                          So how does it work? Let’s check our
                                          <strong>Getting Started</strong>
                                          tutorial or choose from pre-made
                                          templates.
                                        </p>
                                      </div>
                                      <div
                                        className="vc_empty_space"
                                        style={{ height: "3vh" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                      <div
                                        className="ohio-widget counter -left-icon -left"
                                        id="ohio-custom-63d77104e89c3"
                                        data-counter={268}
                                      >
                                        <div className="counter-number title titles-typo -with-increaser">
                                          <div className="holder">
                                            <span />
                                            <span className="number">0</span>
                                            <span />
                                          </div>
                                        </div>
                                        <p className="-unspace">
                                          success projects
                                        </p>
                                      </div>
                                      <div
                                        className="ohio-widget counter -left-icon -left"
                                        id="ohio-custom-63d77104e8ce1"
                                        data-counter={345}
                                      >
                                        <div className="counter-number title titles-typo -with-increaser">
                                          <div className="holder">
                                            <span />
                                            <span className="number">0</span>
                                            <span />
                                          </div>
                                        </div>
                                        <p className="-unspace">
                                          promo campaigns
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-1">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper" />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "12vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vc_row-full-width vc_clearfix" />
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "12vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                <div className="wpb_column vc_column_container vc_col-sm-8">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                      <div
                                        className="ohio-widget heading -left"
                                        id="ohio-custom-63d77104e9a66"
                                      >
                                        <div className="subtitle">
                                          From the blog
                                        </div>
                                        <h2 className="title">
                                          Quick and neat,
                                          <br className="vc_hidden-xs" />
                                          just like your work.
                                        </h2>
                                      </div>
                                      <div
                                        className="ohio-text-sc"
                                        id="ohio-custom-63d77104e9b06"
                                      >
                                        <p>
                                          So how does it work? Let’s check our
                                          <strong>Getting Started</strong>.
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
                                          href="#demo26/#"
                                          target="_blank"
                                          className="ohio-widget button -outlined -small"
                                          id="ohio-custom-63d77104e9ca2"
                                        >
                                          Read all Guides
                                        </a>
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
                                <div className="wpb_column vc_column_container vc_col-sm-4">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                      <div
                                        className="ohio-widget blog-posts vc_row"
                                        id="ohio-custom-63d77104e9fdf"
                                        data-lazy-container="posts"
                                      >
                                        <div
                                          className="vc_col-lg-12 vc_col-md-12 vc_col-xs-12 masonry-block grid-item"
                                          data-lazy-item
                                          data-lazy-scope="posts"
                                        >
                                          <div
                                            className="blog-item card -layout4 -metro -img-scale"
                                            data-tilt="true"
                                            data-tilt-perspective={6000}
                                          >
                                            <figure className="image-holder">
                                              <a
                                                className="-unlink"
                                                data-cursor-class="cursor-link"
                                                href="#demo26/outdoor-work-a-designers-checklist-for-every-ux-project/"
                                              >
                                                <img
                                                  src="./Ohio Stage Demo 26 – Just another WordPress site_files/oh__demo6__2b-min-1024x732.jpg"
                                                  srcSet="
                                                https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo6__2b-min-300x214.jpg    300w,
                                                https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo6__2b-min-1024x732.jpg  1024w,
                                                https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo6__2b-min-768x549.jpg    768w,
                                                https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo6__2b-min-1536x1097.jpg 1536w,
                                                https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo6__2b-min.jpg           1800w
                                              "
                                                  sizes="(max-width: 1024px) 100vw, 1024px"
                                                  alt=""
                                                />
                                                <div className="overlay" />
                                              </a>
                                              <div className="overlay-details -top">
                                                <ul className="meta-holder -unlist">
                                                  <li className="meta-item">
                                                    <div className="avatar -small">
                                                      <img
                                                        alt="Colabrio"
                                                        src="./Ohio Stage Demo 26 – Just another WordPress site_files/172720f4a3c2aa57d5f6c81c3eee2c0f.png"
                                                        srcSet="
                                                      https://secure.gravatar.com/avatar/172720f4a3c2aa57d5f6c81c3eee2c0f?s=100&d=mm&r=g 2x
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
                                              <div className="overlay-details card-details -left">
                                                <div className="headline-meta -small-t">
                                                  <div className="date">
                                                    December 23, 2021
                                                  </div>
                                                  <span className="post-meta-estimate">
                                                    9 min read
                                                  </span>
                                                </div>
                                                <div className="heading title">
                                                  <h4 className="title">
                                                    <a
                                                      className="-unlink"
                                                      href="#demo26/outdoor-work-a-designers-checklist-for-every-ux-project/"
                                                    >
                                                      Outdoor Work: a Designer’s
                                                      Checklist for Every UX
                                                      Project.
                                                    </a>
                                                  </h4>
                                                </div>
                                                <div className="category-holder -with-tag">
                                                  <a
                                                    className="tag -unlink"
                                                    href="#demo26/category/guides/"
                                                  >
                                                    Guides
                                                  </a>
                                                  <a
                                                    className="tag -unlink"
                                                    href="#demo26/category/media/"
                                                  >
                                                    Media
                                                  </a>
                                                </div>
                                              </div>
                                            </figure>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="vc_empty_space vc_hidden-xs vc_hidden-sm"
                                        style={{ height: "20px" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="ohio-widget blog-posts vc_row"
                                id="ohio-custom-63d77104ef53f"
                                data-lazy-container="posts"
                              >
                                <div
                                  className="vc_col-lg-4 vc_col-md-4 vc_col-xs-12 masonry-block grid-item"
                                  data-lazy-item
                                  data-lazy-scope="posts"
                                >
                                  <div
                                    className="blog-item card -layout4 -metro -img-scale"
                                    data-tilt="true"
                                    data-tilt-perspective={6000}
                                  >
                                    <figure className="image-holder">
                                      <a
                                        className="-unlink"
                                        data-cursor-class="cursor-link"
                                        href="#demo26/the-highly-creative-ui-ux-workflow-from-a-silicon-valley/"
                                      >
                                        <img
                                          src="./Ohio Stage Demo 26 – Just another WordPress site_files/oh__demo6__2b-min-1024x732.jpg"
                                          srcSet="
                                        https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo6__2b-min-300x214.jpg    300w,
                                        https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo6__2b-min-1024x732.jpg  1024w,
                                        https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo6__2b-min-768x549.jpg    768w,
                                        https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo6__2b-min-1536x1097.jpg 1536w,
                                        https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo6__2b-min.jpg           1800w
                                      "
                                          sizes="(max-width: 1024px) 100vw, 1024px"
                                          alt=""
                                        />
                                        <div className="overlay" />
                                      </a>
                                      <div className="overlay-details -top">
                                        <ul className="meta-holder -unlist">
                                          <li className="meta-item">
                                            <div className="avatar -small">
                                              <img
                                                alt="Colabrio"
                                                src="./Ohio Stage Demo 26 – Just another WordPress site_files/172720f4a3c2aa57d5f6c81c3eee2c0f.png"
                                                srcSet="
                                              https://secure.gravatar.com/avatar/172720f4a3c2aa57d5f6c81c3eee2c0f?s=100&d=mm&r=g 2x
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
                                      <div className="overlay-details card-details -left">
                                        <div className="headline-meta -small-t">
                                          <div className="date">
                                            July 5, 2020
                                          </div>
                                          <span className="post-meta-estimate">
                                            9 min read
                                          </span>
                                        </div>
                                        <div className="heading title">
                                          <h4 className="title">
                                            <a
                                              className="-unlink"
                                              href="#demo26/the-highly-creative-ui-ux-workflow-from-a-silicon-valley/"
                                            >
                                              The Highly Creative UI/UX Workflow
                                              from a Silicon Valley.
                                            </a>
                                          </h4>
                                        </div>
                                        <div className="category-holder -with-tag">
                                          <a
                                            className="tag -unlink"
                                            href="#demo26/category/digital/"
                                          >
                                            Digital
                                          </a>
                                          <a
                                            className="tag -unlink"
                                            href="#demo26/category/marketing/"
                                          >
                                            Marketing
                                          </a>
                                        </div>
                                      </div>
                                    </figure>
                                  </div>
                                </div>
                                <div
                                  className="vc_col-lg-4 vc_col-md-4 vc_col-xs-12 masonry-block grid-item"
                                  data-lazy-item
                                  data-lazy-scope="posts"
                                >
                                  <div
                                    className="blog-item card -layout4 -metro -img-scale"
                                    data-tilt="true"
                                    data-tilt-perspective={6000}
                                  >
                                    <figure className="image-holder">
                                      <a
                                        className="-unlink"
                                        data-cursor-class="cursor-link"
                                        href="#demo26/creativo-jovenes-a-lead-designers-ui-ux-core-checklist/"
                                      >
                                        <img
                                          src="./Ohio Stage Demo 26 – Just another WordPress site_files/oh__demo6__2a-min-1024x732.jpg"
                                          srcSet="
                                        https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo6__2a-min-300x214.jpg    300w,
                                        https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo6__2a-min-1024x732.jpg  1024w,
                                        https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo6__2a-min-768x549.jpg    768w,
                                        https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo6__2a-min-1536x1097.jpg 1536w,
                                        https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo6__2a-min.jpg           1800w
                                      "
                                          sizes="(max-width: 1024px) 100vw, 1024px"
                                          alt=""
                                        />
                                        <div className="overlay" />
                                      </a>
                                      <div className="overlay-details -top">
                                        <ul className="meta-holder -unlist">
                                          <li className="meta-item">
                                            <div className="avatar -small">
                                              <img
                                                alt="Colabrio"
                                                src="./Ohio Stage Demo 26 – Just another WordPress site_files/172720f4a3c2aa57d5f6c81c3eee2c0f.png"
                                                srcSet="
                                              https://secure.gravatar.com/avatar/172720f4a3c2aa57d5f6c81c3eee2c0f?s=100&d=mm&r=g 2x
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
                                      <div className="overlay-details card-details -left">
                                        <div className="headline-meta -small-t">
                                          <div className="date">
                                            June 5, 2020
                                          </div>
                                          <span className="post-meta-estimate">
                                            9 min read
                                          </span>
                                        </div>
                                        <div className="heading title">
                                          <h4 className="title">
                                            <a
                                              className="-unlink"
                                              href="#demo26/creativo-jovenes-a-lead-designers-ui-ux-core-checklist/"
                                            >
                                              Creativo Jóvenes: a Lead
                                              Designer's UI/UX Core Checklist.
                                            </a>
                                          </h4>
                                        </div>
                                        <div className="category-holder -with-tag">
                                          <a
                                            className="tag -unlink"
                                            href="#demo26/category/digital/"
                                          >
                                            Digital
                                          </a>
                                          <a
                                            className="tag -unlink"
                                            href="#demo26/category/marketing/"
                                          >
                                            Marketing
                                          </a>
                                        </div>
                                      </div>
                                    </figure>
                                  </div>
                                </div>
                                <div
                                  className="vc_col-lg-4 vc_col-md-4 vc_col-xs-12 masonry-block grid-item"
                                  data-lazy-item
                                  data-lazy-scope="posts"
                                >
                                  <div
                                    className="blog-item card -layout4 -metro -img-scale"
                                    data-tilt="true"
                                    data-tilt-perspective={6000}
                                  >
                                    <figure className="image-holder">
                                      <a
                                        className="-unlink"
                                        data-cursor-class="cursor-link"
                                        href="#demo26/definitive-guide-to-make-a-daily-more-productive-working-flow/"
                                      >
                                        <img
                                          src="./Ohio Stage Demo 26 – Just another WordPress site_files/oh__demo6__11-min-1024x732.jpg"
                                          srcSet="
                                        https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo6__11-min-300x214.jpg    300w,
                                        https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo6__11-min-1024x732.jpg  1024w,
                                        https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo6__11-min-768x549.jpg    768w,
                                        https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo6__11-min-1536x1097.jpg 1536w,
                                        https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo6__11-min.jpg           1800w
                                      "
                                          sizes="(max-width: 1024px) 100vw, 1024px"
                                          alt=""
                                        />
                                        <div className="overlay" />
                                      </a>
                                      <div className="overlay-details -top">
                                        <ul className="meta-holder -unlist">
                                          <li className="meta-item">
                                            <div className="avatar -small">
                                              <img
                                                alt="Colabrio"
                                                src="./Ohio Stage Demo 26 – Just another WordPress site_files/172720f4a3c2aa57d5f6c81c3eee2c0f.png"
                                                srcSet="
                                              https://secure.gravatar.com/avatar/172720f4a3c2aa57d5f6c81c3eee2c0f?s=100&d=mm&r=g 2x
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
                                      <div className="overlay-details card-details -left">
                                        <div className="headline-meta -small-t">
                                          <div className="date">
                                            March 5, 2020
                                          </div>
                                          <span className="post-meta-estimate">
                                            9 min read
                                          </span>
                                        </div>
                                        <div className="heading title">
                                          <h4 className="title">
                                            <a
                                              className="-unlink"
                                              href="#demo26/definitive-guide-to-make-a-daily-more-productive-working-flow/"
                                            >
                                              Definitive Guide to Make a Daily
                                              More Productive Working Flow.
                                            </a>
                                          </h4>
                                        </div>
                                        <div className="category-holder -with-tag">
                                          <a
                                            className="tag -unlink"
                                            href="#demo26/category/digital/"
                                          >
                                            Digital
                                          </a>
                                          <a
                                            className="tag -unlink"
                                            href="#demo26/category/marketing/"
                                          >
                                            Marketing
                                          </a>
                                        </div>
                                      </div>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "12vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-vc-full-width="true"
                        data-vc-full-width-init="true"
                        className="vc_row wpb_row vc_row-fluid clb__dark_mode_light vc_custom_1608806132073 vc_row-has-fill"
                        style={{
                          position: "relative",
                          left: "0px",
                          boxSizing: "border-box",
                          width: "1157.78px",
                          maxWidth: "1349px",
                          paddingLeft: "95.6094px",
                          paddingRight: "95.6106px",
                        }}
                      >
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                <div className="wpb_column vc_column_container vc_col-sm-3">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper" />
                                  </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-6">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                      <div
                                        className="vc_empty_space clb__section_spacer"
                                        style={{ height: "12vh" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                      <div
                                        className="ohio-widget heading -center"
                                        id="ohio-custom-63d771050550a"
                                      >
                                        <div className="subtitle">
                                          #datatracking app
                                        </div>
                                        <h2 className="title">
                                          What to expect?
                                          <br />
                                          Easy setup.
                                        </h2>
                                      </div>
                                      <div
                                        className="ohio-text-sc"
                                        id="ohio-custom-63d77105055af"
                                      >
                                        <p style={{ textAlign: "center" }}>
                                          Helping SaaS teams to increase
                                          e-commerce and ROI conversions,
                                          <br className="vc_hidden-sm vc_hidden-xs" />
                                          reduce bounce rate, and
                                          <strong>scale up faster</strong>.
                                        </p>
                                      </div>
                                      <div
                                        className="vc_empty_space clb__spacer"
                                        style={{ height: "6vh" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-3">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper" />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="ohio-widget tabs -vertical -left"
                                id="ohio-custom-63d7710505807"
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
                                      height: "48px",
                                      transform: "translateY(0px)",
                                    }}
                                  />
                                  <li className="tabs-nav-link undefined active">
                                    <i className="icon undefined" />
                                    How to Get Started?
                                  </li>
                                  <li className="tabs-nav-link undefined">
                                    <i className="icon undefined" />
                                    Organise a Workflow
                                  </li>
                                  <li className="tabs-nav-link undefined">
                                    <i className="icon undefined" />
                                    Start to Get Reports
                                  </li>
                                </ul>
                                <div className="tabs-content" role="tabpanel">
                                  <div
                                    className="tabs-content-item active"
                                    data-title="How to Get Started?"
                                    id="ohio-custom-63d7710505e7b"
                                  >
                                    <div className="vc_row wpb_row vc_inner vc_row-fluid clb__padding_reset vc_custom_1657103769212">
                                      <div className="dark_mode_light_column clb__padding_set wpb_column vc_column_container vc_col-sm-4 vc_col-has-fill">
                                        <div className="vc_column-inner vc_custom_1650635880562">
                                          <div className="wpb_wrapper">
                                            <div className="wpb_single_image wpb_content_element vc_align_center clb__image">
                                              <figure className="wpb_wrapper vc_figure">
                                                <div className="vc_single_image-wrapper vc_box_border_grey">
                                                  <img
                                                    width={440}
                                                    height={440}
                                                    src="./Ohio Stage Demo 26 – Just another WordPress site_files/oh__demo26__4a-min.png"
                                                    className="vc_single_image-img attachment-full"
                                                    alt=""
                                                    decoding="async"
                                                    loading="lazy"
                                                    title="oh__demo26__4a-min"
                                                    srcSet="
                                                  https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__4a-min-300x300.png 300w,
                                                  https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__4a-min-150x150.png 150w,
                                                  https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__4a-min-200x200.png 200w,
                                                  https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__4a-min.png         440w
                                                "
                                                    sizes="(max-width: 440px) 100vw, 440px"
                                                  />
                                                </div>
                                              </figure>
                                            </div>
                                            <div
                                              className="vc_empty_space"
                                              style={{ height: "4vh" }}
                                            >
                                              <span className="vc_empty_space_inner" />
                                            </div>
                                            <div
                                              className="ohio-widget progress -tooltip"
                                              id="ohio-custom-63d7710507316"
                                              data-ohio-progress-bar={73}
                                            >
                                              <div className="progress-heading">
                                                <h6 className="label">
                                                  Website &amp; Mobile
                                                </h6>
                                              </div>
                                              <div className="progress-holder -thin">
                                                <div
                                                  className="progress-bar"
                                                  role="progressbar"
                                                >
                                                  <span className="progress-percent tooltip">
                                                    <span className="percent">
                                                      0
                                                    </span>
                                                    %
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="ohio-text-sc"
                                              id="ohio-custom-63d77105075b3"
                                            >
                                              <p>
                                                Packed with API features you
                                                will love to collaborate with
                                                issues and change business.
                                              </p>
                                            </div>
                                            <div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_custom_1648285176726 vc_custom_1648285176726">
                                              <span className="vc_sep_holder vc_sep_holder_l">
                                                <span
                                                  style={{
                                                    borderColor:
                                                      "rgba(136,136,136,0.65)",
                                                  }}
                                                  className="vc_sep_line"
                                                />
                                              </span>
                                              <span className="vc_sep_holder vc_sep_holder_r">
                                                <span
                                                  style={{
                                                    borderColor:
                                                      "rgba(136,136,136,0.65)",
                                                  }}
                                                  className="vc_sep_line"
                                                />
                                              </span>
                                            </div>
                                            <div
                                              className="ohio-text-sc"
                                              id="ohio-custom-63d7710507881"
                                            >
                                              <p>
                                                Generate a new
                                                <strong>API key</strong>
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="clb__padding_set wpb_column vc_column_container vc_col-sm-8">
                                        <div className="vc_column-inner vc_custom_1650635706615">
                                          <div className="wpb_wrapper">
                                            <div
                                              className="vc_empty_space vc_hidden-lg vc_hidden-md vc_hidden-sm"
                                              style={{ height: "5vh" }}
                                            >
                                              <span className="vc_empty_space_inner" />
                                            </div>
                                            <div
                                              className="ohio-widget heading -left"
                                              id="ohio-custom-63d7710507c34"
                                            >
                                              <h4 className="title">
                                                Main steps
                                              </h4>
                                              <div className="divider" />
                                            </div>
                                            <div
                                              className="vc_empty_space"
                                              style={{ height: "3vh" }}
                                            >
                                              <span className="vc_empty_space_inner" />
                                            </div>
                                            <div
                                              className="ohio-widget icon-box -left -left-flex"
                                              id="ohio-custom-63d7710507d76"
                                            >
                                              <span className="icon-group -outlined">
                                                <i className="icon ion ion-md-git-commit" />
                                              </span>
                                              <div className="icon-box-content">
                                                <h5 className="icon-box-heading">
                                                  1. Create a Free Account
                                                </h5>
                                                <p>
                                                  Spaces of each debt in the
                                                  digital world can help you
                                                  with overall
                                                  <br />
                                                  simplest authentic. Go to
                                                  <b>
                                                    Sign Up / Create an Account
                                                  </b>
                                                  .
                                                </p>
                                              </div>
                                            </div>
                                            <div
                                              className="vc_empty_space"
                                              style={{ height: "3vh" }}
                                            >
                                              <span className="vc_empty_space_inner" />
                                            </div>
                                            <div
                                              className="ohio-widget icon-box -left -left-flex"
                                              id="ohio-custom-63d7710507ec0"
                                            >
                                              <span className="icon-group -outlined">
                                                <i className="icon ion ion-md-link" />
                                              </span>
                                              <div className="icon-box-content">
                                                <h5 className="icon-box-heading">
                                                  2. Generate an API key for
                                                  your app
                                                </h5>
                                                <p>
                                                  To achieve best results in
                                                  digital world can help you
                                                  with overall
                                                  <br />
                                                  <b>Create an API Key</b>.
                                                  Spaces of each debt in the.
                                                </p>
                                              </div>
                                            </div>
                                            <div
                                              className="vc_empty_space"
                                              style={{ height: "3vh" }}
                                            >
                                              <span className="vc_empty_space_inner" />
                                            </div>
                                            <div
                                              className="ohio-widget icon-box -left -left-flex"
                                              id="ohio-custom-63d7710508019"
                                            >
                                              <span className="icon-group -outlined">
                                                <i className="icon ion ion-md-checkmark-circle-outline" />
                                              </span>
                                              <div className="icon-box-content">
                                                <h5 className="icon-box-heading">
                                                  3. That’s it!
                                                </h5>
                                                <p>
                                                  Now you can use the app and
                                                  improve your scores.
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tabs-content-item"
                                    data-title="Organise a Workflow"
                                    id="ohio-custom-63d771050812d"
                                  >
                                    <div className="vc_row wpb_row vc_inner vc_row-fluid clb__padding_reset vc_custom_1657103742094">
                                      <div className="dark_mode_light_column clb__padding_set wpb_column vc_column_container vc_col-sm-4 vc_col-has-fill">
                                        <div className="vc_column-inner vc_custom_1650635888261">
                                          <div className="wpb_wrapper">
                                            <div className="wpb_single_image wpb_content_element vc_align_center clb__image">
                                              <figure className="wpb_wrapper vc_figure">
                                                <div className="vc_single_image-wrapper vc_box_border_grey">
                                                  <img
                                                    width={440}
                                                    height={440}
                                                    src="./Ohio Stage Demo 26 – Just another WordPress site_files/oh__demo26__5-min.png"
                                                    className="vc_single_image-img attachment-full"
                                                    alt=""
                                                    decoding="async"
                                                    loading="lazy"
                                                    title="oh__demo26__5-min"
                                                    srcSet="
                                                  https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__5-min-300x300.png 300w,
                                                  https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__5-min-150x150.png 150w,
                                                  https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__5-min-200x200.png 200w,
                                                  https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__5-min.png         440w
                                                "
                                                    sizes="(max-width: 440px) 100vw, 440px"
                                                  />
                                                </div>
                                              </figure>
                                            </div>
                                            <div
                                              className="vc_empty_space"
                                              style={{ height: "4vh" }}
                                            >
                                              <span className="vc_empty_space_inner" />
                                            </div>
                                            <div
                                              className="ohio-widget progress -tooltip"
                                              id="ohio-custom-63d7710509091"
                                              data-ohio-progress-bar={63}
                                            >
                                              <div className="progress-heading">
                                                <h6 className="label">
                                                  Website &amp; Mobile
                                                </h6>
                                              </div>
                                              <div className="progress-holder -thin">
                                                <div
                                                  className="progress-bar"
                                                  role="progressbar"
                                                >
                                                  <span className="progress-percent tooltip">
                                                    <span className="percent">
                                                      0
                                                    </span>
                                                    %
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="ohio-text-sc"
                                              id="ohio-custom-63d77105090ea"
                                            >
                                              <p>
                                                Packed with API features you
                                                will love to collaborate with
                                                issues and change business.
                                              </p>
                                            </div>
                                            <div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_custom_1648285004892 vc_custom_1648285004892">
                                              <span className="vc_sep_holder vc_sep_holder_l">
                                                <span
                                                  style={{
                                                    borderColor:
                                                      "rgba(136,136,136,0.65)",
                                                  }}
                                                  className="vc_sep_line"
                                                />
                                              </span>
                                              <span className="vc_sep_holder vc_sep_holder_r">
                                                <span
                                                  style={{
                                                    borderColor:
                                                      "rgba(136,136,136,0.65)",
                                                  }}
                                                  className="vc_sep_line"
                                                />
                                              </span>
                                            </div>
                                            <div
                                              className="ohio-text-sc"
                                              id="ohio-custom-63d771050936c"
                                            >
                                              <p>
                                                Generate a new
                                                <strong>API key</strong>
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="clb__padding_set wpb_column vc_column_container vc_col-sm-8">
                                        <div className="vc_column-inner vc_custom_1650635897095">
                                          <div className="wpb_wrapper">
                                            <div
                                              className="vc_empty_space vc_hidden-lg vc_hidden-md vc_hidden-sm"
                                              style={{ height: "5vh" }}
                                            >
                                              <span className="vc_empty_space_inner" />
                                            </div>
                                            <div
                                              className="ohio-widget heading -left"
                                              id="ohio-custom-63d7710509623"
                                            >
                                              <h4 className="title">
                                                Additional steps
                                              </h4>
                                              <div className="divider" />
                                            </div>
                                            <div
                                              className="vc_empty_space"
                                              style={{ height: "3vh" }}
                                            >
                                              <span className="vc_empty_space_inner" />
                                            </div>
                                            <div
                                              className="ohio-widget icon-box -left -left-flex"
                                              id="ohio-custom-63d7710509739"
                                            >
                                              <span className="icon-group -outlined">
                                                <i className="icon ion ion-md-git-commit" />
                                              </span>
                                              <div className="icon-box-content">
                                                <h5 className="icon-box-heading">
                                                  4. Create a Free Account
                                                </h5>
                                                <p>
                                                  Spaces of each debt in the
                                                  digital world can help you
                                                  with overall
                                                  <br />
                                                  simplest authentic. Go to
                                                  <b>
                                                    Sign Up / Create an Account
                                                  </b>
                                                  .
                                                </p>
                                              </div>
                                            </div>
                                            <div
                                              className="vc_empty_space"
                                              style={{ height: "3vh" }}
                                            >
                                              <span className="vc_empty_space_inner" />
                                            </div>
                                            <div
                                              className="ohio-widget icon-box -left -left-flex"
                                              id="ohio-custom-63d7710509868"
                                            >
                                              <span className="icon-group -outlined">
                                                <i className="icon ion ion-md-link" />
                                              </span>
                                              <div className="icon-box-content">
                                                <h5 className="icon-box-heading">
                                                  5. Generate an API key for
                                                  your app
                                                </h5>
                                                <p>
                                                  To achieve best results in
                                                  digital world can help you
                                                  with overall
                                                  <br />
                                                  <b>Create an API Key</b>.
                                                  Spaces of each debt in the.
                                                </p>
                                              </div>
                                            </div>
                                            <div
                                              className="vc_empty_space"
                                              style={{ height: "3vh" }}
                                            >
                                              <span className="vc_empty_space_inner" />
                                            </div>
                                            <div
                                              className="ohio-widget icon-box -left -left-flex"
                                              id="ohio-custom-63d771050998c"
                                            >
                                              <span className="icon-group -outlined">
                                                <i className="icon ion ion-md-checkmark-circle-outline" />
                                              </span>
                                              <div className="icon-box-content">
                                                <h5 className="icon-box-heading">
                                                  6. That’s it!
                                                </h5>
                                                <p>
                                                  Now you can use the app and
                                                  improve your scores.
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tabs-content-item"
                                    data-title="Start to Get Reports"
                                    id="ohio-custom-63d7710509abe"
                                  >
                                    <div className="vc_row wpb_row vc_inner vc_row-fluid clb__padding_reset vc_custom_1657103754384">
                                      <div className="dark_mode_light_column clb__padding_set wpb_column vc_column_container vc_col-sm-4 vc_col-has-fill">
                                        <div className="vc_column-inner vc_custom_1650635902479">
                                          <div className="wpb_wrapper">
                                            <div className="wpb_single_image wpb_content_element vc_align_center clb__image">
                                              <figure className="wpb_wrapper vc_figure">
                                                <div className="vc_single_image-wrapper vc_box_border_grey">
                                                  <img
                                                    width={440}
                                                    height={440}
                                                    src="./Ohio Stage Demo 26 – Just another WordPress site_files/oh__demo26__4a-min.png"
                                                    className="vc_single_image-img attachment-full"
                                                    alt=""
                                                    decoding="async"
                                                    loading="lazy"
                                                    title="oh__demo26__4a-min"
                                                    srcSet="
                                                  https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__4a-min-300x300.png 300w,
                                                  https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__4a-min-150x150.png 150w,
                                                  https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__4a-min-200x200.png 200w,
                                                  https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__demo26__4a-min.png         440w
                                                "
                                                    sizes="(max-width: 440px) 100vw, 440px"
                                                  />
                                                </div>
                                              </figure>
                                            </div>
                                            <div
                                              className="vc_empty_space"
                                              style={{ height: "4vh" }}
                                            >
                                              <span className="vc_empty_space_inner" />
                                            </div>
                                            <div
                                              className="ohio-widget progress -tooltip"
                                              id="ohio-custom-63d771050a6c3"
                                              data-ohio-progress-bar={73}
                                            >
                                              <div className="progress-heading">
                                                <h6 className="label">
                                                  Website &amp; Mobile
                                                </h6>
                                              </div>
                                              <div className="progress-holder -thin">
                                                <div
                                                  className="progress-bar"
                                                  role="progressbar"
                                                >
                                                  <span className="progress-percent tooltip">
                                                    <span className="percent">
                                                      0
                                                    </span>
                                                    %
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="ohio-text-sc"
                                              id="ohio-custom-63d771050a717"
                                            >
                                              <p>
                                                Packed with API features you
                                                will love to collaborate with
                                                issues and change business.
                                              </p>
                                            </div>
                                            <div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_custom_1648285186008 vc_custom_1648285186008">
                                              <span className="vc_sep_holder vc_sep_holder_l">
                                                <span
                                                  style={{
                                                    borderColor:
                                                      "rgba(136,136,136,0.65)",
                                                  }}
                                                  className="vc_sep_line"
                                                />
                                              </span>
                                              <span className="vc_sep_holder vc_sep_holder_r">
                                                <span
                                                  style={{
                                                    borderColor:
                                                      "rgba(136,136,136,0.65)",
                                                  }}
                                                  className="vc_sep_line"
                                                />
                                              </span>
                                            </div>
                                            <div
                                              className="ohio-text-sc"
                                              id="ohio-custom-63d771050a97b"
                                            >
                                              <p>
                                                Generate a new
                                                <strong>API key</strong>
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="clb__padding_set wpb_column vc_column_container vc_col-sm-8">
                                        <div className="vc_column-inner vc_custom_1650635908529">
                                          <div className="wpb_wrapper">
                                            <div
                                              className="vc_empty_space vc_hidden-lg vc_hidden-md vc_hidden-sm"
                                              style={{ height: "5vh" }}
                                            >
                                              <span className="vc_empty_space_inner" />
                                            </div>
                                            <div
                                              className="ohio-widget heading -left"
                                              id="ohio-custom-63d771050ac6c"
                                            >
                                              <h4 className="title">
                                                Final steps
                                              </h4>
                                              <div className="divider" />
                                            </div>
                                            <div
                                              className="vc_empty_space"
                                              style={{ height: "3vh" }}
                                            >
                                              <span className="vc_empty_space_inner" />
                                            </div>
                                            <div
                                              className="ohio-widget icon-box -left -left-flex"
                                              id="ohio-custom-63d771050add2"
                                            >
                                              <span className="icon-group -outlined">
                                                <i className="icon ion ion-md-git-commit" />
                                              </span>
                                              <div className="icon-box-content">
                                                <h5 className="icon-box-heading">
                                                  7. Create a Free Account
                                                </h5>
                                                <p>
                                                  Spaces of each debt in the
                                                  digital world can help you
                                                  with overall
                                                  <br />
                                                  simplest authentic. Go to
                                                  <b>
                                                    Sign Up / Create an Account
                                                  </b>
                                                  .
                                                </p>
                                              </div>
                                            </div>
                                            <div
                                              className="vc_empty_space"
                                              style={{ height: "3vh" }}
                                            >
                                              <span className="vc_empty_space_inner" />
                                            </div>
                                            <div
                                              className="ohio-widget icon-box -left -left-flex"
                                              id="ohio-custom-63d771050af22"
                                            >
                                              <span className="icon-group -outlined">
                                                <i className="icon ion ion-md-link" />
                                              </span>
                                              <div className="icon-box-content">
                                                <h5 className="icon-box-heading">
                                                  8. Generate an API key for
                                                  your app
                                                </h5>
                                                <p>
                                                  To achieve best results in
                                                  digital world can help you
                                                  with overall
                                                  <br />
                                                  <b>Create an API Key</b>.
                                                  Spaces of each debt in the.
                                                </p>
                                              </div>
                                            </div>
                                            <div
                                              className="vc_empty_space"
                                              style={{ height: "3vh" }}
                                            >
                                              <span className="vc_empty_space_inner" />
                                            </div>
                                            <div
                                              className="ohio-widget icon-box -left -left-flex"
                                              id="ohio-custom-63d771050b045"
                                            >
                                              <span className="icon-group -outlined">
                                                <i className="icon ion ion-md-checkmark-circle-outline" />
                                              </span>
                                              <div className="icon-box-content">
                                                <h5 className="icon-box-heading">
                                                  9. That’s it!
                                                </h5>
                                                <p>
                                                  Now you can use the app and
                                                  improve your scores.
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
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "12vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vc_row-full-width vc_clearfix" />
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "12vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-widget heading -left"
                                id="ohio-custom-63d771050b9f0"
                              >
                                <div className="subtitle">Plans</div>
                                <h2 className="title">
                                  Affordable pricing.
                                  <br className="vc_hidden-xs" />
                                  Easy scaling.
                                </h2>
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d771050ba86"
                              >
                                <p>
                                  Our app works for businesses of all sizes and
                                  shapes.
                                  <br className="vc_hidden-xs" />
                                  Starting at just
                                  <strong>$5 for an agent</strong>.
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
                                  href="#demo26/#"
                                  target="_blank"
                                  className="ohio-widget button -outlined -small"
                                  id="ohio-custom-63d771050bbde"
                                >
                                  Get the Tool
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-3">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "12vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div className="vc_row wpb_row vc_inner vc_row-fluid vc__padding_reset vc_custom_1608806201772">
                                <div className="clb__dark_mode_light clb__padding_set wpb_column vc_column_container vc_col-sm-12 vc_col-has-fill">
                                  <div className="vc_column-inner vc_custom_1650635465401">
                                    <div className="wpb_wrapper">
                                      <div
                                        className="ohio-widget pricing-table -left"
                                        id="ohio-custom-63d771050c31a"
                                      >
                                        <div className="pricing-table-headline">
                                          <h5 className="title">Standard</h5>
                                        </div>
                                        <div className="pricing-table-price">
                                          <span className="price-number titles-typo title">
                                            $5
                                          </span>
                                          <span className="tag">Annually</span>
                                        </div>
                                        <div className="pricing-table-details">
                                          Get the deal without any risk and
                                          fees.
                                        </div>
                                        <div className="pricing-table-features">
                                          <ul className="-unlist -large">
                                            <li className="exist">
                                              <i className="icon">
                                                <svg
                                                  className="default"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width={16}
                                                  height={16}
                                                  viewBox="0 0 16 16"
                                                >
                                                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                </svg>
                                              </i>
                                              Unlimited credits
                                            </li>
                                            <li className="missing">
                                              <i className="icon">
                                                <svg
                                                  className="default"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width={16}
                                                  height={16}
                                                  viewBox="0 0 16 16"
                                                >
                                                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                              </i>
                                              API integration
                                            </li>
                                          </ul>
                                        </div>
                                        <a
                                          className="button -small"
                                          href="#demo26/#"
                                          target="_blank"
                                        >
                                          Get Started
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "2vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d771050c775"
                              >
                                <p>* Billed as $5 yearly (auto-renewal)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-3">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space clb__spacer"
                                style={{ height: "12vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div className="vc_row wpb_row vc_inner vc_row-fluid vc__padding_reset vc_custom_1608806207723">
                                <div className="clb__dark_mode_light clb__padding_set wpb_column vc_column_container vc_col-sm-12 vc_col-has-fill">
                                  <div className="vc_column-inner vc_custom_1650635492733">
                                    <div className="wpb_wrapper">
                                      <div
                                        className="ohio-widget pricing-table -left"
                                        id="ohio-custom-63d771050cdb9"
                                      >
                                        <div className="pricing-table-headline">
                                          <h5 className="title">Premium</h5>
                                        </div>
                                        <div className="pricing-table-price">
                                          <span className="price-number titles-typo title">
                                            $9
                                          </span>
                                          <span className="tag">Annually</span>
                                        </div>
                                        <div className="pricing-table-details">
                                          Get the deal without any risk and
                                          fees.
                                        </div>
                                        <div className="pricing-table-features">
                                          <ul className="-unlist -large">
                                            <li className="exist">
                                              <i className="icon">
                                                <svg
                                                  className="default"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width={16}
                                                  height={16}
                                                  viewBox="0 0 16 16"
                                                >
                                                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                </svg>
                                              </i>
                                              Unlimited credits
                                            </li>
                                            <li className="exist">
                                              <i className="icon">
                                                <svg
                                                  className="default"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width={16}
                                                  height={16}
                                                  viewBox="0 0 16 16"
                                                >
                                                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                </svg>
                                              </i>
                                              API integration
                                            </li>
                                          </ul>
                                        </div>
                                        <a
                                          className="button -small"
                                          href="#demo26/#"
                                          target="_blank"
                                        >
                                          Get Started
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "2vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-text-sc"
                                id="ohio-custom-63d771050cfe4"
                              >
                                <p>* Billed as $9 yearly (auto-renewal)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_custom_1628157351242 vc_custom_1628157351242">
                                <span className="vc_sep_holder vc_sep_holder_l">
                                  <span
                                    style={{
                                      borderColor: "rgba(99, 93, 111, 0.65)",
                                    }}
                                    className="vc_sep_line"
                                  />
                                </span>
                                <span className="vc_sep_holder vc_sep_holder_r">
                                  <span
                                    style={{
                                      borderColor: "rgba(99, 93, 111, 0.65)",
                                    }}
                                    className="vc_sep_line"
                                  />
                                </span>
                              </div>
                              <div
                                className="ohio-accordion-sс ohio-widget accordion -text"
                                id="ohio-custom-63d771050d7ec"
                                data-ohio-accordion="true"
                              >
                                <div
                                  className="accordion-item active"
                                  id="1608798616096-fc2941b4-d087"
                                >
                                  <div className="accordion-button">
                                    <h6 className="accordion-header">
                                      How does the 14-day trial work?
                                    </h6>
                                    <button className="icon-button -extra-small">
                                      <i className="icon" />
                                    </button>
                                  </div>
                                  <div
                                    className="accordion-collapse"
                                    style={{ height: "100.781px" }}
                                  >
                                    <div className="accordion-body">
                                      <p>
                                        Using year-over-year design approaches
                                        and the latest technologies, we will
                                        ensure that your new website&nbsp;
                                        <strong>
                                          will be visible, accessible, and
                                          treads lightly
                                        </strong>
                                        &nbsp;on the environment.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="accordion-item"
                                  id="1608798657033-45474e31-ff55"
                                >
                                  <div className="accordion-button">
                                    <h6 className="accordion-header">
                                      What happens after the trial ends?
                                    </h6>
                                    <button className="icon-button -extra-small">
                                      <i className="icon" />
                                    </button>
                                  </div>
                                  <div className="accordion-collapse">
                                    <div className="accordion-body">
                                      <p>
                                        When our team provides design and
                                        digital marketing. Applied arts
                                        <strong>
                                          can include industrial design
                                        </strong>
                                        , graphic design, fashion design. The
                                        app provides design and digital
                                        marketing.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="accordion-item"
                                  id="1608798653522-90e45156-d8e4"
                                >
                                  <div className="accordion-button">
                                    <h6 className="accordion-header">
                                      What discounts are available?
                                    </h6>
                                    <button className="icon-button -extra-small">
                                      <i className="icon" />
                                    </button>
                                  </div>
                                  <div className="accordion-collapse">
                                    <div className="accordion-body">
                                      <p>
                                        When our team provides design and
                                        digital marketing. Applied arts
                                        <strong>
                                          can include industrial design
                                        </strong>
                                        , graphic design, fashion design. The
                                        app provides design and digital
                                        marketing.
                                      </p>
                                    </div>
                                  </div>
                                </div>
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
                        <div className="wpb_column vc_column_container vc_col-sm-6">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_custom_1628157351242 vc_custom_1628157351242">
                                <span className="vc_sep_holder vc_sep_holder_l">
                                  <span
                                    style={{
                                      borderColor: "rgba(99, 93, 111, 0.65)",
                                    }}
                                    className="vc_sep_line"
                                  />
                                </span>
                                <span className="vc_sep_holder vc_sep_holder_r">
                                  <span
                                    style={{
                                      borderColor: "rgba(99, 93, 111, 0.65)",
                                    }}
                                    className="vc_sep_line"
                                  />
                                </span>
                              </div>
                              <div
                                className="ohio-accordion-sс ohio-widget accordion -text"
                                id="ohio-custom-63d771050e26d"
                                data-ohio-accordion="true"
                              >
                                <div
                                  className="accordion-item active"
                                  id="1608798728688-402517ee-9979"
                                >
                                  <div className="accordion-button">
                                    <h6 className="accordion-header">
                                      How do I pay for your service?
                                    </h6>
                                    <button className="icon-button -extra-small">
                                      <i className="icon" />
                                    </button>
                                  </div>
                                  <div
                                    className="accordion-collapse"
                                    style={{ height: "100.781px" }}
                                  >
                                    <div className="accordion-body">
                                      <p>
                                        Our philosophy is built on modern and
                                        cutting-edge approach for creating&nbsp;
                                        <strong>
                                          digital and connected brands,
                                          services, and products
                                        </strong>
                                        &nbsp;driving digital arts and engaging
                                        experiences.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="accordion-item"
                                  id="1608798728782-187c4f9a-b6ab"
                                >
                                  <div className="accordion-button">
                                    <h6 className="accordion-header">
                                      How long are your subscriptions? Can I
                                      change plans?
                                    </h6>
                                    <button className="icon-button -extra-small">
                                      <i className="icon" />
                                    </button>
                                  </div>
                                  <div className="accordion-collapse">
                                    <div className="accordion-body">
                                      <p>
                                        When our team provides design and
                                        digital marketing. Applied arts
                                        <strong>
                                          can include industrial design
                                        </strong>
                                        , graphic design, fashion design. The
                                        app provides design and digital
                                        marketing.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="accordion-item"
                                  id="1608798728911-77e906dd-140a"
                                >
                                  <div className="accordion-button">
                                    <h6 className="accordion-header">
                                      How can I cancel my subscription?
                                    </h6>
                                    <button className="icon-button -extra-small">
                                      <i className="icon" />
                                    </button>
                                  </div>
                                  <div className="accordion-collapse">
                                    <div className="accordion-body">
                                      <p>
                                        When our team provides design and
                                        digital marketing. Applied arts
                                        <strong>
                                          can include industrial design
                                        </strong>
                                        , graphic design, fashion design. The
                                        app provides design and digital
                                        marketing.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "12vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-vc-full-width="true"
                        data-vc-full-width-init="true"
                        className="vc_row wpb_row vc_row-fluid clb__dark_mode_light vc_custom_1608806138866 vc_row-has-fill"
                        style={{
                          position: "relative",
                          left: "0px",
                          boxSizing: "border-box",
                          width: "1157.78px",
                          maxWidth: "1349px",
                          paddingLeft: "95.6094px",
                          paddingRight: "95.6106px",
                        }}
                      >
                        <div className="wpb_column vc_column_container vc_col-sm-2">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper" />
                          </div>
                        </div>
                        <div className="text-center wpb_column vc_column_container vc_col-sm-8">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "12vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-widget heading -center"
                                id="ohio-custom-63d771050ecd5"
                              >
                                <h2 className="title">Meet our customers.</h2>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "3vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div className="slider-holder">
                                <div
                                  className="ohio-widget slider ohio-slider autoheight with-pagination full -nav-inset with-preloader clb-slider visible"
                                  id="ohio-custom-63d771050edf1"
                                  data-ohio-slider='{"loop":true,"navBtn":true,"autoplay":false,"autoplayHoverPause":true,"autoHeight":true,"slidesCount":true,"drag":true,"gap":"40","navContainerClass":"slider-nav","itemsDesktop":"1","itemsTablet":"1","itemsMobile":"1","autoplayTimeout":"5"}'
                                >
                                  <div
                                    className="clb-slider-outer-stage"
                                    style={{ maxWidth: "728.312px" }}
                                  >
                                    <div
                                      className="clb-slider-stage"
                                      style={{
                                        transform: "translate(-2305px, 0px)",
                                      }}
                                    >
                                      <div
                                        className="slider-wrap clb-slider-item cloned"
                                        style={{
                                          minWidth: "728.312px",
                                          marginRight: "40px",
                                        }}
                                      >
                                        <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                          <div className="wpb_column vc_column_container vc_col-sm-3">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper" />
                                            </div>
                                          </div>
                                          <div className="wpb_column vc_column_container vc_col-sm-6">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper">
                                                <div
                                                  className="ohio-widget testimonial -center -center-flex -middle-avatar"
                                                  id="ohio-custom-63d771050fda4"
                                                >
                                                  <h6 className="testimonial-headline">
                                                    <b>Design Quality</b>
                                                  </h6>
                                                  <p>
                                                    “The app is a part of our
                                                    team, helping to crystalize
                                                    our vision and delivering
                                                    incredible results in a
                                                    record time.”
                                                  </p>
                                                  <div
                                                    className="avatar"
                                                    style={{
                                                      backgroundImage:
                                                        "url(https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__avatar1-min.png)",
                                                    }}
                                                  />
                                                  <div className="author">
                                                    <h6 className="title">
                                                      Colin Lucido
                                                    </h6>
                                                    <p className="author-details">
                                                      Colabrio Media •
                                                      Co-Founder
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="wpb_column vc_column_container vc_col-sm-3">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="slider-wrap clb-slider-item cloned"
                                        style={{
                                          minWidth: "728.312px",
                                          marginRight: "40px",
                                        }}
                                      >
                                        <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                          <div className="wpb_column vc_column_container vc_col-sm-3">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper" />
                                            </div>
                                          </div>
                                          <div className="wpb_column vc_column_container vc_col-sm-6">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper">
                                                <div
                                                  className="ohio-widget testimonial -center -center-flex -middle-avatar"
                                                  id="ohio-custom-63d7710510881"
                                                >
                                                  <h6 className="testimonial-headline">
                                                    <b>Code Quality</b>
                                                  </h6>
                                                  <p>
                                                    “I'll tell you what, make
                                                    higher preparation better
                                                    large one either government
                                                    drunk brought be totally
                                                    concepts deference.”
                                                  </p>
                                                  <div
                                                    className="avatar"
                                                    style={{
                                                      backgroundImage:
                                                        "url(https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__avatar3-min.png)",
                                                    }}
                                                  />
                                                  <div className="author">
                                                    <h6 className="title">
                                                      Laura Norson
                                                    </h6>
                                                    <p className="author-details">
                                                      Colabrio Media • Art
                                                      Direction
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="wpb_column vc_column_container vc_col-sm-3">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="slider-wrap clb-slider-item cloned prev-slide"
                                        style={{
                                          minWidth: "728.312px",
                                          marginRight: "40px",
                                        }}
                                      >
                                        <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                          <div className="wpb_column vc_column_container vc_col-sm-3">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper" />
                                            </div>
                                          </div>
                                          <div className="wpb_column vc_column_container vc_col-sm-6">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper">
                                                <div
                                                  className="ohio-widget testimonial -center -center-flex -middle-avatar"
                                                  id="ohio-custom-63d77105110f0"
                                                >
                                                  <h6 className="testimonial-headline">
                                                    <b>Customer Support</b>
                                                  </h6>
                                                  <p>
                                                    “5 stars WordPress template!
                                                    If anyone wants an example
                                                    of what you can do with this
                                                    theme, check out my site at
                                                    ohio.clbthemes.com.”
                                                  </p>
                                                  <div
                                                    className="avatar"
                                                    style={{
                                                      backgroundImage:
                                                        "url(https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__avatar2-min.png)",
                                                    }}
                                                  />
                                                  <div className="author">
                                                    <h6 className="title">
                                                      Stacey Rickson
                                                    </h6>
                                                    <p className="author-details">
                                                      Colabrio Media • Web
                                                      Developer
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="wpb_column vc_column_container vc_col-sm-3">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="slider-wrap clb-slider-item active"
                                        style={{
                                          minWidth: "728.312px",
                                          marginRight: "40px",
                                        }}
                                      >
                                        <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                          <div className="wpb_column vc_column_container vc_col-sm-3">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper" />
                                            </div>
                                          </div>
                                          <div className="wpb_column vc_column_container vc_col-sm-6">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper">
                                                <div
                                                  className="ohio-widget testimonial -center -center-flex -middle-avatar"
                                                  id="ohio-custom-63d771050fda4"
                                                >
                                                  <h6 className="testimonial-headline">
                                                    <b>Design Quality</b>
                                                  </h6>
                                                  <p>
                                                    “The app is a part of our
                                                    team, helping to crystalize
                                                    our vision and delivering
                                                    incredible results in a
                                                    record time.”
                                                  </p>
                                                  <div
                                                    className="avatar"
                                                    style={{
                                                      backgroundImage:
                                                        "url(https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__avatar1-min.png)",
                                                    }}
                                                  />
                                                  <div className="author">
                                                    <h6 className="title">
                                                      Colin Lucido
                                                    </h6>
                                                    <p className="author-details">
                                                      Colabrio Media •
                                                      Co-Founder
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="wpb_column vc_column_container vc_col-sm-3">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="slider-wrap clb-slider-item next-slide"
                                        style={{
                                          minWidth: "728.312px",
                                          marginRight: "40px",
                                        }}
                                      >
                                        <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                          <div className="wpb_column vc_column_container vc_col-sm-3">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper" />
                                            </div>
                                          </div>
                                          <div className="wpb_column vc_column_container vc_col-sm-6">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper">
                                                <div
                                                  className="ohio-widget testimonial -center -center-flex -middle-avatar"
                                                  id="ohio-custom-63d7710510881"
                                                >
                                                  <h6 className="testimonial-headline">
                                                    <b>Code Quality</b>
                                                  </h6>
                                                  <p>
                                                    “I'll tell you what, make
                                                    higher preparation better
                                                    large one either government
                                                    drunk brought be totally
                                                    concepts deference.”
                                                  </p>
                                                  <div
                                                    className="avatar"
                                                    style={{
                                                      backgroundImage:
                                                        "url(https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__avatar3-min.png)",
                                                    }}
                                                  />
                                                  <div className="author">
                                                    <h6 className="title">
                                                      Laura Norson
                                                    </h6>
                                                    <p className="author-details">
                                                      Colabrio Media • Art
                                                      Direction
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="wpb_column vc_column_container vc_col-sm-3">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="slider-wrap clb-slider-item"
                                        style={{
                                          minWidth: "728.312px",
                                          marginRight: "40px",
                                        }}
                                      >
                                        <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                          <div className="wpb_column vc_column_container vc_col-sm-3">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper" />
                                            </div>
                                          </div>
                                          <div className="wpb_column vc_column_container vc_col-sm-6">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper">
                                                <div
                                                  className="ohio-widget testimonial -center -center-flex -middle-avatar"
                                                  id="ohio-custom-63d77105110f0"
                                                >
                                                  <h6 className="testimonial-headline">
                                                    <b>Customer Support</b>
                                                  </h6>
                                                  <p>
                                                    “5 stars WordPress template!
                                                    If anyone wants an example
                                                    of what you can do with this
                                                    theme, check out my site at
                                                    ohio.clbthemes.com.”
                                                  </p>
                                                  <div
                                                    className="avatar"
                                                    style={{
                                                      backgroundImage:
                                                        "url(https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__avatar2-min.png)",
                                                    }}
                                                  />
                                                  <div className="author">
                                                    <h6 className="title">
                                                      Stacey Rickson
                                                    </h6>
                                                    <p className="author-details">
                                                      Colabrio Media • Web
                                                      Developer
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="wpb_column vc_column_container vc_col-sm-3">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="slider-wrap clb-slider-item cloned"
                                        style={{
                                          minWidth: "728.312px",
                                          marginRight: "40px",
                                        }}
                                      >
                                        <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                          <div className="wpb_column vc_column_container vc_col-sm-3">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper" />
                                            </div>
                                          </div>
                                          <div className="wpb_column vc_column_container vc_col-sm-6">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper">
                                                <div
                                                  className="ohio-widget testimonial -center -center-flex -middle-avatar"
                                                  id="ohio-custom-63d771050fda4"
                                                >
                                                  <h6 className="testimonial-headline">
                                                    <b>Design Quality</b>
                                                  </h6>
                                                  <p>
                                                    “The app is a part of our
                                                    team, helping to crystalize
                                                    our vision and delivering
                                                    incredible results in a
                                                    record time.”
                                                  </p>
                                                  <div
                                                    className="avatar"
                                                    style={{
                                                      backgroundImage:
                                                        "url(https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__avatar1-min.png)",
                                                    }}
                                                  />
                                                  <div className="author">
                                                    <h6 className="title">
                                                      Colin Lucido
                                                    </h6>
                                                    <p className="author-details">
                                                      Colabrio Media •
                                                      Co-Founder
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="wpb_column vc_column_container vc_col-sm-3">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="slider-wrap clb-slider-item cloned"
                                        style={{
                                          minWidth: "728.312px",
                                          marginRight: "40px",
                                        }}
                                      >
                                        <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                          <div className="wpb_column vc_column_container vc_col-sm-3">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper" />
                                            </div>
                                          </div>
                                          <div className="wpb_column vc_column_container vc_col-sm-6">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper">
                                                <div
                                                  className="ohio-widget testimonial -center -center-flex -middle-avatar"
                                                  id="ohio-custom-63d7710510881"
                                                >
                                                  <h6 className="testimonial-headline">
                                                    <b>Code Quality</b>
                                                  </h6>
                                                  <p>
                                                    “I'll tell you what, make
                                                    higher preparation better
                                                    large one either government
                                                    drunk brought be totally
                                                    concepts deference.”
                                                  </p>
                                                  <div
                                                    className="avatar"
                                                    style={{
                                                      backgroundImage:
                                                        "url(https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__avatar3-min.png)",
                                                    }}
                                                  />
                                                  <div className="author">
                                                    <h6 className="title">
                                                      Laura Norson
                                                    </h6>
                                                    <p className="author-details">
                                                      Colabrio Media • Art
                                                      Direction
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="wpb_column vc_column_container vc_col-sm-3">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="slider-wrap clb-slider-item cloned"
                                        style={{
                                          minWidth: "728.312px",
                                          marginRight: "40px",
                                        }}
                                      >
                                        <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                          <div className="wpb_column vc_column_container vc_col-sm-3">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper" />
                                            </div>
                                          </div>
                                          <div className="wpb_column vc_column_container vc_col-sm-6">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper">
                                                <div
                                                  className="ohio-widget testimonial -center -center-flex -middle-avatar"
                                                  id="ohio-custom-63d77105110f0"
                                                >
                                                  <h6 className="testimonial-headline">
                                                    <b>Customer Support</b>
                                                  </h6>
                                                  <p>
                                                    “5 stars WordPress template!
                                                    If anyone wants an example
                                                    of what you can do with this
                                                    theme, check out my site at
                                                    ohio.clbthemes.com.”
                                                  </p>
                                                  <div
                                                    className="avatar"
                                                    style={{
                                                      backgroundImage:
                                                        "url(https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-26/oh__avatar2-min.png)",
                                                    }}
                                                  />
                                                  <div className="author">
                                                    <h6 className="title">
                                                      Stacey Rickson
                                                    </h6>
                                                    <p className="author-details">
                                                      Colabrio Media • Web
                                                      Developer
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="wpb_column vc_column_container vc_col-sm-3">
                                            <div className="vc_column-inner">
                                              <div className="wpb_wrapper" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div />
                                  </div>
                                  <div className="clb-slider-nav-btn">
                                    <div
                                      className="prev-btn icon-button"
                                      tabIndex={0}
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
                                    </div>
                                    <div
                                      className="next-btn icon-button"
                                      tabIndex={0}
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
                                    </div>
                                  </div>
                                  <div className="clb-slider-count">
                                    <div
                                      className="clb-slider-count-current"
                                      style={{
                                        transform: "translate(0px, -25.5938px)",
                                      }}
                                    >
                                      <div className="clb-slider-count-number">
                                        <span className="clb-slider-pagination-index">
                                          3
                                        </span>
                                      </div>
                                      <div className="clb-slider-count-number">
                                        <span className="clb-slider-pagination-index">
                                          1
                                        </span>
                                      </div>
                                      <div className="clb-slider-count-number">
                                        <span className="clb-slider-pagination-index">
                                          2
                                        </span>
                                      </div>
                                      <div className="clb-slider-count-number">
                                        <span className="clb-slider-pagination-index">
                                          3
                                        </span>
                                      </div>
                                      <div className="clb-slider-count-number">
                                        <span className="clb-slider-pagination-index">
                                          1
                                        </span>
                                      </div>
                                    </div>
                                    <div className="clb-slider-count-total">
                                      3
                                    </div>
                                  </div>
                                </div>
                                <svg
                                  className="spinner sk-preloader hidden"
                                  viewBox="0 0 50 50"
                                >
                                  <circle
                                    className="path"
                                    cx={25}
                                    cy={25}
                                    r={20}
                                    fill="none"
                                    strokeWidth={4}
                                  />
                                </svg>
                              </div>
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "12vh" }}
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
                      </div>
                      <div className="vc_row-full-width vc_clearfix" />
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "8vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                <div className="wpb_column vc_column_container vc_col-sm-5">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                      <div
                                        className="ohio-widget heading -left"
                                        id="ohio-custom-63d7710511ebd"
                                      >
                                        <h2 className="title">
                                          Get started with
                                          <br className="vc_hidden-xs" />
                                          our app today.
                                        </h2>
                                      </div>
                                      <div
                                        className="ohio-text-sc"
                                        id="ohio-custom-63d7710511f31"
                                      >
                                        <p>
                                          The app helps teams create, track, and
                                          deliver faster.
                                        </p>
                                      </div>
                                      <div
                                        className="vc_empty_space vc_hidden-lg vc_hidden-md"
                                        style={{ height: "3vh" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-4">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper" />
                                  </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-3">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                      <div
                                        className="ohio-widget contact-form -left"
                                        id="ohio-custom-63d77105122ba"
                                      >
                                        <div
                                          className="wpcf7 js"
                                          id="wpcf7-f224297-p152197-o2"
                                          lang="en-US"
                                          dir="ltr"
                                        >
                                          <div className="screen-reader-response">
                                            <p
                                              role="status"
                                              aria-live="polite"
                                              aria-atomic="true"
                                            />
                                            <ul />
                                          </div>
                                          <form
                                            action="#demo26/#wpcf7-f224297-p152197-o2"
                                            method="post"
                                            className="wpcf7-form init"
                                            aria-label="Contact form"
                                            noValidate="novalidate"
                                            data-status="init"
                                          >
                                            <div style={{ display: "none" }}>
                                              <input
                                                type="hidden"
                                                name="_wpcf7"
                                                defaultValue={224297}
                                              />
                                              <input
                                                type="hidden"
                                                name="_wpcf7_version"
                                                defaultValue="5.7.2"
                                              />
                                              <input
                                                type="hidden"
                                                name="_wpcf7_locale"
                                                defaultValue="en_US"
                                              />
                                              <input
                                                type="hidden"
                                                name="_wpcf7_unit_tag"
                                                defaultValue="wpcf7-f224297-p152197-o2"
                                              />
                                              <input
                                                type="hidden"
                                                name="_wpcf7_container_post"
                                                defaultValue={152197}
                                              />
                                              <input
                                                type="hidden"
                                                name="_wpcf7_posted_data_hash"
                                                defaultValue
                                              />
                                            </div>
                                            <div className="subscribe-form">
                                              <p>
                                                <span
                                                  className="wpcf7-form-control-wrap"
                                                  data-name="your-email"
                                                >
                                                  <input
                                                    size={40}
                                                    className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                    aria-required="true"
                                                    aria-invalid="false"
                                                    placeholder="name@email.com"
                                                    defaultValue
                                                    type="email"
                                                    name="your-email"
                                                  />
                                                </span>
                                                <br />
                                                <button
                                                  className="button"
                                                  data-button-loading="true"
                                                >
                                                  Get a Demo
                                                </button>
                                                <span className="wpcf7-spinner" />
                                              </p>
                                            </div>
                                            <div
                                              className="wpcf7-response-output"
                                              aria-hidden="true"
                                            />
                                          </form>
                                        </div>
                                        <div
                                          className="hidden"
                                          data-button-contact="true"
                                        />
                                      </div>
                                      <div
                                        className="ohio-text-sc"
                                        id="ohio-custom-63d771051276b"
                                      >
                                        <p style={{ textAlign: "left" }}>
                                          Already using our service?
                                          <a href="#demo26/#">
                                            <strong>Sign In</strong>
                                          </a>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="vc_empty_space clb__spacer"
                                style={{ height: "6vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_custom_1628157519458 vc_custom_1628157519458">
                                <span className="vc_sep_holder vc_sep_holder_l">
                                  <span
                                    style={{
                                      borderColor: "rgba(99, 93, 111, 0.65)",
                                    }}
                                    className="vc_sep_line"
                                  />
                                </span>
                                <span className="vc_sep_holder vc_sep_holder_r">
                                  <span
                                    style={{
                                      borderColor: "rgba(99, 93, 111, 0.65)",
                                    }}
                                    className="vc_sep_line"
                                  />
                                </span>
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

      <div
        id="content"
        className="site-content"
        data-mobile-menu-resolution={768}
      >
        <div className="page-headline without-cap -center subheader_excluded headline-with-parallax">
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
                <div className="post-meta-holder"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-container top-offset bottom-offset">
          <div id="primary" className="content-area">
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
                                  {allProyects.map((pro: any, index: any) => {
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
      allProyects,
    },
    revalidate: 20,
  };
}

export default Proyects;
