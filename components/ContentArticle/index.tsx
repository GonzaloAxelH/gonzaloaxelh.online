import React, { FC } from "react";
import Image from "next/image";
import AuthorContainer from "../AuthorContainer";
import NextPost from "../NextPost";
import RecentPosts from "../RecentPosts";
import TagsBlog from "../TagsBlog";
import CommentsBlock from "../CommentsBlock";
import PostMeta from "./PostMeta";
import BreadcrumbHolder from "../BreadcrumbHolder";
import ContentBlock from "./ContentBlock";
interface Props {
  article: any;
  content: any;
}
const ContentArticle: FC<Props> = ({ article, content }) => {
  console.log(article);
  let title = article.properties.Name?.title[0].plain_text;

  let tags = article.properties.Tags.multi_select;
  let publishedDate = article.created_time;
  let coverImage = article.cover.external.url;
  return (
    <div
      id="content"
      className="site-content"
      data-mobile-menu-resolution={768}
    >
      <div className="-layout1">
        <div className="page-headline without-cap -left subheader_excluded headline-with-parallax">
          <a
            href="https://ohio.clbthemes.com/my-account/"
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
                height: "545.469px",
                transform: "translate3d(0px, -92.6071px, 0px)",
                transition: "transform 0.1s linear 0s",
              }}
            />
            <div className="parallax-content" />
          </div>
          <div className="holder">
            <div className="page-container">
              <div className="animated-holder">
                <div className="headline-meta">
                  <div className="category-holder">
                    <a
                      className="category"
                      href="https://ohio.clbthemes.com/category/digital/"
                      rel="category tag"
                    >
                      {article.properties.Category.select.name}
                    </a>
                  </div>
                  <span className="post-meta-estimate">9 min read </span>
                </div>

                <h1 className="title">{title}</h1>

                <PostMeta />
              </div>
            </div>
          </div>
        </div>

        <div className="page-container post-page-container" id="scroll-content">
          <Image
            className="image-next"
            src={coverImage}
            blurDataURL={coverImage}
            placeholder="blur"
            width={1200}
            height={584}
            alt={"article cover"}
            priority
          />

          <BreadcrumbHolder />

          <div className="page-content">
            <div id="primary" className="content-area">
              <main
                id="main"
                className="site-main page-offset-bottom"
                style={{ width: "100%" }}
              >
                <div className="vc_row">
                  <div className="vc_col-lg-12">
                    <article
                      id="post-17953"
                      className="post-17953 post type-post status-publish format-standard has-post-thumbnail hentry category-digital category-marketing tag-blog tag-creative tag-portfolio tag-theme tag-wordpress"
                    >
                      {content.map((block: any, index: number) => {
                        return <ContentBlock key={index} block={block} />;
                      })}
                      <TagsBlog />
                    </article>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>

      <AuthorContainer />
      <NextPost />
      <RecentPosts />
      <CommentsBlock />
    </div>
  );
};

export default ContentArticle;
