import { isFullPage } from "@notionhq/client";

import {
  getArticle,
  findArticleBySlug,
  getAllArticles,
} from "../services/notion";
export async function useGetProyects() {
  const articles = await getAllArticles(process.env.NOTION_DATABASE_PROYECTS,{});
  return articles;
}

export async function useGetProyect(slug: string) {
  const { idPage, article } = await findArticleBySlug(
    process.env.NOTION_DATABASE_PROYECTS,slug
  );
  const content = await getArticle(idPage);
  return { content, idPage, article };
}

