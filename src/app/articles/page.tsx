"use client"
// useStateとか, useState, button clickを使う時に宣言する
// 追加しないとレンダリングされない
// なぜなら基本サーバーサイドでレンダリングされるから


import React from "react";
// /articlesの初期表示
const page = () => {
  return <div>Article</div>;
};

export default page;
