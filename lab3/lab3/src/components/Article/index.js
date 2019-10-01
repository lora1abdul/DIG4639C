import React from "react";
import"./index.css";
import ArticleTitle from"../ArticleTitle/index.js";
import ArticleSidebar from"../ArticleSidebar/index.js";
import ArticleContent from"../ArticleConten/index.js";

class Aticle extends React.Component{
  render() {
    return(
      <ArticleTitle/>
      <ArticleSidebar/>
      <ArticleContent/>
    );

  }
}
