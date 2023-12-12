import { useState } from 'react'
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Header'
import ArticleList from './ArticleList';

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/articles" element={<ArticleList />} />
      </Routes>
    </>
  )
}

export default App
