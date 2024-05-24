import axios from 'axios';
import { url } from '../helpers/constants';
import { toast } from 'react-toastify'; // Import toast notifications

// Create an instance
const axiosInstance = axios.create({
  baseURL: url.baseUrl, // Replace with your API base URL
  timeout: 10000, // Set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
  }
});

// Function to handle errors and display toast notifications
const handleError = (error) => {
  const errorMessage = error.response?.data?.error || 'An error occurred';
  alert(errorMessage); // Display toast notification for the error
  return Promise.reject(error);
};

// Request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // Do something before the request is sent
    // e.g., add a token to headers
    // const token = localStorage.getItem('token'); // Assuming you're using localStorage for token
    
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;  
    // }

    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  response => {
    // Do something with response data
    return response;
  },
  error => {
    // Do something with response error
    return handleError(error);
  }
);

export const getAPICall = async (endpoint, params) => {
  try {
    const response = await axiosInstance.get(endpoint, { params });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const postAPICall = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response;
  } catch (error) {
    return handleError(error);
  }
};

export const putAPICall = async (endpoint, data) => {
  try {
    const response = await axiosInstance.put(endpoint, data);
    return response;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteAPICall = async (endpoint, data) => {
  try {
    const response = await axiosInstance.delete(endpoint, { data });
    return response;
  } catch (error) {
    return handleError(error);
  }
};
