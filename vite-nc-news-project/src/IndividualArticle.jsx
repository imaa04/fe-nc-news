import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticlesById } from "./api";
import ArticleCard from "./ArticleCard";

export default function IndividualArticle() {
    const [singleArticles, setSingleArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { article_id } = useParams();
    useEffect(() => {
        getArticlesById(article_id).then((res) => {
            setSingleArticles(res);
            setIsLoading(false)
        });
    }, []);


}