import { notFound } from "next/navigation";
import { Article } from "./types";
import { resolve } from "path";
/**
 * ブログ記事を非同期に取得する関数です。
 * SSRに関する情報は以下を参照してください
 * @see {@link https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering}
 *
 * @returns {Promise<Article[]>} - ブログ記事の配列を含むPromiseオブジェクト
 * @throws {Error} - ブログ記事を取得する際にエラーが発生した場合
 *
 * @example
 * try {
 *   const articles = await getAllArticles();
 *   console.log('取得したブログ記事:', articles);
 * } catch (error) {
 *   console.error('ブログ記事の取得中にエラーが発生しました:', error.message);
 * }
 *
 */
export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store" }); //SSR no-cacheの場合は SSG

  if (!res.ok) {
    throw new Error("BlogAPI Error");
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));

  const articles = await res.json();
  return articles;
};

/**
 * 指定されたIDのブログ記事の詳細を非同期に取得する関数です。
 *
 * @param {string} id - 取得したいブログ記事のID
 * @returns {Promise<Article>} - ブログ記事の詳細情報を含むPromiseオブジェクト
 * @throws {Error} - ブログ記事を取得する際にエラーが発生した場合
 *
 * @example
 * try {
 *   const articleId = '123'; // ブログ記事のID
 *   const article = await getDetailArticle(articleId);
 *   console.log('取得したブログ記事の詳細:', article);
 * } catch (error) {
 *   console.error('ブログ記事の詳細を取得中にエラーが発生しました:', error.message);
 * }
 *
 * @see {@link https://nextjs.org/docs/pages/building-your-application/rendering/incremental-static-regeneration}
 */
export const getDetailArticle = async (id: string): Promise<Article> => {
  //SSR から SSG的に読み込まれる
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: { revalidate: 60 },
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("BlogAPI Error");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const article = await res.json();
  return article;
};

/**
 * 新しいブログ記事を非同期に作成し、サーバーに送信します。
 *
 * @param {string} id - ブログ記事の一意のID
 * @param {string} title - ブログ記事のタイトル
 * @param {string} content - ブログ記事の内容
 * @returns {Promise<Article>} - 作成されたブログ記事の情報を含むPromiseオブジェクト
 * @throws {Error} - ブログ記事の作成中にエラーが発生した場合
 *
 * @example
 * try {
 *   const newArticleId = '123'; // 新しいブログ記事のID
 *   const newArticleTitle = 'New Article'; // 新しいブログ記事のタイトル
 *   const newArticleContent = 'This is the content of the new article.'; // 新しいブログ記事の内容
 *   const createdArticle = await createArticle(newArticleId, newArticleTitle, newArticleContent);
 *   console.log('新しいブログ記事が作成されました:', createdArticle);
 * } catch (error) {
 *   console.error('ブログ記事の作成中にエラーが発生しました:', error.message);
 * }
 */
export const createArticle = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  const currentDateTime = new Date().toISOString();
  const res = await fetch(`http://localhost:3001/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, title, content, createdAt: currentDateTime }),
  });

  if (!res.ok) {
    throw new Error("#createArticle ブログ記事の作成中にエラーが発生しました");
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));

  const newArticle = await res.json();
  return newArticle;
};
