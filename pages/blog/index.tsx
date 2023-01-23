import Container from "@/components/hocs/Container";
import { useGetArticles } from "@/hooks/useGetArticles";
import Link from "next/link";
import React from "react";
import slugify from "slugify";
import Image from "next/image";
const index = ({ recentArticles }: any) => {
  console.log(recentArticles);
  return (
    <Container customAddClases="">
      <div
        id="content"
        className="site-content "
        data-mobile-menu-resolution={768}
      >
        <div className="page-headline without-cap -center subheader_excluded  headline-with-parallax">
          <a
            href="#"
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
            <span className="caption">Back </span>
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
                transform: "translate3d(0px, -97.2746px, 0px)",
                transition: "transform 0.1s linear 0s",
              }}
            />
            <div className="parallax-content" />
          </div>
          <div className="holder">
            <div className="page-container">
              <div className="animated-holder">
                <div className="headline-meta" />
                <h1 className="title">Blog Posts</h1>
                <div className="post-meta-holder">
                  <div className="builder-switcher">
                    <a className="active" href="./blog-posts-shortcode/">
                      WPBakery
                    </a>{" "}
                    <a href="./blog-posts-widget/">Elementor</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-container">
          <div id="primary" className="content-area">
            <div className="page-content ">
              <main id="main" className="site-main">
                <article
                  id="post-17341"
                  className="post-17341 page type-page status-publish hentry"
                >
                  <div className="entry-content">
                    <section className="wpb-content-wrapper">
                      <div className="vc_row wpb_row vc_row-fluid clb__narrow">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner vc_custom_1494925290262">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget heading -center"
                                id="ohio-custom-63cd84afdd47c"
                              >
                                <h4 className="title">Layout Variants</h4>
                              </div>
                              <div
                                className="vc_empty_space"
                                style={{ height: "4vh" }}
                              >
                                <span className="vc_empty_space_inner" />
                              </div>
                              <div
                                className="ohio-widget blog-posts vc_row"
                                id="ohio-custom-63cd84afdd717"
                                data-lazy-container="posts"
                              >
                                {recentArticles.map((article: any) => {
                                  return (
                                    <div
                                      className=" vc_col-lg-4 vc_col-md-4 vc_col-xs-12 masonry-block grid-item"
                                      data-lazy-item
                                      data-lazy-scope="posts"
                                    >
                                      <div className="blog-item card -layout1 ">
                                        <Link
                                          href={`/blog/${slugify(
                                            article?.properties?.Name?.title[0]
                                              ?.plain_text
                                          ).toLowerCase()}`}
                                          data-cursor-class="cursor-link"
                                        >
                                          <figure
                                            className="image-holder"
                                            style={{
                                              height: "390px",
                                              position: "relative",
                                            }}
                                          >
                                            <Image
                                              src={
                                                article?.cover?.external?.url
                                              }
                                              sizes="(max-width: 882px) 100vw, 882px"
                                              fill
                                              objectFit="contain"
                                              alt=""
                                            />
                                            <div className="overlay-details -fade-up">
                                              <ul className="meta-holder -unlist">
                                                <li className="meta-item">
                                                  <div className="avatar -small">
                                                    <Image
                                                      alt="Colabrio"
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
                                                  <span className="prefix">
                                                    Posted by
                                                  </span>
                                                  <span className="author">
                                                    Gonzalo Axel
                                                  </span>
                                                </li>
                                              </ul>
                                            </div>
                                          </figure>
                                        </Link>
                                        <div className="card-details -left">
                                          <div className="headline-meta -small-t">
                                            <div className="date">
                                              {new Date(
                                                article.created_time
                                              ).toLocaleDateString("es-PE", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                              })}
                                            </div>
                                            <span className="post-meta-estimate">
                                              {
                                                article.properties.Category
                                                  .select.name
                                              }
                                            </span>
                                          </div>
                                          <div className="heading title">
                                            <h4 className="title">
                                              <Link
                                                className="-unlink"
                                                href={`/blog/${slugify(
                                                  article?.properties?.Name
                                                    ?.title[0]?.plain_text
                                                ).toLowerCase()}`}
                                              >
                                                {
                                                  article?.properties?.Name
                                                    ?.title[0]?.plain_text
                                                }
                                              </Link>
                                            </h4>
                                          </div>
                                          <div className="category-holder -with-tag">
                                            {article?.properties?.Tags.multi_select.map(
                                              (el: any) => {
                                                return (
                                                  <a
                                                    className="tag -unlink"
                                                    href="#"
                                                  >
                                                    {el.name}
                                                  </a>
                                                );
                                              }
                                            )}
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
  const recentArticles = await useGetArticles();
  return {
    // Passed to the page component as props
    props: {
      recentArticles: recentArticles,
    },
    revalidate: 20,
  };
}

export default index;
