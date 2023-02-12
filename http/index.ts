import { IRegister,ILogin } from '@/types';
import axios from 'axios'

// window.localStorage.setItem('token', '');
if (typeof window !== 'undefined') { }
else {
    console.log('You are in the server side');
}

const api = axios.create({
    baseURL: 'https://ecs-api-dev.onrender.com',
    // headers: {
        // Authorization: `Bearer ${window.localStorage.getItem('token')}`,
    // }
});

export const register = async (data: IRegister) => api.post('/auth/v1/signup', data);
export const login = async (data: ILogin) => api.post('/auth/v1/login', data);