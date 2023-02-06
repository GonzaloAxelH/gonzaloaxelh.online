import React from "react";
import Image from "next/image";
const WorkNow = () => {
  return (
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
                      <div className="subtitle">Proyectos </div>
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
                        Echale un vistazo a mis proyectos y apps que estoy
                        construyendo.
                        <br />
                        De libre acceso.
                      </p>
                    </div>
                    <div className="vc_empty_space" style={{ height: "3vh" }}>
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
                          <Image
                            width={1000}
                            height={740}
                            src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-9/oh__img169.png"
                            blurDataURL="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-9/oh__img169.png"
                            className="vc_single_image-img attachment-full"
                            alt=""
                            quality={100}
                            decoding="async"
                            loading="lazy"
                            title="oh__img169"
                            sizes="(max-width: 1000px) 100vw, 1000px"
                            placeholder="blur"
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
  );
};

export default WorkNow;
