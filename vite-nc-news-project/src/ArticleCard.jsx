import { Link } from "react-router-dom";
export default function ArticleCard({articles}) {
    return (
        <ul>
            {articles.map((article) => (
                <div key={article.article_id} className="article-container">
                    <Link to={`/articles/${article.article_id}`} ><h3>{article.title}</h3></Link>
                    <li>Topic: {article.topic}</li>
                    <li>Posted by {article.author}</li>
                    <img src={article.article_img_url} />
                    <li>Posted on {new Date(article.created_at).toISOString().slice(0, 10)}</li>
                    <li>UpVotes: {article.votes}</li>
                    <li>Comments ({article.comment_count})</li>
                </div>
            ))
            }
        </ul>
    )
}
