import axios from 'axios';

export const baseApi = axios.create({
	baseURL: import.meta.env.VITE_API_URL || '/api',
	headers: {
		'Content-Type': 'application/json'
	}
});

// Интерцептор для обработки ошибок
baseApi.interceptors.response.use(
	response => response,
	error => {
		// Здесь можно добавить глобальную обработку ошибок
		console.error('API Error:', error);
		return Promise.reject(error);
	}
);

// Интерцептор для добавления токена авторизации
baseApi.interceptors.request.use(
	config => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	error => Promise.reject(error)
); 