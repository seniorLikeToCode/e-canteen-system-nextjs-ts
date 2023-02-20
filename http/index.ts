import { IRegister, ILogin } from '@/types';
import axios from 'axios'

// window.localStorage.setItem('token', '');
if (typeof window !== 'undefined') { }
else {
    console.log('You are in the server side');
}

export const baseURL = 'https://ecs-api-dev.onrender.com';

const api = axios.create({
    baseURL: baseURL,
    headers: {
        // Authorization: `Bearer ${getToken()}`,
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U4ZTU3ZjYxZTJmYjI5YTE3MDU4ZDMiLCJlbWFpbCI6InVzZXJAdGVzdC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTY3NjgwNTYxNSwiZXhwIjoxNjc3NDEwNDE1fQ.TlGx79dbOP1mXd1zWAMHJvyQg-4nq6QStSveADaNM0c',
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
export const addItem = async (productId: string) => api.get(`/api/v1/cart/add/${productId}`);

// export const addItem = async (productId: string) => api.get({`/api/v1/cart/add/${productId}`});


/*
export const fetchArticles = async (queryString: string) =>
    api.get(`/api/articles?${queryString}`);

export const fetchArticleBySlug = async (queryString: string) =>
    api.get(`/api/articles?${queryString}`);
*/