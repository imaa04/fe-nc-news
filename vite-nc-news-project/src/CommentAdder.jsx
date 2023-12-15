import { useState, useContext } from "react";
import { postComment } from "./api";
import { useUser } from "./UserContext";


 function CommentAdder({article_id,setComments}){
    const { user } = useUser()
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewComment('')
        postComment(article_id ,newComment, user.username)
        .then((newCommentFromApi) =>{
            setComments((currComments) => {
                return [newCommentFromApi, ...currComments]
            })
        })
    }

    return (
        <form className="comment-adder" onSubmit={handleSubmit}>
            {/* <p>{user}</p> */}
            {/* <label htmlFor='newComment'>Add a comment</label> */}
            <textarea
            id='newComment'
            multiline='true'
            placeholder="Add a comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button className="comment-send-button">Add</button>
        </form>
    )
}

export default CommentAdder