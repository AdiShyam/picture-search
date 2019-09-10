import axios from 'axios';

const ACCESSKEY = "Client-ID 8ec8ca70c47aac4437eed9326aeee6c2412e4d0d6cc707f5ec90c1c19d612e7d";
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: ACCESSKEY
      }
});
