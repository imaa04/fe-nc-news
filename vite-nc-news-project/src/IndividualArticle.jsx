import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticlesById } from "./api";
import CommentsList from "./CommentsList";
import UpVote from "./UpVote";

export default function IndividualArticle() {
    const [article, setSingleArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { article_id } = useParams();
    useEffect(() => {
        getArticlesById(article_id)
        .then((res) => {
            setSingleArticle(res)
            setIsLoading(false)
        })
    }, []);
 
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    return (
        <div key={article.article_id}>
            <h3>{article.title}</h3>
            <p>Topic: {article.topic}</p>
            <p>Posted on {new Date(article.created_at).toLocaleDateString()}</p>
            {article.article_img_url && <img src={article.article_img_url} alt={article.title} />}
            <p>{article.body}</p>
            <p>Written By {article.author}</p>
            <UpVote currVotes= {article.votes}/>
            <p>({article.comment_count})</p>
            <CommentsList article_id={article_id}/>
        </div>
        
    )
}