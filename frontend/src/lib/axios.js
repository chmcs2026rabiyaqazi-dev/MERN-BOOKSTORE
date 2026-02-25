import axios from "axios";
const api = axios.create({
    baseURL: 'https://mern-bookstore-lgon.onrender.com'
})
export default api
