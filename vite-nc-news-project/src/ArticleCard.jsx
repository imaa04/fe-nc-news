import { Link } from "react-router-dom";
export default function ArticleCard({articles}) {
    return (
        <ul>
            {articles.map((article) => (
                <div key={article.article_id} className={`article-container ${article.article_id === 34 ? "special-class" : ""}`}>
                    
                    <img src={article.article_img_url} />
                    <div className='overlay'>
                    <Link to={`/articles/${article.article_id}`} ><h3>{article.title}</h3></Link>
                    
                    <li>Posted by {article.author}</li>
                    <li>Posted on {new Date(article.created_at).toISOString().slice(0, 10)}</li>
                    </div>
                </div>
            ))
            }
        </ul>
    )
}
