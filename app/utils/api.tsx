import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cookinglog.gq',
});

api.interceptors.request.use((config) => {
  console.log(`${config.method?.toUpperCase()} : ${config.url} [REQ]`);
  return config;
});

api.interceptors.response.use((response) => {
  console.log(
    `${response.config.method?.toUpperCase()} : ${response.config.url} [${
      response.status
    }]`
  );
  return response;
});

export { api };
