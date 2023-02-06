import InitialAnimation from "@/components/InitialAnimation";
import Container from "@/components/hocs/Container";
import AboutSetcion from "@/components/homecomponents/AboutSetcion";
import ArticlesOfBlog from "@/components/homecomponents/ArticlesOfBlog";
import Banner from "@/components/homecomponents/Banner";
import MyApps from "@/components/homecomponents/MyApps";
import MyTutorialsOfProgramming from "@/components/homecomponents/MyTutorialsOfProgramming";
import Sections from "@/components/homecomponents/Sections";
import WorkNow from "@/components/homecomponents/WorkNow";
import { useGetArticles } from "@/hooks/useGetArticles";
import { useGetCurses } from "@/hooks/useGetCurses";
import { getTags } from "@/services/notion";
import Image from "next/image";
import React from "react";
export default function Home({ articles, allTags, tutorials }: any) {
  console.log(tutorials);
  return (
    <Container customAddClases="home page-template-default page page-id-152208 wp-embed-responsive ohio-theme-3-1-2 with-switcher with-header-3 with-fixed-search with-sticky-header with-mobile-switcher links-underline icon-buttons-animation wpb-js-composer js-comp-ver-6.10.0 vc_responsive elementor-default elementor-kit-6 page-is-loaded">
      <div
        id="content"
        className="site-content"
        data-mobile-menu-resolution={768}
      >
        <div className="page-container">
          <div id="primary" className="content-area">
            <div className="page-content">
              <main id="main" className="site-main">
                <article
                  id="post-152208"
                  className="post-152208 page type-page status-publish hentry"
                >
                  <div className="entry-content">
                    <section className="wpb-content-wrapper">
                      <Banner />
                      <AboutSetcion />
                      <Sections />
                      <ArticlesOfBlog tags={allTags} articles={articles} />
                      <WorkNow />
                      <MyApps />
                      <MyTutorialsOfProgramming tutorials={tutorials} />
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
}

export async function getStaticProps(context: any) {
  const recentArticles = await useGetArticles();
  const tutorials = await useGetCurses();
  const { tagsKeys, tagsValues } = getTags(recentArticles);
  const tags = { tagsKeys, tagsValues };
  return {
    // Passed to the page component as props
    props: {
      articles: recentArticles,
      allTags: tags,
      tutorials,
    },
    revalidate: 20,
  };
}
