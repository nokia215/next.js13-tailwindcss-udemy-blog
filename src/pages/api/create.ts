// import { supabase } from "@/utils/supabaseClient";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   //   const { id } = req.query;
//   const { id, title, content } = req.body;
//   const { data, error } = await supabase
//     .from("posts")
//     .insert([{ id, title, content, createdAt: new Date().toISOString() }])
//     .select();
//   console.log(error);
//   if (error) {
//     return res.status(500).json({ error: error.message });
//   }

//   return res.status(200).json(data);
// }