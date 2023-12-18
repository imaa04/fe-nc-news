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
        return <h2>Loading...</h2>
    }
    
    return (
        <div className='comment-section'>
            <h2>Comments ({comments.length})</h2>
            <CommentAdder article_id={article_id} setComments={setComments}/>
            {comments.map((comment) => (
                <div key={comment.comment_id} className="comment-container">
                    
                    <p>{comment.author}</p>
                    <p>Posted {moment.utc(comment.created_at).local().startOf('seconds').fromNow()}</p>
                    <p>{comment.body}</p>
                    <p>UpVote: {comment.votes}</p>
                    {comment.author === currentUsername && (
                        <DeleteButton comment_id={comment.comment_id} onDeleteComment={handleDeleteComments}/>
                    )}
                    

                </div>
            ))}
        </div>
    )
}