import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "./api";
import ArticleCard from "./ArticleCard";
export default function ArticleList () {
    const [articles, setArticles] = useState([])
    const { article } = useParams();
    useEffect(() => {
        getArticles(article).then((res) => {
            setArticles(res);
        });
    }, []);
    return (
        <>
        <h2>Here is all the articles</h2>
        <ArticleCard articles={articles}/>

        </>
    )
}