import { useState, useContext } from "react";
import { postComment } from "./api";
import { useUser } from "./UserContext";


 function CommentAdder({article_id,setComments}){
    const { user } = useUser()
    const [newComment, setNewComment] = useState('');
     const [isAdding, setIsAdding] = useState(false)

    const handleSubmit = (e) => {
        setIsAdding(true)
        e.preventDefault();
        setNewComment('')
        postComment(article_id ,newComment, user.username)
        .then((newCommentFromApi) =>{
            setComments((currComments) => {
                return [newCommentFromApi, ...currComments]
            })
        })
        .finally(() => {
            setIsAdding(false)
        })
    }

    return (
        <form className="comment-adder" onSubmit={handleSubmit}>
            {/* <p>{user}</p> */}
            {/* <label htmlFor='newComment'>Add a comment</label> */}
            <input
            
            id='newComment'
            multiline='true'
            placeholder="Add a comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            ></input>
            <button className="comment-send-button">{isAdding ? 'Adding...' : 'Add'}</button>
        </form>
    )
}

export default CommentAdder