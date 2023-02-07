import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";
const MyTutorialsOfProgramming = ({ tutorials }: any) => {
  return (
    <div className="vc_row wpb_row vc_row-fluid clb__narrow">
      <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner vc_custom_1494925290262">
          <div className="wpb_wrapper">
            <div
              className="ohio-widget heading -center blur-effect"
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
                    Tutoriales actualizables, sobre tu herramienta o tecnologia
                    favorita
                    <br />
                    <b>Only real business demo websites.</b>
                  </p>
                </div>
              </div>
            </div>
            <div id="schedule" className="vc_row wpb_row vc_row-fluid">
              <div className="wpb_column vc_column_container vc_col-sm-6">
                <div className="vc_column-inner"></div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-6">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="ohio-widget-holder -right">
                      <Link
                        href="/tutorials"
                        target="_blank"
                        className="ohio-widget button clb__alignment_reset -outlined -small"
                        id="ohio-custom-63d7a7d3c5fb3"
                      >
                        Ver mas tutoriales
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
                    <div className="vc_empty_space" style={{ height: "4vh" }}>
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
              {tutorials.map((tutorial: any) => {
                return (
                  <div
                    className="vc_col-lg-4 vc_col-md-4 vc_col-xs-12 masonry-block grid-item ribbon"
                    data-lazy-item
                    data-lazy-scope="posts"
                  >
                    <div
                      className="blog-item card -layout2 -img-scale"
                      data-tilt="true"
                      data-tilt-perspective={6000}
                    >
                      <figure
                        className="image-holder"
                        style={{
                          borderRadius: "0.7rem",
                        }}
                      >
                        <Link
                          href={`/tutorial/${slugify(
                            tutorial?.properties?.Name?.title[0]?.plain_text
                          ).toLowerCase()}`}
                          className="-unlink"
                          data-cursor-class="cursor-link"
                        >
                          <Image
                            src={
                              tutorial?.cover?.file?.url ||
                              tutorial.cover?.external?.url
                            }
                            blurDataURL={
                              tutorial?.cover?.file?.url ||
                              tutorial.cover?.external?.url
                            }
                            quality={100}
                            width={250}
                            height={250}
                            sizes="(max-width: 882px) 100vw, 882px"
                            alt=""
                            placeholder="blur"
                          />
                          <div className="overlay" />
                        </Link>
                        <div className="overlay-details -top ">
                          <ul className="meta-holder -unlist">
                            <li className="meta-item">
                              <div className="avatar -small">
                                <Image
                                  alt="Colabrio"
                                  src="/react_logo_t.png"
                                  blurDataURL="/react_logo_t.png"
                                  quality={100}
                                  className="avatar avatar-50 photo author-avatar"
                                  height={50}
                                  width={50}
                                  loading="lazy"
                                  decoding="async"
                                  placeholder="blur"
                                />
                              </div>
                            </li>
                            <li className="meta-item">
                              <span className="prefix"></span>
                              <span className="author">React</span>
                            </li>
                          </ul>
                        </div>
                        <div className="overlay-details card-details -left">
                          <div className="heading title">
                            <h4 className="title">
                              <Link
                                className="-unlink"
                                href={`/tutorial/${slugify(
                                  tutorial?.properties?.Name?.title[0]
                                    ?.plain_text
                                ).toLowerCase()}`}
                              >
                                {tutorial.properties.Name.title[0]?.plain_text}{" "}
                              </Link>
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
  );
};

export default MyTutorialsOfProgramming;
