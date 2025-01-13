import axios from 'axios';
import { API_BASE_URL } from '../config/api.config';

const solicitudApi = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: false
});

// Agregar interceptor para manejar CORS y token
solicitudApi.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        config.headers = {
            ...config.headers,
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': token ? `Bearer ${token}` : ''
        };
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export const solicitudService = {
    async crearSolicitud(solicitudData) {
        try {
            console.log('Intentando crear solicitud en:', `${API_BASE_URL}/Solicitud/SolicitudEdit`);
            const response = await solicitudApi.post('/Solicitud/SolicitudEdit', {
                idSolicitud: 0, // 0 para nueva solicitud
                nombreEst: solicitudData.nombreEstablecimiento,
                tipoOperacion: solicitudData.tipoEstablecimiento,
                direccion: solicitudData.direccionEstablecimiento,
                coordenadas: solicitudData.coordenadas
            });
            console.log('Respuesta:', response);
            return response.data;
        } catch (error) {
            console.error('Error completo:', error);
            throw this.handleError(error);
        }
    },

    async obtenerSolicitudes() {
        try {
            console.log('Obteniendo solicitudes desde:', `${API_BASE_URL}/Solicitud`);
            const response = await solicitudApi.get('/Solicitud');
            console.log('Respuesta:', response);
            return response.data;
        } catch (error) {
            console.error('Error completo:', error);
            throw this.handleError(error);
        }
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
    }
}; 