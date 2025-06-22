import axios from 'axios';

const API_KEY = '50868360-a376148e060c1128e2434e35d';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: PER_PAGE,
    page: page,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}