import Container from "@/components/hocs/Container";
import { useGetCurse, useGetCurses } from "@/hooks/useGetCurses";
import Link from "next/link";
import React from "react";
import slugify from "slugify";
import Image from "next/image";
const index = ({ recentCurses, test }: any) => {
  console.log(recentCurses);
  return (
    <Container
      customMeta={{ title: "Tutorials - Gonzalo Axel" }}
      customAddClases="home page-template-default page page-id-152078 wp-embed-responsive ohio-theme-3-1-2 with-switcher with-header-3 with-fixed-search with-sticky-header with-mobile-switcher links-underline icon-buttons-animation  wpb-js-composer js-comp-ver-6.10.0 vc_responsive elementor-default elementor-kit-6 page-is-loaded"
    >
      <div
        id="content"
        className="site-content "
        data-mobile-menu-resolution={768}
        style={{ maxWidth: "98vw", padding: "2.8em" }}
      >
        <div className="page-container">
          <div id="primary" className="content-area">
            <div className="page-content ">
              <main id="main" className="site-main ">
                <article
                  id="post-152078"
                  className="post-152078 page type-page status-publish hentry"
                >
                  <div className="entry-content ">
                    <section className="wpb-content-wrapper">
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
                              <div
                                className="ohio-widget blog-posts vc_row"
                                id="ohio-custom-63dc9546bbb8f"
                                data-lazy-container="posts"
                              >
                                <div
                                  className="vc_col-lg-12 vc_col-md-undefined vc_col-xs-12 masonry-block grid-item"
                                  data-lazy-item
                                  data-lazy-scope="posts"
                                >
                                  <div className="blog-item card -layout3">
                                    <Link
                                      href={`/tutorials/${slugify(
                                        recentCurses[0]?.properties?.Name
                                          ?.title[0]?.plain_text
                                      ).toLowerCase()}`}
                                      data-cursor-class="cursor-link"
                                    >
                                      <figure className="image-holder">
                                        <img
                                          src={
                                            recentCurses[0]?.cover?.external
                                              ?.url ||
                                            recentCurses[0]?.cover?.file?.url
                                          }
                                          sizes="(max-width: 1024px) 100vw, 1024px"
                                          alt=""
                                        />
                                        <div className="overlay-details -top -fade-down">
                                          <ul className="meta-holder -unlist">
                                            <li className="meta-item">
                                              <div className="avatar -small">
                                                <img
                                                  alt="Colabrio"
                                                  src="./Ohio Stage Demo 25 – Just another WordPress site_files/172720f4a3c2aa57d5f6c81c3eee2c0f.png"
                                                  className="avatar avatar-50 photo author-avatar"
                                                  height={50}
                                                  width={50}
                                                  loading="lazy"
                                                  decoding="async"
                                                />
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </figure>
                                    </Link>
                                    <div className="card-details -left">
                                      <div className="headline-meta -small-t">
                                        <div className="date">
                                          {new Date(
                                            recentCurses[0].created_time
                                          ).toLocaleDateString("es-PE", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                          })}
                                        </div>
                                        <span className="post-meta-estimate">
                                          9 min read
                                        </span>
                                      </div>
                                      <div className="heading title">
                                        <h4 className="title">
                                          <Link
href={`/tutorials/${slugify(
                                        recentCurses[0]?.properties?.Name
                                          ?.title[0]?.plain_text
                                      ).toLowerCase()}`}
                                            className="-unlink"
                                            
                                          >
                                            {
                                              recentCurses[0].properties.Name
                                                ?.title[0]?.plain_text
                                            }
                                          </Link>
                                        </h4>
                                      </div>
                                      <p>
                                        {
                                          recentCurses[0].properties.Summary
                                            ?.rich_text[0]?.plain_text
                                        }
                                      </p>
                                    </div>
                                  </div>
                                </div>
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
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget blog-posts vc_row"
                                id="ohio-custom-63dc9546c1877"
                                data-lazy-container="posts"
                              >
                                {recentCurses.map((tutorial: any) => {
                                  return (
                                    <div
                                      className="vc_col-lg-4 vc_col-md-4 vc_col-xs-12 masonry-block grid-item"
                                      data-lazy-item
                                      data-lazy-scope="posts"
                                    >
                                      <div
                                        data-aos-once="true"
                                        data-aos="fade-up"
                                        data-aos-delay={0}
                                        className="aos-init aos-animate"
                                      >
                                        <div className="blog-item card -layout2 -metro">
                                          <figure
                                            className="image-holder"
                                            style={{}}
                                          >
                                            <Link
                                              href={`/tutorials/${slugify(
                                                tutorial?.properties
                                                  ?.Name?.title[0]?.plain_text
                                              ).toLowerCase()}`}
                                              className="-unlink"
                                              data-cursor-class="cursor-link"
                                            >
                                              <Image
                                                src={
                                                  tutorial.properties.ImageSmall
                                                    ?.url
                                                }
                                                blurDataURL={
                                                  tutorial.properties.ImageSmall
                                                    ?.url
                                                }
                                                quality={100}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 1024px"
                                                alt=""
                                              />
                                              <div className="overlay" />
                                            </Link>
                                            <div className="overlay-details -top -fade-down">
                                              <ul className="meta-holder -unlist">
                                                <li className="meta-item">
                                                  <div className="avatar -small">
                                                    <img
                                                      alt="Colabrio"
                                                      src="/imagenjavascript.png"
                                                      className="avatar avatar-50 photo author-avatar"
                                                      height={50}
                                                      width={50}
                                                      loading="lazy"
                                                      decoding="async"
                                                    />
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                            <div className="overlay-details card-details -left">
                                              <div className="heading title">
                                                <h4 className="title">
                                                  <a
                                                    className="-unlink"
                                                    href="#demo25/creativo-para-jovenes-a-designers-ui-ux-complete-checklist/"
                                                  >
                                                    {
                                                      tutorial.properties.Name
                                                        ?.title[0]?.plain_text
                                                    }
                                                  </a>
                                                </h4>
                                              </div>
                                            </div>
                                          </figure>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
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
                      <div className="vc_row wpb_row vc_row-fluid clb__padding_reset clb_custom_subscribe_section clb__dark_mode_light vc_custom_1640184020561 vc_row-has-fill vc_row-o-content-middle vc_row-flex">
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
                                <div className="clb__padding_set wpb_column vc_column_container vc_col-sm-6">
                                  <div className="vc_column-inner vc_custom_1632319153094">
                                    <div className="wpb_wrapper">
                                      <div
                                        className="ohio-widget heading -left"
                                        id="ohio-custom-63dc9546d6135"
                                      >
                                        <div className="subtitle">
                                          <strong>Some queries </strong>from the
                                          journal.
                                        </div>
                                        <h2 className="title">
                                          Get started with
                                          <br className="vc_hidden-xs vc_hidden-sm" />
                                          our mobile app.
                                        </h2>
                                      </div>
                                      <div
                                        className="vc_empty_space"
                                        style={{ height: "3vh" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                      <div className="ohio-widget-holder -left">
                                        <a
                                          href="#demo25/#"
                                          target="_blank"
                                          className="ohio-widget button"
                                          id="ohio-custom-63dc9546d6334"
                                        >
                                          Get the App
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
                                        className="vc_empty_space clb__spacer"
                                        style={{ height: "8vh" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-4 vc_col-md-3">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                      <div
                                        className="ohio-text-sc"
                                        id="ohio-custom-63dc9546d66cd"
                                      >
                                        <p>
                                          When our team provides design and
                                          digital marketing. Applied arts can
                                          include
                                          <strong>
                                            industrial design, graphic design,
                                            fashion design.
                                          </strong>
                                        </p>
                                      </div>
                                      <div
                                        className="vc_empty_space"
                                        style={{ height: "6vh" }}
                                      >
                                        <span className="vc_empty_space_inner" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-3 vc_hidden-sm vc_hidden-xs">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="clb__padding_reset wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="vc_empty_space clb__section_spacer"
                                style={{ height: "8vh" }}
                              >
                                <span className="vc_empty_space_inner" />
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
