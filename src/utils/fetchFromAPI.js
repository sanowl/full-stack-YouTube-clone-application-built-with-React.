import axios from 'axios';

export const BASE_URL = 'https://www.googleapis.com/youtube/v3';

const options = {
  params: {
    maxResults: 50,
    key: 'AIzaSyDDDjPtHVkpUVl--HE4A7h_Hp4aaRS5X3k'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
