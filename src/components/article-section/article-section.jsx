import { useState } from "react";
import { ArticleCard } from "../article-card/article-card.jsx";
import { articlesData } from "../../assets/data.js";

export const ArticlesSection = ({ item, filter }) => {
  const filterArticles = () => {
    if (
      (filter.includes("novice") && filter.includes("pro")) ||
      filter.length === 0
    ) {
      return articlesData.articles;
    }
    if (filter.includes("novice") && !filter.includes("pro")) {
      return (
        articlesData.articles.filter((item) => item.level === "novice") || []
      );
    }
    if (filter.includes("pro") && !filter.includes("novice")) {
      return articlesData.articles.filter((item) => item.level === "pro") || [];
    }
    return articlesData.articles;
  };

  return (
    <div className="articles-grid">
      {filterArticles().map((article) => (
        <ArticleCard key={article.id} item={article} />
      ))}
    </div>
  );
};
