import { useState, useEffect } from "react";
import { getCommentsById } from "./api";
import moment from 'moment';

export default function CommentsList({article_id}) {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getCommentsById(article_id)
        .then((res) =>{
            setComments(res)
            setIsLoading(false)
        })
    },[])
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    return (
        <div className='comment-section'>
            <h2>Comments ({comments.length})</h2>
            {comments.map((comment) => (
                <div key={comment.comment_id} className="comment-container">
                    
                    <p>{comment.author}</p>
                    <p>Posted {moment.utc(comment.created_at).local().startOf('seconds').fromNow()}</p>
                    <p>{comment.body}</p>
                    <p>UpVote: {comment.votes}</p>
                    

                </div>
            ))}
        </div>
    )
}