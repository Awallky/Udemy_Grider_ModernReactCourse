import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID 4mkjDcEP7A2VATwCI_ZMcBAqiscqWeVCJhGtBcSXahI"
    }
});
