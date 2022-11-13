import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api-football-standings.azharimm.dev/'
});

export const api = {
    get(url) {
        return axiosInstance.get(url);
    }
}