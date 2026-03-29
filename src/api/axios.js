import axios from 'axios';

const api = axios.create({
    baseURL: 'https://board.local/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})

export const apiLogin = (data)=>{
    return api.post('/login', data)
}