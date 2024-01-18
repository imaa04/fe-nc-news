import { useState, useEffect } from "react"
import { patchVotes } from "./api";
import { useParams } from "react-router-dom";

export default function UpVote({ currVotes }) {
    const [votes, setUpVote] = useState(currVotes);
    const [isClicked, setIsClicked] = useState(false);
    const [activeBtn, setActiveBtn] = useState("none");
    const { article_id } = useParams();

    const handleVote = (voteChange) => {
        if (!isClicked) {
            setUpVote(votes + voteChange);

            if (activeBtn === "none" || activeBtn !== (voteChange > 0 ? 'like' : 'dislike')) {
                setActiveBtn(voteChange > 0 ? 'like' : 'dislike');

                patchVotes(article_id, voteChange)
                    .then((res) => {
                        console.log(`votes for article ${article_id} updated to`, res);
                    })
                    .catch((err) => {
                        console.log(`error adding vote to article ${article_id}`, err);
                        setUpVote(votes); // Reset the votes if there's an error
                    })
                    .finally(() => {
                        setIsClicked(true);
                    });
            }
        }
    };

    return (
        <div className="btn-container">
            <p className="votes-info">Votes: {votes}</p>
            <button
                className={`btn ${activeBtn === 'like' ? 'like-active' : ''}`}
                onClick={() => handleVote(1)}
                disabled={isClicked}
            >
                UpVote +1
            </button>
            <button
                className={`btn ${activeBtn === 'dislike' ? 'dislike-active' : ''}`}
                onClick={() => handleVote(-1)}
                disabled={isClicked}
            >
                DownVote -1
            </button>
            
        </div>
    );
}


// export default function UpVote({currVotes}){
//     const [votes, setUpVote] = useState(currVotes)
//     const [likeCount, setLikeCount] = useState(currVotes);
//     const [dislikeCount, setDislikeCount] = useState(currVotes);
//     const [isClicked, setIsClicked] = useState(false);
//     const [activeBtn, setActiveBtn] = useState("none");
//     const {article_id} = useParams()
    

    
//     const handleLikeVote = (voteChange) => {
//         setUpVote(votes + voteChange)
//         if (activeBtn === "none") {
//             setLikeCount(likeCount + voteChange);
//             setActiveBtn("like");
//             return;
//         }

//         if (activeBtn === 'like') {
//             setLikeCount(likeCount + voteChange);
//             setActiveBtn("none");
//             return;
//         }

//         if (activeBtn === "dislike") {
//             setLikeCount(likeCount + voteChange);
//             setDislikeCount(dislikeCount + voteChange);
//             setActiveBtn("like");
//         }
        
        
//         patchVotes(article_id, voteChange)
//         .then((res) => {
//             console.log(`votes for article ${article_id} updated to`, res);
//         })
//         .catch((err) => {
//             console.log(`error adding vote to article ${article_id}`, err);
//             setUpVote(votes)
//         })
//         .finally(() => {
//             setIsClicked(true)
//         })
        
//     }
//     const handleDislikeVote = (voteChange) => {
//         setUpVote(votes + voteChange)
//         if (activeBtn === "none") {
//             setDislikeCount(dislikeCount + voteChange);
//             setActiveBtn("dislike");
//             return;
//         }

//         if (activeBtn === 'dislike') {
//             setDislikeCount(dislikeCount + voteChange);
//             setActiveBtn("none");
//             return;
//         }

//         if (activeBtn === "like") {
//             setDislikeCount(dislikeCount + voteChange);
//             setLikeCount(likeCount + voteChange);
//             setActiveBtn("dislike");
//         }


//         patchVotes(article_id, voteChange)
//             .then((res) => {
//                 console.log(`votes for article ${article_id} updated to`, res);
//             })
//             .catch((err) => {
//                 console.log(`error adding vote to article ${article_id}`, err);
//                 setUpVote(votes)
//             })
//             .finally(() => {
//                 setIsClicked(true)
//             })

//     }

    

//     return (
//         <div className="btn-container">
//             <button className={`btn ${activeBtn === 'like' ? 'like-active' : ''}`} onClick={()=> handleLikeVote(1)}>
//             UpVote +1
//         </button>
//             <button className={`btn ${activeBtn === 'dislike' ? 'dislike-active' : ''}`} onClick={() => handleDislikeVote(-1)}>
//                 DownVote -1
//             </button>
//             <p className="votes-info">UpVote: {votes}</p>
//         </div>
//     )
// }