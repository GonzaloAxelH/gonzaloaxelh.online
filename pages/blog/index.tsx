import Container from "@/components/hocs/Container";
import { useGetArticles } from "@/hooks/useGetArticles";
import Link from "next/link";
import React from "react";
import slugify from "slugify";
import Image from "next/image";
import { getTags } from "@/services/notion";
const BlogPage = ({ recentArticles, tags }: any) => {
  const feactureArticle = recentArticles[1];
  const descriptionArticleFeature =
    feactureArticle.properties?.Summary.rich_text[0]?.plain_text ||
    "Articulo aun no terminado.Intenta mas tarde.";
  const coverImageFeature =
    feactureArticle?.cover?.file?.url || feactureArticle?.cover?.external?.url;
  const categoryFeature = feactureArticle?.properties?.Category?.select?.name;
  const dataFeature = feactureArticle.created_time;
  const title = feactureArticle.properties.Name?.title[0]?.plain_text;
  const titleLink = slugify(title).toLowerCase()

  return (
    <Container
      customMeta={{ title: "Super Blog - Gonzalo Axel" }}
      customAddClases="home page-template-default page page-id-10 wp-embed-responsive ohio-theme-3-1-2 with-switcher with-header-3 with-fixed-search with-sticky-header with-mobile-switcher links-underline icon-buttons-animation custom-cursor wpb-js-composer js-comp-ver-6.10.0 vc_responsive elementor-default elementor-kit-6 slider-with-bullets page-is-loaded"
    >
      <div
        id="content"
        className="site-content"
        data-mobile-menu-resolution={768}
      >
        <div className="page-container -full-w">
          <div id="primary" className="content-area">
            <div className="page-content ">
              <main id="main" className="site-main">
                <article
                  id="post-10"
                  className="post-10 page type-page status-publish hentry"
                >
                  <div className="entry-content">
                    <section className="wpb-content-wrapper">
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget portfolio-projects -with-sorting grid_10 -full-vh vc_row"
                                id="ohio-custom-63d8da545cea8"
                                data-ohio-portfolio-grid="true"
                              >
                                <div
                                  className="portfolio-onepage-slider -slider-fs clb-slider-scroll-bar grid_10 clb-smooth-slider"
                                  data-portfolio-grid-slider="true"
                                  data-slider-loop={1}
                                  data-slider-mousescroll={1}
                                  data-slider-pagination={1}
                                  data-slider-navigation={1}
                                  
                                >
                                 


                                  <div
                                    className="portfolio-item -with-slider -with-gradient -layout10 -full-vh clb-smooth-slider-item next-slide active"
                                    data-portfolio-popup="ohio-lightbox-63d8da546ec0e"
                                    style={{ position: "absolute" ,height:"100vh" }}
                                  >
                                    <div
                                      className="overlay-image -full-h -full-w"
                                      
                                      
                                    >
                                      <div className="headline-decor">
                                        <span className="title -decor">
                                          {title}
                                        </span>
                                      </div>
                                      <div className="page-container -full-h">
                                        <div className="vc_col-md-10 vc_col-md-push-1 preview">
                                          <div
                                            className="portfolio-item-image"
                                            data-ohio-bg-image={`${coverImageFeature}`}
                                            style={{
                                              backgroundImage:
                                                `url("${coverImageFeature}")`,
                                              height: "100%",
                                               borderRadius:"12px"
                                            }}
                                          />
                                        </div>
                                        <div className="project-content animated-holder vc_col-md-6">
                                          <div
                                            className="video-button -animation open-popup -outlined"
                                            data-video="https://www.youtube.com/embed/t67_zAg5vvI?"
                                          >
                                            
                                                <Link href={`/blog/${titleLink}`}>
                                            
                                            <button className="icon-button">
                                              <i aria-hidden className="icon">
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

                                            </Link>
                                          </div>
                                          <div className="headline-meta">
                                            <span className="category-holder">
                                              <span className="category ">
                                                <Link href={`/blog/${titleLink}`}>
                                                  {categoryFeature}
                                                </Link> 
                                              </span>
                                             
                                            </span>
                                            <span className="date ">
                                               {new Date(dataFeature).toLocaleDateString(
                      "es-PE",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                                            </span>
                                          </div>
                                          <Link
                                            className="project-title -unlink"
                                            
                                                 href={`/blog/${titleLink}`}
                                          >
                                            <h2 className="headline ">
                                              {title}
                                            </h2>
                                          </Link> 
                                          <div className="project-details">
                                            <p className="">
                                              {descriptionArticleFeature}...
                                            </p>
                                          </div>
                                          <Link
                                            className="button -text -unlink btn-lightbox "
                                            
                                                href={`/blog/${titleLink}`}
                                          >
                                            Show Article{" "}
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
                                          </Link> 
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                 
                          
                                
                                </div>
                              </div>
                              <div className="scroll-bar-container grid_10">
                                <div className="page-container">
                                  <div>
                                    <div className="scroll-top clb-slider-scroll-top vc_hidden-md vc_hidden-sm vc_hidden-xs">
                                      <div className="scroll-top-bar">
                                        <div className="scroll-track" />
                                      </div>
                                      <div className="scroll-top-holder titles-typo">
                                        Scroll{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>{" "}
                  </div>
                </article>{" "}
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
        <div className="page-headline without-cap -center subheader_excluded  headline-with-parallax">
          <Link
            href="#/portfolio/sticky-metro/"
            className="back-link -unlink vc_hidden-md vc_hidden-sm vc_hidden-xs"
          >
            <button
              className="icon-button"
              aria-controls="site-navigation"
              aria-expanded="false"
            >
              <i aria-hidden className="icon" >
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
          </Link> 
          <div
            className="parallax"
            data-parallax-bg="vertical"
            data-parallax-speed=".5"
          >
            <div
              className="parallax-bg bg-image"
              style={{
                height: "445.953px",
                transform: "translate3d(0px, -83.7833px, 0px)",
                transition: "transform 0.1s linear 0s",
              }}
            />
            <div className="parallax-content" />
          </div>
        </div>
        <div className="page-container">
          <div className="breadcrumb-holder">
            <nav aria-label="breadcrumb">
              <ol
                className="breadcrumb -unlist"
                itemScope
                itemType="http://schema.org/BreadcrumbList"
              >
                <li
                  className="breadcrumb-item"
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/ListItem"
                >
                  <Link itemProp="item" href="#/">
                    <span itemProp="name">Home</span>
                  </Link> 
                  <svg
                    className="default"
                    width={5}
                    height={9}
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 14.5697L1.36504 16L9 8L1.36504 0L0 1.4303L6.26992 8L0 14.5697V14.5697Z" />
                  </svg>
                  <meta itemProp="position" content="" />
                </li>
                <li
                  className="breadcrumb-item"
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/ListItem"
                >
                  <Link itemProp="item" href="#/blog/">
                    <span itemProp="name">Blog</span>
                  </Link> 
                  <svg
                    className="default"
                    width={5}
                    height={9}
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 14.5697L1.36504 16L9 8L1.36504 0L0 1.4303L6.26992 8L0 14.5697V14.5697Z" />
                  </svg>
                  <meta itemProp="position" content="" />
                </li>
                <li
                  className="breadcrumb-item"
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/ListItem"
                >
                  <span itemProp="name" className="active">
                    Classic
                  </span>
                  <meta itemProp="position" content="" />
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="page-container bottom-offset">
          <div id="primary" className="content-area">
            <div className="page-content ">
              <main id="main" className="site-main">
                <article
                  id="post-17613"
                  className="post-17613 page type-page status-publish hentry"
                >
                  <div className="entry-content">
                    <section className="wpb-content-wrapper">
                      <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                          <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                              <div
                                className="ohio-widget blog-posts vc_row ohio-masonry masonry"
                                id="ohio-custom-63ce677ee22ec"
                                data-lazy-container="posts"
                                style={{}}
                              >
                                {recentArticles.map(
                                  (article: any, index: any) => {
                                    return (
                                      <div
                                        key={index}
                                        className="vc_col-lg-4 vc_col-md-4 vc_col-xs-12 masonry-block grid-item masonry-brick"
                                        data-lazy-item
                                        data-lazy-scope="posts"
                                      >
                                        <div className="blog-item card -layout1 ">
                                          <Link
                                            href={`/blog/${slugify(
                                              article?.properties?.Name
                                                ?.title[0]?.plain_text
                                            ).toLowerCase()}`}
                                            data-cursor-class="cursor-link"
                                          >
                                            <figure
                                              className="image-holder"
                                              data-tilt="true"
                                              style={{
                                                height: "430px",
                                                position: "relative",
                                              }}
                                            >
                                              <Image aria-hiddenmage
                                                src={
                                                  article?.cover?.external?.url
                                                }
                                                objectFit="cover"
                                                fill
                                                sizes="(max-width: 882px) 100vw, 882px"
                                                alt=""
                                              />
                                              <div className="overlay-details -fade-up">
                                                <ul className="meta-holder -unlist">
                                                  <li className="meta-item">
                                                    <div className="avatar -small">
                                                      <img 
                                                        alt="Gonzalo"
                                                        src="https://secure.gravatar.com/avatar/4058fe7404c4f9d88d5d2d6db42320f8?s=50&d=mm&r=g"
                                                        srcSet="https://secure.gravatar.com/avatar/4058fe7404c4f9d88d5d2d6db42320f8?s=50&d=mm&r=g"
                                                        
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
                                                }{" "}
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
                                                  }{" "}
                                                </Link>
                                              </h4>
                                            </div>
                                            <div className="category-holder -with-tag">
                                              {article?.properties?.Tags.multi_select.map(
                                                (el: any) => {
                                                  return (
                                                    <Link
                                                      className="tag -unlink"
                                                      href="##"
                                                    >
                                                      {el.name}
                                                    </Link> 
                                                  );
                                                }
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  }
                                )}
                              </div>

                              <div
                                className="holder"
                                id="ohio-custom-63ce677ee22ec"
                              >
                                <ul className="pagination -small -unlist">
                                  <li className="page-item">
                                    <Link
                                      href="#/blog/classic/"
                                      className="page-link button -unlink -pagination"
                                    >
                                      1
                                    </Link> 
                                  </li>
                                  <li className="page-item">
                                    <Link
                                      href="#/blog/classic/page/2/"
                                      className="page-link button -unlink -pagination -flat"
                                    >
                                      2
                                    </Link> 
                                  </li>
                                  <li className="page-item">
                                    <Link
                                      href="#/blog/classic/page/2/"
                                      className="page-link button -unlink -pagination -flat"
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
                                    </Link> 
                                  </li>
                                </ul>
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
  const tags = getTags(recentArticles);
  return {
    // Passed to the page component as props
    props: {
      recentArticles: recentArticles,
      tags,
    },
    revalidate: 20,
  };
}

export default BlogPage;
