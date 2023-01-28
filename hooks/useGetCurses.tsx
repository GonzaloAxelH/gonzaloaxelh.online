import {
  getArticle,
  findArticleBySlug,
  getAllArticles,
} from "../services/notion";
export async function useGetCurses() {
  const articles = await getAllArticles(process.env.NOTION_DATABASE_TUTORIALS,{});
  return articles;
}

export async function useGetCurse(slug: string) {
  const { idPage, article } = await findArticleBySlug(
    process.env.NOTION_DATABASE_TUTORIALS,slug
  );
  const content = await getArticle(idPage);
  return { content, idPage, article };
}


