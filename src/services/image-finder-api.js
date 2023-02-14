import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    per_page: 4,
    key: '5015491-f4a8c4738cac6b55ae413895f',
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const imageFinder = async (search, page) => {
  const { data } = await instance.get('/', {
    params: {
      q: search,
      page,
    },
  });
  return data;
};
