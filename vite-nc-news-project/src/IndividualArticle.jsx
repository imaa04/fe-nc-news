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
        return <div class='loader'>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            
        </div>
    }
    return (
        <div key={article.article_id}>
            <div className="parallax" style={{ backgroundImage: `url(${article.article_img_url})` , height: "600 px", backgroundAttachment: "fixed", backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: 0, margin: 0}}>
            <div className="parallax-container">
            <p>•{article.topic}•</p>
                    <h2 style={{ borderTop: '1px solid rgba(225, 225, 225, 225)', paddingTop: '30px',  }}>{article.title}</h2>
            
            <p>Posted on {new Date(article.created_at).toLocaleDateString()}</p>
            {/* {article.article_img_url && <img src={article.article_img_url} alt={article.title} />} */}
            <p>Written By {article.author}</p>
            </div>
            </div> 
            <p style={{ marginLeft: 400, marginRight: 400, marginTop: 50 }}>{article.body}</p>
            
           
            <UpVote currVotes= {article.votes}/>
            
            <CommentsList article_id={article_id}/>
        </div>
    )
}