import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3' // API URL
});

export default instance;
//http://localhost:5001/clone-9906b/us-central1/api