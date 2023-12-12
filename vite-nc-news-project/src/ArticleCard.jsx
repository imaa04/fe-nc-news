import { Link } from "react-router-dom";
export default function ArticleCard(props) {
    const {articles} = props
    return (
        
            <ul>
            
                {articles.map((article) => (
                
                    <div key={article.article_id} className="event-container">
            
            <h2><Link id='view-articles' to='/articles/:id'>{article.title}</Link></h2>
            <li>Topic: {article.topic}</li>
            <li>Posted by {article.author}</li>
            <img src={article.article_img_url}/>
            <li>Posted on {new Date(article.created_at).toISOString().slice(0, 10)}</li>
            <li>UpVotes: {article.votes}</li>
            <li>Comments ({article.comment_count})</li>
            </div>
                ))
                }
            </ul> 
        
    ) 

}
