import axios from 'axios';

const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000
});

export const fetchPosts = async (page = 1, limit = 10, search = '') => {
  try {
    const response = await API.get('/posts', {
      params: {
        _page: page,
        _limit: limit,
        q: search
      }
    });
    return {
      data: response.data,
      total: parseInt(response.headers['x-total-count']) || 0
    };
  } catch (error) {
    throw error;
  }
};
