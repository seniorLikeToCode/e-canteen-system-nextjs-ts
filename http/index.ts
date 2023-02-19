import { IRegister, ILogin } from '@/types';
import { getToken } from '../lib/setUser';
import axios from 'axios'

// window.localStorage.setItem('token', '');
if (typeof window !== 'undefined') { }
else {
    console.log('You are in the server side');
}

const api = axios.create({
    baseURL: 'https://ecs-api-dev.onrender.com',
    headers: {
        Authorization: `Bearer ${getToken()}`,
    }
});

// auth routes
export const register = async (data: IRegister) => api.post('/auth/v1/signup', data);
export const login = async (data: ILogin) => api.post('/auth/v1/login', data);


// products routes
export const getAvailableProduct = async () => api.get('/api/v1/product/available');
export const allProduct = async () => api.get('/api/v1/product');


//  Cart Routes
export const cartItem = async () => api.get('/api/v1/cart');
// export const addItem = async (productId: string) => api.get({`/api/v1/cart/add/${productId}`});


/*
export const fetchArticles = async (queryString: string) =>
    api.get(`/api/articles?${queryString}`);

export const fetchArticleBySlug = async (queryString: string) =>
    api.get(`/api/articles?${queryString}`);
*/