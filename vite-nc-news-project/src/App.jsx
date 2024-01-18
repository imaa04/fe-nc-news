import { useState } from 'react'
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import './App.css'
import './styles.css'
import Header from './Header'
import ArticleList from './ArticleList';
import IndividualArticle from './IndividualArticle';
import CommentsList from './CommentsList';
import UsersList from "./UsersList";
import { UserProvider } from './UserContext';
import { motion } from "framer-motion"
function App() {

  return (
    
    <UserProvider>
      <>
      <Header/>
        {/* <ArticleList /> */}
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path={`/articles/:article_id`} element={<IndividualArticle/>} />
        <Route path={`/articles/:article_id/comments`} element={<CommentsList />} />
        {/* <Route path="/users" element={<UsersList />} /> */}
      </Routes>
      </>
    </UserProvider>
  )
}

export default App
