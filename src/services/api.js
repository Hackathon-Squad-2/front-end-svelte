import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// process.env.BASE_API_URL ||

export const api = axios.create({
	baseURL: API_URL
});
