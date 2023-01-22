import React from "react";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";
const RecentPosts = ({ recentArticles }: any) => {
  console.log(recentArticles);
  return (
    <div className="related-posts">
      <div className="page-container">
        <h4 className="heading-md title">Recent Posts</h4>
        <div className="vc_row archive-holder">
          {recentArticles.map((article: any) => {
            return (
              <div className="vc_col-lg-4 vc_col-md-6 vc_col-xs-12 grid-item masonry-block">
                <div
                  className="blog-item card -layout1 -contained -metro"
                  data-tilt="true"
                  data-tilt-perspective={6000}
                >
                  <Link
                    href={`/blog/${slugify(
                      article?.properties?.Name?.title[0]?.plain_text
                    ).toLowerCase()}`}
                  >
                    <figure
                      className="image-holder"
                      style={{ height: "390px", position: "relative" }}
                    >
                      <Image
                        src={article?.cover?.external?.url}
                        sizes="(max-width: 882px) 100vw, 882px"
                        fill
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
                            <span className="prefix">Posted by</span>
                            <span className="author">Gonzalo Axel</span>
                          </li>
                        </ul>
                      </div>
                    </figure>
                  </Link>
                  <div
                    className="card-details -left"
                    style={{ background: "transparent", padding: "8px" }}
                  >
                    <div
                      className="headline-meta -small-t"
                      style={{ fontSize: "14px" }}
                    >
                      <div className="date">
                        {new Date(article.created_time).toLocaleDateString(
                          "es-PE",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </div>
                      <span className="post-meta-estimate">
                        {article.properties.Category.select.name}
                      </span>
                    </div>
                    <div className="heading title">
                      <h4 className="title">
                        <Link
                          className="-unlink"
                          href={`/blog/${slugify(
                            article?.properties?.Name?.title[0]?.plain_text
                          ).toLowerCase()}`}
                        >
                          {article?.properties?.Name?.title[0]?.plain_text}
                        </Link>
                      </h4>
                    </div>
                    <div className="category-holder -with-tag">
                      {article?.properties?.Tags.multi_select.map((el: any) => {
                        return (
                          <a className="tag -unlink" href="#">
                            {el.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
