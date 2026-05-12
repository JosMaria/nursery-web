import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: 'http://192.168.70.176:8080/api/v1',
	timeout: 2_000,
});
