import axios  from "axios";

const api = axios.create({
    baseURL: "https://localhost:7151",
    withCredentials: true
});


export default api;