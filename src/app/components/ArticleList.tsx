import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleList = () => {
  return (
    <>
      <div>
        <article>
          <Link href="#">
            <Image
              src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"
              alt="image"
              width={1280}
              height={300}
            ></Image>
          </Link>
          <div>
            <Link href="#">Technology</Link>
            <Link href="#">Next.jsの勉強中</Link>
            <p>By n0k1a, Published on 2023/09/39</p>
            <Link href="#">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum eveniet quibusdam at officia, ut mollitia blanditiis
              animi labore nobis aliquid neque dolores, doloremque, ab debitis
              accusamus error eum provident illum?
            </Link>
            <Link href="#">
                続きを読む
            </Link>
          </div>
        </article>
      </div>
    </>
  );
};

export default ArticleList;
