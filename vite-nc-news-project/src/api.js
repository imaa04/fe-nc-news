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