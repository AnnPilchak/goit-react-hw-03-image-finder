import axios from 'axios';

const apiKey = `37542751-d42f785f643c27f3b0963fb21`;
const baseUrl = `https://pixabay.com/api/`;

const getPhotos = async (searchQuery, page) => {
  const results = await axios.get(`${baseUrl}`, {
    params: {
      key: apiKey,
      q: searchQuery,
      per_page: 12,
      page: page,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });
  return results;
};

export default getPhotos;