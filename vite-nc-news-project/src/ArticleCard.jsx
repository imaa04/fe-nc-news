import { Link } from "react-router-dom";
export default function ArticleCard({articles}) {
    return (
        <>
            {articles.map((article) => (
                <Link to={`/articles/${article.article_id}`} >
                <div key={article.article_id} className={`article-container ${article.article_id === 34 ? "special-class" : ""}`}>
                    
                    <img src={article.article_img_url} />
                    <div className='overlay'>
                    <h3>{article.title}</h3>
                    
                    <li>Posted by {article.author}</li>
                    <li>Posted on {new Date(article.created_at).toISOString().slice(0, 10)}</li>
                    </div>
                </div>
                </Link>
            ))
            }
      </>  
    )
}
