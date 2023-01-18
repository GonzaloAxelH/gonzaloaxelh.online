import ContentBlock from "@/components/ContentArticle";
import { useGetArticle, useGetArticles } from "@/hooks/useGetArticles";
import React from "react";
import slugify from "slugify";
const BlogSlug = (props: any) => {
  return (
    <React.Fragment>
      {/*
      
      */}
      <ContentBlock article={props.article} content={props.content} />
    </React.Fragment>
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
