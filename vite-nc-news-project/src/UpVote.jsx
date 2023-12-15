import { useState, useEffect } from "react"
import { patchVotes } from "./api";
import { useParams } from "react-router-dom";

export default function UpVote({currVotes}){
    const [votes, setUpVote] = useState(currVotes)
    const [isClicked, setIsClicked] = useState(false);
    const {article_id} = useParams()
    
    const handleVote = (voteChange) => {
        setUpVote(votes + voteChange)
        
        patchVotes(article_id, voteChange)
        .then((res) => {
            console.log(`votes for article ${article_id} updated to`, res);
        })
        .catch((err) => {
            console.log(`error adding vote to article ${article_id}`, err);
            setUpVote(votes)
        })
        .finally(() => {
            setIsClicked(true)
        })
        
    }
    

    return (
        <>
            <button onClick={()=> handleVote(1)} disabled={isClicked}>
            UpVote +1
        </button>
            <button onClick={() => handleVote(-1)} disabled={isClicked}>
                DownVote -1
            </button>
        <p>UpVote: {votes}</p>
        </>
    )
}