import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "./api";
import ArticleCard from "./ArticleCard";

export default function ArticleList () {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { article } = useParams();
    console.log(useParams());
    useEffect(() => {
        getArticles(article).then((res) => {
            setArticles(res);
            setIsLoading(false)
        });
    }, []);

    if (isLoading) {
        return <div className='loader'>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        
    }
    return (
        <>
        <h1>NC NEWS</h1>
        <h2>Here is all the trending articles</h2>
        <ArticleCard articles={articles}/>

        </>
    )
}