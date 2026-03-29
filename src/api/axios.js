import axios from 'axios';

const api = axios.create({
    baseURL: 'https://board.local/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})

export const apiRegister = (data)=>{
    return api.post('/auth/register', data)
}
export const apiLogin = (data)=>{
    return api.post('/auth/login', data)
}
export const apiGetPublicBoard = (params = {})=>{
    return api.get('/public-boards',{
        params
    })
}