import axios from 'axios';
import { API_BASE_URL } from '../config/api.config';

const authApi = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: false
});

// Agregar interceptor para manejar CORS
authApi.interceptors.request.use(
    config => {
        config.headers = {
            ...config.headers,
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export const authService = {
    async login(credentials) {
        try {
            console.log('Intentando login en:', `${API_BASE_URL}/Auth/Login`);
            const response = await authApi.post('/Auth/Login', credentials);
            console.log('Respuesta:', response);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
            }
            return response.data;
        } catch (error) {
            console.error('Error completo:', error);
            throw this.handleError(error);
        }
    },

    logout() {
        try {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            // Opcional: hacer una llamada al backend para invalidar el token
            return true;
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            return false;
        }
    },

    getCurrentUser() {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },

    isAuthenticated() {
        return !!localStorage.getItem('token');
    },

    handleError(error) {
        console.error('Error en handleError:', error);
        if (error.response) {
            return {
                status: error.response.status,
                message: error.response.data || 'Error del servidor'
            };
        }
        return {
            status: 500,
            message: 'Error de conexión'
        };
    },

    async register(userData) {
        try {
            console.log('Intentando registro en:', `${API_BASE_URL}/Auth/RegisterEdit`);
            const response = await authApi.post('/Auth/RegisterEdit', userData);
            console.log('Respuesta registro:', response);
            
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
            }
            return response.data;
        } catch (error) {
            console.error('Error en registro:', error);
            throw this.handleError(error);
        }
    }
};