import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store" }); //SSR no-cacheの場合は SSG
};