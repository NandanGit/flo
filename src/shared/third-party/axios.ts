import axios, { AxiosInstance } from 'axios';
import { APIConstants } from '../constants/APIConstants';

// Create a custom Axios object with default configuration
export const flo: AxiosInstance = axios.create({
	baseURL: APIConstants.baseUrl,
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
});

// // Optional: Add request interceptors
// customAxios.interceptors.request.use(
// 	(config: AxiosRequestConfig) => {
// 		// Modify the request config if needed
// 		// For example, add authentication headers
// 		// config.headers['Authorization'] = 'Bearer <token>';
// 		return config;
// 	},
// 	(error) => {
// 		// Handle request error
// 		return Promise.reject(error);
// 	}
// );

// Optional: Add response interceptors
flo.interceptors.response.use(
	(response) => {
		// Modify the response data if needed
		// For example, extract specific data from the response
		// const modifiedData = response.data.someProperty;
		// return modifiedData;
		return response;
	},
	(error) => {
		// Handle response error
		return Promise.reject(error);
	}
);

export const cancelTokenSource = () => {
	return axios.CancelToken.source();
};
