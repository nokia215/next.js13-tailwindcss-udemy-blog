import { supabase } from "@/utils/supabaseClient";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

/**
 * GETリクエストを処理する関数。
 * @param {Request} req - リクエストオブジェクト
 * @param {NextApiResponse} res - レスポンスオブジェクト
 * @returns {Promise<void>} - 非同期処理のためのPromise
 */
export async function GET(req: Request, res: NextApiResponse) {
  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 200 });
}

/**
 * POSTリクエストを処理する関数。
 * @param {Request} req - リクエストオブジェクト
 * @param {NextApiResponse} res - レスポンスオブジェクト
 * @returns {Promise<void>} - 非同期処理のためのPromise
 */
export async function POST(req: Request, res: NextApiResponse) {
  const { id, title, content } = await req.json();

  const { data, error } = await supabase
    .from("posts")
    .insert([{ id, title, content, createdAt: new Date().toISOString() }]);

  console.log(data, error);
  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 201 });
}
