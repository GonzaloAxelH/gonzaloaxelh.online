import AuthorContainer from "@/components/AuthorContainer";
import CommentsBlock from "@/components/CommentsBlock";
import ContentArticle from "@/components/ContentArticle";
import RecentPosts from "@/components/RecentPosts";
import Container from "@/components/hocs/Container";

import { useGetArticle, useGetArticles} from "@/hooks/useGetArticles";
import React, { useEffect, useState } from "react";
import slugify from "slugify";
const BlogSlug = (props: any) => {
    const [renderComments,seRenderComments] = useState(false)
  useEffect(() => {
  
    
      seRenderComments(true)
    },[])
  return (
    <Container customAddClases="post-template-default single single-post postid-17953 single-format-standard wp-embed-responsive theme-ohio woocommerce-js ohio-theme-3-1-9 with-switcher with-header-3 with-fixed-search with-headline with-sticky-header with-mobile-switcher links-underline icon-buttons-animation custom-cursor with-ajax-button wpb-js-composer js-comp-ver-6.10.0 vc_responsive elementor-default elementor-kit-216976 page-is-loaded">
      <div
        id="content"
        className="site-content"
        data-mobile-menu-resolution={768}
      >
        <ContentArticle
          article={props.article}
          content={props.content}
          author={props.article.properties["Created by"]?.created_by}
        />

        <div className="author-container">
          <div className="page-container">
            <div className="vc_row">
              <div className="vc_col-md-12">
                <div className="widget widget_ohio_widget_about_author">
                  <div className="avatar -large">
                    <img
                      alt="Colabrio"
                      src="./The Highly Contemporary UI_UX Design from a Silicon Valley. – Ohio Theme_files/4058fe7404c4f9d88d5d2d6db42320f8(1).png"
                      srcSet="
                  https://secure.gravatar.com/avatar/4058fe7404c4f9d88d5d2d6db42320f8?s=144&d=mm&r=g 2x
                "
                      className="avatar avatar-72 photo"
                      height={72}
                      width={72}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="content">
                    <div className="details">
                      <h6>Colabrio</h6>
                      <span className="site" />
                    </div>
                    <div className="description">
                      Digital content wrangler | UX enthusiast | Recovering
                      educator | Shameless nerd &amp; GIF connoisseur | Hockey
                      fan | Oxford comma or death.
                    </div>
                  </div>
                  <div className="social-networks -contained -small">
                    <a
                      href="https://www.facebook.com/"
                      className="network -unlink"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      className="network -unlink"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      className="network -unlink"
                    >
                      <i className="fab fa-pinterest" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky-nav">
          <div
            className="sticky-nav-thumbnail -fade-up"
            style={{
              backgroundImage:
                'url("https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/clb_blog_20-min-768x892.jpeg")',
            }}
          />
          <div className="sticky-nav-holder">
            <div className="sticky-nav-headline">
              <h6 className="title">Next Post</h6>
              <div className="nav-group">
                <a
                  className="icon-button prev -unlink"
                  href="https://ohio.clbthemes.com/creativo-para-jovenes-a-designers-ui-ux-complete-checklist/"
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
                </a>
                <a
                  className="icon-button next -unlink"
                  href="https://ohio.clbthemes.com/definitive-guide-to-make-a-daily-more-productive-working-flow/"
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
                </a>
              </div>
            </div>
            <a
              className="titles-typo -undash"
              href="https://ohio.clbthemes.com/definitive-guide-to-make-a-daily-more-productive-working-flow/"
            >
              Definitive Guide to Make a Daily More Productive Working Flow.
            </a>
          </div>
        </div>

        <RecentPosts recentArticles={props.recentArticles} />

        <CommentsBlock
          idArticle={props.article.id}
          renderComments={renderComments}
        />
      </div>
    </Container>
  );
};

export async function getStaticPaths() {
  let articles = await useGetArticles();
  let paths: any = [];
  articles.map((art: any) => {
  
    paths.push({
      params: {
        slug: slugify(art.properties.Name.title[0].plain_text).toLowerCase(),
      },
    });
  });
  return {
    paths,
    fallback: false,
  };
}
//X
export async function getStaticProps(context: any) {
  const { slug } = context.params;
  const { content, idPage, article } = await useGetArticle(slug);
  const recentArticles =await useGetArticles()
  return {
    // Passed to the page component as props
    props: {
      content,
      article,
      slug,
      recentArticles: recentArticles.slice(0, 3),
    },
    revalidate: 20,
  };
}
export default BlogSlug;
