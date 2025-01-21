// Importar la URL base desde las variables de entorno
const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5062/api';

// Auth endpoints
export const AUTH_ENDPOINTS = {
    LOGIN: `${BASE_URL}/Auth/Login`,
    REGISTER: `${BASE_URL}/Auth/RegisterEdit`,
    GET_USERS: `${BASE_URL}/Auth`,
};

// Solicitud endpoints
export const SOLICITUD_ENDPOINTS = {
    GET_SOLICITUDES: `${BASE_URL}/Solicitud`,
    CREATE_EDIT_SOLICITUD: `${BASE_URL}/Solicitud/SolicitudEdit`,
};

export default {
    AUTH_ENDPOINTS,
    SOLICITUD_ENDPOINTS,
};
