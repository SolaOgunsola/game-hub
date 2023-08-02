import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0c3544fc99424f5f93a72f50fd56779d',
    },
});
