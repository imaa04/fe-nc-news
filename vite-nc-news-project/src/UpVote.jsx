import { useState, useEffect } from "react"
import { patchVotes } from "./api";
import { useParams } from "react-router-dom";

export default function UpVote({currVotes}){
    const [votes, setUpVote] = useState(currVotes)
    const {article_id} = useParams()
    
    const handleVote = (voteChange) => {
        
        setUpVote(votes + voteChange)
        
        patchVotes(article_id, voteChange)
        .then((res) => {
            console.log(`votes for article ${article_id} updated to`, res);
        })
        .catch((err) => {
            console.log(`arror adding vote to article ${article_id}`, err);
            setUpVote(votes)
        })
    }
    
    

    return (
        <>
        <button onClick={()=> handleVote(1)}>
            UpVote +1
        </button>
            <button onClick={()=> handleVote(-1)}>
                DownVote -1
            </button>
        <p>UpVote: {votes}</p>
        </>
    )
}