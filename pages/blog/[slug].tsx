import AuthorContainer from "@/components/AuthorContainer";
import CommentsBlock from "@/components/CommentsBlock";
import ContentArticle from "@/components/ContentArticle";
import RecentPosts from "@/components/RecentPosts";
import Container from "@/components/hocs/Container";
import Layout from "@/components/hocs/Layout";
import { useGetArticle, useGetArticles } from "@/hooks/useGetArticles";
import React from "react";
import slugify from "slugify";
const BlogSlug = (props: any) => {
    let summaryAuthor =
    props.article.properties?.SummaryAuthor?.rich_text[0]?.plain_text || "Summary";
  console.log(props.article)
  return (
    <Container>
      <div
        id="content"
        className="site-content"
        data-mobile-menu-resolution={768}
      >
        <ContentArticle article={props.article} content={props.content} />
        <AuthorContainer
          author={props.article.properties["Created by"]?.created_by}
          summary={summaryAuthor}
        />

        <RecentPosts />
        <CommentsBlock idArticle={props.article.id} />
      </div>
    </Container>
  );
};

export async function getStaticPaths() {
  let articles = await useGetArticles();
  let paths: any = [];
  articles.map((art: any) => {
    console.log(slugify(art.properties.Name.title[0].plain_text).toLowerCase());
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
  return {
    // Passed to the page component as props
    props: { content, article, slug },
    revalidate: 20,
  };
}
export default BlogSlug;
