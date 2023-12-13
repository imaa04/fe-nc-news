import { useState } from 'react'
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Header'
import ArticleList from './ArticleList';
import IndividualArticle from './IndividualArticle';

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/articles" element={<ArticleList />} />
        <Route path={`/articles/:article_id`} element={<IndividualArticle/>} />
      </Routes>
    </>
  )
}

export default App
