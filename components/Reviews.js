"use client";
import { StoryblokComponent } from "@storyblok/react";
import ArticleTeaser from "./ArticleTeaser";
import StoryComponent from "./StoryComponent";

// import ArticleTeaser from "./ArticleTeaser";
const Reviews = ({ blok }) => {
  // console.log("review", blok);
  return (
    <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3 py-10 px-6 xl:px-0">
      <h1 className="text-5xl font-bold">{blok.title}</h1>
      {/* {blok.map((article) => (
          <ArticleTeaser
            article={article.content}
            slug={article.full_slug}
            key={article.uuid}
          />
        ))} */}
    </div>
  );
};
export default Reviews;
