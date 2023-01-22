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
    })
  return (
    <Container>
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

        <RecentPosts recentArticles={props.recentArticles} />

        <CommentsBlock idArticle={props.article.id} renderComments={renderComments} />
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
