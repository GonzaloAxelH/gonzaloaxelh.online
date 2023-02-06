import Link from "next/link";
import React from "react";
import Image from "next/image";
import slugify from "slugify";
const ArticlesOfBlog = ({ articles, tags }: any) => {
  let fullTags: any = [];
  for (let i = 0; i < tags.tagsKeys.length; i++) {
    let obj = {
      name: tags.tagsKeys[i],
      count: tags.tagsValues[i],
    };
    fullTags.push(obj);
  }

  return (
    <div className="vc_row wpb_row vc_row-fluid">
      <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div
              className="ohio-widget portfolio-projects -with-sorting -with-pagination grid_1 "
              id="ohio-custom-63dbf46d72daa"
              data-ohio-portfolio-grid="true"
            >
              <div className="vc_row">
                <div
                  className="vc_col-md-6 vc_col-md-push-3 -center"
                  style={{ margin: "3em 0 3em 0" }}
                >
                  <h2 className="title">
                    <span>Blog de articulos</span>
                    <br />
                    por tecnologia.
                  </h2>
                  <p className="details">
                    Articulos actualizables, sobre tu herramienta o tecnologia
                    favorita
                    <br />
                    <b>Only real business demo websites.</b>
                  </p>
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
                className="vc_row portfolio-grid"
                data-isotope-grid="true"
                data-lazy-container="projects"
                data-projects-per-page={12}
                style={{
                  position: "relative",
                }}
              >
                {articles.slice(0, 3).map((article: any) => {
                  return (
                    <div
                      className="portfolio-item-wrap masonry-block grid-item  vc_col-lg-4 vc_col-md-4 vc_col-xs-12 ohio-filter-project-2ec9e9be8bed1ffe0ed8144a3f59c246 ohio-filter-project-70012063bf1d91c6d3924d1475e0747a"
                      data-lazy-item
                      data-lazy-scope="projects"
                    >
                      <div
                        className="portfolio-item card -layout1"
                        data-portfolio-popup="ohio-lightbox-63dbf46d83e83"
                      >
                        <Link
                          href={`/blog/${slugify(
                            article?.properties?.Name?.title[0]?.plain_text
                          ).toLowerCase()}`}
                        >
                          <figure
                            className="image-holder"
                            style={{ height: "410px", position: "relative" }}
                          >
                            <Image
                              src={article?.cover?.external?.url}
                              sizes="(max-width: 882px) 100vw, 882px"
                              fill
                              style={{ objectFit: "cover" }}
                              alt=""
                            />
                            <div className="overlay-details -fade-up">
                              <ul className="meta-holder -unlist">
                                <li className="meta-item">
                                  <div className="avatar -small">
                                    <Image
                                      alt="Gonzalo"
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
                                  <span className="prefix">Posted by</span>
                                  <span className="author">Gonzalo Axel</span>
                                </li>
                              </ul>
                            </div>
                          </figure>
                        </Link>
                        <div className="card-details">
                          <div className="heading">
                            <h4 className="title ">
                              {article.properties.Name?.title[0]?.plain_text}
                            </h4>
                            <div className="show-project">
                              <div className="category-holder">
                                <span className="category ">
                                  <a href="#portfolio-category/identity/">
                                    {new Date(
                                      article.created_time
                                    ).toLocaleDateString("es-PE", {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    })}
                                  </a>
                                </span>
                              </div>
                              <div className="show-project-link -full-w">
                                <Link
                                  href={`/blog/${slugify(
                                    article?.properties?.Name?.title[0]
                                      ?.plain_text
                                  ).toLowerCase()}`}
                                >
                                  Mostrar articulo
                                </Link>
                              </div>
                            </div>
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
    </div>
  );
};

export default ArticlesOfBlog;
