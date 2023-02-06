import AuthorContainer from "@/components/AuthorContainer";
import CommentsBlock from "@/components/CommentsBlock";
import ContentArticle from "@/components/ContentArticle";
import RecentPosts from "@/components/RecentPosts";
import Container from "@/components/hocs/Container";
import slugify from "slugify";

import { useGetArticle, useGetArticles} from "@/hooks/useGetArticles";
import React, { useEffect, useState } from "react";
import { PageType } from "@/settings/types";
const BlogSlug = (props: any) => {
  
  const title =props.article.properties.Name?.title[0]?.plain_text
  let cover = props.article?.cover?.file?.url || props.article?.cover?.external?.url;
  let description = props.article.properties?.Summary.rich_text[0]?.plain_text || "Articulo aun no terminado.Intenta mas tarde.";
  const NextPost = props.recentArticles[2];
  return (
    <Container customAddClases="post-template-default single single-post postid-17953 single-format-standard wp-embed-responsive theme-ohio woocommerce-js ohio-theme-3-1-9 with-switcher with-header-3 with-fixed-search with-headline with-sticky-header with-mobile-switcher links-underline icon-buttons-animation custom-cursor with-ajax-button wpb-js-composer js-comp-ver-6.10.0 vc_responsive elementor-default elementor-kit-216976 page-is-loaded"

      customMeta={{
        title: `${title} - Gonzalo Axel`, imageUrl: cover, description, type: PageType.ARTICLE,
      
        date: props.article.created_time,
      }}
    >
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
                      alt="Gonzalo"
                      src="https://secure.gravatar.com/avatar/4058fe7404c4f9d88d5d2d6db42320f8?s=50&d=mm&r=g"
                      className="avatar avatar-72 photo"
                      height={72}
                      width={72}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="content">
                    <div className="details">
                      <h6>Gonzalo</h6>
                      <span className="site" />
                    </div>
                    <div className="description">Programador web</div>
                  </div>
                  <div className="social-networks -contained -small">
                    <a
                      href="/"
                      className="network -unlink"
                    >
                      <i aria-hidden className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="/"
                      className="network -unlink"
                    >
                      <i aria-hidden className="fab fa-instagram" />
                    </a>
                    <a
                      href="/"
                      className="network -unlink"
                    >
                      <i aria-hidden className="fab fa-pinterest" />
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

              backgroundImage: `url(${NextPost.cover.external.url})`,
            }}
          />
         
        </div>

        <RecentPosts recentArticles={props.recentArticles} />

        <CommentsBlock
          idArticle={props.article.id}
          
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
        slug: slugify(art.properties.Name?.title[0]?.plain_text).toLowerCase(),
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
