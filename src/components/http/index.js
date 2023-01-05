import axios from 'axios';

export const getRecipesList = async (tags = null) => {
  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: { from: '0', size: '20', tags },
    headers: {
      'X-RapidAPI-Key': '9b20b1d87cmshb35ec749066e324p1d08cejsne971609f53f6',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  };
  return await axios.request(options);
};
