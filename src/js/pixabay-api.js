import axios from 'axios';
const API_KEY = '50868360-a376148e060c1128e2434e35d';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(BASE_URL, { params })
    .then(response => response.data);
}
