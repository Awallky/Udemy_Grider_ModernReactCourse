import axios from "axios";

const KEY = 'AIzaSyDe5wDo71UoA53sT17TWpt9iMDkQ8HgONI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        key: KEY,
        type: 'video'
    }
})
