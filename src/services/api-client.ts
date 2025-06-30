import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '409e3991729d420ab09940aa983a19dd'
        // key: '35f233d6798444c690847a1fcc52d95c',
    }
})