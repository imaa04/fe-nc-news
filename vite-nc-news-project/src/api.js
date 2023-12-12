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