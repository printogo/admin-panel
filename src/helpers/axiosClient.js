import Axios from 'axios';

export const axiosClient = Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

