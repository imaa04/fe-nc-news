import { deleteComment } from "./api";
import { useState } from "react";

export default function DeleteButton({ comment_id, onDeleteComment }) {

    const [isDeleting, setIsDeleting] = useState(false)


    const handleDelete = () => {
        setIsDeleting(true)
        deleteComment(comment_id)
            .then((res) => {
                console.log(res);
                onDeleteComment(comment_id)
            })
            .finally(() => {
                setIsDeleting(false)
            })
    }

    return (
        <button className='comment-deleteb' onClick={handleDelete} disabled={isDeleting}>{isDeleting ? 'Deleting...' : 'Delete'}</button>
    )
}