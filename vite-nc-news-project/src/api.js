import axios from "axios";

const ncNewsAPI = axios.create({
    baseURL: "https://api-ima-nc-news.onrender.com/api",
});

export function getArticles() {
    return ncNewsAPI.get(`/articles`).then((res) => {
        const { articles } = res.data
        return articles;
    });
}

export function getArticlesById(article_id) {
    return ncNewsAPI.get(`/articles/${article_id}`).then((res) => {
         return res.data.article
    });
}

export function getCommentsById(article_id) {
    return ncNewsAPI.get(`/articles/${article_id}/comments`).then((res) => {
        return res.data.comments
    });

}

export function patchVotes(article_id, voteChange) {
    const patchBody ={
        inc_votes: voteChange
    }
    return ncNewsAPI.patch(`articles/${article_id}`, patchBody).then((res) => {
        return res.data.article.votes
    })
}