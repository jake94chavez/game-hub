import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '409e3991729d420ab09940aa983a19dd'
    }
})