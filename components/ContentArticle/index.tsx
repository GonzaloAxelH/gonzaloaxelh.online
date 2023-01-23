import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import AuthorContainer from "../AuthorContainer";
import NextPost from "../NextPost";
import RecentPosts from "../RecentPosts";
import TagsBlog from "../TagsBlog";
import CommentsBlock from "../CommentsBlock";
import PostMeta from "./PostMeta";
import BreadcrumbHolder from "../BreadcrumbHolder";
import ContentBlock from "./ContentBlock";
import { getComments } from "@/services/firebase";
interface Props {
  article: any;
  content: any;
  author:any
}

const ContentArticle: FC<Props> = ({ article, content, author }) => {
  let title = article?.properties?.Name?.title[0]?.plain_text;
  let tags = article?.properties.Tags?.multi_select;
  let category = article?.properties?.Category?.select?.name;
  let coverImage = article?.cover?.external?.url;
  const [countCom,setCountCom] = useState(0)
  const loadNumberCommments = async () => {
    const countComments = await getComments(article.id)
    setCountCom(countComments.length || 0)
  }
  useEffect(() => {
    
    loadNumberCommments()
  },[])
  return (
    <div className="-layout1">
      <div className="page-headline without-cap -left subheader_excluded headline-with-parallax">
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
        <div className="holder" style={{paddingBottom:"2em"}}>
          <div className="page-container">
            <div className="animated-holder">
              <div className="headline-meta">
                <div className="category-holder ">
                  <a className="category" href="#" rel="category tag">
                    {" "}
                    {category}
                  </a>{" "}
                </div>
                <span className="post-meta-estimate">9 min read </span>
              </div>

              <h1 className="title">{title}</h1>
              <div className="post-meta-holder">
                <ul className="meta-holder -unlist">
                  <li className="meta-item">
                    <div className="avatar -small">
                      <img
                        alt="Colabrio"
                        src={
                          "https://lh3.googleusercontent.com/ogw/AAEL6sjZywJSQ0Me8PR1WWUqFVhrUdXQtT1jFD6GOB73=s32-c-mo"
                          }
                        className="avatar avatar-96 photo"
                        height={96}
                        width={96}
                        loading="lazy"
                      />
                    </div>
                  </li>
                  <li className="meta-item">
                    <span className="prefix">Author</span>
                    <span className="author">
                      {author?.name || "Gonzalo  Valdez"}
                    </span>
                  </li>
                  <li className="meta-item">
                    <span className="prefix">Published</span>
                    {new Date(article.created_time).toLocaleDateString(
                      "es-PE",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </li>
                  <li className="meta-item">
                    <span className="prefix">{countCom} comments </span>
                    <a href="#commentsXD">
                      <span className="date">Join the Conversation</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-container post-page-container" id="scroll-content">
        <div className="post-share -sticky-block">
          <div className="share-bar -vertical" data-blog-share="true">
            <div className="social-networks -small">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fohio.clbthemes.com%2Fstandard%2F"
                target="_blank"
                className="facebook network"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="http://pinterest.com/pin/create/button/?url=https%3A%2F%2Fohio.clbthemes.com%2Fstandard%2F&description=The+Highly+Contemporary+UI%2FUX+Design+from+a+Silicon+Valley."
                target="_blank"
                className="pinterest network"
              >
                <i className="fab fa-pinterest" />
              </a>
              <a
                href="https://twitter.com/intent/tweet?text=The+Highly+Contemporary+UI%2FUX+Design+from+a+Silicon+Valley.,+https%3A%2F%2Fohio.clbthemes.com%2Fstandard%2F"
                target="_blank"
                className="twitter network"
              >
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>
        </div>
        <BreadcrumbHolder title={title} category={category} />

        <div className="page-content">
          <div id="primary" className="content-area content-area-single-blog">
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
                    <figure
                      className="wp-block-image size-full"
                      style={{
                        textAlign: "center",

                      }}
                    >
                      <Image
                        
                        className="wp-image-20557"
                        quality={100}
                        src={coverImage}
                        blurDataURL={coverImage}
                        placeholder="blur"
                        width={1200}
                        height={500}
                        fill={false}
                        alt="XD"
                        priority
                      />
                    </figure>
                    {content?.map((block: any, index: number) => {
                      return <ContentBlock key={index} block={block} />;
                    })}
                    <TagsBlog tags={tags} />
                  </article>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentArticle;
