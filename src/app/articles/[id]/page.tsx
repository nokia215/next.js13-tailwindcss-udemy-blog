import Image from "next/image";
import React from "react";

const Article = ({ params }: { params: { id: string } }) => {
  //   console.log(params.id);
  return (
    <>
      <div className="max-w-3xl mx-auto p-5">
        <Image
          src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"
          alt="image"
          width={1280}
          height={300}
        ></Image>
        <h1 className="text-4xl text-center mb-10 mt-10">
          ここがタイトルです
        </h1>
        <div className="text-lg leading-relaxed text-justify">
          <p>ここが本文です</p>
        </div>
      </div>
    </>
  );
};

export default Article;
