import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchApiData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const getTopRatedUrl = () => `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

export const getRecommendationsUrl = (seriesId) => `${BASE_URL}/tv/${seriesId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;