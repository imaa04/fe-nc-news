import axios from "axios";
import { UserContext } from "./UserContext";
import { useContext } from "react";

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

export function getUsers() {
    return ncNewsAPI.get(`/users`).then((res) => {
        const { users } = res.data
        return users;
    });
}

export function postComment(article_id, newCommentText, username) {
    // const { user } = useContext(UserContext)
    const postBody={
        username: username,
        body: newCommentText
    }
    const url = `/articles/${article_id}/comments`
    return ncNewsAPI.post(url, postBody).then((res) => {
        
        return res.data.comment
    })
}

export function deleteComment(comment_id) {
    return ncNewsAPI.delete(`comments/${comment_id}`).then((res) => {
        console.log(res);
        return res.data.comment
    })
}