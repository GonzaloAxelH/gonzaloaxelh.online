import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div>
      <div className="vc_row wpb_row vc_row-fluid vc_row-o-full-height vc_row-o-columns-stretch vc_row-o-equal-height vc_row-o-content-bottom vc_row-flex">
        <div className="vc-bg-lines page-container -dark"></div>
        <div className="wpb_column  vc_col-sm-5" style={{ paddingTop: "3em" }}>
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="vc_empty_space" style={{ height: "5vh" }}>
                <span className="vc_empty_space_inner" />
              </div>
              <div
                className="vc_empty_space  vc_hidden-lg vc_hidden-md"
                style={{ height: "5vh" }}
              >
                <span className="vc_empty_space_inner" />
              </div>
              <div
                className="ohio-widget heading -left aos-init aos-animate"
                id="ohio-custom-63d3a0516f127"
                data-aos="fade-up"
              >
                <h6 className="title">
                  <span>Hello ,</span>
                  <br className="vc_hidden-sm" />
                  I'am Gonzalo Axel.<br></br>
                </h6>
              </div>
              <div className="vc_empty_space">
                <span className="vc_empty_space_inner" />
              </div>
              <div
                className="ohio-widget heading clb__heading -left aos-init aos-animate"
                id="ohio-custom-63d3a0516f614"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <h1 className="title">
                  <br className="vc_hidden-xs vc_hidden-sm" /> Descubre
                  soluciones y tendencias en el mundo de la programación.
                </h1>
              </div>
              <div className="vc_empty_space" style={{ height: "3vh" }}>
                <span className="vc_empty_space_inner" />
              </div>
              <div className="ohio-widget-holder -left">
                <a
                  href="#"
                  className="ohio-widget button -text aos-init aos-animate"
                  id="ohio-custom-63d3a0516f77e"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  Explore my web site
                </a>
              </div>
              <div
                className="vc_empty_space  clb__section_spacer"
                style={{ height: "18vh" }}
              >
                <span className="vc_empty_space_inner" />
              </div>
            </div>
          </div>
        </div>
        <div className="wpb_column vc_column_container vc_col-sm-1">
          <div className="vc_column-inner">
            <div className="wpb_wrapper" />
          </div>
        </div>
        <div className="wpb_column vc_column_container vc_col-sm-6">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_center  vc_custom_1638976601881">
                <figure className="wpb_wrapper vc_figure">
                  <div className="vc_single_image-wrapper   vc_box_border_grey">
                    <Image
                      width={1488}
                      height={1560}
                      src="https://res.cloudinary.com/ddksrkond/image/upload/v1675725885/Blog/oh__demo1__1_ebnfju.png"
                      blurDataURL="https://res.cloudinary.com/ddksrkond/image/upload/v1675725885/Blog/oh__demo1__1_ebnfju.png"
                      className="vc_single_image-img attachment-full"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      title="oh__demo1__1"
                      sizes="(max-width: 1488px) 100vw, 1488px"
                      quality={80}
                      placeholder="blur"
                    />
                  </div>
                </figure>
              </div>

              <div
                className="vc_empty_space  clb__section_spacer"
                style={{ height: "18vh" }}
              >
                <span className="vc_empty_space_inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="list-tecnologies">
        <Image
          className="item-flotate-1"
          src="/imagenjavascript.png"
          blurDataURL="/imagenjavascript.png"
          width={80}
          height={80}
          quality={100}
          placeholder="blur"
          alt=""
        />
        <Image
          className="item-flotate-2"
          src="/angularimage.png"
          blurDataURL="/angularimage.png"
          width={80}
          height={80}
          quality={100}
          placeholder="blur"
          alt=""
        />
        <Image
          className="item-flotate-3"
          src="/tailwindcssimage.png"
          blurDataURL="/tailwindcssimage.png"
          quality={100}
          placeholder="blur"
          width={80}
          height={80}
          alt=""
        />
        <Image
          className="item-flotate-4"
          src="/boostrapimage.png"
          blurDataURL="/boostrapimage.png"
          width={80}
          height={80}
          quality={100}
          placeholder="blur"
          alt=""
        />
        <Image
          className="item-flotate-5"
          src="/nextjsimage.png"
          blurDataURL="/nextjsimage.png"
          width={80}
          height={80}
          alt=""
          quality={100}
          placeholder="blur"
        />
        <Image
          className="item-flotate-6"
          src="/reactimage.png"
          blurDataURL="/reactimage.png"
          width={80}
          height={80}
          quality={100}
          placeholder="blur"
          alt=""
        />
        <Image
          className="item-flotate-7"
          src="/pythonimage.webp"
          blurDataURL="/pythonimage.webp"
          quality={100}
          placeholder="blur"
          width={80}
          height={80}
          alt=""
        />
        <Image
          className="item-flotate-8"
          quality={100}
          placeholder="blur"
          src="/c.png"
          blurDataURL="/c.png"
          width={80}
          height={80}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
