import { IRegister,ILogin } from '@/types';

import axios from 'axios'
const api = axios.create({
    baseURL: 'https://ecs-api-dev.onrender.com',
});

export const register = async (data: IRegister) => api.post('/auth/v1/signup', data);
export const login = async (data: ILogin) => api.post('/auth/v1/login', data);