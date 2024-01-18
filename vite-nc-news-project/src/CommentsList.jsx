import { useState, useEffect } from "react";
import { getCommentsById } from "./api";
import moment from 'moment';
import CommentAdder from "./CommentAdder";
import DeleteButton from "./DeleteButton";
import { useUser } from "./UserContext";
export default function CommentsList({article_id}) {

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { user } = useUser()
    const currentUsername = user.username

    useEffect(() => {
        getCommentsById(article_id)
        .then((res) =>{
            setComments(res)
            setIsLoading(false)
        })
    },[])

    const handleDeleteComments = (commentId) => {
        const updatedComments = comments.filter(comment => comment.comment_id !== commentId)
        setComments(updatedComments)
    }

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
        <div className='comment-section'>
            <h2>Comments ({comments.length})</h2>
            <CommentAdder article_id={article_id} setComments={setComments}/>
            {comments.map((comment) => (
                <div key={comment.comment_id} className="comment-container">
                    <div className="comment-user">
                        <button className="upvote-comment">♡ {comment.votes}</button>
                    <p className="comment-author">@{comment.author}</p>
                    
                    <p className="comment-date">Posted {moment.utc(comment.created_at).local().startOf('seconds').fromNow()}</p>
                    </div>
                    <p className="comment-body">{comment.body}</p>
                    
                    {comment.author === currentUsername && (
                        <DeleteButton comment_id={comment.comment_id} onDeleteComment={handleDeleteComments}/>
                    )}
                    

                </div>
            ))}
        </div>
    )
}