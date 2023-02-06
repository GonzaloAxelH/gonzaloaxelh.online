import React from "react";
import Link from "next/link";
import Image from "next/image"
const MyApps = () => {
  return (
    <div>
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
                      <span>Mis Applicaciones que he construido</span>
                      <br />
                    </h2>
                    <p className="details">
                      Tienes acceso a todas las aplicaciones que hice.
                      <br />
                      <b>Cada apliacion tiene su demo y repositorio</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                  href="/apps"
                  target="_blank"
                  className="ohio-widget button clb__alignment_reset -outlined -small"
                  id="ohio-custom-63d7a7d3c5fb3"
                >
                  Ver mas apps
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
                      height: "380px",
                      position: "relative",
                      borderRadius: "1.5rem",
                    }}
                  >
                    <Image
                      src="/Google-Keep-Android.webp"
                      blurDataURL="/Google-Keep-Android.webp"
                      fill
                      objectFit="cover"
                      sizes="(max-width: 1600px) 100vw, 1600px"
                      alt=""
                      placeholder="blur"
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
              <div className="vc_empty_space" style={{ height: "5vh" }}>
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
                      height: "380px",
                      position: "relative",
                      borderRadius: "1.5rem",
                    }}
                  >
                    <Image
                      src="/instagramclone.webp"
                      blurDataURL="/instagramclone.webp"
                      quality={100}
                      fill
                      objectFit="cover"
                      sizes="(max-width: 1600px) 100vw, 1600px"
                      alt=""
                      placeholder="blur"
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
                        Un clon de la app de instagram <b>React y Firebase.</b>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="vc_empty_space" style={{ height: "5vh" }}>
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
                      height: "380px",
                      position: "relative",

                      borderRadius: "1.5rem",
                    }}
                  >
                    <Image
                      src="/googleclone.webp"
                      blurDataURL="/googleclone.webp"
                      fill
                      quality={100}
                      objectFit="cover"
                      sizes="(max-width: 1600px) 100vw, 1600px"
                      alt=""
                      placeholder="blur"
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
              <div className="vc_empty_space" style={{ height: "5vh" }}>
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
                      height: "380px",
                      position: "relative",
                      borderRadius: "1.5rem",
                    }}
                  >
                    <Image
                      src="/googleclone.webp"
                      blurDataURL="/portfolioclone.png"
                      fill
                      quality={100}
                      objectFit="cover"
                      sizes="(max-width: 1600px) 100vw, 1600px"
                      placeholder="blur"
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
                        Un pequeño portafolio hecho con <b>React Puro</b>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="vc_empty_space" style={{ height: "5vh" }}>
                <span className="vc_empty_space_inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyApps;
